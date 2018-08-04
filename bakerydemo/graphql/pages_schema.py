import graphene
from django.contrib.contenttypes.models import ContentType
from django.db.models import Q
from wagtail.core.models import get_page_models, Page
from graphene_django.types import DjangoObjectType

class ContentTypeDjangoObjectType(DjangoObjectType):
    class Meta:
        model = ContentType

def create_stream_field_type(field_name, **kwargs):
    block_type_handlers = kwargs.copy()

    class Meta:
        types = (DefaultStreamBlock, ) + tuple(
            block_type_handlers.values())
    
    StreamFieldType = type(
        f"{string.capwords(field_name, sep='_').replace('_', '')}Type",
        (graphene.Union,),
        dict(Meta=Meta))

    def convert_block(block):
        block_type = block.get('type')
        value = block.get('value')
        if block_type in block_type_handlers:
            handler = block_type_handlers.get(block_type)
            if isinstance(value, dict):
                return handler(value=value, block_type=block_type, **value)
            else:
                return handler(value=value, block_type=block_type)
        else:
            return DefaultStreamBlock(value=value, block_type=block_type)

    # We also generate the resolver function for the field
    def resolve_field(self, info):
        field = getattr(self, field_name)
        return [convert_block(block) for block in field.stream_data]

    return (graphene.List(StreamFieldType), resolve_field)

def generate_graphene_objects_for_all_page_types():
    models = get_page_models()
    graphene_objects = []
    for model in models:
        graphene_object = type(
            f'{model.__name__}',
            (DjangoObjectType,),
            {'Meta': type('Meta', (object,), {'model': model})}
        )
        graphene_objects.append(graphene_object)
    return graphene_objects


class SpecificPage(graphene.Union):
    class Meta:
        types = generate_graphene_objects_for_all_page_types()


class PageDjangoObjectType(DjangoObjectType):
    specific = graphene.List(SpecificPage)
    content_type = graphene.Field(ContentTypeDjangoObjectType)

    def resolve_specific(self, info, **kwargs):
        return [self.specific]

    class Meta:
        model = Page
        filter_fields = ['title']


class PagesRootQuery(graphene.ObjectType):

    page = graphene.Field(PageDjangoObjectType, id=graphene.Int(), slug=graphene.String())
    def resolve_page(self, info, **kwargs):
        id = kwargs.get('id')
        slug = kwargs.get('slug')

        if id is not None:
            qs = Page.objects.get(pk=id)
            return qs

        if slug is not None:
            qs = Page.objects.get(slug=slug)
            return qs

    pages = graphene.List(PageDjangoObjectType, content_types=graphene.String())
    def resolve_pages(self, info, **kwargs):
        qs = Page.objects.live().public()
        content_types = kwargs.get('content_types')
        if content_types is not None:
            content_types = [content_type.split('.') for content_type
                             in content_types.split(',')]
            content_type_q = Q()
            for content_type in content_types:
                content_type_q |= Q(app_label=content_type[0],
                                    model=content_type[1])
            content_types = (
                ContentType.objects.filter(content_type_q)
                                   .values_list('pk', flat=True)
            )
            qs = qs.filter(content_type_id__in=content_types)
        return qs