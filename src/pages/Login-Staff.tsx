import { Checkbox, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import "../style/theme.css";
import {Link} from 'react-router-dom';

function LoginStaff() {
    // แสดงรหัสผ่าน
    const [show, showPassword] = useState("password");
    // บัญชี login
    const [user,username] = useState("");
    const [pass,password] = useState("");
    // Event login
    const [error_login,errorLogin] = useState(false);
    // Clear document.getElementById Data
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

    let dataSet = {
      username : "staff",
      password : "staffstaff",
    }

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
          <input type="text" ref={usernameRef} name="input_username" title="Enter username" placeholder="Enter username" className="p-3 pl-12 m-2 text-base rounded max-w-full logo-login-admin-username shadow-lg" 
            onChange={
              (e)=>{
                username(e.target.value);
              }
            }
          required />
          <input type={show} ref={passwordRef} name="input_password" title="Enter password" placeholder="Enter password" className="p-3 pl-12 m-2 text-base rounded max-w-full logo-login-admin-password shadow-lg"
            onChange={
              (e)=>{
                password(e.target.value);
              }
            }
          required />
          <div className="flex m-2">
            <Checkbox className="text-base text-white"
              onChange={
                (e) => {
                  if(e.target.checked) showPassword("text");
                  else showPassword("password");
                }
              }
            >Show password</Checkbox>
          </div>
        </div>
        <div className="m-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 text-base rounded w-full shadow-lg"
            onClick={
              ()=>{
                if(user===dataSet.username && pass===dataSet.password) console.log("Login complete");
                else {
                  errorLogin(true);               
                }
              }
            }
          >Sign in</button>
        </div>
        <div className="m-2 text-m flex justify-center items-center" >
          <p className="text-white m-1">สลับไปหน้าโปรแกรม</p>
          <Link className="hover:text-blue-700 hover:underline text-white m-1 flex items-center" to="/LoginAdmin"><img src="./img-login/logo-1.svg" className="w-4 m-1" />Administrator</Link>
        </div>
      </div>
      <div className="max-width-login text-center bg-white p-1">
        <p>บัญชีที่สามารถทดสอบการ Login เข้าสู่ระบบของ Staff คือ</p>
        <p>username : staff</p>
        <p>password : staffstaff</p>
        <p>email : staff@mail.com</p>
      </div>
      {/* Popup Login ไม่สำเร็จ */}
      <Modal
        title={
        <div className="font-prompt font-semibold w-full text-center text-2xl">
          Login ไม่สำเร็จ
        </div>      
        }
        visible={error_login}
        onCancel={()=>errorLogin(false)}
        footer={
            <div className="font-prompt flex justify-center items-center">
              <button className="font-prompt bg-red-600 hover:bg-red-700 w-1/3 text-white py-2 text-base rounded shadow-lg"
              onClick={
                ()=>{
                  errorLogin(false);
                  // e.target.value = ""
                  usernameRef.current.value = "";
                  passwordRef.current.value = "";
                }
              }
              >Ok</button>
            </div>
        }
      >
      <div className="font-prompt text-base max-width-popup-login text-center flex">
        <img src="./img-login/logo-7.svg" style={{width:100}}/>
        <p>ล็อคอินไม่สำเร็จ เนื่องจาก email หรือ password ของคุณกรอกไม่ถูกต้อง</p>
      </div>
      </Modal>
    </div>
  );
}

export default LoginStaff;
