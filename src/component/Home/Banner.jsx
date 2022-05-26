import React from "react";
import TypeAnimation from 'react-type-animation';

const Banner = () => {
  

  return (
    <div className="banner-bg">
      <div className="lg:py-72  mx-auto lg:w-1/2 sm:w-3/4 sm:px-2 lg:px-10 bg-fuchsia-50/25">
        
        <TypeAnimation
      cursor={false}
      sequence={['Wellcome to VoltLab.', 10000, 'Wellcome to VoltLab.']}
      wrapper="h2"
      className="text-white text-6xl font-extrabold"
    />
        <p className="lg:text-lime-400 sm:text-info text-white py-7">We provide high quality electronics parts, PCBs, electronics modules and many more. We provide high quality in a resonable price. We beleive your satisfaction is our satisfaction.</p>
      </div>
    </div>
  );
};

export default Banner;
