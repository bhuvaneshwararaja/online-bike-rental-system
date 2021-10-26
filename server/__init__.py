from flask import Flask,jsonify
import flask
from werkzeug.exceptions import RequestURITooLarge
import bike_mongo
import user_mongo

# Flask app creation
app = Flask(__name__)

# User route functions,
'''app.add_url_rule('/user/signup/', view_func=User.sign_up, methods=['POST'])
app.add_url_rule('/user/signin/', view_func=User.sign_in, methods=['POST'])
app.add_url_rule('/user/post/', view_func=Bike.Insert_Bike_Details, methods=['POST'])
app.add_url_rule('/bike', view_func=Bike.Get_Bike_Details, methods=['GET'])
# app.add_url_rule('/fetch',view_func=Bike.singleBike,methods=['POST'])'''


@app.route('/user/post/', methods=['POST'])
def insert_bike():
    bikeDetails = flask.request.json['postBike']
    result = bike_mongo.add_bike(bikeDetails)
    return result
  

@app.route('/bike',methods=['GET'])
def findBike():
    result = bike_mongo.Find_All()
    return result

@app.route('/user/signup',methods = ['POST'])
def signup():
    userDetails = flask.request.json['newUser']
    result = user_mongo.add_user()
    print(result)
    return result


@app.route('/user/signin',methods = ['POST'])
def login():
    signinDetails = flask.request.json['loginCredential']
    result = user_mongo.check_password(signinDetails['email'], signinDetails['password'])
    if result == 1:
        return jsonify({"ReplyCode": "1", "ReplyMessage": "Login success"})

    else:
        return jsonify({"ReplyCode": "0", "ReplyMessage": "Incorrect Mail or Password"})


# Python main function
if __name__ == '__main__':
    app.run(debug=True)