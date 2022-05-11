import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam dolorem voluptate pariatur unde consequuntur!",
      img: people1,
      location: "saver",
    },
    {
      _id: 2,
      name: "jmal",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam dolorem voluptate pariatur unde consequuntur!",
      img: people2,
      location: "Dhaka",
    },
    {
      _id: 3,
      name: "kamal",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam dolorem voluptate pariatur unde consequuntur!",
      img: people3,
      location: "Japan",
    },
  ];
  return (
    <section className='my-20'>
      <div className='flex justify-between'>
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h4 className="text-3xl font-bold">
            What Our Patients Says
          </h4>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonials;
