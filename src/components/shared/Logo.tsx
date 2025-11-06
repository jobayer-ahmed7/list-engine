import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="inline-flex items-center justify-center w-15 h-15 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg ">
        <span className="text-3xl">🧠</span>
      </div>
      <Link
        href={"/"}
        className="text-5xl p-2 md:text-6xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent "
      >
        ListEngine
      </Link>
    </div>
  );
};

export default Logo;
