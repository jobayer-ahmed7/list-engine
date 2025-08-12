import { toast } from "sonner";

const GeneratedTitleSection = ({
  generatedListings,
  clearResults,
}: {
  generatedListings: string[];
  clearResults: () => void;
}) => {
  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(generatedListings.join("\n"));
      toast("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast("Failed to copy to clipboard");
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden">
      {/* Results decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full -translate-y-24 translate-x-24"></div>

      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <span className="text-white text-xl">🎉</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Generated Listings
              </h3>
              <p className="text-gray-600 text-sm">
                {generatedListings.length} combinations ready
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={copyToClipboard}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>📋</span>
              Copy All
            </button>
            <button
              onClick={clearResults}
              className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-6 py-3 rounded-xl transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>🗑️</span>
              Clear
            </button>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-gradient-to-r from-gray-50/80 to-gray-100/80 rounded-2xl p-6 max-h-96 overflow-y-auto border border-gray-200/30">
          <div className="space-y-2">
            {generatedListings.map((listing: string, index: number) => (
              <div
                key={index}
                className="group py-3 px-4 hover:bg-white/80 rounded-xl transition-all duration-200 border border-transparent hover:border-gray-200/50 hover:shadow-sm"
              >
                <div className="flex items-start">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-indigo-600 bg-indigo-100 rounded-lg mr-3 group-hover:bg-indigo-200 transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-gray-800 font-medium leading-relaxed">
                    {listing}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedTitleSection;
