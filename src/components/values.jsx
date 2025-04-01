import { useState } from "react";
import { FaHandshake, FaStar, FaLightbulb } from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      title: "Trust & Integrity",
      icon: <FaHandshake className="text-blue-600 text-4xl" />,
      description: "We believe in maintaining transparency and honesty in all our interactions."
    },
    {
      title: "Customer Success",
      icon: <FaStar className="text-blue-600 text-4xl" />,
      description: "Our goal is to help our customers achieve success through our solutions."
    },
    {
      title: "Innovation",
      icon: <FaLightbulb className="text-blue-600 text-4xl" />,
      description: "We constantly innovate to bring the best solutions to our customers."
    }
  ];

  return (
    <div className="bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
      <div className="flex gap-6">
        {values.map((value, index) => (
          <div key={index} className="group perspective">
            <div className="relative w-64 h-64 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-4 [backface-visibility:hidden]">
                {value.icon}
                <h3 className="text-xl font-semibold mt-4">{value.title}</h3>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 bg-gray-200 shadow-lg rounded-lg flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-black">{value.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;