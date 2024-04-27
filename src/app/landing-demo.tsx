"use client";
import LandingPage from "@/components/Landing/Landing";
import { Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

// async function fetchData() {
//   const endpoints = [
//     "https://strapi-test-5xj6.onrender.com/api/site-setting",
//     "https://strapi-test-5xj6.onrender.com/api/menus",
//     "https://strapi-test-5xj6.onrender.com/api/pages/1?populate=*",
//   ];

//   const results = await axios.all(endpoints.map((url) => axios.get(url)));
//   console.log("results: ", results);
//   return {
//     siteSettings: results[0]?.data?.data?.attributes,
//     menu: results[1]?.data?.data,
//     homeContent: results[2]?.data?.data,
//   };
// }

export default function Demo() {
  const [siteSettings, setSiteSettings] = useState(null);
  const [menu, setMenu] = useState(null);
  const [homeContent, setHomeContent] = useState(null);
  let endpoints = [
    "https://strapi-test-5xj6.onrender.com/api/site-setting",
    "https://strapi-test-5xj6.onrender.com/api/menus",
    "https://strapi-test-5xj6.onrender.com/api/pages/1?populate=*",
  ];
  useEffect(() => {
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((data) => {
      setSiteSettings(data[0]?.data?.data?.attributes);
      setMenu(data[1]?.data?.data);
      setHomeContent(data[2]?.data?.data);
    });
  }, []);

  return (
    <div className="w-full h-full bg-white">
      {siteSettings && menu && homeContent ? (
        <LandingPage
          siteSettings={siteSettings}
          menu={menu}
          homeContent={homeContent}
        />
      ) : (
        <Spin
          fullscreen
          className="text-primary"
        />
      )}
    </div>
  );
}
