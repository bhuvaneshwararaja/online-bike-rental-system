import flask
from flask import jsonify
from bike_mongo import BikeMongo

class Bike:
    def __init__(self):
        pass
    @staticmethod
    def Insert_Bike_Details():
        try:
            bikeDetails = flask.request.json['postDetails']
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during bike details"})
        bike_mongo.add_bike(bikeDetails)
        return jsonify({"ReplyCode": "1", "ReplyMessage": "Insertion successful"})

