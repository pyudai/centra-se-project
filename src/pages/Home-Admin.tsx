import { message } from 'antd';
import React from 'react';
import BeforeNav from '../BeforeNav';
import Navbar from '../navbar';

function HomeA() {
  return (
    <div className="">
      <title>Home | Centra Resort</title>
      <BeforeNav/>
      <div className="sticky top-0 z-50"><Navbar/></div> 
      homeAdmin
    </div>
  );
}

export default HomeA;
