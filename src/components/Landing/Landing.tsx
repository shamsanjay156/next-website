"use client";
import LandingHeader from "./LandingHeader";
import LandingHighlights from "./LandingHighlights";
import FeaturedProducts from "./FeaturedProducts";
import LandingFooter from "./LandingFooter";
import React from "react";
import AboutUs from "./aboutUs";
interface IProps {
  siteSettings: any;
  menu: any;
  homeContent: any;
}
const LandingPage: React.FC<IProps> = ({ siteSettings, menu, homeContent }) => {
  console.log("homeContent: ", homeContent);
  const CardSection = [
    {
      image: "/img/thumbs/satisfying_clients.png",
      title: "1L+",
      description: "Satisfied Clients",
    },
    {
      image: "/img/thumbs/insurance_policies.png",
      title: "95K+",
      description: "Insurance Policies",
    },
    {
      image: "/img/thumbs/networks.png",
      title: "3.5K+",
      description: "Networks",
    },
  ];

  return (
    <div style={{ backgroundColor: "#EBF3EE" }}>
      <LandingHeader
        siteSettings={siteSettings}
        menu={menu}
        homeContent={homeContent.attributes}
      />
      <LandingHighlights cardData={homeContent.attributes.FeaturedSection} />
      <AboutUs content={homeContent.attributes.AboutSection} />
      <FeaturedProducts products={homeContent.attributes.Products} title={homeContent.attributes.Title} />
      {/* <ContactUs siteSettings={siteSettings} /> */}
      <LandingFooter siteSettings={siteSettings}/>
    </div>
  );
};

export default LandingPage;
