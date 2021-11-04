from .models import Cart
from rest_framework import serializers
from apps.users.serializers import UserSerializer
from apps.products.serializers import ProductSerializer

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

    def validate(self, data):
        errors = {}
        if 'quantity' not in data or not data['quantity']:
            errors['quantity'] = ['quantity is required.']

        if 'product' not in data or not data['product']:
            errors['product'] = ['product is required.']

        if bool(errors):
            raise serializers.ValidationError(errors)

        return data

class CartUpdateSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Cart
        fields = '__all__'

    def validate(self, data):
        print('hh', data)
        errors = {}
        if 'quantity' not in data or not data['quantity']:
            errors['quantity'] = ['quantity is required.']

        if bool(errors):
            raise serializers.ValidationError(errors)

        return data

class CartListSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    category = ProductSerializer(many=False, read_only=True)

    class Meta:
        model = Cart
        fields = '__all__'
        depth = 1
        
        