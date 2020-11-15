import React from 'react';

function Navbar() {
  return (
    <div className="bg-nav flex justify-between items-center px-10 shadow">
      <div className="flex space-x-2 items-center ">
        <a><img src="nav/logo.png" alt="logo" className="h-16 m-3"/></a>
        <a><img src="nav/th.svg" alt="th-flag" className="w-8 ml-4"/></a>
        <a className="text-white text-lg font-semibold">Thai</a>
      </div>
      <div className="item-center flex ml-40 mr-40 text-lg items-baseline space-x-10">
        <a className="text-white menu">หน้าแรก</a>
        <a className="text-white menu">โปรโมชั่น</a>
        <a className="text-white menu">เกี่ยวกับ</a>
        <a className="text-white menu">ที่พัก</a>
        <a className="text-white menu">ติดต่อ</a>
      </div>
      <div className="flex space-x-11 text-white items-center text-md font-semibold">
        <img src="nav/phone.svg" alt="telephone" className="w-9 m-2"/>(+66)-7-2324122 
        <div className="px-2 self-stretch"><div className="h-full border-l-2 border-white"/></div>
        <img src="nav/fb.svg" alt="fb" className="w-7 m-1"/>
        <img src="nav/line.svg" alt="line" className="w-7 m-1"/>
        <img src="nav/ig.svg" alt="ig" className="w-7 m-1"/>
      </div>
    </div>
  );
}

export default Navbar;
