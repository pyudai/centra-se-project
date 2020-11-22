import { Checkbox, Modal} from 'antd';
import React, { useState } from 'react';
import "../style/theme.css";
import { Link } from 'react-router-dom';

function LoginAdmin() {
  const [show, showPassword] = useState("password");
  const [state, stateModalForgot ] = useState(false);
  const [send, sendEmailComplete ] = useState(false);
  return (
    <div className="h-screen bg-login-admin object-cover flex flex-col items-center justify-center">
      <title>Login | Centra Resort</title>
      <div className="max-width-login text-center">
        <div className="border-b-2 border-white pb-3">
          <img src="./img-login/Centra Resort-Logo-White.png" />
        </div>
        <div className="flex p-2 justify-center" >
          <img src="./img-login/logo-1.svg" className="p-1" />
          <p className="m-0 text-xl text-white p-1">For Administrator</p>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl text-white">Login</p>
          <input type="text" name="input_username" title="Enter username" placeholder="Enter username" className="p-3 pl-12 m-2 text-base rounded max-w-full logo-login-admin-username shadow-lg" required />
          <input type={show} name="input_password" title="Enter password" placeholder="Enter password" className="p-3 pl-12 m-2 text-base rounded max-w-full logo-login-admin-password shadow-lg" required />
          <div className="flex m-2">
            <Checkbox className="text-base text-white"
              onChange={
                (e) => {
                  if (e.target.checked) showPassword("text");
                  else showPassword("password");
                }
              }
            >Show password</Checkbox>
          </div>
        </div>
        <div className="m-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 text-base rounded w-full shadow-lg">Sign in</button>
        </div>
        <div className="hover:text-blue-700 hover:underline text-base text-white" onClick={()=>stateModalForgot(true)}>Forgot Username/ Password?</div>
      </div>
      <div className="m-2 text-m flex justify-center items-center" >
        <p className="text-white m-1">สลับไปหน้าโปรแกรม</p>
        <Link className="hover:text-blue-700 hover:underline text-white m-1 flex items-center" to="/LoginStaff"><img src="./img-login/logo-4.svg" className="w-6 m-1" />Staff</Link>
      </div>
      <Modal
        title={
        <div className="font-prompt font-semibold tracking-wider w-full text-center text-2xl">
          ลืม Username/Password ?
        </div>
        }
        visible={state}
        onCancel={()=>stateModalForgot(false)}
        footer={
            <div className="font-prompt flex">
              <button className="font-prompt bg-red-600 hover:bg-red-700 w-1/2 text-white py-2 text-base rounded shadow-lg" onClick={()=>stateModalForgot(false)}>Cancel</button>
              <button className="font-prompt bg-blue-600 hover:bg-blue-700 w-1/2 text-white py-2 text-base rounded shadow-lg" onClick={()=>{sendEmailComplete(true)}}>Send</button>
            </div>
        }
      >
        <div className="font-prompt text-base max-width-popup-login">
          <p className="font-prompt">* กรอกอีเมลที่คุณใช้สมัครบัญชีผู้ดูแลระบบของคุณ ระบบจะส่งรหัสผ่านไปยังอีเมลของคุณ</p>
          <input type="text" name="input_email" title="Email" placeholder="Enter email" className="p-3 pl-12 w-full text-base rounded logo-forgot-admin-email lg:shadow-lg" required />
        </div>
      </Modal>
      <Modal
        title={
        <div className="font-prompt font-semibold tracking-wider w-full text-center text-2xl">
          ส่งอีเมลสำเร็จ
        </div>
        }
        visible={send}
        onCancel={()=>sendEmailComplete(false)}
        footer={
            <div className="font-prompt flex justify-center items-center">
              <button className="font-prompt bg-blue-600 hover:bg-blue-700 w-1/3 text-white py-2 text-base rounded shadow-lg" onClick={()=>{sendEmailComplete(false)}}>Send</button>
            </div>
        }
      >
        <div className="font-prompt text-base items-center flex">
          <img src="./img-login/logo-6.svg"className="p-1"/>
          <p className="p-1">ระบบได้ส่ง username และ password ไปยังอีเมล Jitladathip***n@mail.com เป็นที่เรียบร้อยแล้ว</p>
        </div>
      </Modal>
    </div>
  );
}

export default LoginAdmin;