"use client";

import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, MultiValue } from "react-select";
import { toast } from "sonner";
import { Option, sizes } from "@/constants/size";
import Header from "@/components/home/Header";
import HowItWorks from "@/components/home/HowItWorks";
import GeneratedTitleSection from "@/components/home/GeneratedTitleSection";

export default function Home() {
  const [baseProduct, setBaseProduct] = useState<string>("");
  const [colorInput, setColorInput] = useState<string>("");
  const [selectedColors, setSelectedColors] = useState<Option[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Option[]>([]);
  const [selectedPacks, setSelectedPacks] = useState<Option[]>([]);
  const [generatedListings, setGeneratedListings] = useState<string[]>([]);

  const handleGenerate = (): void => {
    // Check if base product is entered
    if (!baseProduct.trim()) {
      toast("Please enter a base product title.");
      return;
    }

    // Check if at least one variant is selected (color, size, or pack)
    const hasVariants =
      selectedColors.length > 0 ||
      selectedSizes.length > 0 ||
      selectedPacks.length > 0;
    if (!hasVariants) {
      toast("Please select at least one variant (color, size, or pack).");
      return;
    }

    const combinations: string[] = [];

    // Use empty arrays with single empty item if no selection for that variant
    const colorsToUse =
      selectedColors.length > 0 ? selectedColors : [{ value: "", label: "" }];
    const sizesToUse =
      selectedSizes.length > 0 ? selectedSizes : [{ value: "", label: "" }];
    const packsToUse =
      selectedPacks.length > 0 ? selectedPacks : [{ value: "", label: "" }];

    colorsToUse.forEach((color: Option) => {
      sizesToUse.forEach((size: Option) => {
        packsToUse.forEach((pack: Option) => {
          let listing = baseProduct;

          // Replace placeholders only if they exist in the base product and have values
          if (color.value && listing.includes("[color]")) {
            listing = listing.replace(/\[color\]/g, color.value);
          }
          if (size.value && listing.includes("[size]")) {
            listing = listing.replace(/\[size\]/g, size.value);
          }
          if (pack.value && listing.includes("[pack]")) {
            listing = listing.replace(/\[pack\]/g, pack.value);
          }

          combinations.push(listing);
        });
      });
    });

    setGeneratedListings(combinations);
  };


  const clearResults = (): void => {
    setGeneratedListings([]);
  };

  const handleColorInputChange = (value: string): void => {
    setColorInput(value);

    // Parse comma-separated colors and update selectedColors
    if (value.trim()) {
      const colors = value
        .split(",")
        .map((color) => color.trim())
        .filter((color) => color.length > 0)
        .map((color) => ({ value: color, label: color }));

      setSelectedColors(colors);
    } else {
      setSelectedColors([]);
    }
  };

  const handleSizeChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ): void => {
    console.log("Size selection changed:", newValue, actionMeta);
    setSelectedSizes(Array.from(newValue));
  };

  const handleSizeCreate = (inputValue: string): void => {
    const newSize: Option = { value: inputValue, label: inputValue };
    console.log("Creating new size:", newSize);
    setSelectedSizes([...selectedSizes, newSize]);
  };

  const handlePackChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ): void => {
    console.log("Pack selection changed:", newValue, actionMeta);
    setSelectedPacks(Array.from(newValue));
  };

  const handlePackCreate = (inputValue: string): void => {
    // Validate that it's a number
    const numValue = inputValue.trim();
    if (!/^\d+$/.test(numValue)) {
      toast("Pack value must be a number.");
      return;
    }

    const newPack: Option = { value: numValue, label: numValue };
    console.log("Creating new pack:", newPack);
    setSelectedPacks([...selectedPacks, newPack]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Header */}
        <Header />

        {/* Main Form */}
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden">
            {/* Card decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-400/10 to-yellow-400/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative">
              {/* Base Product Title */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-white text-lg">📝</span>
                  </div>
                  <label className="text-xl font-bold text-gray-800">
                    Base Product Title
                  </label>
                </div>
                <textarea
                  value={baseProduct}
                  onChange={(e) => setBaseProduct(e.target.value)}
                  className="w-full text-gray-800 p-5 border-2 border-gray-200/50 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 h-28 resize-none text-base backdrop-blur-sm bg-white/60 shadow-inner"
                  placeholder="Enter your product title with [color], [size], and [pack] placeholders"
                />
                <div className="flex items-center mt-3 text-sm text-gray-600 bg-gradient-to-r from-blue-50/80 to-purple-50/80 p-3 rounded-xl border border-blue-100/50">
                  <span className="mr-2 text-lg">💡</span>
                  <span className="mr-2">Use</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-lg font-mono text-xs mx-1 shadow-sm">
                    [color]
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-lg font-mono text-xs mx-1 shadow-sm">
                    [size]
                  </span>
                  <span className="mr-1">and</span>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-lg font-mono text-xs mx-1 shadow-sm">
                    [pack]
                  </span>
                  <span>as placeholders</span>
                </div>
              </div>

              {/* Selection Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {/* Colors */}
                <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">🎨</span>
                    </div>
                    <label className="text-lg font-bold text-gray-800">
                      Colors
                    </label>
                  </div>
                  <input
                    type="text"
                    value={colorInput}
                    onChange={(e) => handleColorInputChange(e.target.value)}
                    className="w-full text-gray-800 p-4 border-2 border-gray-200/50 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 focus:outline-none transition-all duration-300 text-sm backdrop-blur-sm bg-white/80"
                    placeholder="Black, Fuchsia, Heather Charcoal, Navy..."
                  />
                  {selectedColors.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedColors.map((color, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-sm"
                        >
                          {color.value}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center mt-3 text-xs text-gray-600 bg-pink-50/80 p-2 rounded-lg">
                    <span className="mr-2">📝</span>
                    <span>Separate with commas (e.g., Black, Navy, White)</span>
                  </div>
                </div>

                {/* Sizes */}
                <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">📏</span>
                    </div>
                    <label className="text-lg font-bold text-gray-800">
                      Sizes
                    </label>
                  </div>
                  <CreatableSelect<Option, true>
                    options={sizes}
                    isMulti
                    value={selectedSizes}
                    onChange={handleSizeChange}
                    onCreateOption={handleSizeCreate}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Choose or type custom sizes..."
                    formatCreateLabel={(inputValue: string) =>
                      `Add "${inputValue}"`
                    }
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderRadius: "12px",
                        borderWidth: "2px",
                        borderColor: "rgba(229, 231, 235, 0.5)",
                        padding: "4px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(4px)",
                        "&:hover": {
                          borderColor: "#10b981",
                        },
                        "&:focus-within": {
                          borderColor: "#10b981",
                          boxShadow: "0 0 0 4px rgba(16, 185, 129, 0.2)",
                        },
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "12px",
                        border: "2px solid rgba(229, 231, 235, 0.5)",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                          ? "#d1fae5"
                          : "transparent",
                        color: "#1f2937",
                        fontWeight: state.isFocused ? "600" : "500",
                        "&:active": {
                          backgroundColor: "#a7f3d0",
                        },
                      }),
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: "#d1fae5",
                        borderRadius: "8px",
                        border: "1px solid #10b981",
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: "#047857",
                        fontWeight: "600",
                      }),
                      multiValueRemove: (base) => ({
                        ...base,
                        color: "#047857",
                        "&:hover": {
                          backgroundColor: "#10b981",
                          color: "white",
                        },
                      }),
                    }}
                  />
                  <div className="flex items-center mt-3 text-xs text-gray-600 bg-green-50/80 p-2 rounded-lg">
                    <span className="mr-2">✨</span>
                    <span>
                      Type any size and press Enter to add custom sizes
                    </span>
                  </div>
                </div>

                {/* Packs */}
                <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">📦</span>
                    </div>
                    <label className="text-lg font-bold text-gray-800">
                      Pack Quantities
                    </label>
                  </div>
                  <CreatableSelect<Option, true>
                    options={[]}
                    isMulti
                    value={selectedPacks}
                    onChange={handlePackChange}
                    onCreateOption={handlePackCreate}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Type pack quantities (numbers only)..."
                    formatCreateLabel={(inputValue: string) =>
                      `Add "${inputValue}"`
                    }
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderRadius: "12px",
                        borderWidth: "2px",
                        borderColor: "rgba(229, 231, 235, 0.5)",
                        padding: "4px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(4px)",
                        "&:hover": {
                          borderColor: "#f97316",
                        },
                        "&:focus-within": {
                          borderColor: "#f97316",
                          boxShadow: "0 0 0 4px rgba(249, 115, 22, 0.2)",
                        },
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "12px",
                        border: "2px solid rgba(229, 231, 235, 0.5)",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                          ? "#fed7aa"
                          : "transparent",
                        color: "#1f2937",
                        fontWeight: state.isFocused ? "600" : "500",
                        "&:active": {
                          backgroundColor: "#fdba74",
                        },
                      }),
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: "#fed7aa",
                        borderRadius: "8px",
                        border: "1px solid #f97316",
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: "#c2410c",
                        fontWeight: "600",
                      }),
                      multiValueRemove: (base) => ({
                        ...base,
                        color: "#c2410c",
                        "&:hover": {
                          backgroundColor: "#f97316",
                          color: "white",
                        },
                      }),
                    }}
                  />
                  <div className="flex items-center mt-3 text-xs text-gray-600 bg-orange-50/80 p-2 rounded-lg">
                    <span className="mr-2">🔢</span>
                    <span>
                      Type numbers only (e.g., 1, 2, 5, 12) and press Enter
                    </span>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <div className="text-center mt-2">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                  <button
                    onClick={handleGenerate}
                    className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg flex items-center gap-3"
                  >
                    <span className="text-2xl animate-bounce">✨</span>
                    <span>Generate Listings</span>
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Generated Title Section Section */}
        {generatedListings.length > 0 && (
         <GeneratedTitleSection generatedListings={generatedListings} clearResults={clearResults}/>
        )}

        {/* How It Works section */}
        <HowItWorks />
      </div>
    </div>
  );
}
