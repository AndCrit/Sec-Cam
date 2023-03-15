import uuid
from flask import jsonify

def fb_create_user(fb_ref, name, age, gender, photo):
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    payload = {
        "name" : name,
        "gender" : gender,
        "age" : age,
        "photo" : photo,
        "user_id": str(uuid.uuid4())
    }
    try:
        fb_ref.document(payload['patient_id']).set(payload)
        return json.loads({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"



def fb_read_users(fb_ref, user_id):
    """
        read() : Fetches documents from Firestore collection as JSON.
        patient : Return document that matches query ID.
        all_patients : Return all documents.
    """
    try:
        # Check if ID was passed to URL query
        if user_id:
            user = fb_ref.document(user_id).get()
            return jsonify(user_id.to_dict())
        else:
            all_users = [doc.to_dict() for doc in fb_ref.stream()]
            return jsonify(all_users)
    except Exception as e:
        return f"An Error Occurred: {e}"