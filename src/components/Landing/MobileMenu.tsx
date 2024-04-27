import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="md:hidden bg-gray-900 text-white absolute top-0 left-0 right-0 bottom-0 w-3/4 p-4 z-10">
      <div className="flex flex-col items-start space-y-4">
        <Link href="/products" className="text-white">
          Our Products
        </Link>
        <Link href="/customer-care" className="text-white">
          Customer Care
        </Link>
        <Link href="/about-us" className="text-white">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
