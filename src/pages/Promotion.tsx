import React from 'react';
import 'antd/dist/antd.css';
import '../style/output.css'
import Modal from './popupfood';
import Navbar from '../navbar';
import BeforeNav from '../BeforeNav';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Form,Upload } from "antd";


function Promotion() {
  return (
    <div>
      <BeforeNav />
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="h-full border-2 border-gray-200 rounded-lg justify-center p-12 my-20 shadow-lg"
          style={{ width: "1000px" }}>
          <div className="mx-auto">
            <img src="pic/cutlery 2.png" alt="fork" className="w-12 h-12" />
            <a className="font-prompt text-4xl font-bold">เพิ่มเมนู</a>
            <div className="h-full border-2 border-gray-200 rounded-lg flex flex-col p-32 shadow-lg"
              style={{ width: "350px" }}
            >
              <Form>
                <Form.Item>
                  <Upload showUploadList listType="picture-card">
                    <div className="object-none object-center">
                          <PlusCircleOutlined style={{ fontSize: '64px' }} />
                          <div className="font-prompt" style={{ marginTop: 24 }}>เพิ่มรูปภาพ</div>

                    </div>
                  </Upload>
                </Form.Item>
              </Form>
            </div>
            <p className="font-prompt">ชื่อเมนู</p>
            <input type="text" id="name" name="name" className="w-80 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-prompt shadow-lg" /><br />
            <p className="font-prompt">รหัสอาหาร</p>
            <input type="text" id="name" name="name" className="w-80 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-prompt shadow-lg" /><br />
            <p className="font-prompt">รายละเอียดอาหาร</p>
            <input type="text" id="name" name="name" className="w-80 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-prompt shadow-lg" /><br />
            <p className="font-prompt">ราคา</p>
            <input type="text" id="name" name="name" className="w-50 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-prompt shadow-lg" /><br /><br /><br />
          </div>
          <button className="bg-nav text-white active:bg-nav font-bold uppercase text-sm px-16 py-3 rounded shadow hover:bg-blue-500 outline-none focus:outline-none mb-1">Back</button>
          <Modal />
        </div>
      </div>
    </div>
  );

}

export default Promotion;
