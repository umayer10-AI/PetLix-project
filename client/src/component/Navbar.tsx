'use client';
import Link from 'next/link';
import { Menu, X, PawPrint } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Pets', path: '/pets' },
  ];

  return (
    <nav className="w-full border-b border-b-red-900 bg-[#0f1113] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-linear-to-r from-red-700 to-[#220b34] p-2 rounded-xl text-white">
            <PawPrint size={22} />
          </div>

          <h1 className="text-2xl font-bold">
            Pet<span className="text-red-700">Lix</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`px-3 py-1 rounded-lg transition font-medium ${
                pathname === link.path
                  ? 'bg-red-800 text-white'
                  : 'hover:text-red-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="hover:text-red-500 font-medium transition"
          >
            Login
          </Link>

          <Link
            href="/get-started"
            className="bg-linear-to-r from-red-700 to-[#220b34] hover:scale-98 text-white px-5 py-2 rounded-xl font-medium transition"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 space-y-4 bg-[#161a1d]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block px-3 py-2 rounded-lg ${
                pathname === link.path
                  ? 'bg-red-800 text-white'
                  : 'hover:text-red-500'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            className="block hover:text-red-700"
          >
            Login
          </Link>

          <Link
            href="/get-started"
            className="block bg-linear-to-r from-red-700 to-[#220b34] hover:scale-98 text-white text-center py-2 rounded-xl"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;