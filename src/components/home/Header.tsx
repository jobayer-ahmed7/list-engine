"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="inline-flex items-center justify-center w-15 h-15 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg ">
          <span className="text-3xl">🧠</span>
        </div>
        <Link href={"/"} className="text-5xl p-2 md:text-6xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent ">
          ListEngine
        </Link>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Generate powerful product title combinations for e-commerce platforms
        with ease
      </p>
      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>AI-powered</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span>Lightning fast</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span>Easy to use</span>
        </div>
      </div>
<div className="max-w-lg mx-auto my-8">
  <nav className="bg-gray-100 rounded-2xl p-1 shadow-inner">
    <div className="flex gap-4">
      <Link 
        href="/title" 
        className={`flex-1 px-6 py-3 text-center font-semibold rounded-xl transition-all duration-300 ${
          pathname === '/title'
            ? 'bg-white shadow-sm text-gray-900 '
            : 'text-gray-600 hover:bg-gray-200 hover:shadow-sm hover:text-gray-900'
        }`}
      >
        🏷️ Title
      </Link>
      <Link 
        href="/description" 
        className={`flex-1 px-6 py-3 text-center font-semibold rounded-xl transition-all duration-300 ${
          pathname === '/description'
            ? 'bg-white shadow-sm text-gray-900 '
            : 'text-gray-600 hover:bg-gray-200  hover:shadow-sm hover:text-gray-900'
        }`}
      >
        📝 Description
      </Link>
    </div>
  </nav>
</div>
    </div>
  );
};

export default Header;
