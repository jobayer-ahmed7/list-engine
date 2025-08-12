
const HowItWorks = () => {
    return (
             <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {/* Info decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -translate-y-16 -translate-x-16"></div>

          <div className="relative">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">💡</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  How it works
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Enter your base product title with{" "}
                      <code className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        [color]
                      </code>
                      ,{" "}
                      <code className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        [size]
                      </code>
                      , and{" "}
                      <code className="bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded font-mono text-xs">
                        [pack]
                      </code>{" "}
                      placeholders
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-pink-50/50 to-rose-50/50">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Enter colors separated by commas (like Black, Navy,
                      Fuchsia, Heather Charcoal, etc.)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-green-50/50 to-emerald-50/50">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Select sizes from the dropdown or type custom sizes (like
                      4XL, XXXS, etc.)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-orange-50/50 to-amber-50/50">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Enter pack quantities as numbers (like 1, 2, 5, 12, etc.)
                      and click generate!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default HowItWorks;