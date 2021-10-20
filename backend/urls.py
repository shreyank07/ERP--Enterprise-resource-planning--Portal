from django.urls import path
from django.conf.urls import url
from backend.views import faculty,facultyregister,login,adminregister,ADMIN,adminlogin,addprofile,prof
urlpatterns ={
    path('faculty', faculty),
    path('facultyregister', facultyregister),
    path('login', login),
    path('adminregister', adminregister),
    path('ADMIN', ADMIN),
    path('adminlogin', adminlogin),
    path('addprofile', addprofile),
    path('prof', prof),
}
