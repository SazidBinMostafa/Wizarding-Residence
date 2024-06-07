import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";


export const AuthContext = createContext(null)

function AuthProvider({children}){

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser ) {
                setUser(currentUser)
            } 
            else {
              setUser(null)
            }
          });
        return () =>{unSubscribe()}
    },[])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}


export default AuthProvider;