import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
      <Link
        href="/about"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-red  hover:bg-[#e2e8f0] focus:outline-none focus:text-white focus:bg-gray-700"
      >
        About
      </Link>
      <Link
        href="/blog"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-red  hover:bg-[#e2e8f0] focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Blog
      </Link>
    </div>
  );
};

export default Menu;
