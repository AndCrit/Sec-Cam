########## Imports ##########
import pyrebase





########## Constants/Set Up ##########
credential_file = 'serviceAccount.json'
storage_bucket = 'w23nmk01.appspot.com'
storage_app = pyrebase.initialize_app({
    'apiKey': "AIzaSyBES3b5Vklo9p8wD9EmuuKPqjl1uMfdvCQ",
    'authDomain': "w23nmk01.firebaseapp.com",
    'databaseURL': 'https://w23nmk01-default-rtdb.firebaseio.com/',
    'projectId': "w23nmk01",
    'storageBucket': storage_bucket,
    'serviceAccount': credential_file
})
sec_cam_storage = storage_app.storage()




########## Main ##########
#File download
sec_cam_storage.child('testFile.txt').download('testFile.txt', 'testFile.txt')

#Image download
sec_cam_storage.child('testImage.jpg').download('testImage.jpg', 'testImage.jpg')