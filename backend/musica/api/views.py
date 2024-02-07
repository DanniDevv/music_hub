from rest_framework import generics
from aplicacion.models import Artista, Albun, Cancion
from .serializers import ArtistaSerializer, AlbunSerializer, CancionSerializer

class ArtistaListCreateView(generics.ListCreateAPIView):
    queryset = Artista.objects.all()
    serializer_class = ArtistaSerializer

class ArtistaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artista.objects.all()
    serializer_class = ArtistaSerializer

class AlbunListCreateView(generics.ListCreateAPIView):
    queryset = Albun.objects.all()
    serializer_class = AlbunSerializer

class AlbunDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Albun.objects.all()
    serializer_class = AlbunSerializer

class CancionListCreateView(generics.ListCreateAPIView):
    queryset = Cancion.objects.all()
    serializer_class = CancionSerializer

class CancionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cancion.objects.all()
    serializer_class = CancionSerializer
