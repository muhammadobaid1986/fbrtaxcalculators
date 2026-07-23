"use client";

import { useState } from "react";
import { calculateSalaryTax } from "../lib/tax";


export default function SalaryAfterTaxCalculator() {
  const [year, setYear] = useState("2026-27");
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateSalaryTax> | null>(null);

  const calculate = () => {
  const monthlySalary = Number(salary);

  if (!monthlySalary) {
    setResult(null);
    return;
  }

  const tax = calculateSalaryTax(monthlySalary, year);

setResult(tax);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 pt-10 pb-6 px-4 rounded-3xl">

  <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 pt-10 pb-6 px-4 rounded-3xl">

  <div className="flex justify-center">

    <div className="w-full max-w-3xl bg-green-900/60 backdrop-blur-xl border border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.3)] rounded-3xl p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-yellow-300">
        Salary After Tax Calculator Pakistan
      </h1>

      <p className="mb-8 text-green-300 text-center">
        Instantly estimate your monthly take-home salary after FBR tax deductions.
      </p>

      <div className="space-y-4">
        <div>

          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Enter Monthly Salary (PKR)
          </label>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
  Select Tax Year
</label>

<select
  value={year}
  onChange={(e) => setYear(e.target.value)}
  className="w-full p-3 rounded-xl bg-green-950/60 border border-yellow-400/50 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
>
  <option value="2026-27">Tax Year 2026-27</option>
  <option value="2025-26">Tax Year 2025-26</option>
</select>
          <input
            type="number"
            placeholder="e.g. 100000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full p-4 rounded-xl bg-green-950/60 border border-yellow-400/50 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        </div>
        </div>
        </div>
        <button
          onClick={calculate}
          className="w-full mt-3 bg-gradient-to-r from-emerald-500 to-green-600 py-4 rounded-2xl font-bold text-white shadow-lg hover:scale-105 transition"
        >
          Calculate Take-Home Salary
        </button>
        
        <div className="mt-2">
        <h2 className="text-2xl font-bold mb-4 text-white">Related Calculators & Guides</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/" className="text-green-200 hover:text-yellow-300 hover:underline transition">Income Tax Calculator Pakistan</a></li>
          <li><a href="/how-to-become-a-filer" className="text-green-600 hover:underline">How to Become a Filer</a></li>
          <li><a href="/benefits-of-being-filer-pakistan" className="text-green-600 hover:underline">Benefits of Being a Filer</a></li>
        </ul>
      </div>


      </div>

      {result && (
  <div className="mt-4 bg-green-950/40 border border-yellow-400 rounded-2xl p-6 text-gray-200 shadow-[0_0_15px_rgba(250,204,21,0.3)]">

    <h2 className="text-2xl font-bold text-center mb-6">
      Salary Breakdown
    </h2>

    <div className="space-y-3">

      <div className="flex justify-between">
        <span>Monthly Salary</span>
        <span>Rs {Number(salary).toLocaleString()}</span>
      </div>

      <div className="flex justify-between">
        <span>Annual Salary</span>
        <span>Rs {result.annualIncome.toLocaleString()}</span>
      </div>

      <div className="flex justify-between">
        <span>Monthly Tax</span>
        <span>Rs {result.monthlyTax.toLocaleString()}</span>
      </div>

      <div className="flex justify-between">
        <span>Yearly Tax</span>
        <span>Rs {result.yearlyTax.toLocaleString()}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold text-yellow-300">
        <span>Monthly Take Home</span>
        <span>Rs {result.monthlyTakeHome.toLocaleString()}</span>
      </div>

      <div className="flex justify-between font-bold text-green-700">
        <span>Yearly Take Home</span>
        <span>Rs {result.yearlyTakeHome.toLocaleString()}</span>
      </div>

    </div>

  </div>
)}
      
      
    </div>
  );
}