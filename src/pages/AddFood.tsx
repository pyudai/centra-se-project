import React from 'react';
import 'antd/dist/antd.css';
import '../style/output.css'
import SuccessfullyAdded from '../popupFood';
import Navbar from '../navbar-admin';
import BeforeNav from '../BeforeNav-admin';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Form, Upload } from "antd";

function AddFood() {
  let dataSet = {
    idFood : "0010020031"
  }
  return (
    <div>
      <title>Add Food | Centra Resort</title>
      <BeforeNav />
      <div className="sticky top-0 z-50"><Navbar /></div>
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="m-10 p-5 shadow-lg rounded-lg bg-gray-100" style={{ width: "800px" }}>
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
        </div>
      </div>
    </div>
  );

}

export default AddFood;
