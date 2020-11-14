import React from 'react';

function Navbar() {
  return (
    <div className="bg-nav flex justify-between items-center px-5 text-base">
      <div className="flex space-x-2">
        <a><img src="./img/logo.svg" alt="logo" className="w-20"></img></a>
        <a><img src="./img/x.svg" alt="th-flag" className="w-10 m-3"></img>Thai</a>
      </div>
      <div className="item-center flex ml-64 mr-40 text-xl items-baseline space-x-12">
        <a>หน้าแรก</a>
        <a>โปรโมชั่น</a>
        <a>เกี่ยวกับ</a>
        <a>ที่พัก</a>
        <a>ติดต่อ</a>
      </div>
      <div className="flex space-x-11 text-white">
        <img src="./img/x.svg" alt="telephone"></img>(+66)-7-2324122 
        <div className="px-2 self-stretch"><div className="h-full border-l-2 border-white"></div></div>
        <img src="./img/x.svg" alt="fb"></img>
        <img src="./img/x.svg" alt="line"></img>
        <img src="./img/x.svg" alt="ig"></img>
      </div>
    </div>
  );
}

export default Navbar;
