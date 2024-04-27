/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import React from "react";
interface IProps {
  siteSettings: any;
}
const ContactUs: React.FC<IProps> = ({ siteSettings }) => {
  console.log("contact: ", siteSettings);
  const data = [
    {
      img: "/img/Icon_contact-email.svg",
      content: "info@adnic.ae",
      head: "Email",
    },
    {
      img: "/img/Icon_contact-phone.svg",
      content: "+97124080900",
      head: "Phone Number",
    },
    {
      img: "/img/Icon_contact_postal_address.svg",
      address1: "Building No. 403",
      address2: "P.O. Box 839",
      address3: "Abu Dhabi, UAE",
      head: "Address",
    },
  ];
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" id="about-us">
      <div className="mt-8 mb-8">
      <div className="text-blue-900 text-4xl font-normal">
            Contact <span className="text-blue-900 text-4xl font-bold">US</span>
          </div>
        <div className="w-full  p-5 bg-white flex flex-col items-left justify-evenly mt-3 rounded-lg">
          
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={"/img/Icon_contact-email.svg"}
                alt=""
                width={100}
                height={100}
              />
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-primary">Email</p>
                <p className="text-sm md:text-base text-gray-500">
                  {siteSettings.Email}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={"/img/Icon_contact-phone.svg"}
                alt=""
                width={100}
                height={100}
              />
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-primary">Phone Number</p>
                <p className="text-sm md:text-base text-gray-500">
                  {siteSettings.ContactNumber}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={"/img/Icon_contact_postal_address.svg"}
                alt=""
                width={100}
                height={100}
              />
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-primary">Adress</p>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm md:text-base text-gray-500">
                    Building No. 403
                  </p>
                  <p className="text-sm md:text-base text-gray-500">
                    P.O. Box 839, Abu Dhabi, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-8"></div>
      </div>
    </div>
  );
};

export default ContactUs;
