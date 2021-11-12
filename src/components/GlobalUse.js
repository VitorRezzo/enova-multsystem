import React, { useContext, useState, useEffect } from "react";
import firebase from "../config/Firebase.js";
import { firestore } from "../config/Firebase.js";

const GlobalUseContext = React.createContext();

export function useGlobalUse() {
  return useContext(GlobalUseContext);
}

export function GlobalUseProvider({ children }) {
  const [userLog, setUserLog] = useState("");

  const GetNomeUser = async (uid) => {
    await firestore
      .collection("USERS")
      .where("Id", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserLog(doc.data().Nome);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        GetNomeUser(user.uid);
      }
    });
  }, []);

  const value = {
    userLog,
  };

  return (
    <GlobalUseContext.Provider value={value}>
      {children}
    </GlobalUseContext.Provider>
  );
}
