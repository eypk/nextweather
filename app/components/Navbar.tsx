"use client";
import React from "react";
import Link from "next/link";

interface Navlink {
  label: string;
  url: string;
}

const navlinks: Navlink[] = [
  { label: "Weather Today", url: "/" },
  { label: "Find Weather", url: "/search" },
  { label: "Get in touch", url: "/contact" },
];

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white">
          Weather
          <span className="text-blue-500">App</span>
        </h1>
        <div>
          <ul className="flex items-center justify-between gap-4 mr-2 text-white hover:text-yellow">
            {navlinks.map((link, index) => (
              <li
                key={index}
                className="text-white hover:text-blue-500 transition-colors duration-200"
              >
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
