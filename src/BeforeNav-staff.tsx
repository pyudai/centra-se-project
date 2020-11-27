import { message } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

function BeforeNav() {
  return (
    <div className="bg-blue flex justify-between items-center p-2 px-16 shadow">
      <div className="flex items-center">
        <div className="flex items-center">
          <img src="/beforeNav/logo.png" alt="logo" className="h-20"/>
          <div className="px-3 ml-2 self-stretch"><div className="h-full border-l-2 border-gray-700"/></div>
          <img src="/beforeNav/ad-set.svg" alt="set" className="h-10"/>
        </div>
        <div className="m-3 text-gray-800">
          <div className="text-2xl font-black">โปรแกรมจัดการระบบภายในรีสอร์ท</div>
          <div className="text-xl font-extrabold">For Staff</div>
        </div>
      </div>
      <div className="text-base flex flex-col items-end">
        <div className="items-center flex">
          <div className="mx-3 text-gray-800 font-normal">Chindanai Jitbunjong</div>
          <img src="/beforeNav/avatar.svg" alt="avatar" className="h-10"/>
        </div>
        <div className="items-center flex">
          <Link className="text-red-600 font-semibold underline" to="/LoginStaff"
            onClick={
              ()=>{
                message.info('ออกจากระบบสำเร็จ');
              }
            }
          >Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default BeforeNav;
