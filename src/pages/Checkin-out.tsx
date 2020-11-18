import React from 'react';
import BNav from '../BNav-staff';
import NavS from '../navbar-staff';

function Check() {
  return (
    <div>
      <title>สถานะห้องพัก</title> 
      <BNav/>
      <div className="sticky top-0"><NavS/></div>
      <div className="p-10 shadow flex items-center justify-center bg-blue-900 text-white text-3xl font-extrabold"><img src="cil_room.svg"/>ห้องพัก</div>
      <input type="text" className="shadow border border-gray-300 rounded-lg w-64 h-10"/>
      พบทั้งหมด x รายการ

      tb 
      ลำดับ รหัสห้องพัก(link) ชื่อห้องพัก  ชื่อผู้จอง  สถานะ  ปุ่ม checkin-out 
      <table>
        <tr><td>1</td>
        <td>2</td></tr>
      </table>

    </div>
  );
}

export default Check;
