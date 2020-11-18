import React from 'react';

function Navbar() {
  return (
    <div className="bg-nav flex justify-between items-center p-6 shadow">
      <div className="item-center flex ml-10 text-lg items-baseline space-x-16">
        <a className="text-white menu">หน้าแรก</a>
        <a className="text-white menu">โปรโมชั่น</a>
        <a className="text-white menu">ลูกค้า</a>
        <a className="text-white menu">พนักงาน</a>
        <a className="text-white menu">ห้องพัก</a>
        <a className="text-white menu">อาหาร</a>
      </div>
    </div>
  );
}

export default Navbar;
