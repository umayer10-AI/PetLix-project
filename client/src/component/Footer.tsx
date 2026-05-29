'use client';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f1113] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold">
            Pet<span className="text-red-700">Lix</span>
          </h2>
          <p className="text-gray-400 mt-3">
            A modern pet adoption platform helping pets find loving homes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@petlix.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +880 1234-567890
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-red-500 transition">
              <FaFacebook />
            </Link>

            <Link href="#" className="hover:text-red-500 transition">
              <RiInstagramFill />
            </Link>

            <Link href="#" className="hover:text-red-500 transition">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} PetLix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;