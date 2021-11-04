import re
from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, serializers, status
from django_filters.rest_framework import DjangoFilterBackend
from apps.carts.serializers import CartSerializer, CartUpdateSerializer
from apps.products.models import Product
from .models import Cart
from apps.users.mixins import CustomLoginRequiredMixin

from config.helpers.error_response import error_response

class CartList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['product', 'user']

class CartAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def post(self, request, *args, **kwargs):
        
        self.get_serializer_class().validate(self, request.data)

        product = Product.objects.filter(id=request.data['product']).first()
        if (product is None):
            return error_response('product not found.', status.HTTP_400_BAD_REQUEST)

        cart = Cart.objects.filter(product_id=request.data['product'], user_id=request.login_user.id).first()
        if (cart is not None):
            return error_response('Cart already existed.', status.HTTP_400_BAD_REQUEST)
        
        request.data._mutable = True
        request.data['user'] = request.login_user.id

        return self.create(request, *args, **kwargs)

class CartUpdate(CustomLoginRequiredMixin, generics.UpdateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartUpdateSerializer
    lookup_field = 'id'

    def put(self, request, *args, **kwargs):

        self.get_serializer_class().validate(self, request.data)

        id = self.kwargs['id']
        cart = Cart.objects.filter(id=id).first()
        if cart is None:
            return error_response('Cart not found.', status.HTTP_400_BAD_REQUEST)

        request.data._mutable = True
        request.data['user'] = request.login_user.id
        request.data['product'] = cart.product_id

        return self.partial_update(request, *args, **kwargs)

