import pymongo
from bson.objectid import ObjectId
import hashlib
from flask import jsonify

from pymongo import database
from pymongo import collection



   
def credential():
    (USER_NAME, PASSWORD, DB_NAME) = ("admin", "admin", "BikeSystem")
    # CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@bike-system.1k34p.mongodb.net/{DB_NAME}?retryWrites=true&w=majority"
    CONNECTION_URL = "mongodb://localhost:27017/"
    client = pymongo.MongoClient(CONNECTION_URL)
    dataBase = client[DB_NAME]
    return dataBase
  
def add_bike(bikeDetails):
    dataBase = credential()
    collection = dataBase["bikeDetails"]
    collection.insert_one(bikeDetails)
  
def checkBikeExistence(bikeNumber):
    database = credential()
    collection = database["bikeDetails"]
    for details in enumerate(collection.find({"bikeNumber":bikeNumber})):
        return 0
    return 1
    
def Find_All():
    database = credential()
    collection = database["bikeDetails"]
    result = list(collection.find({}))
    return result


    
def userBike(userid):
    database = credential()
    collection = database["bikeDetails"]
    return list(collection.find({"_id":userid}))
    
