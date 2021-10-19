import pymongo
from bson.objectid import ObjectId
import hashlib

from pymongo import database
from pymongo import collection

class BikeMongo:
    def __init__(self):
        pass

    @staticmethod
    def credential():
        (USER_NAME, PASSWORD, DB_NAME) = ("admin", "admin", "BikeSystem")
        CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@bike-system.1k34p.mongodb.net/{DB_NAME}?retryWrites=true&w=majority"
        client = pymongo.MongoClient(CONNECTION_URL)
        dataBase = client[DB_NAME]
        return dataBase
    @staticmethod
    def add_bike(bikeDetails):
        dataBase = BikeMongo.credential()
        collection = dataBase["BikeDetails"]
        collection.insert_one(bikeDetails)
    @staticmethod
    def checkBikeExistence(bikeNumber):
        database = BikeMongo.credential()
        collection = database["bikeDetails"]
        for details in enumerate(collection.find({"bikeNumber":bikeNumber})):
            return 0
        return 1
    
