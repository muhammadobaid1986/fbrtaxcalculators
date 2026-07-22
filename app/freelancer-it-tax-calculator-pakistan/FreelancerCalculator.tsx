"use client";

import { useState } from "react";

export default function FreelancerITTaxCalculator() {
  const [income, setIncome] = useState("");
  const [regime, setRegime] = useState("it_export");
  const [status, setStatus] = useState("filer");
  const [tax, setTax] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);

  const calculateTax = () => {
    const amount = Number(income);
    if (!amount || amount <= 0) return;

    let appliedRate = 0;

    if (regime === "it_export") {
      appliedRate = 0.0025; // 0.25%
    } else if (regime === "presumptive") {
      appliedRate = 0.01; // 1%
    } else {
      // Simplified Normal Slab Example
      if (amount <= 600000) appliedRate = 0;
      else if (amount <= 1200000) appliedRate = 0.01;
      else if (amount <= 2200000) appliedRate = 0.11;
      else if (amount <= 3200000) appliedRate = 0.20;
      else appliedRate = 0.29;
    }

    // Example non-filer adjustment
    if (status === "nonfiler") {
      appliedRate *= 1.5;
    }

    setRate(appliedRate);
    setTax(amount * appliedRate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 pt-10 pb-16 px-4 flex justify-center rounded-3xl">

      <div className="w-full max-w-3xl bg-green-900/60 backdrop-blur-xl border border-green-400/40 rounded-3xl shadow-xl pt-6 pb-8 px-8">

        <h1 className="text-3xl font-bold text-green-300 mb-4">
          💻 Freelancer & IT Tax Calculator Pakistan 2026 To 2027
        </h1>

        <p className="text-gray-200 mb-6">
          Calculate income tax for freelancers, IT exporters and remote earners under different tax regimes.
        </p>

        <div className="space-y-5">

          <div>
            <label className="block mb-2 font-semibold text-white">
              Annual Income (PKR)
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full p-3 rounded-xl bg-green-950/60 border border-green-500/30 text-white"
              placeholder="Enter annual income"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-white">
              Tax Regime
            </label>
            <select
              value={regime}
              onChange={(e) => setRegime(e.target.value)}
              className="w-full p-3 rounded-xl bg-green-950/60 border border-green-500/30 text-white"
            >
              <option value="it_export">IT Export (0.25%)</option>
              <option value="presumptive">Presumptive Tax (1%)</option>
              <option value="normal">Normal Tax Slab</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-white">
              Tax Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 rounded-xl bg-green-950/60 border border-green-500/30 text-white"
            >
              <option value="filer">Filer</option>
              <option value="nonfiler">Non-Filer</option>
            </select>
          </div>

          <button
            onClick={calculateTax}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 py-3 rounded-xl font-bold text-lg"
          >
            Calculate Tax
          </button>

          {tax !== null && (
            <div className="mt-6 bg-green-950/40 border border-green-400/40 p-6 rounded-2xl">
              <h3 className="text-green-300 font-semibold mb-3">
                Tax Breakdown
              </h3>
              <p className="text-gray-200">
                Income: Rs {Number(income).toLocaleString()}
              </p>
              <p className="text-gray-200">
                Rate Applied: {(rate! * 100).toFixed(2)}%
              </p>

              <div className="mt-4 text-center">
                <p className="text-lg text-gray-300">Estimated Tax</p>
                <p className="text-3xl font-bold text-green-400">
                  Rs {tax.toLocaleString()}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}