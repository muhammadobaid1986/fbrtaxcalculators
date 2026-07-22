"use client";

import { useState } from "react";

export default function PropertyAdvanceTaxCalculator() {
  const [value, setValue] = useState("");
  const [type, setType] = useState("purchase");
  const [status, setStatus] = useState("filer");
  const [tax, setTax] = useState<number | null>(null);

  const calculateTax = () => {
    const amount = Number(value);
    if (!amount || amount <= 0) return setTax(null);

    let rate = 0;

    if (type === "purchase") {
      // 236K
      if (status === "filer") {
        rate = 0.0125;
      } else {
        if (amount <= 50000000) rate = 0.105;
        else if (amount <= 100000000) rate = 0.145;
        else rate = 0.185;
      }
    } else {
      // 236C
      if (status === "filer") {
        rate = 0.0275;
      } else {
        rate = 0.115;
      }
    }

    setTax(amount * rate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-emerald-950 pt-3 pb-15 px-4 flex justify-center">

      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-green-500/40 rounded-[28px] shadow-[0_0_40px_rgba(16,185,129,0.15)] p-10">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          🏠 Property Advance Tax Calculator (236C & 236K)
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Calculate FBR advance tax on property purchase and sale according to Finance Act 2026-27.
        </p>

        <div className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Property Value (PKR)
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-boldgreen-500/30 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter property value"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Transaction Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30"
            >
              <option value="purchase">Property Purchase (236K)</option>
              <option value="sale">Property Sale (236C)</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Tax Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30"
            >
              <option value="filer">Filer</option>
              <option value="nonfiler">Non-Filer</option>
            </select>
          </div>

          <button
            onClick={calculateTax}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 py-3 rounded-xl font-bold text-lg hover:scale-105 transition"
          >
            Calculate Tax
          </button>

          {tax !== null && (
            <div className="mt-8 bg-gradient-to-r from-emerald-900/40 to-green-900/30 border border-green-400/40 p-8 rounded-[24px] text-center shadow-inner">
              <h2 className="text-xl font-semibold mb-2">
                Estimated Advance Tax
              </h2>
              <p className="text-3xl font-bold text-green-400">
                Rs {tax.toLocaleString()}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}