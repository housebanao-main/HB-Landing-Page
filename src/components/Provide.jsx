import React from 'react';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';
import card4 from '../assets/card4.svg';

const HomeInteriorCard = ({ logo, heading, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center w-64">
    <div className="bg-brown rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
      <img src={logo} alt="Logo" className="w-12 h-12" />
    </div>
    <h3 className="uppercase text-lg font-bold mb-2">{heading}</h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

const ServicesSection = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-black font-bold text-3xl">What We Provide</h1>
      <p className="mt-4 mb-8">
        From building your dream home to renovating outdated spaces,
        <br />
        we provide personalized solutions tailored to your needs.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <HomeInteriorCard
          logo={card1}
          heading="Home Interior"
          description="Elevate the aesthetic appeal and functionality of your living spaces with our bespoke home interior design solutions."
        />
        <HomeInteriorCard
          logo={card2}
          heading="Renovation"
          description="Transform your outdated or worn-out interiors into vibrant and revitalized spaces with our renovation services."
        />
        <HomeInteriorCard
          logo={card3}
          heading="Office Interior"
          description="Create inspiring and functional work environments with our office interior design and build services."
        />
        <HomeInteriorCard
          logo={card4}
          heading="Home Construction"
          description="At House Banao, we specialize in providing comprehensive home construction services aimed at bringing your dream home to life."
        />
      </div>
    </div>
  );
};

export default ServicesSection;
