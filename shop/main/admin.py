from django.contrib import admin
from .models import *
from django import forms

admin.site.register(Category)
admin.site.register(Notebook)
admin.site.register(Smartphone)
admin.site.register(CartProduct)
admin.site.register(Cart)



class NotebookAdmin(admin.ModelAdmin):
    pass