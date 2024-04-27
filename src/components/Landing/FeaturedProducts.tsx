/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
const FeaturedProducts: React.FC<{ products: any; title: any }> = ({
  products,
  title,
}) => {

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" id="our-products">
      <div className="mt-8 mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold uppercase mr-3">
            {title.Title}
          </div>
        </div>
        <h1 className="text-blue-900 text-4xl font-bold">
          {title.Description}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-8">
          {products.map((item: any) => (
            <>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src={item.ProductImage}
                    alt="Medical Insurance"
                    className="w-10 h-10 mr-4 rounded-lg"
                    width={100}
                    height={100}
                  />
                  <div>
                    <p className="font-semibold text-primary text-lg">
                      {item.ProductTitle}
                    </p>
                    <p className="text-sm text-secondaryGrey">
                      {item.ProductDescription}
                    </p>
                  </div>
                  <IoIosArrowForward className="ml-auto text-blue-900 text-5xl" />
                </div>
              </div>
            </>
          ))}

          {/* <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center mb-4 justify-between">
              <Image
                src="/img/thumbs/motor_insurance.png"
                alt="Motor Insurance"
                className="w-10 h-10 mr-4 rounded-lg"
                width={100}
                height={100}
              />
              <div>
                <p className="font-semibold text-primary text-lg">
                  Motor Insurance
                </p>
                <p className="text-sm text-secondaryGrey">
                  Get comprehensive coverage for your vehicle. We'll ensure
                  you're protected on the road.
                </p>
              </div>
              <IoIosArrowForward className="ml-auto text-blue-900 text-4xl" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
