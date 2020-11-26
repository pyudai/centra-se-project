import React from 'react';
import BeforeNav from '../BeforeNav';
import Navbar from '../navbar';

function HomeA() {
  return (
    <div>
      <title>Home | Centra Resort</title>
      <BeforeNav/>
      <div className="sticky top-0 z-50"><Navbar/></div>
      <div className="flex" style={{height:"calc(100vh - 168px)"}}>
        <div className="justify-center align-middle text-center items-center bg-gray-600 w-1/3 mx-16 space-y-1">
          <div className="text-3xl">Welcome</div>
          <div><img src="/pic/HomeAdmin.svg" alt=""/></div>
          <div className="text-4xl font-semibold">Administrator</div>
          <div className="text-3xl font-semibold">Krabi Branch</div>
        </div>
        <div className="shadow-lg">
          <div className="space-x-3"><img src="/pic/Vector.png" alt=""/>ข้อมูล Administrator</div>
        </div>
      </div>
    </div>
  );
}

export default HomeA;
