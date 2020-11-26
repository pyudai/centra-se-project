import React, { useContext, useState } from "react";
import { CheckinContext } from "./data/CheckinContext";

const PopUp = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { setFoodList, FOODLIST } = useContext(CheckinContext);
  const [tmpFood, setTmpFood] = useState<any[]>([]);

  const getTotalCosts = () => {
    return tmpFood.reduce((total, item) => {
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
                        <th className="text-center px-4 py-2">วัน/เดือน/ปี</th>
                        <th className="text-center px-4 py-2">ชื่ออาหาร</th>
                        <th className="text-center px-4 py-2">จำนวน</th>
                        <th className="text-center px-4 py-2">ราคารวม (บาท)</th>
                        
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tmpFood.map((r, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <div>
                                <input
                                  className=" w-3/5 shadow-md bg-gray-500 text-black border rounded py-3 px-4 mb-3"
                                  type="text"
                                  value="17/9/2563"
                                  readOnly
                                />
                              </div>
                            </td>
                            <td>
                            <select
                                value={tmpFood[index].name}
                                onChange={(e) => {
                                  const newTmp = tmpFood;
                                  const selected = e.target.value;
                                  newTmp[index] = {
                                    name: selected,
                                    
                                    price: FOODLIST[selected].price,
                                  };
                                  setTmpFood([...newTmp]);
                                }}
                              >
                                {r.name}
                                {Object.keys(FOODLIST)
                                  .filter(
                                    (key) =>
                                      !tmpFood
                                        .map((t) => t.name)
                                        .includes(key) || key === r.name
                                  )
                                  .map((key) => (
                                    <option key={key} value={key}>
                                      {key}
                                    </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <div>
                                <input
                                  className=" w-3/5 shadow-md text-black border rounded py-3 px-4 mb-3"
                                  type="number"
                                  
                                />
                              </div>
                            </td>
                            <td>{r.price}</td>
                            
                            <td>
                            <button
                                onClick={() => {
                                  setTmpFood(
                                    [...tmpFood].filter(
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
                {tmpFood.length < 3 && (
                  <button
                    onClick={() => {
                      if (tmpFood.length >= 3) return;
                      const avail = Object.keys(FOODLIST).filter(
                        (key) => !tmpFood.map((t) => t.name).includes(key)
                      )[0];
                      setTmpFood([
                        ...tmpFood,
                        {
                          name: avail,
                          price: FOODLIST[avail].price,
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
                  <div className="mx-16 text-center">{getTotalCosts()}</div>
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
                      setFoodList(tmpFood);
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
