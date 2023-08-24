<<<<<<< HEAD
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {

    const { error, status } = useRouteError()
    return (
        <div>

<section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
            <span className='sr-only'>Error...</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-green-800 mb-8'>
            {error?.message}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://e7.pngegg.com/pngimages/469/75/png-clipart-http-404-web-page-error-product-design-hypertext-transfer-protocol-error-electronics-text.png" alt="error image" />
          </div>
          <Link to='/' className='btn mt-5 btn-warning '>
            Back to homepage
          </Link>
          
        </div>
      </div>
    </section>  

        </div>
    );
};

=======
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {

    const { error, status } = useRouteError()
    return (
        <div>

<section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
            <span className='sr-only'>Error...</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-green-800 mb-8'>
            {error?.message}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://e7.pngegg.com/pngimages/469/75/png-clipart-http-404-web-page-error-product-design-hypertext-transfer-protocol-error-electronics-text.png" alt="error image" />
          </div>
          <Link to='/' className='btn mt-5 btn-warning '>
            Back to homepage
          </Link>
          
        </div>
      </div>
    </section>  

        </div>
    );
};

>>>>>>> 5ac490ad263b9cefc15081f46e2c301d035ab9ce
export default Error;