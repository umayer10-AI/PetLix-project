'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'My Request', href: '/dashboard/request' },
  { name: 'Add Pet', href: '/dashboard/add' },
  { name: 'My Listings', href: '/dashboard' },
];

const SideBar = () => {
    const pathname = usePathname();

  return (
    <aside className="w-64 h-screen border-r bg-[#0f1113] p-4">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>

      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-red-700 to-[#220b34] text-white'
                  : 'hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;