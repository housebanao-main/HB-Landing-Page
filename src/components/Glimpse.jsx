import React from 'react';

import glimpse01 from "../assets/glimpse01.png";
import glimpse02 from "../assets/glimpse02.png";
import glimpse03 from "../assets/glimpse03.png";
import { CommonHeading } from '../Heading/CommonHeading';

const GlimpseSection = () => {
  const data = [
    { icon: glimpse01, altText: 'Modern 4BHK penthouse', title: 'Modern 4BHK penthouse, Bangalore' },
    { icon: glimpse02, altText: 'Contemporary 3BHK penthouse', title: 'Contemporary 3BHK penthouse, Delhi' },
    { icon: glimpse03, altText: 'Elegant 2BHK flat', title: 'Elegant 2BHK flat, Noida' },
  ];

  return (
    <section className='flex flex-col ml-24 mr-24 gap-[20px] lg:max-w-[1290px] w-full mx-auto mb-[30px]'>
      <CommonHeading className={"lg:text-start text-center"}>Get a glimpse of Housebanao homes</CommonHeading>
      <div className='flex items-center justify-between lg:flex-row flex-col gap-[26px] lg:gap-0 lg:px-0 px-[20px]'>
        {data.map((item, index) => (
          <div className='relative flex items-center flex-col shadow-xl onhoverCards rounded-[10px] border border-#575757 w-[400px] h-[300px] overflow-hidden' key={index}>
            <div className="relative w-full h-[300px]">
              <img src={item.icon} alt={item.altText} className="object-cover w-full h-full" />
            </div>
            <p className='absolute bottom-0 font-semibold drop-shadow-md bg-black bg-opacity-50 text-white w-full text-center py-[20px] opacity-0 hover:opacity-100 transition-opacity'>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GlimpseSection;
