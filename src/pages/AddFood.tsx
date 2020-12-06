import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../style/output.css'
import Navbar from '../navbar-admin';
import BeforeNav from '../BeforeNav-admin';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Form, Upload, Modal ,message } from "antd";
import {Link} from 'react-router-dom';

function AddFood() {

  // Pop-up สำเร็จ
  const [state, stateComplete] = useState(false);

  let dataSet = {
    idFood: "0010020031"
  }
  return (
    <div>
      <title>Add Food | Centra Resort</title>
      <BeforeNav />
      <div className="sticky top-0 z-50"><Navbar /></div>
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="m-10 p-5 shadow-lg rounded-lg bg-white-100" style={{ width: "800px" }}>
          <div className="flex items-center p-5">
            <img src="pic/cutlery_2.png" alt="fork" style={{ width: "30px" }} className="m-1" />
            <p className="m-1 text-xl font-semibold">เพิ่มเมนู</p>
          </div>
          <div className="flex">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Form>
                <Form.Item>
                  <Upload showUploadList listType="picture-card">
                    <div className="object-none object-center">
                      <PlusCircleOutlined style={{ fontSize: '64px' }} />
                      <div className="font-prompt " >เพิ่มรูปภาพ</div>
                    </div>
                  </Upload>
                </Form.Item>
              </Form>
            </div>
            <div className="w-1/2 flex flex-col">
              <p className="m-1 text-base font-semibold">ชื่อเมนู</p>
              <input type="text" placeholder="กรอกชื่ออาหาร" className="m-1 text-base p-3 font-prompt shadow-lg" />
              <p className="m-1 text-base font-semibold">รหัสอาหาร</p>
              <input type="number" value={dataSet.idFood}
                onChange={(e) => {
                  e.target.disabled = true;
                }}
                name="name" className="m-1 text-base p-3 font-prompt shadow-lg bg-gray-400" />
              <p className="m-1 text-base font-semibold">รายละเอียดอาหาร</p>
              <textarea className="m-1 text-base p-3 font-prompt shadow-lg" placeholder="กรอกรายละเอียดอาหาร">
              </textarea>
              <p className="m-1 text-base font-semibold">ราคา</p>
              <input type="number" placeholder="กรอกราคา (บาท)" className="m-1 text-base p-3 font-prompt shadow-lg" />
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <Link className="w-full" to="Food">
              <button className="m-3 bg-blue-600 hover:bg-blue-700 text-white p-3 text-base rounded w-1/4 shadow-lg">Back</button>
            </Link>
            <button className="m-3 bg-green-600 hover:bg-green-700 text-white p-3 text-base rounded w-1/4 shadow-lg"
              onClick={
                () => {
                  message.success('เพิ่มอาหารสำเร็จ');
                  stateComplete(true);
                }
              }
            >Confirm</button>
          </div>
        </div>
      </div>
      {/* Popup สร้างอาหารสำเร็จ */}
      <Modal
        visible={state}
        closable={false}
        footer={
          <div className="w-full flex flex-col text-center items-center justify-center">
            <Link className="w-full" to="Food">
            <button className="font-prompt bg-blue-600 hover:bg-blue-700 w-1/3 text-white py-2 text-base rounded shadow-lg" onClick={()=>stateComplete(false)}>Cancel</button>
            </Link>
          </div>
        }
      >
        <div className="w-full flex flex-col text-center items-center justify-center">
          <img src="/pic/image_23.png" alt="check" className="h-20 w-20 m-10 "/>
          <h3 className="text-3xl font-semibold font-prompt flex-auto">เพิ่มอาหารสำเร็จ</h3>
        </div>
      </Modal>
    </div>
  );

}

export default AddFood;
