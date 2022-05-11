import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import ContactForm from './ContactForm';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className='px-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;