import React from 'react';
import "../style/theme.css";
import { Link } from 'react-router-dom';

function ChooseLogin() {
  return (
    <div className="h-screen bg-login-staff object-cover flex flex-col items-center justify-center">
      <title>Choose Login | Centra Resort</title>
      <div className="text-white items-center text-center max-width-login">
        <div className="border-b-2 max-width-login">
          <img src="./img-login/Centra Resort-Logo-White.png" style={{width:400}}/>
          <p className="text-2xl">โปรแกรมจัดการระบบภายในรีสอร์ท</p>
        </div>
        <p className="pt-3 text-base">เลือกโปรแกรมสำหรับผู้ใช้</p>
        <Link to="/LoginAdmin">
          <button className="border-2 rounded items-center justify-center p-1 m-2 w-full flex flex-col hover:underline">
            <img src="./img-login/logo-1.svg" className="p-1" />
            <p className="m-0 text-xl text-white p-1">For Administrator</p>
          </button>
        </Link>
        <Link to="/LoginStaff">
          <button className="border-2 rounded items-center justify-center p-1 m-2 w-full flex flex-col hover:underline">
            <img src="./img-login/logo-4.svg" className="p-1" />
            <p className="m-0 text-xl text-white p-1">For Staff</p>
          </button>
        </Link>
      </div>
        
      
    </div>
  );
}

export default ChooseLogin; 
