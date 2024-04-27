import React, { useState } from "react";
import { IoIosNotificationsOutline, IoMdSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";
interface IProps {
  siteSettings: any;
  menu: any;
  homeContent: any;
}
const LandingHeader: React.FC<IProps> = ({
  siteSettings,
  menu,
  homeContent,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(
    navigator.userAgent
  );

  return (
    <React.Fragment>
      {isMenuOpen && <MobileMenu />}
      <div style={{ height: isMobile ? "50vh" : "70vh" }}>
        <div
          className="absolute top-0 left-0 right-0 h-[60%] bg-cover bg-center"
          style={{ backgroundImage: `url('/img/auth/auth-cover-bg.png')` }}
        >
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
            <div className="flex items-center">
              <Image
                src={siteSettings.LogoLight}
                alt="logo"
                width={150}
                height={150}
              />
            </div>

            <div className="hidden md:flex items-center space-x-5">
              {menu.map((item: any) => (
                <Link
                  href={`${item.attributes.Link}`}
                  className="text-white font-bold"
                  key={item.id}
                >
                  {item.attributes.Title}
                </Link>
              ))}
              {siteSettings.NotificationRequired ? (
                <IoIosNotificationsOutline
                  className="h-8 w-8 text-white border border-blue-900 rounded-full p-1"
                  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
                />
              ) : null}
              {siteSettings.SearchRequired ? (
                <IoMdSearch
                  className="h-8 w-8 text-white border border-blue-900 rounded-full p-1"
                  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
                />
              ) : null}
              <Link href="/">
                <CiUser
                  className="h-8 w-8 text-white border border-blue-900 rounded-full p-1"
                  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
                />
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button className="text-white focus:outline-none mr-2">
                <Link href="/">
                  <CiUser
                    className="h-8 w-8 text-white border border-white rounded-full p-1"
                    style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
                  />
                </Link>
              </button>
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <IoClose className="h-8 w-8 text-white border border-white rounded-full p-1" />
                ) : (
                  <GiHamburgerMenu className="h-8 w-8 text-white border border-white rounded-full p-1" />
                )}
              </button>
            </div>
          </div>

          <div className="absolute top-[20%] left-0 right-0 flex flex-col items-center justify-center p-4 text-center text-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-5 text-white">
              Insurance You Can Trust
            </h1>
            <div className="text-sm md:text-base mb-4">
              <div>{homeContent.Description.split("/")[0]}</div>
              <div>{homeContent.Description.split("/")[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingHeader;
