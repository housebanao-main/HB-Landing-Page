import React from 'react';
import rightimage from '../assets/rightimage.jpeg'; // Make sure to

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white rounded-lg shadow-lg">
      <div className="lg:w-1/2 w-full text-left lg:ml-20 lg:mr-20">
        <h2 className="text-3xl font-bold mb-4 text-[#A46254]">We Are Emerging Leader In Construction Industry</h2>
        <p className="text-lg mb-6">
          With a commitment to quality, integrity, and customer satisfaction, we're forging ahead as the emerging leader in construction.
        </p>
        <div className="mb-6">
          <h3 className="text-4xl font-bold text-[#A46254]">95%</h3>
          <p className="text-lg">
            Customer Satisfaction Rate
            <br />
            We prioritize your needs, ensuring every project is delivered with precision and care, leaving our clients delighted with the results.
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#A46254]">25+</h3>
          <p className="text-lg">
            Years Of Working Experience
            <br />
            Our seasoned team has navigated various challenges and mastered the art of delivering high-quality construction solutions.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center mt-8 lg:mt-0">
        <img src={rightimage} alt="Construction" className="rounded-lg shadow-lg max-h-full" />
      </div>
    </div>
  );
};

export default Intro;
