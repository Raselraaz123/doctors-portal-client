import React from 'react';
import page404 from '../../assets/images/page404.png'
const NotFound = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold font-serif text-red-500 text-center mt-28 mb-5' >Page Not Found</h1>
      <div>
        <img className='flex justify-center mx-auto' src={page404} alt="" />
      </div>
    </div>
  );
};

export default NotFound;