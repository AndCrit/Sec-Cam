//Constants/Set Up

import { firebase } from './config';


const bucket = firebase.storage();





async function uploadImage(imageURI, cloudFilename){
  console.log("Enterred function");
  console.log(imageURI)
  console.log(cloudFilename)
  const response = await fetch(imageURI);
  const blob = await response.blob();
  bucket.ref().child(cloudFilename).put(blob);
  console.log("exit func");
  return "";
}


/**
 * uploadImage = async(imageUri) => {
  const response = await fetch(imageUri);
  const blob = await response.blob();
  var ref =   firebase.storage().ref().child("image.jpg");
  return ref.put(blob);
}
 */

//Main
//uploadFile('testImage.jpg', 'japan.jpg');
module.exports.uploadImage = uploadImage