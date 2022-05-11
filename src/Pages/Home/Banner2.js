import React from "react";
import treatment from "../../assets/images/treatment.png";
import BtnPrimary from "../Shared/BtnPrimary";
const Banner2 = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img width={458} src={treatment} />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <BtnPrimary>GET STARTED</BtnPrimary>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
