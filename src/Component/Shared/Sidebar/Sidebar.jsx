import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-auto flex flex-col justify-between">
      <div className="p-5">
        <h1 className="text-2xl font-semibold mb-4">Navigation</h1>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/show map and chart" className="text-blue-500 hover:underline">
              Home1
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center p-3 bg-gray-800">
        <p className="text-xs">Your app name or footer content</p>
      </div>
    </div>
  );
};

export default Sidebar;
