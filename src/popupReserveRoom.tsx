import React, { useContext, useState } from "react";
import { CheckinContext } from "./data/CheckinContext";
import { message } from "antd";

const PopUpRoom = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { setReserveList, info, selectOutDate } = useContext(CheckinContext);
  const [tmpReserve, setTmpReserve] = useState<any[]>([]);

  const getTotalCosts = () => {
    return tmpReserve.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };

  message.config({
    maxCount: 1
  });

  return (
    <>
      <button
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => {
          if (selectOutDate===false)
            message.warning('กรุณาเลือก Check Out Date');
          else
            setShowModal(true);
        }          
      }
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
                <div className="w-full flex flex-col p-5">
                  <p className="text-2xl font-semibold h-full m-2">เพิ่มห้องพัก</p>
                  <table className="table-auto text-base w-full shadow-lg">
                    <thead className="bg-nav text-white">
                      <tr>
                        <th className="text-center px-4 py-2">รหัสห้องพัก</th>
                        <th className="text-center px-4 py-2">ชื่อห้องพัก</th>
                        <th className="text-center px-4 py-2">ราคา (บาท/คืน)</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="text-base">
                      {tmpReserve.map((r, index) => {
                        return (
                          <tr key={index}>
                            <td className="text-center p-2">
                              <select
                                value={tmpReserve[index].No}
                                onChange={(e) => {
                                  const newTmp = tmpReserve;
                                  const selected = e.target.value;
                                  newTmp[index] = {
                                    No: info.filter((k) => k.No === selected)[0].No,
                                    name: info.filter((k) => (k.No === selected))[0].name,
                                    price: info.filter((k) => (k.No === selected))[0].price
                                  };
                                  setTmpReserve([...newTmp]);
                                }}
                              >
                                {info.filter((p) => {
                                  return (!tmpReserve.map((t) => t.No).includes(p.No) || p.No === r.No) && p.Status === 0
                                })
                                  .map((t, index) => (
                                    <option key={index} value={t.No}>
                                      {t.No}
                                    </option>
                                  ))}
                              </select>
                            </td>
                            <td className="text-center p-2">{r.name}</td>
                            <td className="text-center p-2">{r.price}</td>
                            <td className="text-center p-2">
                              <button
                                className="text-center p-2 text-red-700 underline font-semibold"
                                onClick={() => {
                                  setTmpReserve(
                                    [...tmpReserve].filter(
                                      (d, i) => i !== index
                                    )
                                  );
                                }}
                              >
                                ลบ
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {tmpReserve.length < info.filter((r)=>r.Status===0).length && (
                    <button
                      className="p-2 font-semibold"
                      style={{ fontSize: "30px" }}
                      onClick={() => {
                        if (tmpReserve.length >= info.filter((r)=>r.Status===0).length) return;
                        const avail = info.filter(
                          (key) => !tmpReserve.map((t) => t.No).includes(key.No)
                        )[0];
                        setTmpReserve([
                          ...tmpReserve,
                          {
                            No: info.filter((k) => k.No === avail.No)[0].No,
                            name: info.filter((k) => k.No === avail.No)[0].name,
                            price: info.filter((k) => k.No === avail.No)[0].price
                          },
                        ]);
                      }}
                    >
                      +
                    </button>
                  )}
                  <div className="w-full flex justify-end text-right text-base font-semibold bg-gray-400 pt-2 pr-2">
                    <p className="text-2xl font-semibold">ยอดรวม</p>
                    <p className="text-2xl font-semibold w-1/5 text-center">{getTotalCosts()}</p>
                    <p className="text-2xl font-semibold">บาท</p>
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="rounded shadow w-1/6 bg-nav hover:bg-blue-800 text-white m-2 p-3"
                      onClick={() => setShowModal(false)}
                    >Back</button>
                    <button className="rounded shadow w-1/6 bg-green-600 hover:bg-green-400 text-white m-2 p-3"
                      onClick={() => {
                        setReserveList(tmpReserve);
                        setShowModal(false);
                        getTotalCosts();
                      }}
                    >Confirm</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default PopUpRoom;
