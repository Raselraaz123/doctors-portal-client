import React from 'react';
import appointment from "../../assets/images/appointment.png";
import BtnPrimary from '../Shared/BtnPrimary';


const ContactForm = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="w-1/2 mx-auto ">
        <div className="text-center">
          <h3 className="text-primary text-lg ">Contact Us</h3>
          <h1 className="text-3xl text-bold text-white mb-5">
            Stay connected with us
          </h1>
        </div>
        <div className=" ">
          <input
            className="mb-2 w-full rounded pl-2 py-1 "
            type="text"
            placeholder="Email Address"
          />
          <br />
          <input
            className="mb-2 w-full rounded pl-2 py-1"
            type="text"
            placeholder="Subject"
          />
          <br />
          <textarea
            className="mb-2 w-full rounded pl-2"
            type=""
            placeholder="Your message"
          />
        </div>
        <div className="flex justify-center">
          <BtnPrimary>Submit</BtnPrimary>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;