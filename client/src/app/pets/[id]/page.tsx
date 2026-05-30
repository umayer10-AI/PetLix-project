'use client';

import Image from 'next/image';

const pet = {
  name: "Buddy",
  type: "Dog",
  breed: "Golden Retriever",
  age: 2,
  gender: "Male",
  size: "Large",
  image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
  description: "Friendly and playful dog who loves kids.",
  vaccinated: true,
  neutered: true,
  healthCondition: "Healthy",
  adopted: false,
  location: "Dhaka",
  temperament: ["Friendly", "Playful"],
  goodWithKids: true,
  goodWithPets: true,
  adoptionFee: 500,
};

export default function PetDetailsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Side */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <Image
              src={pet.image}
              alt={pet.name}
              width={1000}
              height={600}
              className="w-full h-[450px] object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-4xl font-bold">{pet.name}</h1>
                  <p className="text-gray-500">
                    {pet.breed} • {pet.location}
                  </p>
                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  Available
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                {pet.description}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="border rounded-xl p-4">
                  <p className="text-gray-500">Age</p>
                  <h3 className="font-semibold">{pet.age} Years</h3>
                </div>

                <div className="border rounded-xl p-4">
                  <p className="text-gray-500">Gender</p>
                  <h3 className="font-semibold">{pet.gender}</h3>
                </div>

                <div className="border rounded-xl p-4">
                  <p className="text-gray-500">Size</p>
                  <h3 className="font-semibold">{pet.size}</h3>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Pet Information
              </h2>

              <div className="space-y-3">
                <p>
                  <strong>Type:</strong> {pet.type}
                </p>

                <p>
                  <strong>Health:</strong> {pet.healthCondition}
                </p>

                <p>
                  <strong>Vaccinated:</strong>{" "}
                  {pet.vaccinated ? "Yes" : "No"}
                </p>

                <p>
                  <strong>Neutered:</strong>{" "}
                  {pet.neutered ? "Yes" : "No"}
                </p>

                <p>
                  <strong>Good With Kids:</strong>{" "}
                  {pet.goodWithKids ? "Yes" : "No"}
                </p>

                <p>
                  <strong>Good With Pets:</strong>{" "}
                  {pet.goodWithPets ? "Yes" : "No"}
                </p>

                <p>
                  <strong>Adoption Fee:</strong> ৳
                  {pet.adoptionFee}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div>
          <div className="sticky top-24 bg-slate-900 text-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-2">
              ❤️ Request to Adopt
            </h2>

            <p className="text-sm text-slate-300 mb-5">
              Fill out this form and the owner will review
              your request.
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-sm">Pet Name</label>
                <input
                  value={pet.name}
                  readOnly
                  className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-sm">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-sm">
                  Preferred Pickup Date
                </label>
                <input
                  type="date"
                  className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-sm">
                  Message to Owner
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell the owner why you'd be a great match..."
                  className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-pink-500 to-cyan-400"
              >
                Adopt {pet.name}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}