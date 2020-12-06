import React,{useContext, useState} from 'react';
import BeforeNav from '../BeforeNav-admin';
import Navbar from '../navbar-admin';
import {Link} from 'react-router-dom';
import { CheckinContext } from '../data/CheckinContext';


function Food() {
  const {food, setFood} = useContext(CheckinContext);
  const [search,setSearch]=useState("");

  const cond=(item=>item.No.toLowerCase().match(search.toLowerCase())||item.Name.toLowerCase().match(search.toLowerCase()));

  return (
    <div className="">
      <title>ข้อมูลอาหาร | Centra Resort</title> 
      <BeforeNav/>
      <div className="sticky top-0 z-50"><Navbar/></div>

      <div className="pt-8 pb-12 relative shadow flex items-center justify-center bg-food">
        <div className="flex absolute bottom-0 items-center shadow border border-gray-300 rounded-lg w-1/3 h-12 pl-5 pr-4 py-3 bg-white text-lg"
        style={{marginBottom:"-20px"}}>
          <img src="/room/search.svg" alt="" className="pr-6 h-7"/>
          <input type="text" className="w-full focus:outline-none"
          onChange={e=>{ 
            setSearch(e.target.value);
          }}/>

            <img src="/room/filter.svg" alt="" className="pl-2 h-5"/>

        </div>
        <div className="flex text-white text-4xl font-extrabold">
          <img src="/pic/dashicons_food.svg" alt="room" className="pr-3"/>ข้อมูลอาหาร
        </div>
      </div>

      <div className="px-32 justify-center font-bold">
        <div className="flex justify-between items-center my-5">
          <div className="">พบทั้งหมด {
           food.filter(cond).length
          } รายการ 
          </div>
          <div className="flex items-center">
            <Link className="bold text-black" to="AddFood">
            เพิ่มเมนูอาหาร
            </Link>
            <Link className="bold text-black" to="AddFood">
              <img src="/pic/add.svg" alt="room" className="pl-3"/>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <table className="table-auto shadow-lg rounded-lg w-full">
            <thead className="justify-around">
              <tr className="bg-gray-200 shadow-lg rounded-lg">
                <th className="py-5 pl-5 rounded-l-lg">ลำดับ</th>
                <th className="py-5 pl-10">รหัสอาหาร</th>
                <th className="py-5 px-1">ชื่อเมนู</th>
                <th className="py-5">ราคา(บาท)</th>
                <th className="py-5 pl-10"></th>
                <th className="py-5 pr-8 rounded-r-lg"></th>
              </tr>
            </thead>
            <tbody className="justify-around">
              {
               food.filter(cond).map((r,index)=>{
                  return(
                    <tr key={index}>
                      <td className="py-2 pl-5">{index+1}</td>
                      <td className="py-2 pl-10">{r.No}</td>
                      <td className="py-2 px-1">{r.Name}</td>
                      <td className="py-2">{r.Price}</td>
                      <td className="py-2 pl-10">
                        <Link className="text-blue-800 underline">ดูรายละเอียด</Link>
                      </td>
                      <td className="py-2 pr-8">
                        <Link className="text-red-600 underline">ลบ</Link>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Food;
