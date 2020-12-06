import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-nav flex justify-between items-center p-4 shadow sticky top-0">
      <div className="item-center flex ml-10 text-lg items-baseline space-x-16">
        <Link className="text-white menu" to="/HomeStaff">
          หน้าแรก
        </Link>
        <div className="text-white menu cursor-pointer">ลูกค้า</div>
        <Link className="text-white menu" to="/Room">
          ห้องพัก
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
