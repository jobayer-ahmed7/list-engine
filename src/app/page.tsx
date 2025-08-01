'use client';

import { useState } from 'react';
import Select from 'react-select';

const colors = [
  { value: 'Azalea', label: 'Azalea' },
  { value: 'Black', label: 'Black' },
  { value: 'Cherry Red', label: 'Cherry Red' },
  { value: 'Dark Heather', label: 'Dark Heather' },
  { value: 'Heather Purple', label: 'Heather Purple' },
  { value: 'Navy', label: 'Navy' },
  { value: 'Royal', label: 'Royal' },
  { value: 'Sport Grey', label: 'Sport Grey' },
  { value: 'White', label: 'White' }
];

const sizes = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: '2XL', label: '2XL' }
];

export default function Home() {
  const [baseProduct, setBaseProduct] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [generatedListings, setGeneratedListings] = useState([]);

  const handleGenerate = () => {
    if (!selectedColors.length || !selectedSizes.length) {
      alert('Please select at least one color and one size.');
      return;
    }

    const combinations = [];

    selectedColors.forEach(color => {
      selectedSizes.forEach(size => {
        let listing = baseProduct;
        listing = listing.replace('[color]', color.value);
        listing = listing.replace('[size]', size.value);
        combinations.push(listing);
      });
    });

    setGeneratedListings(combinations);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedListings.join('\n'));
    alert('Copied to clipboard!');
  };

  const clearResults = () => {
    setGeneratedListings([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🧠 ListEngine</h1>
          <p className="text-lg text-gray-600">Generate product title combinations for e-commerce platforms</p>
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
                placeholder="Enter your product title with [color] and [size] placeholders"
              />
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <span className="mr-2">💡</span>
                Use <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-xs mx-1">[color]</span> and <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-mono text-xs mx-1">[size]</span> as placeholders
              </div>
            </div>

            {/* Selection Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Colors */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  🎨 Select Colors
                </label>
                <Select
                  options={colors}
                  isMulti
                  onChange={setSelectedColors}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Choose colors..."
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderRadius: '12px',
                      borderWidth: '2px',
                      borderColor: '#e5e7eb',
                      padding: '4px',
                      backgroundColor: 'white',
                      '&:hover': {
                        borderColor: '#3b82f6'
                      },
                      '&:focus-within': {
                        borderColor: '#3b82f6',
                        boxShadow: '0 0 0 1px #3b82f6'
                      }
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      border: '2px solid #e5e7eb',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? '#dbeafe' : 'white',
                      color: '#1f2937',
                      fontWeight: state.isFocused ? '500' : '400',
                      '&:active': {
                        backgroundColor: '#bfdbfe'
                      }
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: '#dbeafe',
                      borderRadius: '8px'
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: '#1e40af',
                      fontWeight: '500'
                    }),
                    multiValueRemove: (base) => ({
                      ...base,
                      color: '#1e40af',
                      '&:hover': {
                        backgroundColor: '#3b82f6',
                        color: 'white'
                      }
                    })
                  }}
                />
              </div>

              {/* Sizes */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  📏 Select Sizes
                </label>
                <Select
                  options={sizes}
                  isMulti
                  onChange={setSelectedSizes}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Choose sizes..."
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderRadius: '12px',
                      borderWidth: '2px',
                      borderColor: '#e5e7eb',
                      padding: '4px',
                      backgroundColor: 'white',
                      '&:hover': {
                        borderColor: '#10b981'
                      },
                      '&:focus-within': {
                        borderColor: '#10b981',
                        boxShadow: '0 0 0 1px #10b981'
                      }
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      border: '2px solid #e5e7eb',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? '#d1fae5' : 'white',
                      color: '#1f2937',
                      fontWeight: state.isFocused ? '500' : '400',
                      '&:active': {
                        backgroundColor: '#a7f3d0'
                      }
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: '#d1fae5',
                      borderRadius: '8px'
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: '#047857',
                      fontWeight: '500'
                    }),
                    multiValueRemove: (base) => ({
                      ...base,
                      color: '#047857',
                      '&:hover': {
                        backgroundColor: '#10b981',
                        color: 'white'
                      }
                    })
                  }}
                />
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
                {generatedListings.map((listing, index) => (
                  <div key={index} className="py-2 px-3 hover:bg-white rounded-lg transition-colors duration-150">
                    <span className="text-sm text-gray-500 mr-3">{index + 1}.</span>
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How it works</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Enter your base product title with [color] and [size] placeholders</li>
                  <li>• Select the colors and sizes you want to generate</li>
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
