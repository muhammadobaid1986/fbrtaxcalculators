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
    <div className="bg-white p-8 rounded-xl shadow mt-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Withholding Tax Calculator
      </h1>

      <input
        type="number"
        placeholder="Enter Transaction Amount (PKR)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />

      <button
        onClick={calculateTax}
        className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
      >
        Calculate Withholding Tax
      </button>

      {tax !== null && (
        <div className="mt-6 text-center bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">
            Withholding Tax: Rs {tax.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}