import React,{useContext} from "react";
import {Link} from 'react-router-dom';
import { ReserveRoomContext } from '../data/ReserveRoomContext';

export default function PopUp() {
  const [showModal, setShowModal] = React.useState(false);
  const {info, setInfo} = useContext(ReserveRoomContext);
  return (
    <>
      <button
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        <img src="./img-reserve/add.svg" alt="" width="25" height="25" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-3/4 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}

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
              {
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
                })
              }
            </tbody>
          </table>
        </div>

                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-nav text-white active:bg-nav font-bold uppercase text-sm px-16 py-3 rounded shadow hover:bg-blue-500 outline-none focus:outline-none mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


/*<tr>
                      <td className="text-center px-4 py-2">
                        <select name="cars" id="cars">
                          <option value="B01">B01</option>
                          <option value="B02">B02</option>
                          <option value="B03">B03</option>
                          <option value="B04">B04</option>
                        </select>
                      </td>
                      <td className="text-center px-4 py-2">Sea Villa</td>
                      <td className="text-center px-4 py-2">2000</td>
                    </tr>
                    <tr>
                      <td className="text-center px-4 py-2">
                        <select name="cars" id="cars">
                          <option value="B01">B01</option>
                          <option value="B02">B02</option>
                          <option value="B03">B03</option>
                          <option value="B04">B04</option>
                        </select>
                      </td>
                      <td className="text-center px-4 py-2">Pool View</td>
                      <td className="text-center px-4 py-2">1500</td>
                    </tr>
                  </tbody>*/