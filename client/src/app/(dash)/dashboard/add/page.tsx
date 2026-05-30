import React from 'react';

const page = () => {
    return (
        <div className="max-w-4xl mx-auto">
  <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">

    <div className="mb-8">
      <h1 className="text-4xl font-bold text-white">
        Add New Pet
      </h1>
      <p className="text-slate-400 mt-2">
        Fill in your pet details for adoption listing.
      </p>
    </div>

    <form className="grid md:grid-cols-2 gap-5">

      {/* Pet Name */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Pet Name
        </label>
        <input
          type="text"
          placeholder="Buddy"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Species */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Species
        </label>
        <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
          <option>Dog</option>
          <option>Cat</option>
          <option>Bird</option>
          <option>Rabbit</option>
        </select>
      </div>

      {/* Breed */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Breed
        </label>
        <input
          type="text"
          placeholder="Golden Retriever"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
        />
      </div>

      {/* Age */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Age
        </label>
        <input
          type="number"
          placeholder="2"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Gender
        </label>
        <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Location
        </label>
        <input
          type="text"
          placeholder="Dhaka"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
        />
      </div>

      {/* Image URL */}
      <div className="md:col-span-2">
        <label className="text-sm text-slate-300 mb-2 block">
          Image URL
        </label>
        <input
          type="url"
          placeholder="https://i.ibb.co/example.jpg"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
        />
      </div>

      {/* Health */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Health Status
        </label>
        <input
          type="text"
          placeholder="Healthy"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
        />
      </div>

      {/* Vaccination */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Vaccination Status
        </label>
        <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white">
          <option>Vaccinated</option>
          <option>Not Vaccinated</option>
        </select>
      </div>

      {/* Fee */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Adoption Fee
        </label>
        <input
          type="number"
          placeholder="500"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
        />
      </div>

      {/* Owner Email */}
      <div>
        <label className="text-sm text-slate-300 mb-2 block">
          Owner Email
        </label>
        <input
          type="email"
          value="user@gmail.com"
          readOnly
          className="w-full bg-slate-700 border border-slate-600 rounded-xl p-3 text-slate-300 cursor-not-allowed"
        />
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <label className="text-sm text-slate-300 mb-2 block">
          Description
        </label>
        <textarea
          rows={5}
          placeholder="Tell people about your pet..."
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white resize-none"
        />
      </div>

      <div className="md:col-span-2 pt-3">
        <button
          type="submit"
          className="w-full py-4 rounded-xl font-semibold text-white bg-linear-to-r from-red-700 to-[#220b34] hover:scale-[1.02] transition-all duration-300"
        >
          Add Pet Listing
        </button>
      </div>

    </form>
  </div>
</div>
    );
};

export default page;