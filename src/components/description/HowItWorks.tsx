const HowItWorks = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
        {/* Card decoration */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full -translate-y-16 -translate-x-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-green-400/10 to-teal-400/10 rounded-full translate-y-12 translate-x-12"></div>

        <div className="relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white text-xl">❓</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Generate compelling product descriptions in just a few simple steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📝</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Enter Product Details</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill in your product name and detailed information including specifications, materials, and benefits.
              </p>
            </div>

            {/* Step 2 */}
            <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Add Key Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Optionally specify key features and target audience to create more personalized descriptions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Generate & Copy</h3>
              <p className="text-gray-600 leading-relaxed">
                Get multiple professional descriptions instantly. Copy individual descriptions or all at once.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="backdrop-blur-sm bg-gradient-to-r from-green-50/80 to-teal-50/80 border border-green-100/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✨</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Why Use Our Generator?</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Save time writing product descriptions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Multiple variations for A/B testing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Professional, conversion-focused copy</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Consistent brand voice and tone</span>
                  </li>
                </ul>
              </div>

              {/* Tips */}
              <div className="backdrop-blur-sm bg-gradient-to-r from-purple-50/80 to-pink-50/80 border border-purple-100/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💡</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Pro Tips</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-3">→</span>
                    <span>Be specific about product benefits</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-3">→</span>
                    <span>Include technical specifications</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-3">→</span>
                    <span>Mention your target audience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-3">→</span>
                    <span>Highlight unique selling points</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
