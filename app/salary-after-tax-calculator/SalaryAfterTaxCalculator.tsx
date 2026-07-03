"use client";

import { useState } from "react";
import { calculateSalaryTax } from "../lib/tax";


export default function SalaryAfterTaxCalculator() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateSalaryTax> | null>(null);

  const calculate = () => {
  const monthlySalary = Number(salary);

  if (!monthlySalary) {
    setResult(null);
    return;
  }

  const tax = calculateSalaryTax(monthlySalary);

setResult(tax);
};

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Salary After Tax Calculator Pakistan
      </h1>

      <p className="mb-8 text-gray-600 text-center">
        Instantly estimate your monthly take-home salary after FBR tax deductions.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Enter Monthly Salary (PKR)
          </label>
          <input
            type="number"
            placeholder="e.g. 100000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl hover:scale-[1.02] transition font-bold text-lg shadow-md"
        >
          Calculate Take-Home Salary
        </button>
      </div>

      {result !== null && (
        <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100 text-center">
          <p className="font-semibold text-gray-700 mb-2 text-lg">
            Your Estimated Take-Home Salary
          </p>
          <p className="text-4xl font-extrabold text-green-700">
            Rs {result.monthlyTakeHome.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *This is an estimated calculation based on standard tax slabs.
          </p>
        </div>
      )}
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Calculators & Guides</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/" className="text-green-600 hover:underline">Income Tax Calculator Pakistan</a></li>
          <li><a href="/how-to-become-a-filer" className="text-green-600 hover:underline">How to Become a Filer</a></li>
          <li><a href="/benefits-of-being-filer-pakistan" className="text-green-600 hover:underline">Benefits of Being a Filer</a></li>
        </ul>
      </div>
    </div>
  );
}