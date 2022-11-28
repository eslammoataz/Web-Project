from django.contrib import admin
from .models import webadmin , student

# Register your models here.
admin.site.register(student)
admin.site.register(webadmin)
