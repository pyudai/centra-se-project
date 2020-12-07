import React, { useContext, useState } from "react";
import { CheckinContext } from "./data/CheckinContext";

const PopUpFood = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { setFoodList, FOODLIST } = useContext(CheckinContext);
  const [tmpFood, setTmpFood] = useState<any[]>([]);

  const getTotalCosts = () => {
    return tmpFood.reduce((total, item) => total + (item.price * item.amount), 0);
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
                <div className="w-full flex flex-col p-5">
                  <p className="text-2xl font-semibold h-full m-2">เพิ่มห้องพัก</p>
                  <table className="table-auto text-base w-full shadow-lg">
                    <thead className="bg-blue-700 text-white">
                      <tr>
                        <th className="text-center p-3">วัน/เดือน/ปี</th>
                        <th className="text-center p-3">ชื่ออาหาร</th>
                        <th className="text-center p-3">จำนวน</th>
                        <th className="text-center p-3">ราคารวม (บาท)</th>
                        <th className="text-center p-3">แก้ไข</th>
                      </tr>
                    </thead>
                    <tbody className="text-base">
                      {tmpFood.map((r, index) => {
                        return (
                          <tr key={index}>
                            <td className="text-center p-2">
                              <div>
                                <input
                                  className="w-3/5 text-center shadow-md bg-gray-500 text-black border rounded p-1"
                                  type="text"
                                  value="23/9/2020"
                                  readOnly
                                />
                              </div>
                            </td>
                            <td className="text-center p-2">
                              <select
                                value={tmpFood[index].name}
                                onChange={(e) => {
                                  const newTmp = tmpFood;
                                  const selected = e.target.value;
                                  newTmp[index] = {
                                    name: selected,
                                    amount: tmpFood[index].amount,
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
                                      {FOODLIST[key].name}
                                    </option>
                                  ))}
                              </select>
                            </td>
                            <td className="text-center p-2">
                              <div>
                                <input
                                  className="w-3/5 shadow-md text-black border rounded text-center"
                                  type="number"
                                  value={tmpFood[index].amount}
                                  onChange={
                                    (e) => {
                                      const newTmp = tmpFood;
                                      newTmp[index].amount = e.target.value
                                      setTmpFood([...newTmp]);
                                    }
                                  }
                                />
                              </div>
                            </td>
                            <td className="text-center p-2">
                              {r.price * r.amount}
                            </td>
                            <td className="text-center p-2">
                              <button
                                className="text-center p-2 text-red-700 underline font-semibold"
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
                  {tmpFood.length < 3 && (
                    <button
                      className="p-2 font-semibold"
                      style={{ fontSize: "30px" }}
                      onClick={() => {
                        if (tmpFood.length >= 3) return;
                        const avail = Object.keys(FOODLIST).filter(
                          (key) => !tmpFood.map((t) => t.name).includes(key)
                        )[0];
                        setTmpFood([
                          ...tmpFood,
                          {
                            name: avail,
                            amount: 1,
                            price: FOODLIST[avail].price,
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
                    <button className="rounded shadow w-1/6 bg-nav hover:bg-blue-800 text-white m-2 p-3"
                      onClick={() => {
                        setFoodList(tmpFood);
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
export default PopUpFood;


