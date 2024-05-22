import React from 'react';


export default function Loading()  {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-24 h-24">
        <div className="dot absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-loading"></div>
        <div className="dot absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-loading animation-delay-200"></div>
        <div className="dot absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-loading animation-delay-400"></div>
        <div className="dot absolute top-1/4 right-1/4 w-5 h-5 bg-white rounded-full animate-loading animation-delay-600"></div>
        <div className="dot absolute top-0 right-1/2 transform translate-x-1/2 w-6 h-6 bg-white rounded-full animate-loading animation-delay-800"></div>
      </div>
    </div>
  );
};

