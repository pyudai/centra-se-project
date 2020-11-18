import React from "react";
import Navbar from "../navbar";
import BeforeNav from "../BeforeNav";
import "../style/output.css";

function Reserve() {
  return (
    <div className="bg-white">
      <BeforeNav />
      <Navbar />
      <div className="flex flex-col items-center ">
        <div className="bg-inside shadow-md rounded px-8 pt-6 pb-8 mb-2 flex flex-col my-2 w-4/5">
          
          <div className="ml-24 inline-flex">
            <img src="./img-reserve/customer-info.svg" alt="" />
            <div className="text-2xl font-semibold ml-4 mt-6">
              <p> รายละเอียดลูกค้า</p>
            </div>
          </div>

          <div className="ml-20 md:flex mb-6 w-1/2">
            
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="font-semibold">หมายเลขการจอง</label>
              <input
                className="appearance-none block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                id="reserve_number"
                type="text"
                maxLength={10}
                placeholder="1000000002"
              />
            </div>
            
            <div className="md:w-1/2 px-3">
              <label className="font-semibold">ชื่อจริง</label>
              <input
                className="appearance-none block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                id="first_name"
                type="text"
                placeholder="การะเกด"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="font-semibold">นามสกุล</label>
              <input
                className="appearance-none block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                id="last_name"
                type="text"
                placeholder="ศิรินทร์"
              />
            </div>
          </div>
          
          <div className="-mx-3 md:flex mb-6 w-1/2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="font-semibold">โทรศัพท์</label>
              <input
                className="appearance-none block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                id="phone"
                type="tel"
                maxLength={10}
                placeholder="0951218585"
              />
            </div>
            <div className="md:w-4/5 px-3">
              <label className="font-semibold">อีเมล</label>
              <input
                className="appearance-none block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                id="email"
                type="text"
                placeholder="karakatesirin@mail.com"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="font-semibold">วันที่ทำการจอง</label>
              <input
                className="appearance-none block w-full shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
                id="first_name"
                type="text"
                value="17/9/2563"
                readOnly
              />
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold flex-auto">ห้องพัก</h2>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="font-semibold">Check In Date</label>
              <input
                className="appearance-none block w-full shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
                id="checkin_date"
                type="text"
                value="23/9/2563"
                readOnly
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="font-semibold">Check Out Date</label>
              <input
                className="appearance-none block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                id="checkout_date"
                type="date"
              />
            </div>
          </div>
          
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">รหัสห้องพัก</th>
                  <th className="px-4 py-2">ชื่อห้องพัก</th>
                  <th className="px-4 py-2">ราคารวม (บาท)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center px-4 py-2">B04</td>
                  <td className="text-center px-4 py-2">Sea Villa</td>
                  <td className="text-center px-4 py-2">2000</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="text-center px-4 py-2">B01</td>
                  <td className="text-center px-4 py-2">Pool View</td>
                  <td className="text-center px-4 py-2">1500</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="font-semibold">Check In Date</label>
            <input
              className="appearance-none block w-full shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
              id="checkin_date"
              type="text"
              value="23/9/2563"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
