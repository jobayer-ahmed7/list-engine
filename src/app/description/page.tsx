"use client"
import React, { useState } from "react";
import { toast } from "sonner";
import HowItWorks from "@/components/description/HowItWorks";

const GenerateDescriptionPage = () => {
  const [productInfo, setProductInfo] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [keyFeatures, setKeyFeatures] = useState<string>("");
  const [targetAudience, setTargetAudience] = useState<string>("");
  const [generatedDescriptions, setGeneratedDescriptions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = (): void => {
    // Validation
    if (!productInfo.trim()) {
      toast("Please enter product information.");
      return;
    }

    if (!productName.trim()) {
      toast("Please enter a product name.");
      return;
    }

    setIsGenerating(true);

    // Simulate API call with timeout
    setTimeout(() => {
      const descriptions = generateDescriptions(
        productInfo,
        productName,
        keyFeatures,
        targetAudience
      );
      setGeneratedDescriptions(descriptions);
      setIsGenerating(false);
      toast("Descriptions generated successfully!");
    }, 2000);
  };

  const generateDescriptions = (
    info: string,
    name: string,
    features: string,
    audience: string
  ): string[] => {
    const baseTemplates = [
      `Discover the exceptional ${name} - ${info}${features ? `. Key features include: ${features}` : ""}${audience ? `. Perfect for ${audience}` : ""}.`,
      `Experience superior quality with our ${name}. ${info}${features ? ` This product stands out with ${features}` : ""}${audience ? `, making it ideal for ${audience}` : ""}.`,
      `Introducing the ${name} - your solution for premium quality and reliability. ${info}${features ? ` Notable features: ${features}` : ""}${audience ? `. Designed specifically for ${audience}` : ""}.`,
      `Elevate your experience with the ${name}. ${info}${features ? ` Featuring ${features}` : ""}${audience ? `, this product caters perfectly to ${audience}` : ""}.`,
      `The ${name} delivers outstanding performance and quality. ${info}${features ? ` Enhanced with ${features}` : ""}${audience ? `. Tailored for ${audience}` : ""}.`
    ];

    const variations = [
      " Satisfaction guaranteed with every purchase.",
      " Premium quality meets affordability.",
      " Trusted by thousands of customers worldwide.",
      " Fast shipping and excellent customer service.",
      " Built to last with superior craftsmanship."
    ];

    return baseTemplates.map((template, index) => 
      template + variations[index % variations.length]
    );
  };

  const clearResults = (): void => {
    setGeneratedDescriptions([]);
  };

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(generatedDescriptions.join("\n\n"));
      toast("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast("Failed to copy to clipboard");
    }
  };

  return (
    <div>
      {/* Main Form */}
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden">
          {/* Card decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-xl">📝</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Product Description Generator</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Create compelling product descriptions that convert visitors into customers
              </p>
            </div>

            {/* Input Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Product Name */}
              <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🏷️</span>
                  </div>
                  <label className="text-lg font-bold text-gray-800">
                    Product Name
                  </label>
                </div>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full text-gray-800 p-4 border-2 border-gray-200/50 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 text-sm backdrop-blur-sm bg-white/80"
                  placeholder="Premium Wireless Headphones"
                />
                <div className="flex items-center mt-3 text-xs text-gray-600 bg-blue-50/80 p-2 rounded-lg">
                  <span className="mr-2">💡</span>
                  <span>Enter your product&apos;s name or title</span>
                </div>
              </div>

              {/* Target Audience */}
              <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">👥</span>
                  </div>
                  <label className="text-lg font-bold text-gray-800">
                    Target Audience
                  </label>
                </div>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full text-gray-800 p-4 border-2 border-gray-200/50 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 text-sm backdrop-blur-sm bg-white/80"
                  placeholder="music lovers, professionals, gamers"
                />
                <div className="flex items-center mt-3 text-xs text-gray-600 bg-purple-50/80 p-2 rounded-lg">
                  <span className="mr-2">🎯</span>
                  <span>Who is this product for? (Optional)</span>
                </div>
              </div>
            </div>

            {/* Product Information - Full Width */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white text-lg">📋</span>
                </div>
                <label className="text-xl font-bold text-gray-800">
                  Product Information
                </label>
              </div>
              <textarea
                value={productInfo}
                onChange={(e) => setProductInfo(e.target.value)}
                className="w-full text-gray-800 p-5 border-2 border-gray-200/50 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-400/20 focus:outline-none transition-all duration-300 h-32 resize-none text-base backdrop-blur-sm bg-white/60 shadow-inner"
                placeholder="Enter detailed product information, specifications, materials, dimensions, etc."
              />
              <div className="flex items-center mt-3 text-sm text-gray-600 bg-gradient-to-r from-green-50/80 to-teal-50/80 p-3 rounded-xl border border-green-100/50">
                <span className="mr-2 text-lg">💡</span>
                <span>Be as detailed as possible about your product&apos;s specifications, benefits, and unique selling points</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white text-lg">⭐</span>
                </div>
                <label className="text-xl font-bold text-gray-800">
                  Key Features
                </label>
              </div>
              <textarea
                value={keyFeatures}
                onChange={(e) => setKeyFeatures(e.target.value)}
                className="w-full text-gray-800 p-5 border-2 border-gray-200/50 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 focus:outline-none transition-all duration-300 h-28 resize-none text-base backdrop-blur-sm bg-white/60 shadow-inner"
                placeholder="noise cancellation, 30-hour battery life, premium materials, wireless connectivity"
              />
              <div className="flex items-center mt-3 text-sm text-gray-600 bg-gradient-to-r from-orange-50/80 to-red-50/80 p-3 rounded-xl border border-orange-100/50">
                <span className="mr-2 text-lg">✨</span>
                <span>List the standout features that make your product special (Optional)</span>
              </div>
            </div>

            {/* Generate Button */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="relative bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 hover:from-green-700 hover:via-teal-700 hover:to-emerald-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Generating Descriptions...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl animate-bounce">🚀</span>
                      <span>Generate Descriptions</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Descriptions Section */}
      {generatedDescriptions.length > 0 && (
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
                    Generated Descriptions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {generatedDescriptions.length} descriptions ready
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
              <div className="space-y-4">
                {generatedDescriptions.map((description: string, index: number) => (
                  <div
                    key={index}
                    className="group py-4 px-5 hover:bg-white/80 rounded-xl transition-all duration-200 border border-transparent hover:border-gray-200/50 hover:shadow-sm"
                  >
                    <div className="flex items-start">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-green-600 bg-green-100 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800 leading-relaxed text-sm">
                          {description}
                        </p>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(description);
                            toast(`Description ${index + 1} copied!`);
                          }}
                          className="mt-2 text-xs text-green-600 hover:text-green-700 font-medium opacity-0 group-hover:opacity-100 transition-all duration-200"
                        >
                          📋 Copy this description
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How It Works section */}
      <HowItWorks />
    </div>
  );
};

export default GenerateDescriptionPage;
