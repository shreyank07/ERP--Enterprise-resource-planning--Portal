from django.urls import path
from django.conf.urls import url
from backend.views import faculty,facultyregister,login,adminregister,ADMIN,adminlogin,addprofile,prof,facpro,viewleaves,fetchleaves
from backend.views import leave,decline,update,showpro,accept,leavehistory
urlpatterns ={
    path('faculty', faculty),
    path('facultyregister', facultyregister),
    path('login', login),
    path('adminregister', adminregister),
    path('ADMIN', ADMIN),
    path('adminlogin', adminlogin),
    path('addprofile', addprofile),
    path('prof', prof),
    path('facpro', facpro),
    path('viewleaves', viewleaves),
    path('leave', leave),
    path('decline', decline),
    path('fetchleaves',fetchleaves),
    path('update',update),
    path('showpro',showpro),
    path('accept',accept),
    path('leavehistory',leavehistory),


}
