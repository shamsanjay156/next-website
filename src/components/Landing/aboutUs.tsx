/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import React from "react";
const AboutUs: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" id="about-us">
      <div className="mt-8 mb-8">
        <div className="text-blue-900 text-4xl font-normal">
          {content.Title.split(" ")[0]}{" "}
          <span className="text-blue-900 text-4xl font-bold">
            {" "}
            {content.Title.split(" ")[1]}
          </span>
          <p className="text-secondaryGrey text-[21px] mt-1">
            {content.AboutUsDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-8"></div>
      </div>
    </div>
  );
};

export default AboutUs;
