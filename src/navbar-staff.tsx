import React from 'react';

function NavS() {
  return (
    <div className="bg-nav flex justify-between items-center p-4 shadow sticky top-0">
      <div className="item-center flex ml-10 text-lg items-baseline space-x-16">
        <a className="text-white menu">หน้าแรก</a>
        <a className="text-white menu">ลูกค้า</a>
        <a className="text-white menu">ห้องพัก</a>
      </div>
    </div>
  );
}

export default NavS;
