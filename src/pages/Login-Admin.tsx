import React from 'react';
import "../style/theme.css";

function LoginAdmin() {
  return (
    <div className="h-screen bg-login-admin object-cover flex flex-col items-center justify-center">
      <title>Login | Centra Resort</title>
      <div className="border-b-2 border-white pb-3">
        <img src="./img-login/Centra Resort-Logo-White.png" style={{maxWidth : '400px'}}/>
      </div>
      <div className="flex items-center text-white mt-3">
        <img src="./img-login/login-3.png"/>
        <div className="ml-2">
          <p className="m-0 text-xl">For Administrator</p>
        </div>
      </div>
        <div className="mt-1 mb-1">
          <p className="m-0 text-xl text-white">Login</p>
        </div>
        <div className="mt-1 mb-1">
          <p className="m-0 text-white text-xl">Username :</p>
          <input type="text" name="input_username"  placeholder=" Enter username"  className="text-base p-2 rounded" required/>
        </div>
        <div className="mt-1 mb-1">
          <p className="m-0 text-white text-xl">Password :</p>
          <input type="password" name="input_password" placeholder=" Enter password"  className="text-base  p-2 rounded" required/>
        </div>
      <div className="mt-2 mb-1">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-20 text-xl rounded w-200px">Sign in</button>
      </div>
      <div className="mt-1 mb-1">
        <a className="hover:underline">Forgot Username/ Password?</a>
      </div>
    </div>
  );
}

export default LoginAdmin;
