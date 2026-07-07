"use client";

import { useState } from "react";

import {
  findTaxSlab,
  calculateSalaryTax,
} from "../lib/tax";


export default function TaxSlabFinder() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<any>(null);

  const [taxResult, setTaxResult] = useState<any>(null);

const findSlab = () => {
  const monthlySalary = Number(salary);

  if (!monthlySalary) {
    setResult(null);
    setTaxResult(null);
    return;
  }

  const slab = findTaxSlab(monthlySalary);

  if (slab) {
    setResult(slab);
    setTaxResult(calculateSalaryTax(monthlySalary));
  } else {
    setResult(null);
    setTaxResult(null);
  }
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