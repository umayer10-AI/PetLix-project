'use client';

import Link from 'next/link';
import { Menu, X, PawPrint } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Pets', path: '/pets' },
  ];

  return (
    <nav className="w-full border-b bg-[#161a1d]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-linear-to-r from-red-700 to-[#220b34] p-2 rounded-xl text-white">
            <PawPrint size={22} />
          </div>

          <h1 className="text-2xl font-bold">
            Pet<span className="text-red-700">Lix</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className=" hover:text-orange-500 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className=" hover:text-orange-500 font-medium transition"
          >
            Login
          </Link>

          <Link
            href="/get-started"
            className="bg-linear-to-r from-red-700 to-[#220b34] hover:scale-98 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-medium transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-5 space-y-4 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block text-gray-700 hover:text-orange-500 font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            className="block text-gray-700 hover:text-orange-500 font-medium"
          >
            Login
          </Link>

          <Link
            href="/get-started"
            className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-xl font-medium"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;