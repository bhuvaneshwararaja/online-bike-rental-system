# Import needed libraries
import pymongo
from bson.objectid import ObjectId
import hashlib

def credential():
    (USER_NAME, PASSWORD, DB_NAME) = ("admin", "admin", "BikeSystem")
    # CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@bike-system.1k34p.mongodb.net/{DB_NAME}?retryWrites=true&w=majority"
    # CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@bike-system.1k34p.mongodb.net/{DB_NAME}?ssl=true&ssl_cert_reqs=CERT_NONE"
    CONNECTION_URL = "mongodb://localhost:27017/"
    client = pymongo.MongoClient(CONNECTION_URL)
    dataBase = client[DB_NAME]
    return dataBase


def add_user(user_details):
    dataBase = credential()
    collection = dataBase["user_details"]
    collection.insert_one(user_details)
    return 1


def check_email_existence(mail):
    dataBase = credential()
    collection = dataBase["user_details"]
    for i in enumerate(collection.find({"email": mail})):
        return 0
    return 1

def check_password(mail, password):
    dataBase = credential()
    collection = dataBase["user_details"]
    user = list(collection.find({"email": mail}))
    for details in user:
        # print(str(details['_id']))
        # print(details)
        if details['password'] == password:
            return 1
    return 0