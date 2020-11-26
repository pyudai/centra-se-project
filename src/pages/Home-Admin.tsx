import React from 'react';
import BeforeNav from '../BeforeNav';
import Navbar from '../navbar';
import "../style/theme.css";

function HomeA() {
  return (
    <div>
      <title>Home | Centra Resort</title>
      <BeforeNav />
      <div className="sticky top-0 z-50"><Navbar /></div>
      <div className="flex justify-center" style={{ height: "calc(100vh - 168px)" }}>
        <div className="mr-10 bg-home w-1/3 text-center text-white object-cover flex flex-col items-center justify-center">
          <div className="text-3xl">Welcome</div>
          <div><img src="/pic/HomeAdmin.svg" alt="" /></div>
          <div className="text-4xl font-semibold">Administrator</div>
          <div className="text-3xl font-semibold">Krabi Branch</div>
        </div>

        <div className="ml-10 object-cover flex flex-col items-center justify-center rounded m-full">
          <div className="shadow-lg object-cover flex flex-col items-center justify-center rounded" style={{ width: "600px", height: "350px" }}>
            <div className="flex items-center p-5">
              <img src="/pic/Vector.png" style={{ width: "35px" }} className="m-1" />
              <p className="m-1 text-xl font-semibold">ข้อมูล Administrator</p>
            </div>
            <div className="flex">
              <div>
                <div className="flex items-center">
                  <img src="/pic/logo-home-1.svg" style={{ width: "35px" }} className="m-3" />
                  <div className="flex flex-col">
                    <p className="mb-0 text-base font-semibold">Name</p>
                    <p className="mb-0 text-base">Jitlada Thiptinnakorn</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="/pic/logo-home-2.svg" style={{ width: "35px" }} className="m-3" />
                  <div className="flex flex-col">
                    <p className="mb-0 text-base font-semibold">Username</p>
                    <p className="mb-0 text-base">admin</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="/pic/logo-home-3.svg" style={{ width: "32px" }} className="m-3" />
                  <div className="flex flex-col">
                    <p className="mb-0 text-base font-semibold">Password</p>
                    <p className="mb-0 text-base">adminadmin</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="/pic/logo-home-4.svg" style={{ width: "35px" }} className="m-3" />
                  <div className="flex flex-col">
                    <p className="mb-0 text-base font-semibold">Department</p>
                    <p className="mb-0 text-base">Administrator</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <img src="/pic/logo-home-5.svg" style={{ width: "35px" }} className="m-3" />
                  <div className="flex flex-col">
                    <p className="mb-0 text-base font-semibold">CitizenID</p>
                    <p className="mb-0 text-base">37007-00000-123</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="/pic/logo-home-6.svg" style={{ width: "35px" }} className="m-3" />
                  <div className="flex flex-col">
                    <p className="mb-0 text-base font-semibold">Phone</p>
                    <p className="mb-0 text-base">090-900-0991</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="/pic/logo-home-7.svg" style={{ width: "35px" }} className="m-3" />
                  <div className="flex flex-col">
                    <p className="mb-0 text-base font-semibold">Email</p>
                    <p className="mb-0 text-base">admin@mail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="/pic/logo-home-8.svg" style={{ width: "35px" }} className="m-3" />
                  <div className="flex flex-col">
                    <p className="mb-0 text-base font-semibold">Date of Birth</p>
                    <p className="mb-0 text-base">15 September 1999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeA;
