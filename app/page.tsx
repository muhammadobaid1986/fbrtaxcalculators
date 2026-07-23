"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";
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
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
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

  const hours = now ? now.getHours() % 12 : 0;
  const minutes = now ? now.getMinutes() : 0;
  const seconds = now ? now.getSeconds() : 0;

  const hourDeg = hours * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  return (
    <main className="min-h-screen bg-white">

      {/* Premium Pakistan Time Card */}
<div className="max-w-3xl mx-auto mt-4 mb-6 px-4 rounded-3xl shadow-md overflow-hidden">

  <div className="bg-gradient-to-br from-[#115e45] via-[#0f5138] to-[#0c3f2e] text-white p-2 md:p-3 rounded-[30px]">

    <div className="grid md:grid-cols-2 gap-3 items-center">

      {/* LEFT SIDE */}
      <div>

        <h2 className="text-base md:text-lg font-bold mb-4">
          Pakistan Current Time
        </h2>

        <p className="text-green-300 tracking-wide mb-6">
          LIVE & ACCURATE TIME
        </p>

        {/* Date */}
        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full mb-8 text-sm">
          📅
          {now &&
            now.toLocaleDateString("en-PK", {
              timeZone: "Asia/Karachi",
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </div>

        
        {/* Digital Time */}
        <div className="text-lg md:text-xl font-extrabold tracking-widest mb-6">
          {now &&
            now.toLocaleTimeString("en-PK", {
              timeZone: "Asia/Karachi",
              hour12: true,
            })}
        </div>

        {/* Live */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-300 text-sm font-semibold">LIVE</span>
          <div className="flex-1 h-[1px] bg-green-400/40 ml-4"></div>
        </div>

        {/* Islamic Date */}
        <div className="bg-white/10 px-4 py-2 rounded-2xl text-sm">
          🌙 Islamic Date: {hijriDate}
        </div>

      </div>

      {/* RIGHT SIDE CLOCK */}
      <div className="flex justify-center">

        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border-[5px] border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.5)] overflow-hidden">

            {/* Pakistan Map Background */}
<img
  src="/pakistan.svg"
  alt="Pakistan Map"
  className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-80 pointer-events-none scale-110"
/>

          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>

          {/* Hour Hand */}
          <div
            className="absolute top-1/2 left-1/2 w-[3px] h-14 bg-black origin-bottom rounded"
            style={{ transform: `translate(-50%, -100%) rotate(${hourDeg}deg)` }}
          ></div>

          {/* Minute Hand */}
          <div
            className="absolute top-1/2 left-1/2 w-[2px] h-16 bg-green-700 origin-bottom rounded"
            style={{ transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)` }}
          ></div>

          {/* Second Hand */}
          <div
            className="absolute top-1/2 left-1/2 w-[1px] h-20 bg-red-500 origin-bottom"
            style={{ transform: `translate(-50%, -100%) rotate(${secondDeg}deg)` }}
          ></div>

        </div>

      </div>

    </div>

  </div>

      {/* Mobile Featured Calculators */}
<div className="xl:hidden mt-6 space-y-4 px-4">

  <div className="bg-white rounded-2xl shadow-md p-4 border border-green-300">
    <h3 className="text-lg font-bold text-green-700 mb-2">
      🏠 Property Advance Tax
    </h3>
    <Link
      href="/property-advance-tax-calculator-pakistan"
      className="block text-center bg-green-600 text-white py-2 rounded-lg font-semibold"
    >
      Calculate Now →
    </Link>
  </div>

  <div className="bg-white rounded-2xl shadow-md p-4 border border-green-300">
    <h3 className="text-lg font-bold text-green-700 mb-2">
      💻 Freelancer & IT Tax
    </h3>
    <Link
      href="/freelancer-it-tax-calculator-pakistan"
      className="block text-center bg-green-600 text-white py-2 rounded-lg font-semibold"
    >
      Calculate Now →
    </Link>
  </div>

    {/* Mobile Quick Tools Accordion */}
<div className="xl:hidden mt-4 px-4">

  <details className="bg-white rounded-2xl shadow-md p-4 border border-green-300">
    <summary className="cursor-pointer font-semibold text-green-700 text-lg">
      📂 More Calculators
    </summary>

    <div className="mt-3 space-y-2 text-sm">

      <Link href="/" className="block text-green-700">
        💰 Income Tax Calculator
      </Link>

      <Link href="/monthly-tax-calculator-pakistan" className="block text-green-700">
        📅 Monthly Tax Calculator
      </Link>

      <Link href="/salary-after-tax-calculator" className="block text-green-700">
        💸 Salary After Tax
      </Link>

      <Link href="/withholding-tax-calculator" className="block text-green-700">
        🧾 Withholding Tax
      </Link>

      <Link href="/zakat-calculator" className="block text-green-700">
        🕌 Zakat Calculator
      </Link>

      <Link href="/tax-slab-finder-pakistan" className="block text-green-700">
        📊 Tax Slab Finder
      </Link>

    </div>
  </details>

</div>


</div>



  {/* Budget 2026-27 Highlight Banner */}
<div className="max-w-4xl mx-auto mb-8">

  <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 
                  text-black rounded-2xl shadow-lg p-6 flex flex-col md:flex-row 
                  items-center justify-between gap-4">

    <div>
      <h3 className="text-xl font-bold">
        Pakistan Budget 2026-27 Released
      </h3>
      <p className="text-sm">
        View updated FBR tax slabs, salary impact and key financial changes.
      </p>
    </div>

    <a
      href="/latest-budget-2026-27-tax-slabs"
      className="bg-black text-white px-6 py-2 rounded-full font-semibold 
                 hover:bg-gray-900 transition"
    >
      View Full Details
    </a>

  </div>

</div>

  <div className="mb-12"></div>
            {/* HERO SECTION */}
<div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-none p-10 border border-gray-200 mb-0 text-center">

  <h1 className="text-3xl md:text-4xl font-bold mb-6">
  Official FBR Tax Calculator Pakistan 2026‑2027 | Income, Property & Freelancer Tax
</h1>

  <p className="mt-6 text-gray-600 text-lg">
    Use our FBR tax calculator in Pakistan to calculate income tax,
    salary tax and yearly tax instantly according to official FBR slabs.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">

  {/* Try Salary Button */}
  <a
    href="/salary/180000"
    className="relative inline-flex items-center justify-center gap-2 
               min-w-[220px] px-8 py-3 rounded-full 
               bg-gradient-to-r from-green-600 to-green-700 
               text-white font-bold text-base 
               shadow-lg hover:shadow-xl 
               hover:scale-105 active:scale-95 
               transition-all duration-200 overflow-hidden"
  >
    <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-20 transition duration-300"></span>
    <span className="relative flex items-center gap-2">
      🔥 Try Salary Tax Example
    </span>
  </a>

  {/* Budget Button */}
  <a
    href="/latest-budget-2026-27-tax-slabs"
    className="relative inline-flex items-center justify-center gap-2 
               min-w-[220px] px-8 py-3 rounded-full 
               bg-gradient-to-r from-yellow-400 to-amber-500 
               text-black font-bold text-base 
               shadow-lg hover:shadow-xl 
               hover:scale-105 active:scale-95 
               transition-all duration-200 overflow-hidden"
  >
    <span className="absolute inset-0 bg-white/30 opacity-0 hover:opacity-20 transition duration-300"></span>
    <span className="relative flex items-center gap-2">
      📊 View Budget 2026‑27
    </span>
  </a>

</div>

</div>


</div>        

      {/* CALCULATOR SECTION */}
      <div className="max-w-xl mx-auto px-4 bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-12">
        <label className="block text-center text-2xl font-extrabold mb-6 border-b-4 border-green-600 pb-2">
  Select Tax Year
</label>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-4 border rounded-xl mb-6 text-center font-medium"
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
  className="relative w-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 
             text-white py-4 rounded-full font-extrabold text-lg tracking-wide 
             shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 
             transition-all duration-300 overflow-hidden"
             
>
  <span className="relative z-10">
    ✅ Calculate Tax
  </span>
</button>

        {tax !== null && (
          <div className="mt-8 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Monthly Income</span>
              <span>Rs {monthlyIncome.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Monthly Tax</span>
              <span>Rs {monthlyTax.toLocaleString()}</span>
            </div>

            <div className="flex justify-between font-semibold text-green-700">
              <span>Salary After Tax</span>
              <span>Rs {monthlyAfterTax.toLocaleString()}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between">
              <span>Yearly Income</span>
              <span>Rs {annualIncome.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Yearly Tax</span>
              <span>Rs {tax.toLocaleString()}</span>
            </div>

            <div className="flex justify-between font-semibold text-green-700">
              <span>Yearly After Tax</span>
              <span>Rs {yearlyAfterTax.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>


      {/* TAX SLAB TABLE */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow mb-12">
        <h2 className="text-xl font-bold mb-4">
          Tax Slabs for {year}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Income Range</th>
                <th className="border p-2 text-left">Rate</th>
              </tr>
            </thead>
            <tbody>
              {taxData[year].map((slab, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    {slab.max === Infinity
                      ? `Above Rs ${slab.min.toLocaleString()}`
                      : `Rs ${slab.min.toLocaleString()} - Rs ${slab.max.toLocaleString()}`}
                  </td>
                  <td className="border p-2">
                    {(slab.rate * 100).toFixed(0)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

            {/* TAX YEAR UPDATE BOX */}
      <div className="max-w-4xl mx-auto bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mb-10">
        <h3 className="text-lg font-bold mb-2">
          Tax Year 2026-27 Update
        </h3>
        <p className="text-gray-700">
          The official Pakistan income tax slabs for 2026-27 will be updated
          here immediately after the Federal Budget 2026 is announced by the
          Government of Pakistan.
        </p>
        <p className="text-gray-600 mt-2">
          Bookmark this page to stay updated with the latest FBR tax rates and slab changes.
        </p>
      </div>


      {/* POPULAR TAX CALCULATORS */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Tax Calculators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <a
            href="/"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-bold text-lg">
              Income Tax Calculator
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Calculate monthly & yearly income tax.
            </p>
          </a>

          <a
            href="/salary-after-tax-calculator"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-5xl mb-4">💵</div>
            <h3 className="font-bold text-lg">
              Salary After Tax
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Estimate your take-home salary.
            </p>
          </a>

          <a
            href="/zakat-calculator"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-5xl mb-4">🕌</div>
            <h3 className="font-bold text-lg">
              Zakat Calculator
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Calculate your yearly zakat.
            </p>
          </a>

          <a
            href="/withholding-tax-calculator"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-5xl mb-4">📊</div>
            <h3 className="font-bold text-lg">
              WHT Calculator
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Calculate withholding tax instantly.
            </p>
          </a>

          <a
            href="/monthly-tax-calculator-pakistan"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-5xl mb-4">📅</div>
            <h3 className="font-bold text-lg">
              Monthly Tax Calculator
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Estimate monthly salary tax instantly.
            </p>
          </a>

          <a
            href="/tax-slab-comparison-pakistan"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-bold text-lg">
              Tax Slab Comparison
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Compare FBR tax slabs year by year.
            </p>
          </a>

        </div>
      </div>
              
      
            {/* WHY CHOOSE SECTION */}
      <div className="max-w-5xl mx-auto mb-16">
        <SectionTitle
          title="Why Choose FBR Tax Calculators?"
          subtitle="Free tax calculators and practical guides to help individuals in Pakistan understand taxes and estimate liabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-bold text-xl mb-2">
              Official FBR Slabs
            </h3>
            <p className="text-gray-600 text-sm">
              Calculations are based on publicly available FBR tax slabs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="font-bold text-xl mb-2">
              Instant Results
            </h3>
            <p className="text-gray-600 text-sm">
              Calculate monthly and yearly income tax instantly.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="font-bold text-xl mb-2">
              Mobile Friendly
            </h3>
            <p className="text-gray-600 text-sm">
              Fully responsive and works smoothly on all devices.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🆓</div>
            <h3 className="font-bold text-xl mb-2">
              Completely Free
            </h3>
            <p className="text-gray-600 text-sm">
              No registration required. Use all tools free of cost.
            </p>
          </div>

        </div>
      </div>


      {/* SEO CONTENT SECTION */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Income Tax Calculator Pakistan 2026-27
        </h2>

        <p className="mb-4 text-gray-700">
          Our Income Tax Calculator Pakistan helps salaried individuals
          calculate monthly and yearly income tax instantly according to
          official FBR tax slabs.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Who Should Use This Salary Tax Calculator?
        </h3>

        <p className="mb-4 text-gray-700">
          This calculator is designed for salaried individuals working in
          Pakistan who want to estimate monthly tax deductions from their
          salary and calculate yearly tax liability.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          How Income Tax Is Calculated in Pakistan?
        </h3>

        <p className="mb-4 text-gray-700">
          Income tax in Pakistan is calculated on annual income using
          marginal tax slabs announced each year in the Finance Act.
        </p>
      </div>


      {/* FAQ SECTION */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-6 text-sm text-gray-700">

          <div>
            <p className="font-semibold">
              What is the minimum salary to pay income tax in Pakistan?
            </p>
            <p>
              Annual income up to Rs 600,000 is exempt from income tax
              for salaried individuals.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              How is monthly income tax calculated?
            </p>
            <p>
              Monthly tax is calculated by dividing yearly tax liability
              by 12 months.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Is this calculator officially affiliated with FBR?
            </p>
            <p>
              No. This is an independent informational tool based on
              publicly available tax slab data.
            </p>
          </div>

        </div>
      </div>


      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the minimum salary to pay income tax in Pakistan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Annual income up to Rs 600,000 is exempt from income tax for salaried individuals."
                }
              },
              {
                "@type": "Question",
                name: "How is monthly income tax calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Monthly tax is calculated by dividing yearly tax liability by 12 months."
                }
              }
            ]
          })
        }}
      />

    </main>
  );
}

      