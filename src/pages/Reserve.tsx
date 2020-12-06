import React, { useContext }  from "react";
import Navbar from "../navbar-staff";
import BeforeNav from "../BeforeNav-staff";
import "../style/output.css";
import PopUpRoom from "../popupReserveRoom";
import PopUpFood from "../popupReserveFood";
import { CheckinContext } from "../data/CheckinContext";

function Reserve() {

  const { reserveList, foodList, FOODLIST  } = useContext(CheckinContext);

  console.log(reserveList)
  return (
    <div className="bg-white">
      <BeforeNav />
      <div className="sticky top-0 z-50"><Navbar/></div>
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
                className=" w-full shadow-md  bg-gray-500 border rounded py-3 px-4 mb-3"
                type="number"
                value="1000000002"
                readOnly
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
                value="23/9/2020"
                readOnly
              />
            </div>
          </div>

          <div className="ml-24 inline-flex">
            <img src="./img-reserve/room.svg" alt="" />
            <div className=" flex text-2xl font-semibold ml-4 mt-6">
              <p> ห้องพัก</p>
              <div className="ml-3 mt-2"><PopUpRoom /></div>
            </div>
          </div>

          <div className="ml-20 md:flex mb-6 w-1/2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="font-semibold">Check In Date</label>
              <input
                className="block w-full shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
                type="text"
                value="23/9/2020"
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
              {reserveList.map((r, index) => {
                        return (
                          <tr key={index}>
                            <td className="pl-8">{r.No}</td>
                            <td className="text-center">{r.name}</td>
                            <td className="text-center">{r.price}</td>
                          
                          </tr>
                        );
                      })}
                    </tbody>
            </table>
          </div>

          <div className="flex justify-end font-semibold mt-10">
            <div className="mr-3">
              <div className="my-1">
                <div>
                  ราคาห้องพักทั้งหมด
                  <br />
                  <div className="ml-20">(ทุกคืน)</div>
                </div>
              </div>
            </div>
            <div className="mr-3">
            {reserveList.reduce((total,item) =>  total = total + item.price , 0 )}
            </div>
            <div className="mr-10 my-4">
              <p>บาท</p>
            </div>
          </div>

          <div className="ml-24 inline-flex">
            <img src="./img-reserve/food.svg" alt="" />
            <div className="flex text-2xl font-semibold ml-4 mt-6">
              <p> อาหาร </p>
              <div className="ml-3 mt-2 "><PopUpFood /></div>
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
              {foodList.map((r, index) => {
               
                        return (
                          <tr key={index}>
                             <td className="pl-8">24/9/2563</td>
                            <td className="pl-8">{FOODLIST[r.name].name}</td>
                            <td className="text-center">{r.amount}</td>
                            <td className="text-center">{r.price*r.amount}</td>
                          
                          </tr>
                        );
                      })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end font-semibold">
            <div className="mr-3 my-4 ">
              <p>ราคาอาหารทั้งหมด</p>
            </div>
            <div className="mr-3">
            {foodList.reduce((total, item) =>  total + (item.price*item.amount), 0)}
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
            {reserveList.reduce((total,item) =>  total = total + item.price , 0 )+foodList.reduce((total, item) =>  total + (item.price*item.amount), 0)}
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
