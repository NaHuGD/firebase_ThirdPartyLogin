import React from "react";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from "../firebaseConfig";

const Login = () => {
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    console.log("provider : ", provider);
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log("res :", res);
      })
      .catch((err) => {
        console.log("error :", err);
      });
  };
  return <button onClick={signInWithFacebook}>Sign in with FB</button>;
};

export default Login;
