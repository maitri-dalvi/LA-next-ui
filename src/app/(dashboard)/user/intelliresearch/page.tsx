"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const legalResearchData = [
  {
    caseId: "C001",
    title: "Breach of Contract in Corporate Agreements",
    court: "Supreme Court of India",
    date: "Jan 2023",
    description: "Case involving breach of contract in a corporate agreement between two major firms.",
  },
  {
    caseId: "C002",
    title: "Breach of Contract in Real Estate Deals",
    court: "Delhi High Court",
    date: "Aug 2022",
    description: "This case focuses on the breach of contract in a property sale agreement.",
  },
  {
    caseId: "C003",
    title: "Labor Contract Dispute",
    court: "Bombay High Court",
    date: "March 2023",
    description: "Dispute over breach of terms in a labor contract by an employer.",
  },
  {
    caseId: "C004",
    title: "Breach of Contract in Construction Projects",
    court: "Kolkata High Court",
    date: "Dec 2022",
    description: "Legal case related to breach of contract in a construction agreement.",
  },
];

const LegalResearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = legalResearchData.filter((caseItem) =>
    caseItem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-[#2C3E50]">Intelligent Legal Research</h2>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for cases or legal precedents..."
          className="pl-12 pr-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-4 top-2.5 text-gray-400" size={24} />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {filteredData.length === 0 ? (
          <p className="text-gray-600">No results found for "{searchTerm}"</p>
        ) : (
          filteredData.map((caseItem) => (
            <div
              key={caseItem.caseId}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">{caseItem.title}</h3>
                <span className="text-sm text-gray-500">{caseItem.date}</span>
              </div>
              <p className="mt-4 text-gray-600">Court: {caseItem.court}</p>
              <p className="mt-2 text-gray-600">{caseItem.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LegalResearch;
