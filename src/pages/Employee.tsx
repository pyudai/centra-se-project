import React,{useContext, useState} from 'react';
import BeforeNav from '../BeforeNav-admin';
import Navbar from '../navbar-admin';
import {Link} from 'react-router-dom';
import { CheckinContext } from '../data/CheckinContext';
import { Checkbox, Popover } from 'antd';


function Employee() {
  const {employee, setEmployee} = useContext(CheckinContext);
  const [search,setSearch]=useState("");

  const [type,setType]=useState([true,true]);

  function onChange(e) {
    let Ntype=type;
    Ntype[e.target.value]=e.target.checked;
    setType([...Ntype]);
  }
  
   const fil=(
     <div className="font-prompt">
       <div className="font-bold text-lg pb-2">แผนก</div>
       <Checkbox onChange={onChange} value='0' defaultChecked>Receptionist</Checkbox><br/>
       <Checkbox onChange={onChange} value='1' defaultChecked>Administration</Checkbox><br/>
     </div>
   );

  const cond=(item=>item.No.toLowerCase().match(search.toLowerCase())||item.Name.toLowerCase().match(search.toLowerCase())||item.Phone.toLowerCase().match(search.toLowerCase()));

  return (
    <div className="">
      <title>ข้อมูลพนักงาน | Centra Resort</title> 
      <BeforeNav/>
      <div className="sticky top-0 z-50"><Navbar/></div>

      <div className="pt-8 pb-12 relative shadow flex items-center justify-center bg-employee">
        <div className="flex absolute bottom-0 items-center shadow border border-gray-300 rounded-lg w-1/3 h-12 pl-5 pr-4 py-3 bg-white text-lg"
        style={{marginBottom:"-20px"}}>
          <img src="/room/search.svg" alt="" className="pr-6 h-7"/>
          <input type="text" className="w-full focus:outline-none"
          onChange={e=>{ 
            setSearch(e.target.value);
          }}/>

          <Popover content={fil} trigger="hover">
            <img src="/room/filter.svg" alt="" className="pl-2 h-5"/>
          </Popover>

        </div>
        <div className="flex text-white text-4xl font-extrabold">
          <img src="/pic/Employee.svg" alt="room" className="pr-3"/>ข้อมูลพนักงาน
        </div>
      </div>

      <div className="px-32 justify-center font-bold">
        <div className="flex justify-between items-center my-5">
          <div className="">พบทั้งหมด {
           employee.filter(it=>type[it.Department]).filter(cond).length
          } รายการ 
          </div>
          <div className="flex items-center">
            <Link className="bold text-black" to="AddEmployee">
            เพิ่มข้อมูลพนักงาน
            </Link>
            <Link className="bold text-black" to="AddEmployee">
              <img src="/pic/add.svg" alt="room" className="pl-3"/>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <table className="table-auto shadow-lg rounded-lg w-full">
            <thead className="justify-around">
              <tr className="bg-gray-200 shadow-lg rounded-lg">
                <th className="py-5 pl-5 rounded-l-lg">ลำดับ</th>
                <th className="py-5 pl-10">รหัสพนักงาน</th>
                <th className="py-5 px-1">ชื่อพนักงาน</th>
                <th className="py-5">เบอร์โทรศัพท์</th>
                <th className="py-5">แผนก</th>
                <th className="py-5 pl-10"></th>
                <th className="py-5 pr-8 rounded-r-lg"></th>
              </tr>
            </thead>
            <tbody className="justify-around">
              {
               employee.filter(it=>type[it.Department]).filter(cond).map((r,index)=>{
                  return(
                    <tr key={index}>
                      <td className="py-2 pl-5">{index+1}</td>
                      <td className="py-2 pl-10">{r.No}</td>
                      <td className="py-2 px-1">{r.Name}</td>
                      <td className="py-2">{r.Phone}</td>
                      <td className="py-2">{departIndex[r.Department]}</td>
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

export default Employee;

const departIndex={
  0:"Reception",
  1:"Administration"
 };
