from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.managers import TaggableManager
from wagtail.core.fields import StreamField
from graphene_django.converter import convert_django_field
from graphene_django import DjangoObjectType
from graphene import types, String, Field
from wagtail.images.models import Image
import graphene


class GenericStreamFieldType(types.Scalar):
    @staticmethod
    def serialize(stream_value):
        return stream_value.stream_data


class FlatTags(String):
    @classmethod
    def serialize(cls, value):
        tagsList = []
        for tag in value.all():
            tagsList.append(tag.name)
        return tagsList


@convert_django_field.register(StreamField)
def convert_stream_field(field, registry=None):
    return GenericStreamFieldType(
        description=field.help_text, required=not field.null
    )


@convert_django_field.register(TaggableManager)
def convert_field_to_string(field, registry=None):
    return String(description=field.help_text, required=not field.null)


@convert_django_field.register(ClusterTaggableManager)
def convert_tag_field_to_string(field, registry=None):
    return Field(FlatTags,
                 description=field.help_text,
                 required=not field.null)


class ObjectField(types.Scalar):

    @staticmethod
    def serialize(dt):
        return dt

    @staticmethod
    def parse_literal(node):
        return node.value

    @staticmethod
    def parse_value(value):
        return value

class Image(DjangoObjectType):
    class Meta:
        model = Image

    file = ObjectField()
    def resolve_file(self, *args):
        return {
            'original': self.get_rendition('original').url,
            'thumbnail': self.get_rendition('fill-500x500').url,
        }
