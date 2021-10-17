import pymongo



#def credential():
(USER_NAME, PASSWORD, DB_NAME) = ("admin", "admin", "BikeSystem")  # Credentials for mongodb atlas connection with database name
#CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@flipcartreview.t8qf3.mongodb.net/{DB_NAME}?ssl=true&ssl_cert_reqs=CERT_NONE"
CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@bike-system.1k34p.mongodb.net/{DB_NAME}?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_URL)  # Establish connection with mongodb server
dataBase = client[DB_NAME]  # Create DB / Use existing database
# print(dataBase)

#return dataBase