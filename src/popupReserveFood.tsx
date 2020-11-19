import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-green-600 text-white active:bg-green-600 font-bold text-sm px-12 py-3 rounded shadow hover:bg-green-400 outline-none focus:outline-none"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Save
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-2/5 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="p-12 flex flex-col w-full items-center justify-center">
                  <img src="nav/check.svg" alt="check" className="h-20 w-20 m-10 "/>
                  <h3 className="text-3xl font-semibold flex-auto">
                    เพิ่มพนักงานสำเร็จ
                  </h3>
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