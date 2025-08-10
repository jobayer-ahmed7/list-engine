"use client";

import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, MultiValue } from "react-select";
import { toast } from "sonner";

interface Option {
  value: string;
  label: string;
}

const colors: Option[] = [
  { value: "Azalea", label: "Azalea" },
  { value: "Black", label: "Black" },
  { value: "Cherry Red", label: "Cherry Red" },
  { value: "Dark Heather", label: "Dark Heather" },
  { value: "Heather Purple", label: "Heather Purple" },
  { value: "Navy", label: "Navy" },
  { value: "Royal", label: "Royal" },
  { value: "Sport Grey", label: "Sport Grey" },
  { value: "White", label: "White" },
];

const sizes: Option[] = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "2XL", label: "2XL" },
  { value: "3XL", label: "3XL" },
  { value: "5XL", label: "5XL" },
];

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
      toast('Please enter a base product title.');
      return;
    }

    // Check if at least one variant is selected (color, size, or pack)
    const hasVariants = selectedColors.length > 0 || selectedSizes.length > 0 || selectedPacks.length > 0;
    if (!hasVariants) {
      toast('Please select at least one variant (color, size, or pack).');
      return;
    }

    const combinations: string[] = [];
    
    // Use empty arrays with single empty item if no selection for that variant
    const colorsToUse = selectedColors.length > 0 ? selectedColors : [{ value: '', label: '' }];
    const sizesToUse = selectedSizes.length > 0 ? selectedSizes : [{ value: '', label: '' }];
    const packsToUse = selectedPacks.length > 0 ? selectedPacks : [{ value: '', label: '' }];

    colorsToUse.forEach((color: Option) => {
      sizesToUse.forEach((size: Option) => {
        packsToUse.forEach((pack: Option) => {
          let listing = baseProduct;
          
          // Replace placeholders only if they exist in the base product and have values
          if (color.value && listing.includes('[color]')) {
            listing = listing.replace(/\[color\]/g, color.value);
          }
          if (size.value && listing.includes('[size]')) {
            listing = listing.replace(/\[size\]/g, size.value);
          }
          if (pack.value && listing.includes('[pack]')) {
            listing = listing.replace(/\[pack\]/g, pack.value);
          }
          
          combinations.push(listing);
        });
      });
    });

    setGeneratedListings(combinations);
  };

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(generatedListings.join("\n"));
      toast('Copied to clipboard!');
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast('Failed to copy to clipboard');
    }
  };

  const clearResults = (): void => {
    setGeneratedListings([]);
  };

  const handleColorChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ): void => {
    console.log("Color selection changed:", newValue, actionMeta);
    
    setSelectedColors(Array.from(newValue));
  };

  const handleColorInputChange = (value: string): void => {
    setColorInput(value);
    
    // Parse comma-separated colors and update selectedColors
    if (value.trim()) {
      const colors = value
        .split(',')
        .map(color => color.trim())
        .filter(color => color.length > 0)
        .map(color => ({ value: color, label: color }));
      
      setSelectedColors(colors);
    } else {
      setSelectedColors([]);
    }
  };

  const handleColorCreate = (inputValue: string): void => {
    const newColor: Option = { value: inputValue, label: inputValue };
    console.log("Creating new color:", newColor);
    setSelectedColors([...selectedColors, newColor]);
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
      toast('Pack value must be a number.');
      return;
    }
    
    const newPack: Option = { value: numValue, label: numValue };
    console.log("Creating new pack:", newPack);
    setSelectedPacks([...selectedPacks, newPack]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🧠 ListEngine
          </h1>
          <p className="text-lg text-gray-600">
            Generate product title combinations for e-commerce platforms
          </p>
        </div>

        {/* Main Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            {/* Base Product Title */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                📝 Base Product Title
              </label>
              <textarea
                value={baseProduct}
                onChange={(e) => setBaseProduct(e.target.value)}
                className="w-full text-black p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 h-24 resize-none text-sm"
                placeholder="Enter your product title with [color], [size], and [pack] placeholders"
              />
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <span className="mr-2">💡</span>
                Use{" "}
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-xs mx-1">
                  [color]
                </span>{" "}
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-mono text-xs mx-1">
                  [size]
                </span>{" "}
                and{" "}
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-mono text-xs mx-1">
                  [pack]
                </span>{" "}
                as placeholders
              </div>
            </div>

            {/* Selection Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Colors */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  🎨 Enter Colors
                </label>
                <input
                  type="text"
                  value={colorInput}
                  onChange={(e) => handleColorInputChange(e.target.value)}
                  className="w-full text-black p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Black, Fuchsia, Heather Charcoal, Heather Grey, Navy, Peach, Pink, Red, Slate, White"
                />
                {selectedColors.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedColors.map((color, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {color.value}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-2">📝</span>
                  Separate multiple colors with commas (e.g., Black, Navy, White)
                </div>
              </div>

              {/* Sizes */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  📏 Select Sizes
                </label>
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
                      borderColor: "#e5e7eb",
                      padding: "4px",
                      backgroundColor: "white",
                      "&:hover": {
                        borderColor: "#10b981",
                      },
                      "&:focus-within": {
                        borderColor: "#10b981",
                        boxShadow: "0 0 0 1px #10b981",
                      },
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: "white",
                      borderRadius: "12px",
                      border: "2px solid #e5e7eb",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#d1fae5" : "white",
                      color: "#1f2937",
                      fontWeight: state.isFocused ? "500" : "400",
                      "&:active": {
                        backgroundColor: "#a7f3d0",
                      },
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: "#d1fae5",
                      borderRadius: "8px",
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: "#047857",
                      fontWeight: "500",
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
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-2">✨</span>
                  Type any size and press Enter to add custom sizes
                </div>
              </div>

              {/* Packs */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  📦 Select Pack Quantities
                </label>
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
                      borderColor: "#e5e7eb",
                      padding: "4px",
                      backgroundColor: "white",
                      "&:hover": {
                        borderColor: "#f97316",
                      },
                      "&:focus-within": {
                        borderColor: "#f97316",
                        boxShadow: "0 0 0 1px #f97316",
                      },
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: "white",
                      borderRadius: "12px",
                      border: "2px solid #e5e7eb",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#fed7aa" : "white",
                      color: "#1f2937",
                      fontWeight: state.isFocused ? "500" : "400",
                      "&:active": {
                        backgroundColor: "#fdba74",
                      },
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: "#fed7aa",
                      borderRadius: "8px",
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: "#c2410c",
                      fontWeight: "500",
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
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-2">🔢</span>
                  Type numbers only (e.g., 1, 2, 5, 12) and press Enter
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={handleGenerate}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
              >
                ✨ Generate Listings
              </button>
            </div>
          </div>

          {/* Results Section */}
          {generatedListings.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  🎉 Generated Listings ({generatedListings.length})
                </h3>
                <div className="flex space-x-3">
                  <button
                    onClick={copyToClipboard}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    📋 Copy All
                  </button>
                  <button
                    onClick={clearResults}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    🗑️ Clear
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 max-h-96 overflow-y-auto">
                {generatedListings.map((listing: string, index: number) => (
                  <div
                    key={index}
                    className="py-2 px-3 hover:bg-white rounded-lg transition-colors duration-150"
                  >
                    <span className="text-sm text-gray-500 mr-3">
                      {index + 1}.
                    </span>
                    <span className="text-gray-800">{listing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  How it works
                </h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>
                    • Enter your base product title with [color], [size], and [pack]
                    placeholders
                  </li>
                  <li>
                    • Enter colors separated by commas (like
                    Black, Fuchsia, Heather Charcoal, etc.)
                  </li>
                  <li>
                    • Select sizes from the list or type custom sizes (like 4XL,
                    XXXS, etc.)
                  </li>
                  <li>
                    • Enter pack quantities as numbers (like 1, 2, 5, 12, etc.)
                  </li>
                  <li>• At least one variant (color, size, or pack) must be selected</li>
                  <li>• Click generate to create all possible combinations</li>
                  <li>• Copy the results for your product listings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
