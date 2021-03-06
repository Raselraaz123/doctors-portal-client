import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>

        <div className="flex items-center ">
          <div>
            <div className="avatar mt-2">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} />
              </div>
            </div>
          </div>
          <div>
            <h4>{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
