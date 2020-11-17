import React from 'react';
import "../style/theme.css";

function LoginAdmin() {
  return (
    <div className="h-screen bg-login-admin object-cover flex flex-col items-center justify-center">
      <title>Login | Centra Resort</title>
      <div className="border-b-2 border-white pb-8">
        <img src="./img-login/Centra Resort-Logo-White.png" style={{maxWidth : '500px'}}/>
      </div>
      <div className="flex items-center text-white mt-3">
        <img src="./img-login/login-2.png"/>
        <p className="m-0 text-xl">For Administrator</p>
      </div>
      <p>Login</p>
      <input type="text" name="input_username"/>
      <input type="password" name="input_password"/>
      <div>
        <button>Sign in</button>
      </div>
      <div>
        <a>Forgot Username/ Password?</a>
      </div>
    </div>
  );
}

export default LoginAdmin;
