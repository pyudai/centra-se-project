import { Checkbox, Modal} from 'antd';
import React, { useRef, useState } from 'react';
import "../style/theme.css";
import { Link } from 'react-router-dom';

function LoginAdmin() {
  // แสดงรหัสผ่าน
  const [show, showPassword] = useState("password");
  // ลืมรหัสผ่าน
  const [state, stateModalForgot ] = useState(false);
  const [send, sendEmailComplete ] = useState(false);
  const [send_error_blank_data, sendErrorBlankData ] = useState(false);
  const [send_error_null_database, sendErrorNullDatabase ] = useState(false);
  const [email, emailForgot] = useState("");
  // บัญชี login
  const [user,username] = useState("");
  const [pass,password] = useState("");
  // Event login
  const [error_login,errorLogin] = useState(false);
  // Clear document.getElementById GeData
  const usernameRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const emailRef = useRef<any>(null);

  let dataSet = {
    username : "admin",
    password : "adminadmin",
    email : "admin@mail.com"
  }

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
          <input type="text" ref={usernameRef} title="Enter username" placeholder="Enter username" className="p-3 pl-12 m-2 text-base rounded max-w-full logo-login-admin-username shadow-lg" 
            onChange={
              (e)=>{
                username(e.target.value);
              }
            }
          required />
          <input type={show} ref={passwordRef} title="Enter password" placeholder="Enter password" className="p-3 pl-12 m-2 text-base rounded max-w-full logo-login-admin-password shadow-lg"
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
                  if (e.target.checked) showPassword("text");
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
        <div className="hover:text-blue-700 hover:underline text-base text-white" onClick={()=>stateModalForgot(true)}>Forgot Username/ Password?</div>
      </div>
      <div className="m-2 text-m flex justify-center items-center" >
        <p className="text-white m-1">สลับไปหน้าโปรแกรม</p>
        <Link className="hover:text-blue-700 hover:underline text-white m-1 flex items-center" to="/LoginStaff"><img src="./img-login/logo-4.svg" className="w-6 m-1" />Staff</Link>
      </div>
      <div className="max-width-login text-center bg-white p-1">
        <p>บัญชีที่สามารถทดสอบการ Login เข้าสู่ระบบของ Administrator คือ</p>
        <p>username : admin</p>
        <p>password : adminadmin</p>
        <p>email : admin@mail.com</p>
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
      {/* Popup ลืมรหัสผ่าน */}
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
              <button className="font-prompt bg-blue-600 hover:bg-blue-700 w-1/2 text-white py-2 text-base rounded shadow-lg"
              onClick={
                ()=>{
                  if(email==="") sendErrorBlankData(true);
                  else{
                    if(email===dataSet.email){
                      stateModalForgot(false);
                      sendEmailComplete(true);
                    }
                    else{
                      sendErrorNullDatabase(true);
                    }
                  }
                }
              }>Send</button>
            </div>
        }
      >
        <div className="font-prompt text-base max-width-popup-login">
          <p className="font-prompt">* กรอกอีเมลที่คุณใช้สมัครบัญชีผู้ดูแลระบบของคุณ ระบบจะส่งรหัสผ่านไปยังอีเมลของคุณ</p>
          <input type="email" ref={emailRef} title="Email" placeholder="Enter email" className="p-3 pl-12 w-full text-base rounded logo-forgot-admin-email lg:shadow-lg" 
            onChange={
              (e)=>{
                emailForgot(e.target.value);
              }
            }
          required />
        </div>
      </Modal>
      {/* Popup ไม่มีข้อมูลอีเมลในหน้าลืมรหัสผ่าน */}
      <Modal
        title={
        <div className="font-prompt font-semibold w-full text-center text-2xl">
          เกิดปัญหา
        </div>      
        }
        visible={send_error_blank_data}
        onCancel={()=>sendErrorBlankData(false)}
        footer={
            <div className="font-prompt flex justify-center items-center">
              <button className="font-prompt bg-red-600 hover:bg-red-700 w-1/3 text-white py-2 text-base rounded shadow-lg"
              onClick={
                ()=>{
                  emailRef.current.value = "";
                  sendErrorBlankData(false)
                }
              }
              >Ok</button>
            </div>
        }
      >
      <div className="font-prompt text-base max-width-popup-login text-center flex">
        <img src="./img-login/logo-7.svg" style={{width:100}}/>
        <p>ส่งอีเมลไม่สำเร็จ เนื่องจากคุณยังไม่ได้กรอก email ของบัญชีที่คุณลืมรหัสผ่าน</p>
      </div>
      </Modal>
      {/* Popup ไม่พบอีเมลข้อมูลผู้ใช้ในฐานข้อมูลในหน้าลืมรหัสผ่าน */}
      <Modal
        title={
        <div className="font-prompt font-semibold w-full text-center text-2xl">
          เกิดปัญหา
        </div>      
        }
        visible={send_error_null_database}
        onCancel={()=>sendErrorNullDatabase(false)}
        footer={
            <div className="font-prompt flex justify-center items-center">
              <button className="font-prompt bg-red-600 hover:bg-red-700 w-1/3 text-white py-2 text-base rounded shadow-lg"
              onClick={
                ()=>{
                  emailRef.current.value = "";
                  sendErrorNullDatabase(false)
                }
              }
              >Ok</button>
            </div>
        }
      >
      <div className="font-prompt text-base max-width-popup-login text-center flex">
        <img src="./img-login/logo-7.svg" style={{width:100}}/>
        <p>ส่งอีเมลไม่สำเร็จ เนื่องจากไม่พบ email ข้อมูลผู้ใช้ในฐานข้อมูล</p>
      </div>
      </Modal>
      {/* Popup ส่งอีเมลสำเร็จ */}
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
              <button className="font-prompt bg-blue-600 hover:bg-blue-700 w-1/3 text-white py-2 text-base rounded shadow-lg"
              onClick={
                ()=>{
                  emailRef.current.value = "";
                  sendEmailComplete(false)
                }
              }
              >Ok</button>
            </div>
        }
      >
        <div className="font-prompt text-base items-center flex text-center">
          <img src="./img-login/logo-6.svg"className="p-1"/>
          <p className="p-1">ระบบได้ส่ง username และ password ไปยังอีเมล {email} เป็นที่เรียบร้อยแล้ว</p>
        </div>
      </Modal>
    </div>
  );
}

export default LoginAdmin;