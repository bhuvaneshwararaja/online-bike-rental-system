# Import needed libraries
import pymongo
from bson.objectid import ObjectId
import hashlib

class UserMongo:
    def __init__(self):
        pass

    @staticmethod
    def credential():
        (USER_NAME, PASSWORD, DB_NAME) = ("admin", "admin", "BikeSystem")
        # CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@bike-system.1k34p.mongodb.net/{DB_NAME}?retryWrites=true&w=majority"
        # CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@bike-system.1k34p.mongodb.net/{DB_NAME}?ssl=true&ssl_cert_reqs=CERT_NONE"
        CONNECTION_URL = "mongodb://localhost:27017/"
        client = pymongo.MongoClient(CONNECTION_URL)
        dataBase = client[DB_NAME]
        return dataBase

    @staticmethod
    def add_user(user_details):
        dataBase = UserMongo.credential()
        collection = dataBase["user_details"]
        collection.insert_one(user_details)

    @staticmethod
    def check_email_existence(mail):
        dataBase = UserMongo.credential()
        collection = dataBase["user_details"]
        for i in enumerate(collection.find({"email": mail})):
            return 0
        return 1
    @staticmethod
    def check_password(mail, password):
        dataBase = UserMongo.credential()
        collection = dataBase["user_details"]
        for details in enumerate(collection.find({"email": mail})):
            print(details[1])
            if details[1]['password'][:-6] == (hashlib.md5((password+details[1]['password'][-6:]).encode())).hexdigest():
                return 1
        return 0