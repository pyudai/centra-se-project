import React, { useContext, useState } from 'react';
import BeforeNav from '../BeforeNav-admin';
import Navbar from '../navbar-admin';
import { Modal, message } from "antd";
import { Link } from 'react-router-dom';
import { CheckinContext } from '../data/CheckinContext';

function AddEmployee() {

  // Pop-up สำเร็จ
  const [state, stateComplete] = useState(false);

  // Check ข้อมูล
  const [fname, fnameEmp] = useState("");
  const [lname, lnameEmp] = useState("");
  const [password, passwordEmp] = useState("");
  const [citizen, citizenEmp] = useState("");
  const [dob, dobEmp] = useState("");
  const [phone, phoneEmp] = useState("");
  const [email, emailEmp] = useState("");
  const [department, departmentEmp] = useState("");

  const {employee, setEmployee}=useContext(CheckinContext);

  // format input
  /*const formatInput = (e, format,length) => {
    const formatArray = format.split("-").map((s) => s.length);
    const input = e.target.value.replaceAll("-", "");
    if (input.length >= formatArray.reduce((acc, i) => acc + i)) {
      e.target.value = e.target.value.slice(0, length);
      return;
    }
    const regex = RegExp(`^${formatArray.map((f) => `(\\d{${f}})?`).join("")}`);
    const splited = input.split(regex).filter((i) => i);
    return splited.join("-");
  };*/

  const idEmployee = (Number(employee[employee.length-1].No)+1).toString();

  return (
    <div className="bg-admin">
      <title>Add Employee | Centra Resort</title>
      <BeforeNav />
      <div className="sticky top-0 z-50"><Navbar /></div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-inside shadow-2xl rounded px-8 pt-6 flex flex-col my-10 ">
          <div className="flex flex-row  justify-center pt-4">
            <img src="emp-icon/1.svg" alt="title" className="h-10 pr-4 pt-2" />
            <h3 className="text-3xl font-semibold">
              เพิ่มข้อมูลพนักงาน
            </h3>
          </div>
          <div className="md:flex mb-4 m-6">
            <div className="w-full mr-6 mb-6 md:mb-0 flex items-center border border-grey-lighter bg-white rounded py-2 px-1 shadow-lg">
              <img src="emp-icon/name.svg" alt="name" className="h-8 pl-2 pr-2" />
              <input className="text-grey-darker focus:outline-none w-full" type="text" placeholder="Firstname"
                onChange={(e) => fnameEmp(e.target.value)}
              />
            </div>
            <div className="w-full flex items-center border border-grey-lighter bg-white rounded py-2 px-1 shadow-lg">
              <img src="emp-icon/name.svg" alt="name" className="h-8 pl-2 pr-2" />
              <input className="text-grey-darker focus:outline-none" type="text" placeholder="Lastname"
                onChange={(e) => lnameEmp(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex mb-4 m-6">
            <div className="w-full flex items-center border border-grey-lighter rounded py-3 px-1 shadow-lg bg-gray-500">
              <img src="emp-icon/user.svg" alt="user" className="h-6 pl-3 pr-2" />
              <input className="text-grey-darker focus:outline-none bg-gray-500" type="text" placeholder="Username"
                value={idEmployee}
              readOnly/>
            </div>
          </div>
          <div className="md:flex mb-4 m-6">
            <div className="w-full flex items-center border border-grey-lighter bg-white rounded py-2 px-1 shadow-lg">
              <img src="emp-icon/lock.svg" alt="pass" className="h-8 pl-2 pr-2" />
              <input className="block text-grey-darker focus:outline-none" type="password" placeholder="Password"
                onChange={(e) => passwordEmp(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex mb-4 m-6">
            <div className="w-full flex items-center border border-grey-lighter bg-white rounded py-2 px-1 shadow-lg">
              <img src="emp-icon/citizen.svg" alt="pass" className="h-8 pl-2 pr-2" />
              <input
                type="number"
                placeholder="Citizen"
                onChange={(e) => {
                  e.target.value = e.target.value.slice(0,13);
                  citizenEmp(e.target.value);
                }}
                className="text-grey-darker focus:outline-none"
              />
            </div>
          </div>
          <div className="md:flex mb-4 m-6">
            <div className="w-full mr-6 mb-6 md:mb-0 flex">
              <p className="mb-0 text-base font-semibold">Date of Birth</p>
              <input className="block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 shadow-lg" type="date"
                onChange={(e) => { dobEmp(e.target.value); }}
              />
            </div>
            <div className="w-full flex items-center border border-grey-lighter bg-white rounded py-3 px-1 shadow-lg">
              <img src="emp-icon/tel.svg" alt="name" className="h-6 pl-2 pr-2" />
              <input
                type="number"
                placeholder="Phone number"
                onChange={(e) =>{
                  e.target.value = e.target.value.slice(0,10);
                  phoneEmp(e.target.value);
                }}
                className="text-grey-darker focus:outline-none"
              />
            </div>
          </div>
          <div className="md:flex mb-4 m-6">
            <div className="w-full flex items-center border border-grey-lighter bg-white rounded py-2 px-1 shadow-lg">
              <img src="emp-icon/email.svg" alt="pass" className="h-8 pl-2 pr-2" />
              <input className="text-grey-darker focus:outline-none w-full" type="email" placeholder="Email"
                onChange={(e) => { emailEmp(e.target.value) }}
              />
            </div>
          </div>
          <div className="md:flex mb-10 m-6">
            <div className="w-full flex items-center border border-grey-lighter bg-white rounded py-2 px-1 shadow-lg">
              <img src="emp-icon/department.svg" alt="pass" className="h-6 pl-3" />
              <div className="relative flex w-full">
                <select className="appearance-none flex flex-col w-full bg-grey-lighter text-grey-darker rounded py-2 px-3 " id="grid-state"
                  onChange={(e) => departmentEmp(e.target.value)}
                >
                  <option>- Department -</option>
                  <option>Admin</option>
                  <option>Staff</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="flex flex-row w-full items-center justify-evenly">
              <Link to="Employee">
                <button className="bg-red-600 text-white active:bg-red-600 font-bold text-sm px-12 py-3 rounded shadow hover:bg-red-400 outline-none focus:outline-none " type="button" style={{ transition: "all .15s ease" }}
                  onChange={() => {
                    message.info("ยกเลิกการเพิ่มพนักงาน");
                  }}
                >
                  Cancel
                </button>
              </Link>
              <button className="bg-green-600 text-white active:bg-green-600 font-bold text-sm px-12 py-3 rounded shadow hover:bg-green-400 outline-none focus:outline-none " type="button" style={{ transition: "all .15s ease" }}
                onClick={() => {
                  const citizenLength = citizen.length;
                  const phoneLength = phone.length;
                  if (
                    fname === "" || lname === "" || password === "" ||
                    dob === "" || email === "" || department === "- Department -" ||
                    citizenLength !== 13 || phoneLength !== 10
                  ) message.warning('กรุณากรอกข้อมูลให้ครบ');
                  else {
                    let Nemployee=employee;
                    Nemployee[Nemployee.length]={No:idEmployee, Name:fname+" "+ lname, Phone:phone, Department:(department==="Staff" ? 0 : 1)};
                    setEmployee([...Nemployee]);
                    message.success('เพิ่มพนักงานสำเร็จ');
                    stateComplete(true);
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popup สร้างพนักงานสำเร็จ */}
      <Modal
        visible={state}
        closable={false}
        footer={
          <div className="w-full flex flex-col text-center items-center justify-center">
            <Link className="w-full" to="Employee">
              <button className="font-prompt bg-blue-600 hover:bg-blue-700 w-1/3 text-white py-2 text-base rounded shadow-lg" onClick={() => stateComplete(false)}>Ok</button>
            </Link>
          </div>
        }
      >
        <div className="w-full flex flex-col text-center items-center justify-center">
          <img src="/pic/image_23.png" alt="check" className="h-20 w-20 m-10 " />
          <h3 className="text-3xl font-semibold font-prompt flex-auto">เพิ่มพนักงานสำเร็จ</h3>
        </div>
      </Modal>
    </div>
  );
}

export default AddEmployee;