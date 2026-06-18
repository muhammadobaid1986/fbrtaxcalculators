"use client";

import { useState } from "react";

type Slab = {
  min: number;
  max: number;
  rate: number;
  fixed: number;
};

const taxData: Record<string, Slab[]> = {

  "2021-22": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
    { min: 1200000, max: 1800000, rate: 0.1, fixed: 30000 },
    { min: 1800000, max: 2500000, rate: 0.15, fixed: 90000 },
    { min: 2500000, max: Infinity, rate: 0.2, fixed: 195000 },
  ],

  "2022-23": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
    { min: 2400000, max: 3600000, rate: 0.2, fixed: 165000 },
    { min: 3600000, max: Infinity, rate: 0.25, fixed: 405000 },
  ],

  "2023-24": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
    { min: 2400000, max: 3600000, rate: 0.2, fixed: 165000 },
    { min: 3600000, max: Infinity, rate: 0.25, fixed: 405000 },
  ],

  "2024-25": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.15, fixed: 30000 },
    { min: 2400000, max: 3600000, rate: 0.25, fixed: 210000 },
    { min: 3600000, max: Infinity, rate: 0.3, fixed: 510000 },
  ],

  "2025-26": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.01, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.15, fixed: 6000 },
    { min: 2400000, max: 3600000, rate: 0.25, fixed: 186000 },
    { min: 3600000, max: Infinity, rate: 0.35, fixed: 486000 },
  ],

};

export default function Home() {

  const [salary, setSalary] = useState("");
  const [year, setYear] = useState("2025-26");
  const [tax, setTax] = useState<number | null>(null);

  const calculateTax = () => {

    const monthlyIncome = Number(salary);
    const annualIncome = monthlyIncome * 12;

    const slabs = taxData[year];
    let yearlyTax = 0;

    for (let slab of slabs) {
      if (annualIncome > slab.min && annualIncome <= slab.max) {
        yearlyTax = slab.fixed + (annualIncome - slab.min) * slab.rate;
        break;
      }
    }

    setTax(yearlyTax);
  };

  const monthlyIncome = Number(salary);
  const annualIncome = monthlyIncome * 12;
  const monthlyTax = tax ? tax / 12 : 0;
  const monthlyAfterTax = monthlyIncome - monthlyTax;
  const yearlyAfterTax = annualIncome - (tax ?? 0);

  return (
    <main className="min-h-screen p-6 bg-gray-50">

      <div className="text-center mt-10 mb-12">
        <h1 className="text-4xl font-extrabold gradient-text">
          Income Tax Calculator Pakistan (Salaried)
        </h1>
      </div>

      <div className="card p-8 max-w-xl mx-auto border rounded-2xl shadow">

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        >
          {Object.keys(taxData).map((y) => (
            <option key={y} value={y}>
              Tax Year {y}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Enter Monthly Salary (PKR)"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-4 border rounded-xl mb-4"
        />

        <button
          onClick={calculateTax}
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-full hover:scale-105 transition"
        >
          Calculate Tax
        </button>

        {tax !== null && (
          <div className="mt-8 text-sm space-y-2">

            <div className="flex justify-between">
              <span>Monthly Income</span>
              <span>{monthlyIncome.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Monthly Tax</span>
              <span>{monthlyTax.toLocaleString()}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Salary After Tax</span>
              <span>{monthlyAfterTax.toLocaleString()}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between">
              <span>Yearly Income</span>
              <span>{annualIncome.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Yearly Tax</span>
              <span>{tax.toLocaleString()}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Yearly Income After Tax</span>
              <span>{yearlyAfterTax.toLocaleString()}</span>
            </div>

          </div>
        )}

      </div>

    </main>
  );
}