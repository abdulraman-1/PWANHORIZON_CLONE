import React from 'react';
import note_des from "../assets/svg_designs/note_design.svg";
import box_des from "../assets/svg_designs/box_design.svg";
import { FaEye, FaGraduationCap, FaAnchor, FaPlus } from "react-icons/fa";

const CorporateStatement = () => {
  return (
    <div className="bg-white p-10 xl:p-20 w-full xl:w-4/5 mb-24">
      <div className="relative">
        {/* Background Designs */}
        <div className="absolute z-10 right-0 bottom-0 opacity-15">
          <img src={note_des} className="h-52" />
        </div>
        <div className="absolute z-10 right-0 top-0 opacity-80">
          <img src={box_des} className="h-22" />
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-semibold mb-10">
          OUR <span className="text-red-600">CORPORATE</span> STATEMENT
        </h2>

        {/* Vertical Line */}
        <div className="absolute -left-3.5 top-16 bottom-10 w-0.5 bg-gray-200"></div>

        {/* Sections */}
        {[
          {
            icon: <FaEye />,
            title: "OUR VISION",
            description: "To make Homeownership Dream A Reality",
          },
          {
            icon: <FaGraduationCap />,
            title: "OUR MISSION",
            description:
              "To discover affordable land everywhere and make this known to you and also show you how you can make money to buy land & build your own home.",
          },
          {
            icon: <FaAnchor />,
            title: "OUR CORE VALUES",
            description: [
              "A - ACCOUNTABILITY",
              "R - RESPONSIBILITY",
              "I - INTEGRITY",
              "S - SERVICE",
              "E - EXCELLENCE",
            ],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col xl:flex-row items-center gap-6 mb-10 w-full"
          >
            {/* Plus Icon */}
            <div className="absolute left-[-30px] w-8 h-8 border-6 border-red-600 flex items-center justify-center rounded-full bg-white">
              <FaPlus className="text-sm font-bold" />
            </div>

            {/* Left Box */}
            <div className="bg-gray-200 flex items-center gap-4 p-6 ml-5 w-full">
              <div className="bg-red-600 p-3 text-white text-lg drop-shadow-xl">
                {item.icon}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>

            {/* Right Box */}
            <div className="flex justify-center items-center w-full">
              <div className="bg-red-600 w-2 h-2 rounded-full mr-8"></div>
              <div className="bg-gray-200 p-6 flex flex-1 w-full">
                {Array.isArray(item.description) ? (
                  <div className="p-3 bg-gray-100 space-y-2 w-full">
                    {item.description.map((value, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <p className="text-xs">{value}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-semibold text-sm">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
};

export default CorporateStatement;