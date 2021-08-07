import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const configFirebase = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: process.env["REACT_APP_FIREBASE_AUTH_DOMAIN"],
  databaseURL: process.env["REACT_APP_FIREBASE_DATABASE_URL"],
  projectId: process.env["REACT_APP_FIREBASE_PROJECT_ID"],
  storageBucket: process.env["REACT_APP_FIREBASE_STORAGE_BUCKET"],
};

class Firebase {
  constructor() {
    app.initializeApp(configFirebase);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  createFirebaseUser = (obj) =>
    this.auth.createUserWithEmailAndPassword(obj.email, obj.password);

  loginFirebaseUser = (obj) =>
    this.auth.signInWithEmailAndPassword(obj.email, obj.password);
  checkFirebaseSession = (cb) => this.auth.onAuthStateChanged(cb);
  saveFirestoreVehicle = (obj) => this.db.collection("parkir").add(obj);
  getAllFirestoreVehicle = () => this.db.collection("parkir").get();
  getUpdateFirestoreVehicle = (cb) =>
    this.db.collection("parkir").onSnapshot(cb);
}

export default Firebase;
