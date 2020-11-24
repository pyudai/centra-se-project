import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-nav flex justify-between items-center p-4 shadow">
      <div className="item-center flex ml-10 text-lg items-baseline space-x-16">
        <Link to="/HomeAdmin">
          <a className="text-white menu">หน้าแรก</a>        
        </Link>
        <a className="text-white menu">โปรโมชั่น</a>
        <a className="text-white menu">ลูกค้า</a>
        <Link to="/Employee">
          <a className="text-white menu">พนักงาน</a>
        </Link>
        <a className="text-white menu">ห้องพัก</a>
        <Link to="/Food">
          <a className="text-white menu">อาหาร</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
