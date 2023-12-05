from django.contrib import admin
from .models import Cliente, TipoCliente, DireccionCliente

# Register your models here.
admin.site.register(Cliente)
admin.site.register(TipoCliente)
admin.site.register(DireccionCliente)

