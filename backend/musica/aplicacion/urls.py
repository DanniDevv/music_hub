from django.urls import path
from . import views

app_name = 'aplicacion'

urlpatterns = [
    path('', views.index, name='index'),
    path('cancion/<int:cancion_id>/', views.cancion_detail, name='cancion_detail'),
    path('artista/<int:artista_id>/', views.artista_detail, name='artista_detail'),
    path('albun/<int:albun_id>/', views.albun_detail, name='albun_detail'),
]
