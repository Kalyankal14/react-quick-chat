import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unSub;
  }, []);

  const logout = () => {
    signOut(auth);
  };

  const data = {
    currentUser,
    setCurrentUser,
    googleSignIn,
    logout,
    setLoading,
  };

  return (
    <AuthContext.Provider value={data}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
