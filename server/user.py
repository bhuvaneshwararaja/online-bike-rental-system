# Import needed libraries
import flask
from flask import jsonify
from user_mongo import UserMongo
from random import randint
import smtplib
import hashlib
import random

class User:
    def __init__(self):
        pass

    @staticmethod
    def sign_up():
        try:
            userDetails = flask.request.json['newUser']
            print(userDetails)
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during user signup"})

        # try:
        key = "".join(random.choices("abcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~", k=6))
        userDetails['password'] = str((hashlib.md5((userDetails['password']+key).encode())).hexdigest())+key
        UserMongo.add_user(userDetails)
        # except:
            # return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo user signup creation"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})

 
    @staticmethod
    def sign_in():
        try:
            signinDetails = flask.request.json['loginCredential']
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during user signin"})

        try:
            result,userid = UserMongo.check_password(signinDetails
            ['email'], signinDetails['password'])
            print(result,userid)
            if result == 1:
                return jsonify({"ReplyCode": "1", "ReplyMessage": "Login success","userid":userid})

            else:
                return jsonify({"ReplyCode": "0", "ReplyMessage": "Incorrect Mail or Password"})
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo password retrieval during signin"})

        # return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})