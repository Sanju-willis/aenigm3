// src\components\landing-page\OurPresence.jsx
"use client";

import React, { useState } from 'react';

const offices = [
  { id: 'HQ', top: '55%', left: '65%', label: 'Sri Lanka (HQ)', description: 'Our headquarters in Colombo.' },
  { id: '02', top: '75%', left: '85%', label: 'Australia', description: 'Regional office in Sydney.' },
  { id: '03', top: '30%', left: '50%', label: 'Finland', description: 'European hub in Helsinki.' },
  { id: '04', top: '45%', left: '58%', label: 'Dubai', description: 'Middle East office in Dubai.' },
];

export default function OurPresenceSection() {
  const [activeOffice, setActiveOffice] = useState(null);

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our <span className="text-blue-500">Presence</span>
      </h2>

      <div className="relative">
        {/* Map Image */}
        <img
          src="/world-map.svg"
          alt="World Map"
          className="w-full h-auto rounded shadow"
        />

        {/* Markers */}
        {offices.map((office) => (
          <Marker
            key={office.id}
            top={office.top}
            left={office.left}
            label={office.label}
            tag={office.id}
            onClick={() => setActiveOffice(office)}
          />
        ))}

        {/* Office Info Box */}
        {activeOffice && (
          <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-lg p-4 w-72 border z-50">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{activeOffice.label}</h3>
              <button
                onClick={() => setActiveOffice(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-600">{activeOffice.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}

function Marker({ top, left, label, tag, onClick }) {
  return (
    <div
      className="absolute flex flex-col items-center cursor-pointer group"
      style={{ top, left, transform: 'translate(-50%, -50%)' }}
      onClick={onClick}
    >
      <div className="relative">        {/* Animated pulse */}
        <span className="absolute inline-flex h-8 w-8 rounded-full bg-brandblue/75 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-brandblue text-white text-xs font-semibold items-center justify-center">
          {tag}
        </span>
      </div>
      <span className="mt-1 text-xs font-medium text-gray-700 hidden sm:block group-hover:block">
        {label}
      </span>
    </div>
  );
}
