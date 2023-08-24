import React from 'react';
import { Outlet } from 'react-router-dom';





const App = () => {
  return (
    <div className='m-2'>
       <Outlet />
    </div>
  );
};

export default App;