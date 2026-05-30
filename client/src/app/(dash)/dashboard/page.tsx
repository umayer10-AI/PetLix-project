import ListingAllCard from '@/component/ListingAllCard';
import { bookingData } from '@/lib/data';
import Link from 'next/link';

const page = async () => {

    const data = await bookingData()

    const totalListings = data.length;
const availablePets = data.filter(p => !p.adopted).length;
const adoptedPets = data.filter(p => p.adopted).length;

  return (
    <div className="bg-[#111827] min-h-screen p-8 text-white">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Listings</h1>
          <p className="text-gray-400">Manage your pet listings and adoption requests.</p>
        </div>
        <Link href={'/dashboard/add'} className="bg-linear-to-r from-red-700 to-[#220b34] px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
          + Add New Pet
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1f2937] p-4 rounded-xl border border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-red-500">{totalListings}</h2>
          <p className="text-gray-400 mt-1">Total Listings</p>
        </div>
        <div className="bg-[#1f2937] p-4 rounded-xl border border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-green-500">{availablePets}</h2>
          <p className="text-gray-400 mt-1">Available</p>
        </div>
        <div className="bg-[#1f2937] p-4 rounded-xl border border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-red-500">{adoptedPets}</h2>
          <p className="text-gray-400 mt-1">Adopted</p>
        </div>
      </div>

      {/* পেট কার্ড গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            data.map(v => <ListingAllCard key={v._id} pet={v}></ListingAllCard>)
        }
      </div>
    </div>
    );
};

export default page;