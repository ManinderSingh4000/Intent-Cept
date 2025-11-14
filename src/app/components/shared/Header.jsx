"use client";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // mobile dropdown handler


const router = useRouter();


  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm font-sans sticky top-0 z-[1000]">
     <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-8 relative">

          <a href="/" className="flex items-center shrink-0">
            <Image
              src="/Logos/IntentCept_Logo.png"
              alt="IntentCept Logo"
              width={120}
              height={60}
              priority
              className="h-[55px] sm:h-[75px] w-auto object-contain"
            />
          </a>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14 text-gray-800 font-semibold text-[15px] lg:text-[16px]">

          <div className="relative group">
  <button className="hover:text-[#a53000] transition-colors flex items-center gap-1">
    About <ChevronDown size={16} />
  </button>

  <div className="absolute left-0 mt-3 w-48 rounded-lg bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <ul className="py-2 text-gray-800 text-sm">
      <li>
        <Link href={{ pathname: "/", hash: "why-us" }} className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]">
          Why Us
        </Link>
      </li>
      <li>
        <Link href="/#integrations" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]">
          Integrations
        </Link>
      </li>
      <li>
        <Link href="/#services" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]">
          Services
        </Link>
      </li>
    </ul>
  </div>
</div>

          {/* Pricing */}
          <Link href="/pricing" className="hover:text-[#a53000] transition-colors">Pricing</Link>

          {/* Solutions DROPDOWN */}
          <div className="relative group">
            <button className="hover:text-[#a53000] transition-colors flex items-center gap-1">
              Solutions <ChevronDown size={16} />
            </button>

            {/* Desktop Dropdown */}
            <div className="absolute left-0 mt-3 w-56 rounded-lg bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="py-2 text-gray-800 text-sm">
                <li><Link href="/solutions/website-visitor-identifier" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]">Website Visitor Identifier</Link></li>
                <li><Link href="/solutions/enhance-search" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]">Enhanced Search ID</Link></li>
                <li><Link href="/solutions/b2b-data" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]">B2B Data</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <Link href="/contact" className="hover:text-[#a53000] transition-colors">Contact</Link>
        </nav>

        {/* CTA Button (Desktop Only) */}
        <a href="/book-demo/" className="hidden md:block">
          <button className="bg-[#a53000] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#8f2800] shadow-sm hover:shadow-md transition-all duration-300">
            Book A Demo
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
  <div className="md:hidden bg-white border-t border-gray-200 shadow-md py-4 px-6 space-y-4">

    {/* ABOUT + MOBILE DROPDOWN */}
    <div>
      <button
        onClick={() =>
          setOpenDropdown(openDropdown === "about" ? null : "about")
        }
        className="flex justify-between w-full text-gray-800 font-medium hover:text-[#a53000]"
      >
        About
        <ChevronDown
          className={`transition-transform ${
            openDropdown === "about" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === "about" && (
        <ul className="mt-2 pl-4 space-y-2 text-gray-700 text-sm">
          <li>
            <Link href="/#why-us" className="block hover:text-[#a53000]">
              Why Us
            </Link>
          </li>
          <li>
            <Link href="/#integrations" className="block hover:text-[#a53000]">
              Integrations
            </Link>
          </li>
          <li>
            <Link href="/#services" className="block hover:text-[#a53000]">
              Services
            </Link>
          </li>
        </ul>
      )}
    </div>

    {/* Pricing */}
    <Link href="/pricing" className="block text-gray-800 hover:text-[#a53000]">
      Pricing
    </Link>

    {/* Solutions + mobile dropdown */}
    <div>
      <button
        onClick={() =>
          setOpenDropdown(openDropdown === "solutions" ? null : "solutions")
        }
        className="flex justify-between w-full text-gray-800 font-medium hover:text-[#a53000]"
      >
        Solutions
        <ChevronDown
          className={`transition-transform ${
            openDropdown === "solutions" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === "solutions" && (
        <ul className="mt-2 pl-4 space-y-2 text-gray-700 text-sm">
          <li>
            <Link
              href="/solutions/website-visitor-identifier"
              className="block hover:text-[#a53000]"
            >
              Website Visitor Identifier
            </Link>
          </li>
          <li>
            <Link
              href="/solutions/enhance-search"
              className="block hover:text-[#a53000]"
            >
              Enhanced Search ID
            </Link>
          </li>
          <li>
            <Link href="/solutions/b2b-data" className="block hover:text-[#a53000]">
              B2B Data
            </Link>
          </li>
        </ul>
      )}
    </div>

    {/* Contact */}
    <Link href="/contact" className="block text-gray-800 hover:text-[#a53000]">
      Contact
    </Link>

    {/* CTA Button */}
    <div className="pt-4">
      <a href="/book-demo/">
        <button className="w-full bg-[#B31C04] text-white py-2 rounded-full font-semibold hover:bg-[#8f2800] transition-all duration-300">
          Book A Demo
        </button>
      </a>
    </div>
  </div>
)}

    </header>
  );
}