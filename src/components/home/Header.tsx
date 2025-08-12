const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="inline-flex items-center justify-center w-15 h-15 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg ">
          <span className="text-3xl">🧠</span>
        </div>
        <h1 className="text-5xl p-2 md:text-6xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent ">
          ListEngine
        </h1>
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
    </div>
  );
};

export default Header;
