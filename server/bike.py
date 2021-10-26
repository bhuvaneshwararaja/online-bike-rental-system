import flask
from flask import jsonify
from bike_mongo import BikeMongo
from pymongo import database
from pymongo import collection
import pymongo


def Insert_Bike_Details():
    try:
        bikeDetails = flask.request.json['postBike']
        print(bikeDetails)
    except:
        return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during bike details"})
    BikeMongo.add_bike(bikeDetails)
    return jsonify({"ReplyCode": "1", "ReplyMessage": "Insertion successful"})


def Get_Bike_Details():
    bike = BikeMongo.Find_All()
    print(bike)
    return jsonify({"output":bike})
    # return "Success"
def singleBike(userid):
    return BikeMongo.userBike(userid)
