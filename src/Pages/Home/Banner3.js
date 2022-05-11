import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import BtnPrimary from '../Shared/BtnPrimary';
const Banner3 = () => {
  return (
    <div style={{
      background:`url(${appointment})`
    }}
    className="flex justify-center items-center"
    >
     
      <div class="flex-1 hidden lg:block">
        <img className='mt-[-100px]'  src={doctor} />
      </div>
      <div className="text-white flex-1 px-4">
        <h1 class=" font-bold text-primary ">Appointment</h1>
        <h1 class="text-3xl font-bold ">Make an appointment Today</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <BtnPrimary></BtnPrimary>
      </div>
    </div>
  );
};

export default Banner3;