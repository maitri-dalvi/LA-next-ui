    "use client";


    import React from 'react';

    const templates = [
    { id: '1', name: 'Affidavit', description: 'Customizable affidavit template for various purposes.' },
    { id: '2', name: 'Non-Disclosure Agreement', description: 'Template for legal agreements to protect confidential information.' },
    { id: '3', name: 'Contract', description: 'General contract template for business agreements.' },
    { id: '4', name: 'Affidavit', description: 'Customizable affidavit template for various purposes.' },
    { id: '5', name: 'Non-Disclosure Agreement', description: 'Template for legal agreements to protect confidential information.' },
    { id: '6', name: 'Contract', description: 'General contract template for business agreements.' },
    ];

    const LegalTemplate = () => {
    return (
        <div className="p-10">
        <h1 className="text-4xl font-extrabold mb-6 text-[#2C3E50]">Ready-to-Use Legal Templates</h1>
        <div className="grid lg:grid-cols-3 gap-8">
            {templates.map((template) => (
            <div key={template.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <h2 className="text-xl font-semibold">{template.name}</h2>
                <p className="mt-4 text-gray-600">{template.description}</p>
                <button className="mt-4 text-[#D4AF37] hover:text-[#2C3E50] underline">Use Template</button>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default LegalTemplate;
