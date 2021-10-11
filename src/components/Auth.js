import React ,{useContext, useState, useEffect}from 'react';
import firebase from '../config/Firebase';

const AuthContext = React.createContext();


export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider  ({children}) {

    const [user,setUser] = useState(null);

 
    useEffect(() => {
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
            
      console.log("logado")
            } else {
console.log("não est logado")
            }
           });
    },[])

    const value ={
        setUser,
        user,
        
    }

    return(
        <AuthContext.Provider
        value={value}
        >
        {children}
        </AuthContext.Provider>

    );

}








