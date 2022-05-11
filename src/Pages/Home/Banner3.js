import React from "react";
import doctor_small from "../../assets/images/doctor_small.png";
import appointment from "../../assets/images/appointment.png";
import BtnPrimary from "../Shared/BtnPrimary";
const Banner3 = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center mt-28"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor_small} />
      </div>
      <div className="text-white flex-1 px-4 py-5">
        <h1 className=" font-bold text-primary ">Appointment</h1>
        <h1 className="text-3xl font-bold ">Make an appointment Today</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <BtnPrimary>GET STARTED</BtnPrimary>
      </div>
    </div>
  );
};

export default Banner3;
