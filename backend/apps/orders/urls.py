from django.urls import path
from . import views

urlpatterns =[
    path('', views.OrderList.as_view(), name='cart-list'),
    # path('add/', views.CartAdd.as_view(), name='cart-add')
]