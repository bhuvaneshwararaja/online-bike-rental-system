import flask
from flask import jsonify
from bike_mongo import BikeMongo
from pymongo import database
from pymongo import collection
import pymongo

class Bike:
    def __init__(self):
        pass
    @staticmethod
    def Insert_Bike_Details():
        try:
            bikeDetails = flask.request.json['postBike']
            print(bikeDetails)
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during bike details"})
        BikeMongo.add_bike(bikeDetails)
        return jsonify({"ReplyCode": "1", "ReplyMessage": "Insertion successful"})
    @staticmethod
    def Get_Bike_Details():
<<<<<<< HEAD
        database = BikeMongo.credential()
        print(database)
        collection = database["bikeDetails"]
        
        return "1"

=======
       bike = BikeMongo.Find_All()
    #    print(jsonify(bike))
       return bike
    def singleBike(userid):
        return BikeMongo.userBike(userid)
>>>>>>> 0ef0a92 (database module')
