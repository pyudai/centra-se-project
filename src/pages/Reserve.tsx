import React, { useContext } from "react";
import Navbar from "../navbar-staff";
import BeforeNav from "../BeforeNav-staff";
import "../style/output.css";
import PopUpRoom from "../popupReserveRoom";
import PopUpFood from "../popupReserveFood";
import { CheckinContext } from "../data/CheckinContext";

function Reserve() {

  const { reserveList, foodList, FOODLIST } = useContext(CheckinContext);

  console.log(reserveList)
  return (
    <div className="bg-white">
      <BeforeNav />
      <div className="sticky top-0 z-50"><Navbar /></div>
      <title>Reserve | Centra Resort</title>
      <div className="flex flex-col items-center ">

        <div className="bg-inside shadow-2x1 rounded p-5 flex flex-col mt-5 mb-5" style={{ width: "1100px" }}>
          <div className="w-full flex">
            <img src="./img-reserve/customer-info.svg" className="m-2" />
            <p className="text-2xl font-semibold h-full m-2">รายละเอียดลูกค้า</p>
          </div>
          <div className="w-full flex p-2">
            <div className="w-1/3 m-1">
              <p className="text-base font-semibold">หมายเลขการจอง</p>
              <input type="number" className="w-full shadow-md text-base p-2 bg-gray-400" readOnly
                value="1000000003"
              />
            </div>
            <div className="w-1/3 m-1">
              <p className="text-base font-semibold">ชื่อจริง</p>
              <input type="text" className="w-full shadow-md text-base p-2" placeholder="กรอกชื่อจริง" />
            </div>
            <div className="w-1/3 m-1">
              <p className="text-base font-semibold">นามสกุล</p>
              <input type="text" className="w-full shadow-md text-base p-2" placeholder="กรอกนามสกุล" />
            </div>
          </div>
          <div className="w-full flex p-2">
            <div className="w-1/3 m-1">
              <p className="text-base font-semibold">โทรศัพท์</p>
              <input type="number" className="w-full shadow-md text-base p-2" placeholder="กรอกเบอร์โทรศัพท์"
                onChange={(e) => {
                  e.target.value = e.target.value.slice(0, 10);
                }}
              />
            </div>
            <div className="w-1/3 m-1">
              <p className="text-base font-semibold">อีเมล</p>
              <input type="text" className="w-full shadow-md text-base p-2" placeholder="กรอกอีเมล" />
            </div>
            <div className="w-1/3 m-1">
              <p className="text-base font-semibold">วันที่ทำการจอง</p>
              <input type="text" className="w-full shadow-md text-base p-2 bg-gray-400" readOnly
                value="23/9/2020"
              />
            </div>
          </div>
          <div className="w-full flex">
            <img src="./img-reserve/room.svg" className="m-2" />
            <p className="text-2xl font-semibold h-full m-2">ห้องพัก</p>
          </div>
          <div className="w-full flex">
            <div className="w-1/3 flex flex-col p-2">
              <p className="text-base font-semibold">Check In Date</p>
              <input type="text" className="w-full shadow-md text-base p-2 bg-gray-400" readOnly
                value="23/9/2020"
              />
              <p className="text-base font-semibold mt-3">Check Out Date</p>
              <input type="date" className="w-full shadow-md text-base p-2" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="w-full flex text-base m-2 font-semibold"><PopUpRoom />เพิ่มห้องพัก</div>
              <table className="table-auto text-base w-full ml-5 mr-5 shadow-lg">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    <th className="text-center px-4 py-2">รหัสห้องพัก</th>
                    <th className="text-center px-4 py-2">ชื่อห้องพัก</th>
                    <th className="text-center px-4 py-2">ราคารวม (บาท)</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  {reserveList.map((r, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center p-2">{r.No}</td>
                        <td className="text-center p-2">{r.name}</td>
                        <td className="text-center p-2">{r.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full flex justify-end text-right text-base font-semibold">
            <div className="w-1/4 flex flex-col m-2 text-right">
              <p>ราคาห้องพักทั้งหมด</p>
              <p>(ทุกคืน)</p>
            </div>
            <div className="w-1/6 text-center m-2 text-lg">
              {reserveList.reduce((total, item) => total = total + item.price, 0)}
            </div>
            <p className="m-2">บาท</p>
          </div>
          <div className="w-full flex">
            <img src="./img-reserve/food.svg" className="m-2" />
            <p className="text-2xl font-semibold h-full m-2">อาหาร</p>
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex text-base m-2 font-semibold"><PopUpFood />เพิ่มอาหาร</div>
            <table className="table-auto text-base w-full ml-5 mr-5 shadow-lg">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className=" px-20 py-2">วัน/เดือน/ปี</th>
                  <th className=" px-20 py-2">ชื่ออาหาร</th>
                  <th className=" px-20 py-2">จำนวน (จาน)</th>
                  <th className=" px-20 py-2">ราคารวม (บาท)</th>
                </tr>
              </thead>
              <tbody className="text-base">
                {foodList.map((r, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center p-2">24/9/2563</td>
                      <td className="text-center p-2">{FOODLIST[r.name].name}</td>
                      <td className="text-center p-2">{r.amount}</td>
                      <td className="text-center p-2">{r.price * r.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-end text-right text-base font-semibold m-2">
            <div className="w-1/4 flex flex-col m-2 text-right">
              <p>ราคาอาหารทั้งหมด</p>
            </div>
            <div className="w-1/6 text-center m-2 text-lg">
              {foodList.reduce((total, item) => total + (item.price * item.amount), 0)}
            </div>
            <p className="m-2">บาท</p>
          </div>
          <div className="w-full flex">
            <img src="./img-reserve/promotion.svg" className="m-2" />
            <p className="text-2xl font-semibold h-full m-2">โปรโมชั่น</p>
          </div>
          <div className="w-full flex m-2">
            <p className="text-base">- ไม่มี -</p>
          </div>
          <div className="w-full flex justify-end text-right text-base font-semibold bg-gray-400 p-3">
            <p className="text-2xl font-semibold">ยอดรวม</p>
            <p className="text-2xl font-semibold w-1/5 text-center">
              {reserveList.reduce((total, item) => total = total + item.price, 0) + foodList.reduce((total, item) => total + (item.price * item.amount), 0)}
            </p>
            <p className="text-2xl font-semibold">บาท</p>
          </div>
          <div className="w-full flex justify-end">
            <button className="rounded shadow w-1/6 bg-nav hover:bg-blue-800 text-white m-2 p-3">Back</button>
            <button className="rounded shadow w-1/6 bg-green-600 hover:bg-green-400 text-white m-2 p-3">Check In</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Reserve;
