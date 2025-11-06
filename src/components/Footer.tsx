import Logo from "./shared/Logo";

export default function Footer() {
  return (
    <footer className="mt-auto relative">
      {/* Match the main page background */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        {/* Footer decoration matching main page */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15"></div>
          <div className="absolute top-0 -right-4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15"></div>
        </div>

        <div className="relative">
          {/* Main footer content in glassmorphism card */}
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              {/* Card decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative text-center">
                {/* Logo and branding */}
                <Logo />

                {/* Developer credit */}
                <div className="mb-6">
                  <div className="flex items-center justify-center text-gray-700 mb-3">
                    <span className="text-sm font-medium">Crafted with</span>
                    <span className="mx-2 text-red-500 animate-pulse text-lg">
                      ❤️
                    </span>
                    <span className="text-sm font-medium">by</span>
                  </div>

                  <a
                    href="https://jobayerahmed.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span className="text-base">Jobayer Ahmed</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Copyright and tagline */}
                <div className="pt-6 border-t border-gray-200/40">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    © 2025 ListEngine. All rights reserved.
                  </p>
                  <p className="text-xs text-gray-500">
                    Empowering e-commerce professionals worldwide with
                    intelligent product listing generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
