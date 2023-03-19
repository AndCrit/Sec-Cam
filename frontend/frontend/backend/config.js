import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    'apiKey': "AIzaSyBES3b5Vklo9p8wD9EmuuKPqjl1uMfdvCQ",
    'authDomain': "w23nmk01.firebaseapp.com",
    'projectId': "w23nmk01",
    'storageBucket': 'w23nmk01.appspot.com',
    'serviceAccount': "../serviceAccount.json"

}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

}
export{firebase}