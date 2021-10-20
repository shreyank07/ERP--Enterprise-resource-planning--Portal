from django.http import JsonResponse, HttpResponse
import json
from rest_framework.decorators import api_view
from django.conf import settings
import jwt
import datetime

from pymongo import MongoClient
from django.views.decorators.csrf import csrf_exempt

from backend import utils
client = MongoClient('mongodb://localhost:27017')
db = client['Prima']
facultyAcc = db['faculty']
adminAcc = db['Admin']
Viewprofile=db['Profile']


def idconverter1():
    admina = [i for i in adminAcc.find()]
    for A in admina:
        A['_id'] = str(A['_id'])
    return admina


def ADMIN(request):
    admins = idconverter1()
    return JsonResponse({'status': True, 'admins': admins})

@csrf_exempt
def adminregister(request):
    admins = idconverter1()
    if request.method == 'POST':
        data1 = json.loads(request.body)
        # product = facultyAcc.insert_one(data2)
        admins = adminAcc.insert_one(data1)
        return JsonResponse({'status': True})

@api_view(['POST'])
def adminlogin(request):
    req_user1 = json.loads(request.body)
    userid = adminAcc.find_one({'email': req_user1['email']})
    if userid['password'] != req_user1['password']:
        return HttpResponse('Unauthorized', status=401)

    token = jwt.encode(
        {'email': req_user1['email'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=24 * 60 * 60)
            },
        settings.SECRET_KEY,
        algorithm="HS256").decode('utf-8')

    return JsonResponse({'status': True, 'token': token, 'message': 'Login Succesfull'})


@utils.requireLogin
@api_view(['GET'])
def getdata(request, **kwargs):
    data = 'some data'
    return JsonResponse({'status': True, 'data': data})
#---------------------------------------------------------------------


def idconverter2():
    account = [i for i in facultyAcc.find()]
    for A in account:
        A['_id'] = str(A['_id'])
    return account


def faculty(request):
    accounts = idconverter2()
    return JsonResponse({'status': True, 'accounts': accounts})


@csrf_exempt
def facultyregister(request):
    accounts = idconverter2()
    if request.method == 'POST':
        data2 = json.loads(request.body)
        # product = facultyAcc.insert_one(data2)
        for A in accounts:
            if A['email'] == data2["email"]:
                return JsonResponse({'status': False, 'message': 'Email already Exist'})
            else:
                accounts = facultyAcc.insert_one(data2)
                return JsonResponse({'status': True, 'message': 'Registered Successfully'})
        return JsonResponse({'status': True})


@api_view(['POST'])
def login(request):
    req_user = json.loads(request.body)
    userid = facultyAcc.find_one({'email': req_user['email']})
    if userid['password'] != req_user['password']:
        return HttpResponse('Unauthorized', status=401)

    token = jwt.encode(
        {'email': req_user['email'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=24 * 60 * 60)
            },
        settings.SECRET_KEY,
        algorithm="HS256").decode('utf-8')

    return JsonResponse({'status': True, 'token': token, 'message': 'Login Succesfull'})


@utils.requireLogin
@api_view(['GET'])
def getdata(request, **kwargs):
    data = 'some data'
    return JsonResponse({'status': True, 'data': data})

#---------------------------------------------------------------------------------

def idconverter3():
    profiles= [i for i in Viewprofile.find()]
    for p in profiles:
        p['_id'] = str(p['_id'])
    return profiles

@csrf_exempt
def addprofile(request):
    profiles = idconverter3()
    if request.method == 'POST':
        data3 = json.loads(request.body)
        profiles = Viewprofile.insert_one(data3)
        return JsonResponse({'status': True, 'message': 'Profile added Succesfully Added'})


def prof(request):
    profiles = idconverter3()
    return JsonResponse({'status': True, 'profiles': profiles})

def facpro(request):
    profiles = idconverter3()
    data3= json.loads(request.body)
    for pro in profiles:
        if (pro['_id'] == data3['_id']):
            return JsonResponse({'status': True, 'picture': pro['picture'], 'name': pro['name'],
                                 'department': pro['department'],
                                 })
