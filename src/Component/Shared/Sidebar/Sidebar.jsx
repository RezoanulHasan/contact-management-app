import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaMapMarkedAlt } from "react-icons/fa"; // Using FaUserAlt and FaMapMarkedAlt icons

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-full flex flex-col justify-between">
      <div className="p-5">
   
        <ul className="space-y-2  lg:mt-56 mt-0">
          <li className='mt-10 mb-5'>
            <Link to="/" className="text-white font-bold hover:text-yellow-400">
              <FaUserAlt className="inline mr-2" /> Contact
            </Link>
          </li>
          <li className='mt-10 mb-20'>
            <Link to="mapAndChart" className="text-white font-bold hover:text-yellow-400">
              <FaMapMarkedAlt className="inline mr-2" /> Chat and Map
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center p-3  text-yellow-500 bg-gray-800 mt-20">
        <p className="text-xs">Contact management app</p>
      </div>
    </div>
  );
};

export default Sidebar;
