import React from "react";
import Image from "next/image";
interface CardData {
  IconLink: string;
  Text: string;
  Description: string;
  id: number;
}
interface IProps {
  homeContent: any;
}

const LandingHighlights = ({ cardData }: { cardData: CardData[] }) => {
  console.log("cardData: ", cardData);
  const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(
    navigator.userAgent
  );
  const isWindows = /Windows/i.test(navigator.userAgent);

  if (isMobile)
    return (
      <React.Fragment>
        <div className="relative bg-white rounded-lg p-8 shadow-lg m-5">
          <div className="flex flex-col md:flex-row md:space-x-4">
            {cardData.map((row, index) => (
              <div
                key={row.id.toString()}
                className="flex items-center mb-4 md:mb-0"
              >
                <Image
                  src={row.IconLink}
                  alt="Client"
                  className="w-16 h-16 mr-4 md:w-20 md:h-20"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="text-base md:text-lg font-semibold text-blue-900">
                    {row.Text}
                  </p>
                  <p className="text-xs md:text-sm">{row.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );

  if (isWindows)
    return (
      <React.Fragment>
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 shadow-lg z-20">
          <div className="flex flex-col items-center justify-between md:flex-row md:space-x-4">
            {cardData.map((row, index) => (
              <div key={index} className="flex items-center mb-4 md:mb-0">
                <Image
                  src={row.IconLink}
                  alt="Client"
                  className="w-20 h-20 mr-4"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="font-semibold text-blue-900 text-3xl">
                    {row.Text}
                  </p>
                  <p className="text-lg text-secondaryGrey">
                    {row.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
};

export default LandingHighlights;
