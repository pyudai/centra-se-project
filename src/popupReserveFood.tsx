import React, { useContext, useState } from "react";
import { CheckinContext } from "./data/CheckinContext";

const PopUp = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { setReserveList, ROOMLIST } = useContext(CheckinContext);
  const [tmpReserve, setTmpReserve] = useState<any[]>([]);
  
   const getTotalCosts = () => {
      return tmpReserve.reduce((total, item) => {
        return total + Number(item.price);
      }, 0);
    };
  

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
                  <table className="table-auto ">
                    <thead>
                      <tr>
                        <th className="text-center px-4 py-2">เลขห้องพัก</th>
                        <th className="text-center px-4 py-2">ชื่อห้องพัก</th>
                        <th className="text-center px-4 py-2">ราคารวม (บาท)</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tmpReserve.map((r, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <select
                                value={tmpReserve[index].No}
                                onChange={(e) => {
                                  const newTmp = tmpReserve;
                                  const selected = e.target.value;
                                  newTmp[index] = {
                                    No: selected,
                                    name: ROOMLIST[selected].name,
                                    price: ROOMLIST[selected].price,
                                  };
                                  setTmpReserve([...newTmp]);
                                }}
                              >
                                {r.No}
                                {Object.keys(ROOMLIST)
                                  .filter(
                                    (key) =>
                                      !tmpReserve
                                        .map((t) => t.No)
                                        .includes(key) || key === r.No
                                  )
                                  .map((key) => (
                                    <option key={key} value={key}>
                                      {key}
                                    </option>
                                  ))}
                              </select>
                            </td>
                            <td>{r.name}</td>
                            <td>{r.price}</td>
                            <td>
                              <button
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
                </div>
                {tmpReserve.length < 4 && (
                  <button
                    onClick={() => {
                      if (tmpReserve.length >= 4) return;
                      const avail = Object.keys(ROOMLIST).filter(
                        (key) => !tmpReserve.map((t) => t.No).includes(key)
                      )[0];
                      setTmpReserve([
                        ...tmpReserve,
                        {
                          No: avail,
                          name: ROOMLIST[avail].name,
                          price: ROOMLIST[avail].price,
                        },
                      ]);
                    }}
                  >
                    +
                  </button>
                )}

                <div className="flex text-black mb-3 text-2xl font-semibold">
                  <div className=" bg-gray-500 w-3/4 text-right pr-4">
                    <p>ยอดรวมทั้งหมด</p>
                  </div>
                  <div className="mx-16 text-center">
                  {getTotalCosts()}                   
                  </div>
                  <div className=" w-24 bg-gray-500 text-left pl-4">
                    <p>บาท</p>
                  </div>
                </div>

                <div className="flex items-center justify-center p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-nav text-white active:bg-nav font-bold uppercase text-sm px-16 py-3 rounded shadow hover:bg-blue-500 outline-none focus:outline-none mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Back
                  </button>
                  <button
                    className="bg-nav text-white active:bg-nav font-bold uppercase text-sm px-16 py-3 rounded shadow hover:bg-blue-500 outline-none focus:outline-none mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => {
                      setReserveList(tmpReserve);
                      setShowModal(false);
                      getTotalCosts();
                    }}
                  >
                    Confirm
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
};
export default PopUp;
