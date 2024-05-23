"use client"
import React from 'react';
import { Hourglass } from 'react-loader-spinner';


export default function Loading() {
  return(
  <Hourglass
    visible={true}
    height="80"
    width="80"
    ariaLabel="hourglass-loading"
    wrapperClass='absolute h-screen top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] '
    colors={['#fff', '#f0f0f0']}
  />
  )
};

