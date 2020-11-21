import { Checkbox } from 'antd';
import React, { useState } from 'react';
import "../style/theme.css";

function LoginStaff() {
  const [type, ShowPassword] = useState("password");
  return (
    <div className="h-screen bg-login-staff object-cover flex flex-col items-center justify-center">
      <title>Login | Centra Resort</title>
      <div className="max-width-login text-center">
        <div className="border-b-2 border-white pb-3">
          <img src="./img-login/Centra Resort-Logo-White.png" />
        </div>
        <div className="flex p-2 justify-center" >
          <img src="./img-login/logo-4.svg" className="p-1" />
          <p className="m-0 text-xl text-white p-1">For Staff</p>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl text-white">Login</p>
          <input type="text" name="input_username" title="Enter username" placeholder="Enter username" className="p-3 pl-12 m-2 text-base rounded max-w-full logo-login-admin-username shadow-lg" required />
          <input type={type} name="input_password" title="Enter password" placeholder="Enter password" className="p-3 pl-12 m-2 text-base rounded max-w-full logo-login-admin-password shadow-lg" required />
          <div className="flex m-2">
            <Checkbox className="text-base text-white"
              onChange={
                (e) => {
                  if(e.target.checked) ShowPassword("text");
                  else ShowPassword("password");
                }
              }
            >Show password</Checkbox>
          </div>
        </div>
        <div className="m-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 text-base rounded w-full shadow-lg">Sign in</button>
        </div>
        <div className="m-2 text-m flex justify-center items-center" >
          <p className="text-white m-1">สลับไปหน้าโปรแกรม</p>
          <a className="hover:text-blue-700 hover:underline text-white m-1 flex items-center"><img src="./img-login/logo-1.svg" className="w-4 m-1" />Administrator</a>
        </div>
      </div>
    </div>
  );
}

export default LoginStaff;
