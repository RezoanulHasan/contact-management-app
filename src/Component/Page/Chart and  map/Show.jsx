import React, { useEffect } from 'react';
import Map from './map';
import Charts from './Charts';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const Show = () => {

    useTitle("Map and Chart"); 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1);
    };

    return (

        <div className=" m-5">
 <h1 className='text-3xl  mb-20 text-center text-white bg-black p-5'>Show chat and Map</h1>
<div className="mb-20">
<Charts ></Charts> 
</div>
<Map></Map>

<div className="card-actions justify-center mt-10">
      <button  className="btn mt-10 btn-outline bg-black text-white py-2 rounded" onClick={handleBack}>Go Back</button>   
      </div>

        </div>
           );
};

export default Show;