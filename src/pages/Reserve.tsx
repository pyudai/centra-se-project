import React from "react";
import Navbar from "../navbar";
import BNav from "../BNav-staff";
import "../style/output.css";
import PopUp from "../popupReserveFood";
import PopUpRoom from "../popupReserveroom";

function Reserve() {
  return (
    <div className="bg-white">
      <BNav />
      <Navbar />
      <div className="flex flex-col items-center ">
        <div className="bg-inside shadow-md rounded px-8 pt-6 pb-8 mb-2 flex flex-col my-2 w-4/5">
          <div className="ml-24 inline-flex mb-4">
            <img src="./img-reserve/customer-info.svg" alt="" />
            <div className="text-2xl font-semibold ml-4 py-2">
              <p> รายละเอียดลูกค้า</p>
            </div>
          </div>

          <div className="ml-20 md:flex mb-6 w-1/2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="font-semibold">หมายเลขการจอง</label>
              <input
                className=" w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                type="number"
                onChange={(e) => {
                  e.target.value = e.target.value.slice(0, 10);
                }}
                placeholder="1000000002"
              />
            </div>

            <div className="md:w-1/2 px-3">
              <label className="font-semibold">ชื่อจริง</label>
              <input
                className=" w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                type="text"
                placeholder="การะเกด"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="font-semibold">นามสกุล</label>
              <input
                className=" w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                type="text"
                placeholder="ศิรินทร์"
              />
            </div>
          </div>

          <div className="ml-20 md:flex mb-6 w-3/4">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="font-semibold">โทรศัพท์</label>
              <input
                className=" w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"  
                type="number"
                onChange={(e) => {
                  e.target.value = e.target.value.slice(0, 10);
                }}
                placeholder="0951218585"
              />
            </div>
            <div className="md:w-4/5 px-3">
              <label className="font-semibold">อีเมล</label>
              <input
                className=" w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                type="text"
                placeholder="karakatesirin@mail.com"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="font-semibold">วันที่ทำการจอง</label>
              <input
                className=" w-full shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
                type="text"
                value="17/9/2563"
                readOnly
              />
            </div>
          </div>

          <div className="ml-24 inline-flex">
            <img src="./img-reserve/room.svg" alt="" />
            <div className=" flex text-2xl font-semibold ml-4 mt-6">
              <p> ห้องพัก</p>
              <div className="ml-3 mt-2"><PopUp /></div>
            </div>
          </div>

          <div className="ml-20 md:flex mb-6 w-1/2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="font-semibold">Check In Date</label>
              <input
                className="block w-full shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
                type="text"
                value="23/9/2563"
                readOnly
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="font-semibold">Check Out Date</label>
              <input
                className="block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                type="date"
              />
            </div>
          </div>

          <div className="ml-20 md:flex mb-6 w-1/2">
            <table className="table-auto ">
              <thead>
                <tr>
                  <th className="text-center px-4 py-2">รหัสห้องพัก</th>
                  <th className="text-center px-4 py-2">ชื่อห้องพัก</th>
                  <th className="text-center px-4 py-2">ราคารวม (บาท)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center px-4 py-2">B04</td>
                  <td className="text-center px-4 py-2">Sea Villa</td>
                  <td className="text-center px-4 py-2">2000</td>
                </tr>
                <tr>
                  <td className="text-center px-4 py-2">B01</td>
                  <td className="text-center px-4 py-2">Pool View</td>
                  <td className="text-center px-4 py-2">1500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end font-semibold">
            <div className="mr-3">
              <div className="my-1">
                <p>
                  ราคาห้องพักทั้งหมด
                </p>
              </div>
              <div className="ml-20"><p>(ทุกคืน)</p></div>
            </div>
            <div className="mr-3">
              <input
                className=" w-24 text-center shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
                type="text"
                value="3500"
                readOnly
              />
            </div>
            <div className="mr-10 my-4">
              <p>บาท</p>
            </div>
          </div>

          <div className="ml-24 inline-flex">
            <img src="./img-reserve/food.svg" alt="" />
            <div className="flex text-2xl font-semibold ml-4 mt-6">
              <p> อาหาร </p>
              <div className="ml-3 mt-2 "><PopUpRoom /></div>
            </div>
          </div>

          <div className="ml-20 md:flex mb-6 w-full">
            <table className="table-auto text-center">
              <thead>
                <tr>
                  <th className=" px-20 py-2">วัน/เดือน/ปี</th>
                  <th className=" px-20 py-2">ชื่ออาหาร</th>
                  <th className=" px-20 py-2">จำนวน (จาน)</th>
                  <th className=" px-20 py-2">ราคารวม (บาท)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-20 py-2">24/9/2563</td>
                  <td className=" px-20 py-2">Mushroom Omelette</td>
                  <td className=" px-20 py-2">1</td>
                  <td className=" px-20 py-2">100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end font-semibold">
            <div className="mr-3 my-4 ">
              <p>ราคาอาหารทั้งหมด</p>
            </div>
            <div className="mr-3">
              <input
                className=" w-24 text-center shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
                id="reserve_total"
                type="text"
                value="100"
                readOnly
              />
            </div>
            <div className="mr-10 my-4">
              <p>บาท</p>
            </div>
          </div>

          <div className="ml-24 inline-flex">
            <img src="./img-reserve/promotion.svg" alt="" />
            <div className="text-2xl font-semibold ml-4 mt-6">
              <p>โปรโมชั่น</p>
            </div>
          </div>

          <div className="ml-40 mt-4 md:flex mb-16 w-1/2">
            <p> - ไม่มี -</p>
          </div>

          <div className="flex text-black mb-3 text-2xl font-semibold">
            <div className=" bg-gray-500 w-3/4 text-right pr-4">
              <p>ยอดรวมทั้งหมด</p>
            </div>
            <div className="mx-16 text-center">
              <p>3600</p>
            </div>
            <div className=" w-24 bg-gray-500 text-left pl-4">
              <p>บาท</p>
            </div>
          </div>
          <div className="flex justify-end mt-16">
            <div className="mr-8">
              <button className="bg-nav text-white active:bg-nav  text-sm px-16 py-3 rounded shadow hover:bg-blue-500 outline-none focus:outline-none mb-1">
                Back
              </button>
            </div>
            <div className="mr-4">
              <button className="bg-green-600 text-white active:bg-green-600  text-sm px-12 py-3 rounded shadow hover:bg-green-400 outline-none focus:outline-none">
                Check In
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Reserve;
