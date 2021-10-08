from django.urls import path
from django.conf.urls import url
from backend.views import faculty,facultyregister,login
urlpatterns ={
    path('faculty', faculty),
    path('facultyregister', facultyregister),
    path('login', login),
}
