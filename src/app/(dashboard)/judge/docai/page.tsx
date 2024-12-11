"use client";

import React, { useState } from 'react';
import { FaLanguage } from 'react-icons/fa';


const DocAIPage: React.FC = () => {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [output, setOutput] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleTranslate = () => {
    // Mock translation output for demonstration purposes
    setOutput(
      `Translating the uploaded document from ${sourceLanguage} to ${targetLanguage}. Example Output: "Translate case documents from Tamil to English for review."`
    );
  };

  return (
    <div className='py-10'>
    <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <FaLanguage className="text-blue-500" /> Doc AI - Multilingual Translation
        </h1>
        <p className="text-gray-600 mb-6">
          Translate legal documents across Indian regional languages, ensuring accessibility and eliminating the need for translators.
        </p>

        {/* File Upload */}
        <div className="mb-6">
          <label htmlFor="fileUpload" className="block text-gray-700 font-medium mb-2">
            Upload Document
          </label>
          <input
            id="fileUpload"
            type="file"
            onChange={handleFileUpload}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Language Selection */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label htmlFor="sourceLanguage" className="block text-gray-700 font-medium mb-2">
              Source Language
            </label>
            <select
              id="sourceLanguage"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="">Select Source Language</option>
              <option value="Tamil">Tamil</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
              <option value="Malayalam">Malayalam</option>
            </select>
          </div>
          <div>
            <label htmlFor="targetLanguage" className="block text-gray-700 font-medium mb-2">
              Target Language
            </label>
            <select
              id="targetLanguage"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="">Select Target Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Kannada">Kannada</option>
              <option value="Gujarati">Gujarati</option>
            </select>
          </div>
        </div>

        {/* Translate Button */}
        <button
          onClick={handleTranslate}
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-[#D4AF37] focus:outline-none focus:ring focus:ring-blue-200"
        >
          Translate
        </button>

        {/* Translation Output */}
        {output && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-700">Translation Output:</h2>
            <p className="text-gray-600 mt-2">{output}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default DocAIPage;
