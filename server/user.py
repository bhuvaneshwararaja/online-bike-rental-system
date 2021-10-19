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

        try:
            key = "".join(random.choices("abcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~", k=6))
            userDetails['password'] = str((hashlib.md5((userDetails['password']+key).encode())).hexdigest())+key
            UserMongo.add_user(userDetails)
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo user signup creation"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})

    '''@staticmethod
    def email_verification():
        try:
            mailVerify = flask.request.json

            result = UserMongo.check_email_existence(mailVerify['emailVerify']['email'])
            if result == 0:
                return jsonify({"ReplyCode": "0", "ReplyMessage": "Error. Email already exists"})
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during email verification"})

        otp = randint(100000, 999999)
        try:
            text = f"Hi {mailVerify['emailVerify']['name']},\n\nYour OTP is {otp}.\nValid only for 5 minutes.\n\nWith Love,\ncKart Team"
            subject = "cKart Email Verification - reg"
            message = 'Subject: {}\n\n{}'.format(subject, text)
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login("lovebreaker007@gmail.com", "loveandsex")
            server.sendmail("lovebreaker007@gmail.com", mailVerify['emailVerify']['email'], message)
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error. Email verification failed"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "OTP sent to your mail", "otp": otp})'''

    @staticmethod
    def sign_in():
        try:
            signinDetails = flask.request.json['loginCredential']
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during user signin"})

        try:
            result = UserMongo.check_password(signinDetails['email'], signinDetails['password'])
            
            if result == 1:
                return jsonify({"ReplyCode": "1", "ReplyMessage": "Login success"})
            else:
                return jsonify({"ReplyCode": "0", "ReplyMessage": "Incorrect Mail or Password"})
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo password retrieval during signin"})

        # return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})