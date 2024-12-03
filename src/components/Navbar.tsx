"use client";

import { Menu, UploadCloud, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [mobileDrawerOpen, SetMobileDrawerOpen] = useState(false);

  const toggelNavbar = () => {
    SetMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      <div className="container flex items-center justify-between  bg-black py-3 rounded-lg">
        <div className="flex flex-shrink-0 items-center justify-between">
          <Image
            className="mr-2"
            src="/logo.png"
            width={60}
            height={30}
            alt="logo"
          />
          <span className="text-sm text-white">
            Sree Manjunatha Electricals
          </span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  className="text-sm text-white hover:text-neutral-500"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col justify-end text-white md:flex lg:hidden">
          <button onClick={toggelNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="rounded-md bg-black lg:hidden">
          <ul className="flex flex-col items-center ">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="py-6">
                <Link
                  className="text-sm text-white hover:text-neutral-500"
                  href={link.href}
                  onClick={toggelNavbar}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
