import React from 'react';
import BNav from '../BNav-staff';
import NavS from '../navbar-staff';

function Check() {
  return (
    <div className="">
      <title>สถานะห้องพัก</title> 
      <BNav/>
      <div className="sticky top-0"><NavS/></div>

      <div className="pt-16 pb-20 shadow flex items-center justify-center bg-blue-900 ">
        <div className="flex absolute text-white text-4xl font-extrabold">
          <img src="cil_room.svg" alt="room" className="pr-3"/>ห้องพัก
        </div>
        <div className="flex absolute mt-20 items-center shadow border border-gray-300 rounded-lg w-1/3 h-12 pl-5 pr-4 py-3 bg-white text-lg">
          <img src="room/search.svg" alt="" className="pr-3"/>
          <input type="text" className="w-full focus:outline-none"/>
          <img src="room/filter.svg" alt="" className="pl-2"/>
        </div>
      </div>
      <div className="px-24 justify-center text-lg font-bold">
        <div className="m-5">พบทั้งหมด 4 รายการ </div>
        <div className="">
          <table className="table-auto shadow-lg rounded-lg w-full">
            <thead className="">
              <tr className="bg-gray-200 shadow-lg rounded-lg">
                <th className="px-4 py-5">ลำดับ</th>
                <th className="px-4 py-5">รหัสห้องพัก</th>
                <th className="px-4 py-5">ชื่อห้องพัก</th>
                <th className="px-4 py-5">ชื่อผู้จอง</th>
                <th className="px-4 py-5">สถานะ</th>
                <th className="px-4 py-5"></th>
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
              <tr>
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
                <td className="text-center px-4 py-2">ยังไม่เข้าพัก</td>
                <td className="text-center px-4 py-2"><a className="text-green-600 underline" href="/check">Check in</a></td>
              </tr>
              <tr>
                <td className="text-center px-4 py-2">4</td>
                <td className="text-center px-4 py-2">B04</td>
                <td className="text-center px-4 py-2">Sea Villa</td>
                <td className="text-center px-4 py-2">น้ำปูน จิจิด้า</td>
                <td className="text-center px-4 py-2">กำลังเข้าพัก</td>
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
