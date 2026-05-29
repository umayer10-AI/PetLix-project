'use client';

import Link from 'next/link';
import { PawPrint } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full min-h-[70vh] flex items-center bg-linear-to-br from-[#161a1d] via-[#1b1f23] to-[#0f1113] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 my-10 gap-10 items-center">

        {/* Left Content */}
        <div className=''>
          <div className="flex items-center gap-2 mb-4 text-red-700">
            <PawPrint size={28} />
            <span className="font-semibold">Find Your Perfect Companion</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Adopt a Pet, <br />
            Give Love a <span className="text-red-700">Forever Home</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Discover adorable pets waiting for a loving family.
            Start your journey of adoption and change a life today.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/pets"
              className="inline-block bg-gradient-to-r from-red-700 to-[#220b34] hover:scale-95 transition px-6 py-3 rounded-xl font-semibold"
            >
              Adopt Now
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <div className="relative">
            
            {/* Glow Circle */}
            <div className="absolute -inset-6 bg-red-700 blur-3xl opacity-20 rounded-full"></div>

            {/* Main Card */}
            <div className="relative bg-[#1b1f23] border border-gray-800 p-6 rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                alt="Cute Pet"
                className="rounded-xl w-[350px] h-[350px] object-cover"
              />

              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">Meet Your New Best Friend 🐾</p>
                <p className="text-gray-400 text-sm">
                  Every pet deserves a loving home
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;