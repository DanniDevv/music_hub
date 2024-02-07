from django.shortcuts import render, get_object_or_404
from .models import Artista, Albun, Cancion

def index(request):
    lista_canciones = Cancion.objects.all()
    lista_artistas = Artista.objects.all()
    lista_albunes = Albun.objects.all()

    context = {
        'canciones': lista_canciones,
        'artistas': lista_artistas,
        'albunes': lista_albunes,
    }

    return render(request, 'index.html', context)

def cancion_detail(request, cancion_id):
    cancion = get_object_or_404(Cancion, pk=cancion_id)
    return render(request, 'cancion_detail.html', {'cancion': cancion})

def artista_detail(request, artista_id):
    artista = get_object_or_404(Artista, pk=artista_id)
    return render(request, 'artista_detail.html', {'artista': artista})

def albun_detail(request, albun_id):
    albun = get_object_or_404(Albun, pk=albun_id)
    canciones = albun.cancion_set.all()  # Obtener todas las canciones asociadas a este álbum
    return render(request, 'albun_detail.html', {'albun': albun, 'canciones': canciones})