from flask import Flask
from user import User
from bike import Bike

# Flask app creation
app = Flask(__name__)


# User route functions,
app.add_url_rule('/user/signup/', view_func=User.sign_up, methods=['POST'])
app.add_url_rule('/user/signin/', view_func=User.sign_in, methods=['POST'])
app.add_url_rule('/user/post/', view_func=Bike.Insert_Bike_Details, methods=['POST'])
app.add_url_rule('/bike', view_func=Bike.Get_Bike_Details, methods=['GET'])
# app.add_url_rule('/fetch',view_func=Bike.singleBike,methods=['POST'])




# Python main function
if __name__ == '__main__':
    app.run(debug=True)