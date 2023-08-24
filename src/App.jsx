import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Component/Shared/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='m-1  flex lg:flex-row  md:flex-row xl:flex-row  flex-col'>
<div className='lg:w-1/5  md:w-1/5  xl:w-1/5 lg:mt-48  mt-1  w-full'>
      <Sidebar></Sidebar>
      </div>
      <div className='w-full '>
       <Outlet />
       </div>
    </div>
  );
};

export default App;