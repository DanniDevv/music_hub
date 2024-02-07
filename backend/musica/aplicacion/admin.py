from django.contrib import admin

# Register your models here.
from .models import Artista,Albun,Cancion
admin.site.register(Artista),
admin.site.register(Albun),
admin.site.register(Cancion),
