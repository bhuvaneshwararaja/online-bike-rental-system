import flask
from flask import jsonify
from bike_mongo import BikeMongo

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
       bike = BikeMongo.Find_All()
       print(jsonify(bike))

=======
       return BikeMongo.Find_All()
    def singleBike(userid):
        return BikeMongo.userBike(userid)
        
>>>>>>> f2ac573 (database)
