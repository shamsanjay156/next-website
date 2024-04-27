import React from "react";
import { CiFacebook, CiLinkedin } from "react-icons/ci";

const LandingFooter: React.FC<{ siteSettings: any }> = ({ siteSettings }) => {
  console.log("siteSettings: ", siteSettings);
  const currentYear = new Date().getFullYear();

  const footerData = {
    address: {
      line1: "Building No.403",
      line2: "P.O.Box 839 Abu Dhabi, UAE",
    },
    menuItems: [
      "Company",
      "Careers",
      "Medical Center",
      "Contact Us",
      "Sitemap",
      "Staff Login",
    ],
    copyRight: "Copyright ADNIC " + currentYear,
  };

  const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(
    navigator.userAgent
  );

  if (isMobile)
    return (
      <footer className="bg-white text-white py-6 px-4 md:px-10 mb-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          {/* First Column */}
          <div className="md:flex md:flex-col text-center mb-5">
            <div>
              <p className="text-sm md:text-base text-gray-500">
                {footerData.address.line1}
              </p>
              <p className="text-sm md:text-base text-gray-500">
                {footerData.address.line2}
              </p>
            </div>
          </div>

          <div className="md:flex md:justify-center">
            <ul className="grid grid-cols-3 gap-4 md:flex-nowrap">
              {footerData.menuItems.map((item, index) => (
                <li
                  key={index}
                  className="text-xs md:text-base text-blue-900 font-bold rounded-md px-4 py-2 flex justify-center items-center"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between">
          <div className="flex items-center justify-center md:justify-end space-x-4 mb-5">
            <CiFacebook className="text-blue-900 h-5 w-5" />
            <CiLinkedin className="text-blue-900 h-5 w-5" />
          </div>

          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {footerData.copyRight}
            </p>
          </div>
        </div>
      </footer>
    );
  else
    return (
      <footer className="bg-white text-white py-6 px-10">
        <div className="container mx-auto grid grid-cols-2 gap-4 md:gap-10">
          <div className="col-span-1 md:col-span-1 flex">
            <div className="md:flex md:flex-col">
              <p className="text-sm md:text-base text-gray-500">
                {footerData.address.line1}
              </p>
              <p className="text-sm md:text-base text-gray-500">
                {footerData.address.line2}
              </p>
              <p className="text-sm md:text-base text-gray-500">
                Phone Number : {siteSettings.ContactNumber}
              </p>
              <p className="text-sm md:text-base text-gray-500">
                Email : {siteSettings.Email}
              </p>

              <ul className="md:mt-5 text-sm md:text-base text-blue-900 font-bold flex flex-wrap md:flex-nowrap">
                {footerData.menuItems.map((item, index) => {
                  if (index >= 0 && index <= 3) {
                    return (
                      <li key={index} className="mr-6 mb-2 md:mb-0">
                        {item}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end items-center">
            <div className="md:flex md:flex-col md:items-center">
              <img src="/img/thumbs/App_Store.png" className="mb-4" />
              <img src="/img/thumbs/Google_Play.png" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 border-t border-gray-300 pt-6">
          <div className="flex items-center">
            <p className="text-sm text-gray-500">
              &copy; {footerData.copyRight}
            </p>
            <ul className="ml-6 flex space-x-4">
              {footerData.menuItems.slice(-2).map((item, index) => (
                <li key={index} className="text-sm text-blue-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">Follow Us</p>
            <CiFacebook className="text-blue-900 h-5 w-5" />
            <CiLinkedin className="text-blue-900 h-5 w-5" />
          </div>
        </div>
      </footer>
    );
};

export default LandingFooter;
