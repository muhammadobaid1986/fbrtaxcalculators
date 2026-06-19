"use client";

import { useEffect, useState } from "react";

type Slab = {
  min: number;
  max: number;
  rate: number;
  fixed: number;
};

const taxData: Record<string, Slab[]> = {
  "2021-22": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
    { min: 1200000, max: 1800000, rate: 0.1, fixed: 30000 },
    { min: 1800000, max: 2500000, rate: 0.15, fixed: 90000 },
    { min: 2500000, max: Infinity, rate: 0.2, fixed: 195000 },
  ],

  "2022-23": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
    { min: 2400000, max: 3600000, rate: 0.2, fixed: 165000 },
    { min: 3600000, max: Infinity, rate: 0.25, fixed: 405000 },
  ],

  "2023-24": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
    { min: 2400000, max: 3600000, rate: 0.2, fixed: 165000 },
    { min: 3600000, max: Infinity, rate: 0.25, fixed: 405000 },
  ],

  "2024-25": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.15, fixed: 30000 },
    { min: 2400000, max: 3600000, rate: 0.25, fixed: 210000 },
    { min: 3600000, max: Infinity, rate: 0.3, fixed: 510000 },
  ],

  "2025-26": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.01, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.15, fixed: 6000 },
    { min: 2400000, max: 3600000, rate: 0.25, fixed: 186000 },
    { min: 3600000, max: Infinity, rate: 0.35, fixed: 486000 },
  ],
};

export default function Home() {
  
  const [salary, setSalary] = useState("");
  const [year, setYear] = useState("2025-26");
  const [tax, setTax] = useState<number | null>(null);
  const [now, setNow] = useState(new Date());
  
  // ✅ YE LINE ANDAR HONI CHAHIYE THI
  const [isMounted, setIsMounted] = useState(false);
  
  // ✅ YE USE EFFECT ANDAR HONA CHAHIYE THA
  useEffect(() => {
    setIsMounted(true); // Mount hone par true karega taake hydration error na aaye
    
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateTax = () => {
    const monthlyIncome = Number(salary);
    const annualIncome = monthlyIncome * 12;

    const slabs = taxData[year];
    let yearlyTax = 0;

    for (let slab of slabs) {
      if (annualIncome > slab.min && annualIncome <= slab.max) {
        yearlyTax = slab.fixed + (annualIncome - slab.min) * slab.rate;
        break;
      }
    }

    setTax(Math.max(0, yearlyTax));
  };

  const monthlyIncome = Number(salary) || 0;
  const annualIncome = monthlyIncome * 12;
  const monthlyTax = tax ? tax / 12 : 0;
  const monthlyAfterTax = monthlyIncome - monthlyTax;
  const yearlyAfterTax = annualIncome - (tax ?? 0);

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = hours * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  const hijriRaw = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(now);

// Manual Pakistan adjustment (-1 day)
const hijriDate = hijriRaw;

  return (
    
    <main className="min-h-screen p-3 md:p-6 bg-gray-50">
      {/* Pakistan Date & Clock Card */}

<div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-green-700 to-green-600 text-white p-8 rounded-3xl shadow-2xl">

  <h2 className="text-3xl font-bold mb-4 text-center">
    🇵🇰 Pakistan Current Time
  </h2>

  <div className="grid md:grid-cols-2 gap-8 items-center">

    <div className="text-center md:text-left">
      <p className="text-lg mb-2">
        {isMounted
          ? now.toLocaleDateString("en-PK", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </p>

      <p className="text-xl font-semibold mb-2">
        {isMounted ? now.toLocaleTimeString("en-PK") : ""}
      </p>

      <p className="text-lg">
        Islamic Date: {isMounted ? hijriDate : ""}
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
      <div className="mt-16 mb-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
            Income Tax Calculator Pakistan
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Instantly calculate monthly and yearly salary tax using official FBR
            slabs.
          </p>
        </div>
      </div>

      <div className="card p-5 md:p-10 max-w-xl mx-auto border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 bg-white backdrop-blur-md">
        <select
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
                    <td className="border p-2">{slab.rate * 100}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-xl max-w-xl mx-auto">
        <h3 className="text-lg font-bold mb-2">Tax Year 2026‑27 Update</h3>
        <p className="text-sm text-gray-700">
          The official income tax slabs for 2026‑27 will be updated here once
          the Federal Budget is passed by Parliament.
        </p>
      </div>

      {/* SEO CONTENT SECTION */}
      <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Income Tax Calculator Pakistan – Complete Guide
        </h2>

        <p className="mb-4 text-gray-700">
          Use our free income tax calculator Pakistan to calculate salary tax
          for tax years 2021 to 2026. This tool helps salaried individuals
          estimate monthly and yearly tax based on official FBR tax slabs.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          How to Calculate Income Tax in Pakistan?
        </h3>

        <p className="mb-4 text-gray-700">
          Income tax in Pakistan is calculated on annual income. The government
          defines different tax slabs each year. As your income increases, the
          tax rate increases according to marginal slab rules.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Who Should Use This Calculator?
        </h3>

        <p className="text-gray-700">
          This calculator is designed for salaried individuals who want to
          estimate their salary income tax instantly without manual calculation.
        </p>
      </div>

      {/* FAQ Section */}
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
              Currently, annual income up to Rs 600,000 is exempt from income
              tax for salaried individuals.
            </p>
          </div>

          <div>
            <p className="font-semibold">How is monthly tax calculated?</p>
            <p>
              Monthly tax is calculated by dividing total yearly tax by 12
              months.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Is this calculator affiliated with FBR?
            </p>
            <p>
              No, this website is an independent tool based on publicly
              available tax slabs.
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
          Supported Tax Years
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Income Tax Calculator 2025-26</li>
          <li>Income Tax Calculator 2024-25</li>
          <li>Income Tax Calculator 2023-24</li>
          <li>Income Tax Calculator 2022-23</li>
          <li>Income Tax Calculator 2021-22</li>
        </ul>
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


    </main>
  );
}