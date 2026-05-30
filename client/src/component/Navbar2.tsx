'use client';

import { PawPrint } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';

export default function Navbar2() {
  return (
    <div className='border-b border-b-red-900'>
        <nav className="max-w-[80%] mx-auto w-full py-4 flex items-center justify-between bg-[#0f1113]">
      
      {/* Left Side */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-linear-to-r from-red-700 to-[#220b34] p-2 rounded-xl text-white">
            <PawPrint size={22} />
          </div>

          <h1 className="text-2xl font-bold">
            Pet<span className="text-red-700">Lix</span>
          </h1>
        </Link>

        {/* Dashboard Link */}
        <Link
          href="/dashboard"
          className="text-gray-400 hover:text-blue-600 font-medium flex items-center gap-1"
        >
          <RxDashboard />Dashboard
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        
        {/* Avatar */}
        <Image
          src="https://i.pravatar.cc/100"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />

        {/* Name + Email (stacked) */}
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-sm">Umayer Ahmad</span>
          <span className="text-xs text-gray-400">umayer@email.com</span>
        </div>

      </div>
    </nav>
    </div>
  );
}