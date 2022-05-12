import React from "react";
import treatment from "../../assets/images/treatment.png";
import BtnPrimary from "../Shared/BtnPrimary";
const Banner2 = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
          src={treatment}
        />
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <BtnPrimary>GET STARTED</BtnPrimary>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
