
########## Imports ##########
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from firebase_admin import storage
import json
import numpy as np
import os
import pandas as pd
import pyrebase
from flask import Flask



app = Flask(__name__)

print("Ur mum eats liver")

@app.route("/")
def hello():
    return "Hello, World!"

#Main program will begin with a listen function which will run a while loop
# This listen function will listen for information from the app and hardware, and respond accordingly

########## Constants/Set Up ##########
backend_filepath = 'C:\\Users\\j_man\\Documents\\RyersonUniversity\\Capstone\\backend'
credential_filepath = backend_filepath + '\\serviceAccount.json'
cred = credentials.Certificate(credential_filepath)
database_URL = 'https://w23nmk01-default-rtdb.firebaseio.com/'
database_app = firebase_admin.initialize_app(cred, {
    'databaseURL': database_URL
})
storage_bucket = 'w23nmk01.appspot.com'
storage_app = pyrebase.initialize_app({
    'apiKey': "AIzaSyBES3b5Vklo9p8wD9EmuuKPqjl1uMfdvCQ",
    'authDomain': "w23nmk01.firebaseapp.com",
    'databaseURL': database_URL,
    'projectId': "w23nmk01",
    'storageBucket': storage_bucket,
    'serviceAccount': credential_filepath
})
sec_cam_storage = storage_app.storage()





########## Functions ##########
def firebase_create_all(JSON_filename):
    #WARNING: This function overwrites the entire contents of the database

    #Set database reference to the root
    ref = db.reference('/')

    #Load contents of JSON file
    with open(backend_filepath + '\\' + JSON_filename, "r") as f:
        file_contents = json.load(f)
    
    #Set database equal to the contents of the JSON file
    ref.set(file_contents)

def firebase_create_entry(name):
    #Set database reference to the root
    ref = db.reference('/')

    #Get database contents
    people = ref.get()

    #Get maximum ID number in database
    max_ID = 0
    for person in people.values():
        if person.get('ID') > max_ID:
            max_ID = person.get('ID')
    
    max_ID += 1
    
    #Set database reference to new entry
    ref = db.reference('/Person' + str(max_ID))

    #Create new entry with specfied attributes
    ref.set({'ID': max_ID, 'Name': name})

def firebase_delete_all():
    #Set database reference to the root
    ref = db.reference('/')

    #Set database equal to nothing
    ref.set({})

def firebase_delete_entry(ID):
    #Set database reference to the specified ID
    ref = db.reference('/Person' + str(ID))

    #Set specified entry equal to nothing
    #If specified entry doesn't exist, nothing will happen
    ref.set({})

def firebase_read_all():
    #Set database reference to the root
    ref = db.reference('/')

    #Retrieve database contents and print them to the terminal
    print(ref.get())

def firebase_read_entry(ID):
    #Set database reference to the specified ID
    ref = db.reference('/Person' + str(ID))

    #Retrieve database contents and print them to the terminal
    print(ref.get())

def firebase_update_entry(ID, name):
    #Set database reference to the specified ID
    ref = db.reference('/Person' + str(ID))

    #Set the specified entry equal to the newly specified values
    ref.set({'ID': ID, 'Name': name})





########## Main ##########
#Database test
firebase_delete_all()
firebase_create_all('testJSON.json')


'''
#File upload test
sec_cam_storage.child('testFile.txt').put('testFile.txt')
#File download test
sec_cam_storage.child('testFile.txt').download('testFile.txt', 'testFile2.txt')

#Image upload test
sec_cam_storage.child('testImage.jpg').put('testImage.jpg')
#Image download test
sec_cam_storage.child('testImage.jpg').download('testImage.jpg', 'testImage2.jpg')

#Download all files
cloud_files = sec_cam_storage.list_files()
for file in cloud_files:
    file.download_to_filename(file.name.replace('.', '3.'))
'''

sec_cam_storage.child('transfer_learning_trained.h5').put('transfer_learning_trained.h5')