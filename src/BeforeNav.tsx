import React from 'react';
import {Link} from 'react-router-dom';

function BeforeNav() {
  return (
    <div className="bg-blue flex justify-between items-center p-6 px-16 shadow">
      <div className="flex items-center">
        <div className="flex items-center">
          <img src="/beforeNav/logo.png" alt="logo" className="h-20"/>
          <div className="px-3 ml-2 self-stretch"><div className="h-full border-l-2 border-gray-700"/></div>
          <img src="/beforeNav/ad-set.svg" alt="set" className="h-10"/>
        </div>
        <div className="m-3 text-gray-800">
          <div className="text-2xl font-black">โปรแกรมจัดการระบบภายในรีสอร์ท</div>
          <div className="text-xl font-extrabold">For Administrator</div>
        </div>
      </div>

      <div className="text-lg flex flex-col items-end">
        <div className="items-center flex">
          <div className="mx-3 text-gray-800">Jitlada Thiptinnakorn</div>
          <img src="/beforeNav/avatar.svg" alt="avatar" className="h-10"/>
        </div>
        <div className="items-center flex h-8">
          <div className="text-gray-800 font-semibold underline">แก้ไขข้อมูล</div>
          <div className="px-3 self-stretch"><div className="h-full border-l-2 border-gray-900"/></div>
          <Link className="text-red-600 font-semibold underline" to="/LoginAdmin">Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default BeforeNav;
