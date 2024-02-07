from django.urls import path
from .views import ArtistaListCreateView, ArtistaDetailView, AlbunListCreateView, AlbunDetailView, CancionListCreateView, CancionDetailView

urlpatterns = [
    path('artistas/', ArtistaListCreateView.as_view(), name='artista-list-create'),
    path('artistas/<int:pk>/', ArtistaDetailView.as_view(), name='artista-detail'),

    path('albunes/', AlbunListCreateView.as_view(), name='albun-list-create'),
    path('albunes/<int:pk>/', AlbunDetailView.as_view(), name='albun-detail'),

    path('canciones/', CancionListCreateView.as_view(), name='cancion-list-create'),
    path('canciones/<int:pk>/', CancionDetailView.as_view(), name='cancion-detail'),
]
