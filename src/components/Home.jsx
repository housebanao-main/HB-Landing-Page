import React from 'react';
import bannerImage from '../assets/background-2.jpeg'; // Adjusted path
import { BookForm } from './BookForm';

const Home = () => {
  return (
    <div className="w-full relative">
      <div className="banner w-full h-[550px] relative">
        <img src={bannerImage} alt="Banner Image" className="w-full h-full object-cover object-bottom opacity-70" />
        <div className="absolute inset-0 bg-white opacity-50"></div>
      </div>
      <section className="lg:max-w-[1290px] w-full mx-auto h-auto absolute top-[20%] left-0 right-0 flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex flex-col lg:w-2/3 w-full pl-[24px] space-y-6">
          <h1 className="text-black text-[30px] leading-[37px]">Crafting Dreams, Building Futures</h1>
          <h2 className="text-[#A46254] text-[40px] font-semibold leading-[55px]">Your Trusted Partner for Home <br /> Construction and Interior Design</h2>
          <p className="text-black text-[20px] font-medium leading-[24px] mt-2">Our team is dedicated to delivering outstanding construction and <br /> interior services in <span className="text-[#A46254]">Gurugram, Delhi, Noida</span>.</p>
          <button
            onClick={() => alert("Book your consultation")}
            className="rounded-full bg-[#A46254] text-white py-[12px] w-[320px] text-[20px] font-medium mt-4"
          >
            Book your consultation
          </button>
        </div>
        <div className="lg:mt-[-130px] mt-[-130px]">
          <BookForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
