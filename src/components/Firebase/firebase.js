import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
};

class Firebase {
    constructor() {
      app.initializeApp(config);
    
        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Authentication API ***

    // Sign Up Function (Registeration) : Creating new user
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    // Sign In / Login Funciton
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // Sign Out / Logout
    doSignOut = () => this.auth.signOut();

    // Reset Password
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    // Change Password
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    // Get the uid
    user = uid => this.db.ref(`users/${uid}`);

    // Reference to all the users
    users = () => this.db.ref('users');
}
   
export default Firebase;