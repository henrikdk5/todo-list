import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAHIeZPWG6Cof1KdQnm41Bxd47B_8oiKwQ",
  authDomain: "appapp-892e9.firebaseapp.com",
  databaseURL: "https://appapp-892e9.firebaseio.com",
  projectId: "appapp-892e9",
  storageBucket: "appapp-892e9.appspot.com",
  messagingSenderId: "G-TNKMRECEN6"
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore