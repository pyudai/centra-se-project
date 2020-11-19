import React from 'react';
import BNav from '../BNav-staff';
import NavS from '../navbar-staff';

function Check() {
  return (
    <div className="text-lg font-bold">
      <title>สถานะห้องพัก</title> 
      <BNav/>
      <div className="sticky top-0"><NavS/></div>
      <div className="p-10 shadow flex items-center justify-center bg-blue-900 text-white text-3xl font-extrabold">
        <img src="cil_room.svg"/>ห้องพัก
      </div>
      <input type="text" className="shadow border border-gray-300 rounded-lg w-64 h-10"/>
      <div>
        <div>พบทั้งหมด x รายการ </div>
          ลำดับ รหัสห้องพัก(link) ชื่อห้องพัก  ชื่อผู้จอง  สถานะ  ปุ่ม checkin-out 
        <div>
          <table className="table-auto shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 shadow-lg rounded-lg">
                <th className="px-4 py-2">ลำดับ</th>
                <th className="px-4 py-2">รหัสห้องพัก (link)</th>
                <th className="px-4 py-2">ชื่อห้องพัก</th>
                <th className="px-4 py-2">ชื่อผู้จอง</th>
                <th className="px-4 py-2">สถานะ</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center px-4 py-2">1</td>
                <td className="text-center px-4 py-2">B01</td>
                <td className="text-center px-4 py-2">Garden View</td>
                <td className="text-center px-4 py-2">-</td>
                <td className="text-center px-4 py-2">ว่าง</td>
                <td className="text-center px-4 py-2"></td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-center px-4 py-2">2</td>
                <td className="text-center px-4 py-2">B02</td>
                <td className="text-center px-4 py-2">Beach Villa</td>
                <td className="text-center px-4 py-2">-</td>
                <td className="text-center px-4 py-2">ว่าง</td>
                <td className="text-center px-4 py-2"></td>
              </tr>
              <tr>
                <td className="text-center px-4 py-2">3</td>
                <td className="text-center px-4 py-2">B03</td>
                <td className="text-center px-4 py-2">Pool View</td>
                <td className="text-center px-4 py-2">การะเกด ศิรินทร์</td>
                <td className="text-center px-4 py-2">ยังไม่เข้าอยู่</td>
                <td className="text-center px-4 py-2"><a className="text-green-600 underline">Check in</a></td>
              </tr>
              <tr>
                <td className="text-center px-4 py-2">4</td>
                <td className="text-center px-4 py-2">B04</td>
                <td className="text-center px-4 py-2">Sea Villa</td>
                <td className="text-center px-4 py-2">น้ำปูน จิจิด้า</td>
                <td className="text-center px-4 py-2">กำลังเข้าอยู่</td>
                <td className="text-center px-4 py-2"><a className="text-red-600 underline">Check out</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Check;
