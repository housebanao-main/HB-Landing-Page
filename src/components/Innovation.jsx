import React from 'react';
import backgroundImage from '../assets/background-2.jpeg'; // Make sure to replace this with your actual image path

const Innovation = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white p-8 rounded-lg shadow-lg"
      style={{
        backgroundImage: `linear-gradient(rgba(165, 42, 42, 0.5), rgba(165, 42, 42, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Begin your journey towards the home of your dreams with us.
          <br />
          Let's turn your vision into reality, one brick at a time.
        </h2>
        <div className="text-center text-white text-sm py-[10px]">
          © 2024 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Innovation;
