import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-nav flex justify-between items-center p-4 shadow sticky top-0">
      <div className="item-center flex ml-10 text-lg items-baseline space-x-16">
        <Link to="/HomeStaff">
          <a className="text-white menu">หน้าแรก</a>
        </Link>
        <a className="text-white menu">ลูกค้า</a>
        <Link to="/Room">
          <a className="text-white menu">ห้องพัก</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
