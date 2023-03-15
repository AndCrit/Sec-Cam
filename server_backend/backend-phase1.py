import pandas as pd
import numpy as np
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json



backendFilepath = 'C:\\Users\\j_man\\Documents\\RyersonUniversity\\Capstone\\backend'
credentialFilepath = backendFilepath + '\\w23nmk01-firebase-adminsdk-frg4w-33f423bf17.json'
databaseURL = 'https://w23nmk01-default-rtdb.firebaseio.com/'

def FirebaseConnect():
    #Get the service account key details from the JSON file
    cred = credentials.Certificate(credentialFilepath)

    #Initialize the app with the service account's privileges (admin privileges)
    #As an admin, the app has access to read and write all data, regardless of Security Rules
    defaultApp = firebase_admin.initialize_app(cred, {
        'databaseURL': databaseURL
        })

def FirebaseCreateAll(JSONFilename):
    #WARNING: This function overwrites the entire contents of the database

    #Set database reference to the root
    ref = db.reference('/')

    #Load contents of JSON file
    with open(backendFilepath + '\\' + JSONFilename, "r") as f:
        fileContents = json.load(f)
    
    #Set database equal to the contents of the JSON file
    ref.set(fileContents)

def FirebaseDeleteAll():
    #Set database reference to the root
    ref = db.reference('/')

    #Set database equal to nothing
    ref.set({})

def FirebaseDeleteEntry(ID):
    #Set database reference to the specified ID
    ref = db.reference('/Person' + str(ID))

    #Set specified entry equal to nothing
    #If specified entry doesn't exist, nothing will happen
    ref.set({})

def FirebaseReadAll():
    #Set database reference to the root
    ref = db.reference('/')

    #Retrieve database contents and print them to the terminal
    print(ref.get())

def FirebaseReadEntry(ID):
    #Set database reference to the specified ID
    ref = db.reference('/Person' + str(ID))

    #Retrieve database contents and print them to the terminal
    print(ref.get())



FirebaseConnect()