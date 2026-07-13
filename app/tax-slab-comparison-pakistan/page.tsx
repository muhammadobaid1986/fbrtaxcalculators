"use client";

import { useState } from "react";
import { taxData } from "../lib/tax";

export default function TaxComparison() {
  const years = Object.keys(taxData);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100">

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mb-10">
        <strong>Tip:</strong> Use the table below to compare tax slabs between years.
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">
        Pakistan Income Tax Slab Comparison (2021-2027)
      </h1>

      {years.map((year) => (
        <div key={year} className="mb-10 border rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
          <div className="bg-gray-100 p-4 font-bold">
            Tax Year {year}
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-4 border-r">Income Range</th>
                <th className="p-4">Rate</th>
              </tr>
            </thead>
            <tbody>
              {taxData[year].map((slab, index) => (
                <tr
  key={index}
  className="border-b hover:bg-green-50 transition duration-300"
>
                  <td className="p-4 border-r">
                    Rs {slab.min.toLocaleString()} -{" "}
                    {slab.max === Infinity
                      ? "Above"
                      : `Rs ${slab.max.toLocaleString()}`}
                  </td>
                  <td className="p-4 font-bold">
                    {(slab.rate * 100).toFixed(2).replace(".00", "")}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className="mt-16 bg-white p-6 rounded-2xl shadow">
  <h2 className="text-2xl font-bold mb-6 text-center">
    Visual Tax Rate Comparison (2026-27)
  </h2>

  <div className="space-y-4">
    {taxData["2026-27"].map((slab, index) => (
      <div key={index}>
        <div className="flex justify-between text-sm font-semibold mb-1">
          <span>
            {slab.max === Infinity
              ? `Above Rs ${slab.min.toLocaleString()}`
              : `Rs ${slab.min.toLocaleString()} - Rs ${slab.max.toLocaleString()}`}
          </span>
          <span>{(slab.rate * 100).toFixed(2).replace(".00", "")}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-600 h-3 rounded-full"
            style={{ width: `${slab.rate * 100}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}