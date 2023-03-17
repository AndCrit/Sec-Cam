//Imports


//Constants/Set Up
const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');

const serviceAccount = require('C:\\Users\\j_man\\Documents\\RyersonUniversity\\Capstone\\backend\\serviceAccount.json');

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'w23nmk01.appspot.com'
});

const bucket = getStorage().bucket();


//Functions
async function attemptDownload(cloudFilename, localFilename) {
  const file = bucket.file(cloudFilename);

  start_position: file.exists().then((exists) => {
    if (exists[0]) {
      downloadFile(cloudFilename, localFilename);
    } else {
      attemptDownload(cloudFilename, localFilename);
    }
  })
}

async function downloadFile(cloudFilename, localFilename) {
  const file = bucket.file(cloudFilename);
  
  file.download({destination: localFilename});
}

async function uploadFile(localFilename, cloudFilename) {
  bucket.upload(localFilename, {destination: cloudFilename});
}



//Main
//Testing uploading file from local storage to cloud storage
//uploadFile("testFile.txt", "StationD.txt");

//Testing downloading file from cloud storage to local storage
attemptDownload("StationD.txt", "jsdev.txt")
