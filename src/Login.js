import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";


function Login() {
    const signIn = () =>{
        //sing in..
    }
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
          alt=""
        />
        <img 
        src="https://www.transparentpng.com/thumb/facebook-logo/facebook-logo-photo-13.png" alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
          Sing In
      </Button>
    </div>
  );
}

export default Login;
