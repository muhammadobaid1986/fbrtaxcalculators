

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
  
  // ✅ YE LINE ANDAR HONI CHAHIYE THI
  
  
  // ✅ YE USE EFFECT ANDAR HONA CHAHIYE THA
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
    
    <main className="min-h-screen p-3 md:p-6 bg-gray-50">
      <link rel="prefetch" href="/salary/100000" />
      <link rel="prefetch" href="/tax-slab-comparison-pakistan" />
      {/* Pakistan Date & Clock Card */}

<div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-green-700 to-green-600 text-white p-6 rounded-3xl shadow-lg">

  <h2 className="text-3xl font-bold mb-4 text-center">
    🇵🇰 Pakistan Current Time
  </h2>

  <div className="grid md:grid-cols-2 gap-8 items-center">

    <div className="text-center md:text-left">
      <p className="text-lg mb-2">
      {now &&
  now.toLocaleDateString("en-PK", {
  timeZone: "Asia/Karachi",
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})}
      </p>

      <p className="text-xl font-semibold mb-2">
        {now &&
  now.toLocaleTimeString("en-PK", {
  timeZone: "Asia/Karachi",
})}
      </p>

      <p className="text-lg">
        Islamic Date: {hijriDate}
      </p>
    </div>

    <div className="flex justify-center">
      <div className="relative w-48 h-48 rounded-full bg-white border-8 border-green-200 shadow-xl">

        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-800 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>

        {/* Hour Hand */}
        <div
          className="absolute top-1/2 left-1/2 w-2 h-14 bg-black origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`
          }}
        ></div>

        {/* Minute Hand */}
        <div
          className="absolute top-1/2 left-1/2 w-1 h-20 bg-green-700 origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`
          }}
        ></div>

        {/* Second Hand */}
        <div
          className="absolute top-1/2 left-1/2 w-0.5 h-24 bg-red-500 origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`
          }}
        ></div>

      </div>
    </div>

  </div>

</div>

      {/* HERO SECTION */}
<div className="mt-8 mb-8 max-w-4xl mx-auto">
  <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100">

    <h1 className="text-2xl md:text-4xl font-bold">
 FBR Tax Calculator Pakistan 2026-27 | Income & Salary Tax Slabs
</h1>
<p className="mt-4 text-gray-700 text-lg">
  Our FBR tax calculator in Pakistan helps you calculate income tax,
  salary tax, and take-home pay using official 2026-27 tax slabs.
</p>

<p className="mt-4 text-gray-700 text-lg">
  Use our FBR tax calculator in Pakistan to calculate income tax on your monthly salary instantly.
</p>

<p className="mt-4 text-gray-700">
  Use our FBR tax calculator in Pakistan to calculate income tax, salary tax,
  and yearly tax instantly according to official FBR slabs.
</p>

<p className="mt-4 text-gray-700 text-lg">
  Use our FBR tax calculator in Pakistan to calculate income tax on your monthly salary according to official 2026-27 slabs.
</p>
    <p className="mt-6 text-gray-700">
  For a complete understanding of tax slabs, filer benefits, and salary tax rules,
  read our{" "}
  <a
    href="/blog/pakistan-income-tax-guide"
    className="text-green-600 font-semibold"
  >
    Pakistan Income Tax Complete Guide
  </a>.
</p>

<div className="mt-8 flex justify-center">
  <a
    href="/salary/180000"
    className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
  >
    🔥 Try Salary Tax Example
  </a>
</div>

<div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl mt-6">
  <h2 className="text-xl font-bold mb-2">
    What is the Tax-Free Salary in Pakistan?
  </h2>
  <p>
    The current tax-free annual salary limit in Pakistan is Rs 600,000.
    Salaried individuals earning below this amount do not pay income tax.
  </p>
</div>


<p className="mt-2 text-gray-700">
  Check current{" "}
  <a
    href="/blog/tax-free-salary-pakistan"
    className="text-green-600 font-semibold"
  >
    Tax Free Salary Limit
  </a>.
</p>

    <p className="text-gray-600 mt-6 text-lg">
      Calculate salary income tax online in Pakistan for tax year 2026-27 using official FBR tax slabs. Get monthly tax, yearly tax and take-home salary instantly.
    </p>

    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
        ✅ Based on Official FBR Slabs
      </span>

      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
        📅 Updated 2026-27
      </span>

      <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
        ⚡ Free Calculator
      </span>
    </div>
<link rel="prefetch" href="/salary/100000" />
<link rel="prefetch" href="/tax-slab-comparison-pakistan" />
  </div>
</div>

      <div className="card p-5 md:p-10 max-w-xl mx-auto border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 bg-white backdrop-blur-md">
        <label
  htmlFor="taxYear"
  className="block text-sm font-semibold mb-2"
>
  Select Tax Year
</label>
        <select
  id="taxYear"
  aria-label="Select Tax Year"
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
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-full hover:scale-105 transition"
        >
          Calculate Tax
        </button>

        {tax !== null && (
          <div className="mt-8 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Monthly Income</span>
              <span>{monthlyIncome.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Monthly Tax</span>
              <span>{monthlyTax.toLocaleString()}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Salary After Tax</span>
              <span>{monthlyAfterTax.toLocaleString()}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between">
              <span>Yearly Income</span>
              <span>{annualIncome.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Yearly Tax</span>
              <span>{tax.toLocaleString()}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Yearly Income After Tax</span>
              <span>{yearlyAfterTax.toLocaleString()}</span>
            </div>
          </div>
        )}

        {/* Dynamic Slab Table */}
        <div className="mt-12 max-w-xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Tax Slabs for {year}</h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm bg-white rounded-lg shadow">
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
  {(slab.rate * 100).toFixed(2).replace(".00", "")}%
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl">
  <h3 className="text-lg font-bold mb-2">
    Tax Year 2026-27 Update
  </h3>
  <p className="text-gray-700">
    The official Pakistan income tax slabs for 2026-27 will be updated here immediately after the Federal Budget 2026 is announced by the Government of Pakistan.
  </p>
  <p className="text-gray-600 mt-2">
    Bookmark this page to stay updated with the latest FBR tax rates and slab changes.
  </p>
</div>

{/* POPULAR TOOLS */}
<div className="max-w-5xl mx-auto mt-16">

  <h2 className="text-3xl font-bold text-center mb-10">
    Popular Tax Calculators
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

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

<a href="/tax-slab-comparison-pakistan">
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center min-h-[230px] hover:shadow-xl transition transform hover:-translate-y-1">
    <div className="text-5xl mb-4">📊</div>
    <h3 className="font-bold text-lg leading-tight">
      Tax Slab Comparison
    </h3>
    <p className="text-gray-600 text-sm mt-2">
      Compare FBR tax slabs year by year.
    </p>
  </div>
</a>

  </div>

</div>

      {/* WHY CHOOSE US */}
<div className="max-w-5xl mx-auto mt-16">

  <SectionTitle
  title="Why Choose FBR Tax Calculators?"
  subtitle="Free tax calculators and practical guides to help individuals in Pakistan understand taxes and estimate liabilities."
/>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

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
      <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Income Tax Calculator Pakistan 2025-26
        </h2>

        <p className="mb-4 text-gray-700">
          Our Income Tax Calculator Pakistan helps salaried individuals
          calculate monthly and yearly income tax instantly according to
          official FBR tax slabs. This calculator supports tax years 2021-22 to
          2025-26 and provides accurate salary tax estimation.
        </p>

        <div className="my-8 text-center" style={{ minHeight: "200px" }}>
  <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-1040104111900400"
    data-ad-slot="6666666666"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl mt-6">
  <h2 className="text-xl font-bold mb-2">
    What is the Current Tax-Free Salary in Pakistan?
  </h2>
  <p className="text-gray-700">
    The current tax-free annual salary limit in Pakistan is Rs 600,000. 
    Salaried individuals earning below this threshold do not pay income tax under FBR rules.
  </p>
</div>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          How Income Tax Is Calculated in Pakistan?
        </h3>

        <p className="mb-4 text-gray-700">
          Income tax in Pakistan is calculated on annual income. The government
          defines tax slabs each year through the Finance Act. Tax is calculated
          using a marginal rate system, meaning higher income portions are taxed
          at higher rates.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Who Should Use This Salary Tax Calculator?
        </h3>

        <p className="mb-4 text-gray-700">
          This calculator is designed for salaried individuals working in
          Pakistan who want to estimate monthly tax deductions from their salary
          and calculate yearly tax liability.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">
  Why Use Our Income Tax Calculator Pakistan?
</h3>

<p className="mb-4 text-gray-700">
  Our calculator helps employees, freelancers and professionals estimate their tax liability according to current FBR tax slabs. The tool supports multiple tax years and provides instant results.
</p>
<h3 className="text-xl font-semibold mt-6 mb-2">
  Monthly Tax Calculator Pakistan
</h3>

<p className="mb-4 text-gray-700">
  Our Monthly Tax Calculator Pakistan helps salaried employees estimate monthly income tax according to the latest FBR tax slabs. Simply enter your monthly salary to calculate tax instantly and estimate your yearly tax liability.
</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Supported Tax Years
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Income Tax Calculator 2025-26</li>
          <li>Income Tax Calculator 2024-25</li>
          <li>Income Tax Calculator 2023-24</li>
          <li>Income Tax Calculator 2022-23</li>
          <li>Income Tax Calculator 2021-22</li>
          <li>Income Tax Calculator Pakistan</li>
          <li>Salary Tax Calculator Pakistan</li>
          <li>FBR Tax Calculator Pakistan</li>
          <li>Monthly Tax Calculator Pakistan</li>
          <li>Pakistan Salary Tax Calculator</li>
          <li>Online Tax Calculator Pakistan</li>
          <li>FBR Salary Tax Calculator</li>
          <li>Monthly Tax Calculator Pakistan</li>
          <li>Income Tax on Rs.100,000 Salary</li>
          <li>Income Tax on Rs.150,000 Salary</li>
          <li>Income Tax on Rs.200,000 Salary</li>
          <li>Income Tax on Rs.250,000 Salary</li>
          <li>Income Tax on Rs.300,000 Salary</li>
          <li>Salary After Tax Calculator</li>
          <li>Tax Slab Finder Pakistan</li>
        </ul>
      </div>
{/* Popular Salary Guides */}

<div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
  <h2 className="text-2xl font-bold mb-6">
    Popular Salary Tax Guides
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <a href="/income-tax-on-100000-salary-pakistan" className="text-green-700 hover:underline">
      Income Tax on Rs.100,000 Salary
    </a>

    <a href="/income-tax-on-150000-salary-pakistan" className="text-green-700 hover:underline">
      Income Tax on Rs.150,000 Salary
    </a>

    <a href="/income-tax-on-200000-salary-pakistan" className="text-green-700 hover:underline">
      Income Tax on Rs.200,000 Salary
    </a>

    <a href="/income-tax-on-250000-salary-pakistan" className="text-green-700 hover:underline">
      Income Tax on Rs.250,000 Salary
    </a>

    <a href="/income-tax-on-300000-salary-pakistan" className="text-green-700 hover:underline">
      Income Tax on Rs.300,000 Salary
    </a>

  </div>
</div>
      {/* FAQ SECTION */}
      <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-6 text-sm text-gray-700">
          <div>
            <p className="font-semibold">
              What is the minimum salary to pay income tax in Pakistan?
            </p>
            <p>
              Annual income up to Rs 600,000 is currently exempt from income
              tax for salaried individuals.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              How is monthly income tax calculated?
            </p>
            <p>
              Monthly tax is calculated by dividing yearly tax liability by 12
              months.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Is this calculator officially affiliated with FBR?
            </p>
            <p>
              No. This is an independent informational tool based on publicly
              available tax slab data.
            </p>
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
          "name": "What is the minimum salary to pay income tax in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual income up to Rs 600,000 is exempt from income tax for salaried individuals."
          }
        },
        {
          "@type": "Question",
          "name": "How is monthly tax calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monthly tax is calculated by dividing yearly tax by 12 months."
          }
        }
      ]
    })
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to calculate income tax in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Income tax in Pakistan is calculated using FBR marginal tax slabs based on annual income."
          }
        }
      ]
    })
  }}
/>

    </main>
  );
}