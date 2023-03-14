from flask import Flask
import datetime, json, os
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
from CRUD.user import fb_create_user, fb_update_patient, fb_read_patients

@app.route('/')
def index():
        return "Hello World"

if __name__ == "__main__":
        app.run(debug=True)


# PATIENT APIS
@app.route('/create_user', methods=['POST'])
def new_user():
    vals = json.loads(request.data)
    address = vals['address']
    # dob = datetime.datetime(vals['dob'])
    dob = datetime.datetime.now()
    name = vals['name']
    age = vals['age']
    gender = vals['gender']
    photo = vals['photo']
    try:
        fb_create_user(
            #fb_ref=patient_ref,
            address=address,
            age = age,
            name = name,
            gender = gender,
            photo = photo
        )
        return ("Success", 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)