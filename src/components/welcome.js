import React from 'react';
import { Link } from 'gatsby';

const Welcome = ({ description, image }) =>
  <div className="flex mt-4 md:mt-12 flex-wrap md:flex-nowrap">
    <div className="flex flex-col">
      <span className="md:underline mb-4 text-4xl md:text-6xl tracking-wider">Welcome!</span>
      <span className="tracking-wide my-2 text-lg md:text-2xl">{description}</span>
      <Link to="/about"
        className="underline text-green-light bg-blue-dark text-base md:text-xl tracking-wider rounded-md p-1
        mr-auto hover:bg-green-light hover:text-blue-dark transition-all duration-200">Learn more...</Link>
    </div>
    <Link to="/about" className="my-1 md:my-0">
      <img src={image} alt="assortment of electronic components" className="rounded-md opacity-70 w-5/6 md:w-full h-full
      shadow-md hover:opacity-90 transition-all duration-200" />
    </Link>
  </div>;

export default Welcome;