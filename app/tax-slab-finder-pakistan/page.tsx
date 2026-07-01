"use client";

import { useState } from "react";

type Slab = {
  min: number;
  max: number;
  rate: number;
  fixed: number;
};

const slabs: Slab[] = [
  { min: 0, max: 600000, rate: 0, fixed: 0 },
  { min: 600000, max: 1200000, rate: 0.01, fixed: 0 },
  { min: 1200000, max: 2400000, rate: 0.15, fixed: 6000 },
  { min: 2400000, max: 3600000, rate: 0.25, fixed: 186000 },
  { min: 3600000, max: Infinity, rate: 0.35, fixed: 486000 },
];

export default function TaxSlabFinder() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<Slab | null>(null);

  const findSlab = () => {
    const annualIncome = Number(salary) * 12;

    const slab = slabs.find(
      (s) => annualIncome > s.min && annualIncome <= s.max
    );

    setResult(slab || null);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-10">

      <h1 className="text-4xl font-bold mb-4">
        Tax Slab Finder Pakistan
      </h1>

      <p className="text-gray-600 mb-8">
        Enter your monthly salary to instantly find your applicable FBR income tax slab.
      </p>

      <input
        type="number"
        placeholder="Enter Monthly Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="w-full border p-4 rounded-xl mb-4"
      />

      <button
        onClick={findSlab}
        className="w-full bg-green-600 text-white p-4 rounded-xl font-bold"
      >
        Find My Tax Slab
      </button>

      {result && (
        <div className="mt-8 bg-green-50 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Your Tax Slab
          </h2>

          <p>
            <strong>Annual Income Starts From:</strong>{" "}
            Rs {result.min.toLocaleString()}
          </p>

          <p>
            <strong>Annual Income Ends At:</strong>{" "}
            {result.max === Infinity
              ? "Above"
              : `Rs ${result.max.toLocaleString()}`}
          </p>

          <p>
            <strong>Tax Rate:</strong>{" "}
            {result.rate * 100}%
          </p>

          <p>
            <strong>Fixed Tax:</strong>{" "}
            Rs {result.fixed.toLocaleString()}
          </p>

        </div>
      )}

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Related Tools
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          <li>
            <a href="/" className="text-green-600">
              Income Tax Calculator
            </a>
          </li>

          <li>
            <a
              href="/monthly-tax-calculator-pakistan"
              className="text-green-600"
            >
              Monthly Tax Calculator
            </a>
          </li>

          <li>
            <a
              href="/salary-after-tax-calculator"
              className="text-green-600"
            >
              Salary After Tax Calculator
            </a>
          </li>

        </ul>

      </div>

    </div>
  );
}