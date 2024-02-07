from django.db import models

# Create your models here.
class Artista(models.Model):
    nombre = models.CharField(max_length=255)
    artista_imagen = models.ImageField(upload_to='canciones/imagenes/')

    def __str__(self):
        return self.nombre

class Albun(models.Model):
    titulo = models.CharField(max_length=255)
    ano = models.DateField()
    albunes_imagen = models.ImageField(upload_to='canciones/imagenes/')

    def __str__(self):
        return self.titulo

class Cancion(models.Model):
    titulo = models.CharField(max_length=255)
    archivo_mp3 = models.FileField(upload_to='canciones/mp3/')  # Directorio donde se guardarán los archivos MP3
    archivo_img = models.ImageField(upload_to='canciones/imagenes/')  # Directorio donde se guardarán las imágenes
    duracion = models.TimeField()
    artista = models.ForeignKey(Artista, on_delete=models.CASCADE)
    albun = models.ForeignKey(Albun, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo