import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {

  const [authToken, setAuthToken] = useState();
  const [user,setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const register = async (email,password)=>{
    try{
        const result = await createUserWithEmailAndPassword(auth,email,password)
        setUser(result.user);
        setAuthToken(result.user.accessToken);
    } catch(error){
        console.log(error);
    }
  }
  const login = async (email,password) =>{
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user);
    setAuthToken(user.accessToken);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  const signGoogle = async ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setUser(user);
    setAuthToken(user.accessToken);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  return (
    <FirebaseContext.Provider value={{ authToken,user,register,login,signGoogle }}>
      {children}
    </FirebaseContext.Provider>
  );

};
export default FirebaseContext;
