import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBk7E93441w-SrZSuh_VAArq3t9yE18Vsc",
  authDomain: "netflix-clone-707f2.firebaseapp.com",
  projectId: "netflix-clone-707f2",
  storageBucket: "netflix-clone-707f2.appspot.com",
  messagingSenderId: "343511982130",
  appId: "1:343511982130:web:5892540282efe3afeb9c2b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name:string,email:string,password:string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user

        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            email,
        })
    } catch (error) {
        alert(error);
    }
}

const login = async (email:string,password:string) => {
    try {
        
        await signInWithEmailAndPassword(auth,email,password)

    } catch (error) {
        alert(error)
    }
}

const logout = async () => {
    signOut(auth)
}


export {auth,db,login,signup,logout}
