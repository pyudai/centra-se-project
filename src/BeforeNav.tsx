import React from 'react';

function BeforeNav() {
  return (
    <div className="bg-blue flex justify-between items-center p-6 shadow">
      <div className="item-center flex text-lg items-center ">
        <img src="beforeNav/logo.png" alt="logo" />
        <div className="px-3 ml-2 self-stretch"><div className="h-full border-l-2 border-gray-700"/></div>
        <img src="beforeNav/ad-set.svg" alt="set" />
      </div>
      <div className="text-lg flex flex-col items-end">
        <div className="items-center flex">
          <div className="mx-3 text-gray-800">Name</div>
          <img src="beforeNav/avatar.svg" alt="avatar" />
        </div>
        <div className="items-center flex">
          <a className="text-gray-800 font-semibold underline">แก้ไขข้อมูล</a>
          <div className="px-3 self-stretch"><div className="h-full border-l-2 border-black"/></div>
          <a className="text-red-600 font-semibold underline">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default BeforeNav;
