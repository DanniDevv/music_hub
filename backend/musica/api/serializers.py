from rest_framework import serializers
from aplicacion.models import Albun,Artista,Cancion

class ArtistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artista
        fields = '__all__'

class AlbunSerializer(serializers.ModelSerializer):
    class Meta:
        model = Albun
        fields = '__all__'

class CancionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cancion
        fields = '__all__'
