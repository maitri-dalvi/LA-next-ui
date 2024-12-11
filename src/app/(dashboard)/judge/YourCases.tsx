import React from "react";

interface Case {
  id: number;
  title: string;
  description: string;
}

const cases: Case[] = [
  {
    id: 1,
    title: "Property Dispute",
    description: "Handling a legal property dispute between two parties.",
  },
  {
    id: 2,
    title: "Contract Violation",
    description: "Representing the client in a breach of contract lawsuit.",
  },
  {
    id: 3,
    title: "Civil Rights Case",
    description: "Filing a case to protect civil rights under Indian law.",
  },
  {
    id: 6,
    title: "Property Dispute",
    description: "Handling a legal property dispute between two parties.",
  },
  {
    id: 7,
    title: "Contract Violation",
    description: "Representing the client in a breach of contract lawsuit.",
  },
  {
    id: 8,
    title: "Civil Rights Case",
    description: "Filing a case to protect civil rights under Indian law.",
  },
];

const YourCases = () => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Your Cases</h2>
      <div className="flex flex-col gap-4">
        {cases.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="text-md font-semibold text-[#D4AF37]">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCases;
