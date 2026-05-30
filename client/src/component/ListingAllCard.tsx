import React from 'react';

const ListingAllCard = ({pet}) => {

  return (
    <div>
        <div className="bg-[#1f2937] p-4 rounded-xl border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <span className={`text-xs px-2 py-1 rounded ${pet.adopted ? 'bg-red-900 text-red-300' : 'bg-green-800 text-green-300'}`}>
                {pet.adopted ? "Adopted" : "Available"}
              </span>
            </div>

            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded-lg mb-4" />

            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold">{pet.name}</h2>
                <p className="text-gray-400 text-sm">{pet.type} • {pet.breed}</p>
              </div>
              <div className="text-right">
                <p className="text-red-500 font-bold">${pet.adoptionFee}</p>
                <p className="text-gray-500 text-xs">0 requests</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="flex items-center justify-center gap-2 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300 text-sm font-medium">
                👁️ View
              </button>
              <button className="flex items-center justify-center gap-2 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300 text-sm font-medium">
                ✏️ Edit
              </button>
              <button className="flex items-center justify-center gap-2 py-2 rounded-md bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700 text-blue-300 transition duration-300 text-sm font-medium">
                📋 Requests
              </button>
              <button className="flex items-center justify-center gap-2 py-2 rounded-md bg-red-900/40 hover:bg-red-800/60 border border-red-700 text-red-400 transition duration-300 text-sm font-medium">
                🗑️ Delete
              </button>
            </div>
          </div>
    </div>
  );
};

export default ListingAllCard;