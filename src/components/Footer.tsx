export default function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-white/60 border-t border-white/20 mt-auto relative overflow-hidden">
      {/* Footer decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-2 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-2 -left-8 w-24 h-24 bg-gradient-to-tr from-pink-300/20 to-rose-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
              <span className="text-white text-sm">🧠</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              ListEngine
            </span>
          </div>
          
          <div className="flex items-center justify-center text-gray-600 mb-3">
            <span className="text-sm">Developed with</span>
            <span className="mx-2 text-red-500 animate-pulse">❤️</span>
            <span className="text-sm">by</span>
          </div>
          
          <a
            href="https://jobayerahmed.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <span>Jobayer Ahmed</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <div className="mt-4 pt-4 border-t border-gray-200/30">
            <p className="text-xs text-gray-500">
              © 2025 ListEngine. All rights reserved. Made for e-commerce professionals worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
