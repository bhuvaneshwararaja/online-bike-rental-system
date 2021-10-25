from flask import Flask
from flask_restful import Api
# from admin import Admin
from user import User
from 

# Flask app creation
app = Flask(__name__)
api = Api(app)

    
# User route functions,
app.add_url_rule('/user/signup/', view_func=User.sign_up, methods=['POST'])
app.add_url_rule('/user/signin/', view_func=User.sign_in, methods=['POST'])
app.add_url_rule('/user/signin/', view_func=User.sign_in, methods=['POST'])



# Python main function
if __name__ == '__main__':
    app.run(debug=True)