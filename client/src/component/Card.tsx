'use client';
import { Pet } from '@/lib/type';
import { Heart, MapPin, PawPrint } from 'lucide-react';

type Props = {
  pet: Pet
}

const Card = ({pet}:Props) => {
    return (
        <div>
            <div className="bg-[#1b1f23] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300">

      {/* Image */}
      <div className="relative">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-52 object-cover"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-red-700 text-white text-xs px-3 py-1 rounded-full">
          {pet.type}
        </span>

        {/* Favorite Icon */}
        <button className="absolute top-3 right-3 bg-black/50 p-2 rounded-full text-white hover:text-red-500">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 text-white">

        {/* Name + Breed */}
        <h2 className="text-xl font-bold">{pet.name}</h2>
        <p className="text-gray-400 text-sm">{pet.breed}</p>

        {/* Info */}
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">
          <span>{pet.age} yrs</span>
          <span>{pet.gender}</span>
          <span>{pet.size}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
          <MapPin size={14} />
          {pet.location}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-3 line-clamp-2">
          {pet.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">

          <div className="flex items-center gap-1 text-red-500 text-sm">
            <PawPrint size={16} />
            <span>{pet.adoptionFee} BDT</span>
          </div>

          <button className="bg-gradient-to-r from-red-700 to-[#220b34] px-4 py-2 rounded-xl text-sm hover:scale-95 transition">
            Adopt Now
          </button>

        </div>

      </div>
    </div>
        </div>
    );
};

export default Card;