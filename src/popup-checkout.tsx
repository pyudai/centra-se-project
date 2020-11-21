import React, { useState } from "react";

function Checkout() {
  const [checkout, setCheckout] = useState(false);
  return (
    <>
      <a
        className="text-red-600 underline hover:cursor-pointer"
        style={{ transition: "all .15s ease" }}
        onClick={() => setCheckout(true)}
      >
        Check out
      </a>
      {checkout ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setCheckout(false)}
          >
            <div className="relative w-2/5 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="py-20 px-12 flex flex-col w-full items-center justify-center">
                  <h3 className="text-3xl font-semibold font-prompt flex-auto">
                    ต้องการ check out ห้อง B04 ? 
                  </h3>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className=" text-white active:bg-nav font-bold uppercase text-sm px-16 py-3 rounded shadow bg-green-500 outline-none focus:outline-none mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setCheckout(false)}
                  >
                    Yes
                  </button>
                  <button
                    className=" text-white active:bg-nav font-bold uppercase text-sm px-16 py-3 rounded shadow bg-red-600 outline-none focus:outline-none mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setCheckout(false)}
                  >
                    No
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

export default Checkout;