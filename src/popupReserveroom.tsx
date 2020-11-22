import React from "react";

export default function PopUpRoom() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
       <img src="./img-reserve/add.svg" alt="" width="25" height="25"/>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            
          >
            <div className="relative w-2/5 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="md:w-1/2 px-3">
              <label className="font-semibold">ชื่อจริง</label>
              <input
                className="appearance-none block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                id="first_name"
                type="text"
                placeholder="การะเกด"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="font-semibold">นามสกุล</label>
              <input
                className="appearance-none block w-full shadow-md bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
                id="last_name"
                type="text"
                placeholder="ศิรินทร์"
              />
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

