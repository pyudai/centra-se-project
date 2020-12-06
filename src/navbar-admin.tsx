import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-nav flex justify-between items-center p-4 shadow">
      <div className="item-center flex ml-10 text-lg items-baseline space-x-16">
        <Link to="/HomeAdmin">
          <div className="text-white menu cursor-pointer">หน้าแรก</div>        
        </Link>
        <div className="text-white menu cursor-pointer">โปรโมชั่น</div>
        <div className="text-white menu cursor-pointer">ลูกค้า</div>
        <Link to="/Employee">
          <div className="text-white menu cursor-pointer">พนักงาน</div>
        </Link>
        <div className="text-white menu cursor-pointer">ห้องพัก</div>
        <Link to="/Food">
          <div className="text-white menu cursor-pointer">อาหาร</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
