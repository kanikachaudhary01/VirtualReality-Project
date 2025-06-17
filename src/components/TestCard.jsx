import React from 'react';

function TestCard({ heading, subheading, text, image }) {
  return (
    <div className="shadow-2xl shadow-gray-900 hover:scale-95 rounded-2xl px-4 py-2 transition-transform duration-300">
      <div className="tracking-wide text-sm md:text-base lg:text-lg">{text}</div>

      <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
        <img src={image} alt="" className="rounded-full w-20 h-20 mt-4 sm:mt-0" />

        <div className="text-center sm:text-left">
          <div className="text-lg md:text-xl pt-2 sm:pt-4">{heading}</div>
          <div className="text-gray-400 text-sm md:text-base">{subheading}</div>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
