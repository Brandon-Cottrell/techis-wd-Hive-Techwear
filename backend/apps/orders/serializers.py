from django.db import models
from django.db.models import fields
from .models import Order
from rest_framework import serializers
from apps.users.serializers import UserSerializer
from apps.products.serializers import ProductSerializer


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
    
    def create(self, validated_data):
        return validated_data
        # order = Order.objects.create()

class OrderListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Order
        fields = '__all__'