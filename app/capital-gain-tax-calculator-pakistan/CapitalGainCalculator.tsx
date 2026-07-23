"use client";

import { useState } from "react";

export default function CapitalGainCalculator() {
  const [saleValue, setSaleValue] = useState("");
  const [purchaseValue, setPurchaseValue] = useState("");
  const [holdingYears, setHoldingYears] = useState("");
  const [status, setStatus] = useState("filer");
  const [tax, setTax] = useState<number | null>(null);
  const [gain, setGain] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);

  const calculateCGT = () => {
    const sale = Number(saleValue);
    const purchase = Number(purchaseValue);
    const years = Number(holdingYears);

    if (!sale || !purchase || years < 0) return;

    const capitalGain = sale - purchase;
    if (capitalGain <= 0) {
      setGain(capitalGain);
      setTax(0);
      setRate(0);
      return;
    }

    let appliedRate = 0;

    // Example holding period logic (adjustable later)
    if (years < 1) appliedRate = 0.15;
    else if (years < 2) appliedRate = 0.12;
    else if (years < 3) appliedRate = 0.10;
    else if (years < 4) appliedRate = 0.08;
    else appliedRate = 0.05;

    if (status === "nonfiler") {
      appliedRate += 0.05; // non-filer penalty
    }

    setGain(capitalGain);
    setRate(appliedRate);
    setTax(capitalGain * appliedRate);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl bg-green-900/60 backdrop-blur-xl border border-green-400/40 rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-green-300 mb-6 text-center">
          🏠 Capital Gain Tax Calculator Pakistan 2026‑2027
        </h1>

        <div className="space-y-5">

          <div>
            <label className="block text-gray-200 mb-2">Sale Value (PKR)</label>
            <input
              type="number"
              value={saleValue}
              onChange={(e) => setSaleValue(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Purchase Value (PKR)</label>
            <input
              type="number"
              value={purchaseValue}
              onChange={(e) => setPurchaseValue(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Holding Period (Years)</label>
            <input
              type="number"
              value={holdingYears}
              onChange={(e) => setHoldingYears(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Tax Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white"
            >
              <option value="filer">Filer</option>
              <option value="nonfiler">Non‑Filer</option>
            </select>
          </div>

          <button
            onClick={calculateCGT}
            className="w-full bg-green-600 py-3 rounded-xl text-white font-bold"
          >
            Calculate CGT
          </button>

          {tax !== null && (
            <div className="mt-6 bg-green-950/40 p-6 rounded-2xl border border-green-400/40">
              <p className="text-gray-200">
  Capital Gain: Rs {gain?.toLocaleString()}
</p>

<p className="text-gray-200">
  Rate Applied: {(rate! * 100).toFixed(2)}%
</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}