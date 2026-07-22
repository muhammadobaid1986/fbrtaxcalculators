"use client";

import { useState } from "react";

export default function PropertyAdvanceTaxCalculator() {
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
    if (status === "filer") {
      rate = 0.0125;
    } else {
      if (amount <= 50000000) rate = 0.105;
      else if (amount <= 100000000) rate = 0.145;
      else rate = 0.185;
    }
  } else {
    if (status === "filer") {
      rate = 0.0275;
    } else {
      rate = 0.115;
    }
  }

  setRateApplied(rate);
  setTax(amount * rate);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 pt-10 pb-16 px-4 flex justify-center rounded-3xl">

      <div className="w-full max-w-3xl mt-3 bg-green-900/60 backdrop-blur-xl border border-green-400/40 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] pt-6 pb-8 px-8">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          🏠 Property Advance Tax Calculator (236C & 236K)
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Calculate FBR advance tax on property purchase and sale according to Finance Act 2026-27.
        </p>

        <div className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold text-gray-200 tracking-wide">
              Property Value (PKR)
            </label>
            <input
  type="number"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
  placeholder="Enter property value"
/>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-200 tracking-wide">
              Transaction Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="purchase">Property Purchase (236K)</option>
              <option value="sale">Property Sale (236C)</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-200 tracking-wide">
              Tax Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 border border-green-500/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
  <div className="mt-8 bg-gradient-to-r from-emerald-800/50 to-green-900/40 border border-green-400/40 p-8 rounded-2xl">

    <h2 className="text-xl font-semibold mb-4 text-green-300">
      Tax Calculation Breakdown
    </h2>

    <div className="space-y-2 text-gray-200">
      <p><strong>Property Value:</strong> Rs {Number(value).toLocaleString()}</p>
      <p><strong>Section:</strong> {type === "purchase" ? "236K (Purchase)" : "236C (Sale)"}</p>
      <p><strong>Status:</strong> {status === "filer" ? "Filer" : "Non‑Filer"}</p>
      <p><strong>Rate Applied:</strong> {(rateApplied! * 100).toFixed(2)}%</p>
    </div>

    <div className="mt-6 text-center">
      <p className="text-lg text-gray-300">Estimated Advance Tax</p>
      <p className="text-3xl font-bold text-green-400">
        Rs {tax.toLocaleString()}
      </p>
    </div>
  </div>
)}

<div className="mt-12 bg-green-950/40 p-6 rounded-2xl border border-green-500/30">
  <h3 className="text-xl font-bold text-green-300 mb-4">
    Official Advance Tax Rates (Finance Act 2026‑27)
  </h3>

  <div className="overflow-x-auto text-sm">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-green-500/40 text-green-200">
          <th className="py-2">Section</th>
          <th>Value Range</th>
          <th>Filer</th>
          <th>Non‑Filer</th>
        </tr>
      </thead>
      <tbody className="text-gray-200">
        <tr>
          <td>236K</td>
          <td>Up to 50M</td>
          <td>1.25%</td>
          <td>10.50%</td>
        </tr>
        <tr>
          <td>236K</td>
          <td>50M – 100M</td>
          <td>1.25%</td>
          <td>14.50%</td>
        </tr>
        <tr>
          <td>236K</td>
          <td>Above 100M</td>
          <td>1.25%</td>
          <td>18.50%</td>
        </tr>
        <tr>
          <td>236C</td>
          <td>All Slabs</td>
          <td>2.75%</td>
          <td>11.50%</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="mt-14 text-gray-200 space-y-6">

  <h2 className="text-2xl font-bold text-green-300">
    Property Advance Tax in Pakistan (Section 236C & 236K)
  </h2>

  <p>
    Under the Income Tax Ordinance, advance tax is collected on the purchase
    and sale of immovable property in Pakistan. Section 236K applies to
    property buyers, while Section 236C applies to property sellers.
  </p>

  <h3 className="text-xl font-semibold text-green-300">
    Section 236K – Advance Tax on Property Purchase
  </h3>

  <p>
    Buyers of property are required to pay advance tax based on the fair market value
    or DC valuation rate. The tax rate differs for filers and non-filers.
  </p>

  <h3 className="text-xl font-semibold text-green-300">
    Section 236C – Advance Tax on Property Sale
  </h3>

  <p>
    Sellers must pay advance tax at the time of transfer. The rate depends on
    filer status and is deducted during registration.
  </p>

  <h3 className="text-xl font-semibold text-green-300">
    Who is Considered a Filer?
  </h3>

  <p>
    A filer is a person whose name appears in the Active Taxpayer List (ATL)
    issued by FBR. Non-filers are subject to significantly higher tax rates.
  </p>

</div>

<div className="mt-14 text-gray-200 space-y-6">

  <h2 className="text-2xl font-bold text-green-300">
    Frequently Asked Questions
  </h2>

  <div>
    <h3 className="font-semibold text-green-200">
      Is property advance tax adjustable?
    </h3>
    <p>
      Yes, advance tax paid under Section 236C or 236K is adjustable
      against your final income tax liability.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-green-200">
      What happens if I am a non-filer?
    </h3>
    <p>
      Non-filers pay significantly higher advance tax rates.
      It is recommended to become a filer to reduce tax burden.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-green-200">
      Does this calculator use official FBR rates?
    </h3>
    <p>
      Yes, this tool is based on Finance Act 2026-2027 rates
      for property transactions in Pakistan.
    </p>
  </div>

</div>


        </div>
      </div>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is property advance tax adjustable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, advance tax paid under Section 236C or 236K is adjustable against final income tax liability."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I am a non-filer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non-filers pay higher advance tax rates under FBR rules."
          }
        },
        {
          "@type": "Question",
          "name": "Does this calculator use official FBR rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, this calculator uses Finance Act 2026-2027 rates."
          }
        }
      ]
    })
  }}
/>


    </div>
  );
}