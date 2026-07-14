"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import moment from "moment-hijri";
import { calculateSalaryTax, taxData } from "./lib/tax";

export default function Home() {
  const [salary, setSalary] = useState("");
  const [year, setYear] = useState("2026-27");
  const [tax, setTax] = useState<number | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setNow(new Date());
      setHijriDate(moment().format("iD iMMMM iYYYY") + " AH");
    };
    updateTime();
    const timer = setTimeout(updateTime, 1000);
    return () => clearTimeout(timer);
  }, []);

  const calculateTax = () => {
    const monthlyIncome = Number(salary);
    if (!monthlyIncome) return;

    const result = calculateSalaryTax(monthlyIncome, year);
    setTax(result.yearlyTax);
  };

  const monthlyIncome = Number(salary) || 0;
  const annualIncome = monthlyIncome * 12;
  const monthlyTax = tax ? tax / 12 : 0;
  const monthlyAfterTax = monthlyIncome - monthlyTax;
  const yearlyAfterTax = annualIncome - (tax ?? 0);

  return (
    <main className="min-h-screen p-4 bg-gray-50">

      {/* HERO */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          FBR Tax Calculator Pakistan 2026-27
        </h1>
        <p className="mt-4 text-gray-700">
          Calculate income tax instantly using official FBR tax slabs.
        </p>
      </div>

      {/* CALCULATOR */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">
        <label className="block text-sm font-semibold mb-2">
          Select Tax Year
        </label>

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
          className="w-full bg-green-600 text-white p-4 rounded-xl font-bold"
        >
          Calculate Tax
        </button>

        {tax !== null && (
          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span>Monthly Tax</span>
              <span>Rs {monthlyTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Yearly Tax</span>
              <span>Rs {tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-green-700">
              <span>Monthly After Tax</span>
              <span>Rs {monthlyAfterTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-green-700">
              <span>Yearly After Tax</span>
              <span>Rs {yearlyAfterTax.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>

      {/* CLOCK (below fold) */}
      <div className="max-w-4xl mx-auto mt-10 bg-green-600 text-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-2">
          🇵🇰 Pakistan Current Time
        </h2>
        <p>
          {now &&
            now.toLocaleDateString("en-PK", {
              timeZone: "Asia/Karachi",
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </p>
        <p>
          {now &&
            now.toLocaleTimeString("en-PK", {
              timeZone: "Asia/Karachi",
            })}
        </p>
        <p>Islamic Date: {hijriDate}</p>
      </div>

    </main>
  );
}