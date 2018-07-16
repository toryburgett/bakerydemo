import graphene
from graphene_django.types import DjangoObjectType
from wagtail.core.models import Page
from .views import page_search
import bakerydemo.graphql.helpers


class Search(DjangoObjectType):
    class Meta:
        model = Page


class Query(graphene.ObjectType):

    search = graphene.List(Search, query=graphene.String())
    def resolve_search(self, info, **kwargs):
        search_query = kwargs.get('query')

        if search_query is not None:
            return page_search(search_query)
