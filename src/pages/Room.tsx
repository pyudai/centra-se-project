import React,{useContext, useState} from 'react';
import BNav from '../BNav-staff';
import NavS from '../navbar-staff';
import Checkout from '../popup-checkout';
import {Link} from 'react-router-dom';
import { CheckinContext } from '../data/CheckinContext';


function Room() {
  const {info, setInfo} = useContext(CheckinContext);
  const [search,setSearch]=useState("");
  return (
    <div className="">
      <title>สถานะห้องพัก</title> 
      <BNav/>
      <div className="sticky top-0 z-50"><NavS/></div>

      <div className="pt-8 pb-12 relative shadow flex items-center justify-center bg-room">
        <div className="flex absolute bottom-0 items-center shadow border border-gray-300 rounded-lg w-1/3 h-12 pl-5 pr-4 py-3 bg-white text-lg"
        style={{marginBottom:"-20px"}}>
          <img src="/room/search.svg" alt="" className="pr-6 h-7"/>
          <input type="text" className="w-full focus:outline-none"
          onChange={e=>{ 
            setSearch(e.target.value);
          }}/>
          <img src="/room/filter.svg" alt="" className="pl-2 h-5"/>
          {/* ขาด filter */}
        </div>
        <div className="flex text-white text-4xl font-extrabold">
          <img src="/cil_room.svg" alt="room" className="pr-3"/>ห้องพัก
        </div>
      </div>

      <div className="px-24 justify-center font-bold">
        <div className="m-5">พบทั้งหมด {
          search === "" ? info.length : 
          info.filter(item=>item.No.match(search)||item.name.match(search)||item.Reserver.match(search)).length
        } รายการ </div>
        <div className="text-center">
          <table className="table-auto shadow-lg rounded-lg w-full">
            <thead className="">
              <tr className="bg-gray-200 shadow-lg rounded-lg">
                <th className="px-4 py-5 rounded-l-lg">ลำดับ</th>
                <th className="px-4 py-5">รหัสห้องพัก</th>
                <th className="px-4 py-5">ชื่อห้องพัก</th>
                <th className="px-4 py-5">ชื่อผู้จอง</th>
                <th className="px-4 py-5">สถานะ</th>
                <th className="px-4 py-5 rounded-r-lg"></th>
              </tr>
            </thead>
            <tbody>
              {search === "" ? ( 
                info.map((r,index)=>{
                  return(
                    <tr key={index}>
                      <td className="px-4 py-2">{index+1}</td>
                      <td className="px-4 py-2">{r.No}</td>
                      <td className="px-4 py-2">{r.name}</td>
                      <td className="px-4 py-2">{r.Reserver==="" ? "-": r.Reserver}</td>
                      <td className="px-4 py-2">{status[r.Status]}</td>
                      <td className="px-4 py-2">
                        {
                              r.Status===0 ? "":
                              r.Status===1 ? (<Link className="text-green-600 underline" to="/Checkin">Check in</Link>) :
                              r.Status===2 ? <Checkout No={r.No} clicker={()=>{
                                let Ninfo=info;
                                Ninfo[index].Status=0;
                                Ninfo[index].Reserver="";
                                setInfo([...Ninfo]);
                              }}/> :
                              "error"
                        }
                          
                      </td>
                    </tr>
                  );
                })):

               (info.filter(item=>item.No.match(search)||item.name.match(search)||item.Reserver.match(search)).map((r,index)=>{
                  return(
                    <tr key={index}>
                      <td className="px-4 py-2">{index+1}</td>
                      <td className="px-4 py-2">{r.No}</td>
                      <td className="px-4 py-2">{r.name}</td>
                      <td className="px-4 py-2">{r.Reserver==="" ? "-": r.Reserver}</td>
                      <td className="px-4 py-2">{status[r.Status]}</td>
                      <td className="px-4 py-2">
                        {
                              r.Status===0 ? "":
                              r.Status===1 ? (<Link className="text-green-600 underline" to="/Checkin">Check in</Link>) :
                              r.Status===2 ? <Checkout No={r.No} clicker={()=>{
                                let Ninfo=info;
                                Ninfo[index].Status=0;
                                Ninfo[index].Reserver="";
                                setInfo([...Ninfo]);
                              }}/> :
                              "error"
                        }
                          
                      </td>
                    </tr>
                  );
                }))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Room;

 const status={
  0:"ว่าง",
  1:"ยังไม่เข้าพัก",
  2:"กำลังเข้าพัก"
 };
