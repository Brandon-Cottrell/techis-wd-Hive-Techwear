from apps.users.mixins import CustomLoginRequiredMixin
from rest_framework import generics
import random

from apps.categories.models import Category
from apps.categories.serializers import CategorySerializer
          
class CategoryList(CustomLoginRequiredMixin, generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    pagination_class = None
