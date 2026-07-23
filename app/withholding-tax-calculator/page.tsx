"use client";
import { useState } from "react";

export default function WithholdingTaxCalculator() {
  const [amount, setAmount] = useState("");
  const [tax, setTax] = useState<number | null>(null);

  const calculateTax = () => {
    const total = Number(amount);
    const result = total * 0.15; // Example 15%
    setTax(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 pt-10 pb-16 px-4 rounded-3xl">

  <div className="flex justify-center">

    <div className="w-full max-w-3xl bg-green-900/60 backdrop-blur-xl border border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.3)] rounded-3xl p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-yellow-300">
  🧾 Withholding Tax Calculator Pakistan 2026
</h1>

      <input
        type="number"
        placeholder="Enter Transaction Amount (PKR)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 rounded-xl bg-green-950/60 border border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
      />

      <button
        onClick={calculateTax}
        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 py-4 rounded-2xl font-bold text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        Calculate Withholding Tax
      </button>

      {tax !== null && (
        <div className="mt-6 bg-green-950/40 border border-yellow-400 rounded-2xl p-6 text-center text-gray-200 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
          <p className="text-lg font-semibold">
            Withholding Tax: Rs {tax.toLocaleString()}
          </p>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}