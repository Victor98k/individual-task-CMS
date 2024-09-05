import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Footer from "./Footer";

const Hero = ({ blok }) => {
  return (
    <>
      <section
        {...storyblokEditable(blok)}
        className="hero bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center"
      >
        <div className="w-full md:w-2/3 p-4 md:p-10">
          <h1 className="hero-heading text-3xl md:text-5xl font-bold mb-4">
            {blok.heading}
          </h1>
          <b className="hero-text text-base md:text-lg mb-6 ">{blok.text}</b>
          {blok.button_text && blok.button_url && (
            <a
              href={blok.button_url.url}
              className="hero-button inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition duration-300"
            >
              {blok.button_text}
            </a>
          )}
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <img
            src={blok.image.filename}
            alt={blok.image.alt}
            className="hero-image w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
