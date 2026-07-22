"use client";

import { useState } from "react";
import Link from "next/link";

export default function PropertyAdvanceCalculator() {
  const [value, setValue] = useState("");
  const [type, setType] = useState("purchase");
  const [status, setStatus] = useState("filer");
  const [tax, setTax] = useState<number | null>(null);
  const [rateApplied, setRateApplied] = useState<number | null>(null);

  const calculateTax = () => {
    const amount = Number(value);
    if (!amount || amount <= 0) return;

    let rate = 0;

    if (type === "purchase") {
      if (status === "filer") rate = 0.0125;
      else {
        if (amount <= 50000000) rate = 0.105;
        else if (amount <= 100000000) rate = 0.145;
        else rate = 0.185;
      }
    } else {
      rate = status === "filer" ? 0.0275 : 0.115;
    }

    setRateApplied(rate);
    setTax(amount * rate);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl bg-green-900/60 backdrop-blur-xl border border-green-400/40 rounded-[28px] shadow-xl pt-6 pb-8 px-8">

        <h1 className="text-3xl font-bold text-green-300 mb-6 text-center">
          🏠 Property Advance Tax Calculator Pakistan 2026‑2027
        </h1>

        <div className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-200 font-semibold">
              Property Value (PKR)
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white"
              placeholder="Enter property value"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-200 font-semibold">
              Transaction Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white"
            >
              <option value="purchase">Property Purchase (236K)</option>
              <option value="sale">Property Sale (236C)</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-200 font-semibold">
              Tax Status
            </label>
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
            onClick={calculateTax}
            className="w-full bg-green-600 py-3 rounded-xl font-bold text-white"
          >
            Calculate Tax
          </button>

          {tax !== null && (
            <div className="mt-6 bg-green-950/40 p-6 rounded-2xl border border-green-400/40">
              <p>Rate Applied: {(rateApplied! * 100).toFixed(2)}%</p>
              <p className="text-2xl font-bold text-green-400">
                Rs {tax.toLocaleString()}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}