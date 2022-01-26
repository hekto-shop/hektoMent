import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase/compat/app";

export const authContext = React.createContext();

export const AuthProvider = (props) => {
  const [session, setSession] = useState({ user: null, loading: true });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setSession({ loading: false, user });
    });

    return () => unsubscribe();
  }, []);
  return (
    <authContext.Provider value={session}>
      {props.children}
    </authContext.Provider>
  );
};

export const useSession = () => {
  const session = useContext(authContext);
  return session;
};
