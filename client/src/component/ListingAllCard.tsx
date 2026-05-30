'use client';

import { Heart, Eye, Edit, MessageCircle, Trash2 } from 'lucide-react';

const pets = [
  {
    id: 1,
    name: "Blizzard",
    type: "Dog",
    breed: "Siberian Husky",
    price: 3000,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    requests: 1,
    status: "Available",
  },
  {
    id: 2,
    name: "Duke",
    type: "Dog",
    breed: "Rottweiler",
    price: 5000,
    image: "https://images.unsplash.com/photo-1583511655826-05700442b3c9",
    requests: 0,
    status: "Available",
  },
  {
    id: 3,
    name: "Bunny",
    type: "Rabbit",
    breed: "Holland Lop",
    price: 200,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    requests: 0,
    status: "Available",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-linear-to-r from-red-700 to-[#220b34] text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">My Listings</h1>
          <p className="text-gray-300 text-sm">
            Manage your pet listings and adoption requests
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 transition">
          + Add New Pet
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-black/30 p-4 rounded-xl text-center">
          <p className="text-xl font-bold">8</p>
          <p className="text-gray-300">Total Listings</p>
        </div>
        <div className="bg-black/30 p-4 rounded-xl text-center">
          <p className="text-xl font-bold text-green-400">8</p>
          <p className="text-gray-300">Available</p>
        </div>
        <div className="bg-black/30 p-4 rounded-xl text-center">
          <p className="text-xl font-bold text-red-400">0</p>
          <p className="text-gray-300">Adopted</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-black/40 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={pet.image}
                alt={pet.name}
                className="h-52 w-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-green-500 text-xs px-2 py-1 rounded-full">
                {pet.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold">{pet.name}</h2>
              <p className="text-gray-300 text-sm">
                {pet.type} • {pet.breed}
              </p>

              <div className="flex justify-between mt-2">
                <span className="text-pink-400 font-bold">
                  ${pet.price}
                </span>
                <span className="text-gray-400 text-sm">
                  {pet.requests} requests
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 flex items-center justify-center gap-1 bg-blue-500/80 hover:bg-blue-600 py-2 rounded-lg">
                  <Eye size={16} /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 bg-yellow-500/80 hover:bg-yellow-600 py-2 rounded-lg">
                  <Edit size={16} /> Edit
                </button>
              </div>

              <div className="flex gap-2 mt-2">
                <button className="flex-1 flex items-center justify-center gap-1 bg-purple-500/80 hover:bg-purple-600 py-2 rounded-lg">
                  <MessageCircle size={16} /> Requests
                </button>
                <button className="w-12 flex items-center justify-center bg-red-500/80 hover:bg-red-600 py-2 rounded-lg">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}