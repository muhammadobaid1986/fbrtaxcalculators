"use client";

import { useState } from "react";

export const metadata = {
  title: "Salary After Tax Calculator Pakistan",
  description:
    "Calculate take-home salary after tax deductions in Pakistan.",
};

export default function SalaryAfterTaxCalculator() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const monthlySalary = Number(salary);

    if (!monthlySalary) {
      setResult(null);
      return;
    }

    const estimatedTax = monthlySalary * 0.05;
    const takeHomeSalary = monthlySalary - estimatedTax;

    setResult(takeHomeSalary);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">
      <h1 className="text-4xl font-bold mb-6">
        Salary After Tax Calculator Pakistan
      </h1>

      <p className="mb-6 text-gray-700">
        Estimate your monthly take-home salary after tax deductions.
      </p>

      <input
        type="number"
        placeholder="Enter Monthly Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <button
        onClick={calculate}
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="font-semibold">
            Estimated Take Home Salary:
          </p>

          <p className="text-2xl font-bold text-green-700">
            Rs {result.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}