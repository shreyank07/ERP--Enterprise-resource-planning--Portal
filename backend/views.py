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
Leaves=db["Leaveapplication"]


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
        data1["leaves"]=[]
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

    return JsonResponse({'status': True, 'token': token, 'message': 'Login Successful'})


@utils.requireLogin
@api_view(['GET'])
def getdata(request, **kwargs):
    data = 'some data'
    return JsonResponse({'status': True, 'data': data})
#----------------------------------------------------------------------------------------------------------------------------------


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
        data2["profiles"] = []
        # product = facultyAcc.insert_one(data2)
        # for A in accounts:
        #     if A['email'] == data2["email"]:
        #         return JsonResponse({'status': False, 'message': 'Email already Exist'})
        #     else:
        accounts = facultyAcc.insert_one(data2)
        return JsonResponse({'status': True, 'message': 'Registered Successfully'})
        # return JsonResponse({'status': True})


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

    return JsonResponse({'status': True, 'token': token, 'message': 'Login Successful'})


@utils.requireLogin
@api_view(['GET'])
def getdata(request, **kwargs):
    data = 'some data'
    return JsonResponse({'status': True, 'data': data})

#-----------------------------------------------------------------------------------------------------------------------------------

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
        return JsonResponse({'status': True, 'message': 'Profile added Succesfully '})


def prof(request):
    profiles = idconverter3()
    return JsonResponse({'status': True, 'profiles': profiles})

@csrf_exempt
def facpro(request):
    profiles = idconverter3()
    data3 = json.loads(request.body)
    print(data3)
    for pro in profiles:
        if (pro['_id'] == data3['_id']):
            print(pro['certify'])
            return JsonResponse({'status': True, 'name': pro['name'],
                                 'department': pro['department'], 'contact1': pro['contact1'],
                                 'mail': pro['mail'],'acheivements':pro['acheivements'],'papers':pro['papers'],
                                 'address': pro['address'], 'dob': pro['dob'], 'qualf1': pro['qualf1'],
                                 'qualf2': pro['qualf2'],'qualf3': pro['qualf3'], 'role': pro['role'],
                                 'certify':pro['certify']
                                 })
@csrf_exempt
def showpro(request):
    profiles = idconverter3()
    data4 = json.loads(request.body)
    for pro in profiles:
        if (pro['mail'] == data4['mail']):
            return JsonResponse({'status': True, 'name': pro['name'],
                                 'department': pro['department'], 'contact1': pro['contact1'],
                                 'address': pro['address'], 'role': pro['role']
                                 })
@csrf_exempt
def update(request):
    users1 = idconverter3()
    req = json.loads(request.body)

    for user in users1:
        if user['mail'] == req['mail']:
            Viewprofile.update_one({'mail': req['mail']}, {'$set': {"name": req["name"]}})
            Viewprofile.update_one({'mail': req['mail']}, {'$set': {"contact1": req["contact1"]}})
            Viewprofile.update_one({'mail': req['mail']}, {'$set': {"address": req["address"]}})
            return JsonResponse({'status': "True"})
    # token = request.headers.get('Authorization', None)
    # email = jwt.decode(token, settings.SECRET_KEY, algorithms='HS256')['email']
    # data = json.loads(request.body)
    # print(data)
    # Viewprofile.update_one({'email': data[email]}, {'$set': {"name": data["name"]}})
    # Viewprofile.update_one({'email': email}, {'$set': {"contact1": data["contact1"]}})
    # Viewprofile.update_one({'email': email}, {'$set': {"address": data["address"]}})
    # return JsonResponse({'status': "True"})

#----------------------------------------------------------------------------------------------------------------------------------


def idconverter4():
    leaves= [i for i in Leaves.find()]
    for l in leaves:
        l['_id'] = str(l['_id'])
    return leaves

@csrf_exempt
def viewleaves(request):
    leaves = idconverter4()
    data4 = json.loads(request.body)
    if request.method == 'POST':

        leaves = Leaves.insert_one(data4)
        return JsonResponse({'status': True, 'message': 'applied for leave'})


@csrf_exempt
def leave(request):
    leaves = idconverter4()
    Adminabc=idconverter1()
    for leave in leaves:
        adminAcc.update_one({'email':'admin@gmail.com'},{'$pull':{'leaves':leave['_id']}})
    for leave in leaves:
        adminAcc.update_one({'email':'admin@gmail.com'},{'$push':{'leaves':leave['_id']}})
    for admin in Adminabc:
        adminleaves= admin['leaves']
    return JsonResponse({'status':'True','leaveids': adminleaves})


    # return JsonResponse({'status': True, 'leaves': leaves})

# @csrf_exempt
# def appliedleaves(request):
#     profiles = idconverter3()
#     data3= json.loads(request.body)
#     for pro in profiles:
#         if (pro['_id'] == data3['_id']):
#             return JsonResponse({'status': True, 'name': pro['name'],
#                                  'department': pro['department'],'contact1':pro['contact1'],'contact2':pro['contact2'],
#                                  'address':pro['address'],'dob':pro['dob'],'qualf1':pro['qualf1'],'qualf2':pro['qualf2']
#                                  , 'qualf3': pro['qualf3'],'role':pro['role']
#                                  })
@csrf_exempt
def fetchleaves(request):
    leaves=idconverter4()
    application=json.loads(request.body)

    for leave in leaves:
        if(application['eachleave1']==leave['_id']):
            return JsonResponse({'status': True, 'name': leave['name'],'Email': leave['Email'],
                                 'dol': leave['dol'],'dor': leave['dor'],'department': leave['department'],
                                 'Rtimedob': leave['Rtimedob'],'Ltime': leave['Ltime'],
                                 'breifreason': leave['breifreason'],'_id': leave['_id'],'reason':leave['reason']})


@csrf_exempt
def decline(request):
    req = json.loads(request.body)
    adminAcc.update_one({'email': 'admin@gmail.com'}, {'$pull': {'leaves': req['_id']}})
    return JsonResponse({'status': "True", 'message': "application declined"})
    # users1 = idconverter4()
    #
    # req = json.loads(request.body)
    #
    # for user in users1:
    #     if user['name'] == req['name']:
    #         Leaves.update_one({'name': req['name']}, {'$pull': {'': req['_id']}})
    #         return JsonResponse({'status': "True",'message':"application declined"})


@csrf_exempt
def accept(request):
    req=json.loads(request.body)
    print(req)
    accounts=idconverter2()
    admins=idconverter1()
    for A in accounts:
        if A['email']==req['Email']:
            facultyAcc.update_one({'email':req['Email']},{'$push':{'profiles':req['_id']}})
            print(facultyAcc['profiles'])
            adminAcc.update_one({'email':'admin@gmail.com'},{'$pull':{'leaves':req['_id']}})
            return JsonResponse({'status':True,'message':"application Accepted"})

@csrf_exempt
def leavehistory(request):
    users=idconverter2()
    req=json.loads(request.body)
    print(req)
    print(users)
    for user in users:
        if user['email']==req['Email']:
            return JsonResponse({'status':True,'profiles':user['profiles']})





