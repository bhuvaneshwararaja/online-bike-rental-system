import pymongo
from bson.objectid import ObjectId
import hashlib
from flask import jsonify

from pymongo import database
from pymongo import collection

class BikeMongo:
    def __init__(self):
        pass

    @staticmethod
    def credential():
        (USER_NAME, PASSWORD, DB_NAME) = ("admin", "admin", "BikeSystem")
        # CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@bike-system.1k34p.mongodb.net/{DB_NAME}?retryWrites=true&w=majority"
        CONNECTION_URL = "mongodb://localhost:27017/"
        client = pymongo.MongoClient(CONNECTION_URL)
        dataBase = client[DB_NAME]
        return dataBase
    @staticmethod
    def add_bike(bikeDetails):
        dataBase = BikeMongo.credential()
        collection = dataBase["bikeDetails"]
        collection.insert_one(bikeDetails)
    @staticmethod
    def checkBikeExistence(bikeNumber):
        database = BikeMongo.credential()
        collection = database["bikeDetails"]
        for details in enumerate(collection.find({"bikeNumber":bikeNumber})):
            return 0
        return 1
    @staticmethod
    def Find_All():
        database = BikeMongo.credential()
        collection = database["bikeDetails"]
        bikeDetails = {'bikeDetails': {}}
        for bikedetails in enumerate(collection.find({})):
            bikeDetails[bikeDetails][str(bikedetails[1].pop('_id'))] = bikedetails[1]
        return bikeDetails
    
