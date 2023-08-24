import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-auto flex flex-col justify-between">
      <div className="p-5">
        <h1 className="text-2xl font-semibold mb-4">Sidebar</h1>
        <ul className="space-y-2">
          <li className='mt-10 mb-5'>
            <Link to="/" className="text-white font-bold  hover:text-yellow-400 ">
           Contact
            </Link>
          </li>
          <li className='mt-10 mb-20'>
            <Link to="/show map and chart" className="text-white font-bold   hover:text-yellow-400 ">
    Chat and Map
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center p-3 bg-gray-800  mt-20">
        <p className="text-xs">contact management app</p>
      </div>
    </div>
  );
};

export default Sidebar;
