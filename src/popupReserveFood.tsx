import React, { useContext, useEffect, useState } from "react";
import { CheckinContext } from "./data/CheckinContext";

const PopUpFood = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { setFoodList, outDate, food } = useContext(CheckinContext);

  const [tmpFood, setTmpFood] = useState<any[]>([]);

  useEffect(() => {
    const dateRange = () => {
      const day = 1000 * 60 * 60 * 24;
      const diffDate = Math.ceil((Date.parse(outDate) - Date.parse('2020-09-23')) / day);
      const startDate = new Date('2020-09-23')
      let dateList: any = [];
      for (let i = 1; i <= diffDate; i++) {
        let date = new Date(startDate);
        date.setDate(date.getDate() + i);
        dateList = [...dateList,
        {
          date: new Date(date),
          No: food[0].No,
          Name: food[0].Name,
          amount: 1,
          price: food[0].Price,
        }];
      }
      return dateList;
    }
    setTmpFood(dateRange());
  }, [outDate]);

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
                      </tr>
                    </thead>
                    <tbody className="text-base">
                      {
                        tmpFood.map((r, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-center p-2">
                                {r.date.toLocaleDateString('en-GB')}
                              </td>
                              <td className="text-center p-2">
                                <select
                                  value={tmpFood[index].name}
                                  onChange={(e) => {
                                    const newTmp = tmpFood;
                                    const selected = e.target.value;
                                    newTmp[index] = {
                                      ...newTmp[index],
                                      No: food.filter((k) => k.No === selected)[0].No,
                                      Name: food.filter((k) => k.No === selected)[0].Name,
                                      amount: tmpFood[index].amount,
                                      price: food.filter((k) => k.No === selected)[0].Price,
                                    };
                                    setTmpFood([...newTmp]);
                                  }}
                                >
                                  {food.map((key) => (
                                    <option key={key.No} value={key.No}>
                                      {key.Name}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td className="text-center p-2">
                                <input
                                  className="w-3/5 shadow-md text-black border rounded text-center"
                                  type="number"
                                  value={tmpFood[index].amount}
                                  onChange={
                                    (e) => {
                                      if (e.target.value[0] === '-') { e.target.value = '0';}
                                      else {
                                        const newTmp = tmpFood;
                                        newTmp[index].amount = e.target.value;
                                        setTmpFood([...newTmp]);
                                      }
                                    }
                                  }
                                  min="0"
                                />
                              </td>
                              <td className="text-center p-2">
                                {r.price * r.amount}
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
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


