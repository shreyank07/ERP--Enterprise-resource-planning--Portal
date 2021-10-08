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

