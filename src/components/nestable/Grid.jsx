import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Footer from "@/components/nestable/Footer";

const Grid = ({ blok }) => {
  return (
    <>
      <section {...storyblokEditable(blok)} className="grid-section mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blok.columns.map((column, index) => (
            <div
              key={index}
              className="grid-item p-10 bg-white rounded-lg shadow-md"
            >
              <img
                src={column.grid_image.filename}
                alt={column.grid_image.alt}
                className="w-full h-auto object-cover rounded-lg mb-6"
              />
              <p className="text-center text-lg">{column.grid_text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Grid;
