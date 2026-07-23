"use client";
import { useState } from "react";
import RelatedLinks from "../../components/RelatedLinks";
import Link from "next/link";
export default function ZakatCalculator() {
  const [cash, setCash] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [business, setBusiness] = useState("");
  const [zakat, setZakat] = useState<number | null>(null);
  const [totalAssets, setTotalAssets] = useState<number | null>(null);

  const nisab = 179000; // Example silver nisab value PKR (adjustable)

  const calculateZakat = () => {
    const total =
      Number(cash || 0) +
      Number(gold || 0) +
      Number(silver || 0) +
      Number(business || 0);

    setTotalAssets(total);

    if (total >= nisab) {
      setZakat(total * 0.025);
    } else {
      setZakat(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 pt-10 pb-16 px-4 rounded-3xl">

  <div className="flex justify-center">

    <div className="w-full max-w-3xl bg-green-900/60 backdrop-blur-xl border border-yellow-400 rounded-3xl shadow-[0_0_25px_rgba(250,204,21,0.4)] p-8">

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-yellow-300">
  🕌 Zakat Calculator Pakistan 2026
</h1>

      <p className="text-green-300 mb-8 text-center">
  Calculate your annual Zakat (2.5%) based on total zakatable assets.
</p>

      <div className="space-y-4">

        <input
          type="number"
          placeholder="Cash in Hand (PKR)"
          value={cash}
          onChange={(e) => setCash(e.target.value)}
          className="w-full p-3 rounded-xl bg-green-950/60 border border-yellow-400/50 focus:ring-yellow-400 text-white placeholder-gray-400"
        />

        <input
          type="number"
          placeholder="Gold Value (PKR)"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
         className="w-full p-3 rounded-xl bg-green-950/60 border border-green-500/30 text-white placeholder-gray-400"
        />

        <input
          type="number"
          placeholder="Silver Value (PKR)"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
          className="w-full p-3 rounded-xl bg-green-950/60 border border-green-500/30 text-white placeholder-gray-400"
        />

        <input
          type="number"
          placeholder="Business Assets (PKR)"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="w-full p-3 rounded-xl bg-green-950/60 border border-green-500/30 text-white placeholder-gray-400"
        />

        <button
          onClick={calculateZakat}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 py-4 rounded-2xl font-bold text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Calculate Zakat
        </button>

      </div>
      </div>
      </div>

      {totalAssets !== null && (
        <div className="mt-6 bg-green-950/40 border border-yellow-400 rounded-2xl p-6 text-center text-gray-200 shadow-[0_0_15px_rgba(250,204,21,0.3)]">

          <p className="font-semibold">
            Total Assets: Rs {totalAssets.toLocaleString()}
          </p>

          {totalAssets < nisab ? (
            <p className="text-red-500 mt-2">
              Below Nisab — Zakat not obligatory.
            </p>
          ) : (
            <p className="text-green-700 font-bold mt-2">
              Zakat Payable: Rs {zakat?.toLocaleString()}
            </p>
          )}

        </div>
      )}

      <div className="max-w-4xl mx-auto mt-16 px-4">
  <div className="bg-gradient-to-r from-green-800 to-emerald-700 p-8 rounded-3xl text-center shadow-[0_0_25px_rgba(250,204,21,0.4)] border border-yellow-400">

    <h3 className="text-2xl font-bold text-white mb-4">
      ✅ Related Tools & Guides
    </h3>

    <div className="flex flex-col md:flex-row gap-4 justify-center">

      <Link
        href="/"
        className="bg-white text-green-800 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        💰 Income Tax Calculator
      </Link>

      <Link
        href="/freelancer-it-tax-calculator-pakistan"
        className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        💻 Freelancer Tax
      </Link>

      <Link
        href="/property-advance-tax-calculator-pakistan"
        className="bg-white text-green-800 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        🏠 Property Advance Tax
      </Link>

    </div>

  </div>
</div>
</div>
  );
}