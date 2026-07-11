
"use client";
import { taxData } from "../lib/tax";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export default function TaxComparison() {
  const years = Object.keys(taxData);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Pakistan Income Tax Slab Comparison (2021-2027)
      </h1>
      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-xl mb-10">
  <h2 className="text-xl font-bold mb-2">
    What is the Latest Income Tax Slab in Pakistan (2026-27)?
  </h2>
  <p className="text-gray-700">
    The latest Pakistan income tax slabs for 2026-27 range from 0% for annual income up to Rs 600,000 
    to 35% for income above Rs 7,000,000. Middle income brackets are taxed between 1% and 32% 
    under the revised FBR marginal tax structure.
  </p>
</div>

      {years.map((year) => (
        <div key={year} className="mb-10 border rounded-2xl overflow-hidden">
          <div className="bg-gray-100 p-4 font-bold">
            Tax Year {year}
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-4 border-r">Income Range</th>
                <th className="p-4">Rate</th>
              </tr>
            </thead>
            <tbody>
              {taxData[year].map((slab, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 border-r">
                    Rs {slab.min.toLocaleString()} -{" "}
                    {slab.max === Infinity
                      ? "Above"
                      : `Rs ${slab.max.toLocaleString()}`}
                  </td>
                  <td className="p-4 font-bold">
  {(slab.rate * 100).toFixed(2).replace(".00", "")}%
</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-16 bg-white p-6 rounded-2xl shadow">
  <h2 className="text-2xl font-bold mb-6 text-center">
    Tax Rate Comparison (2026-27)
  </h2>

  <Bar
    data={{
      labels: [
        "Up to 600k",
        "1.2M",
        "2.2M",
        "3.2M",
        "4.1M",
        "5.6M",
        "7M+",
      ],
      datasets: [
        {
          label: "Tax Rate (%)",
          data: [0, 1, 11, 20, 25, 29, 35],
          backgroundColor: "rgba(34,197,94,0.6)",
        },
      ],
    }}
  />
</div>
        </div>
      ))}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the latest tax slab in Pakistan for 2026-27?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The latest tax slabs range from 0% for income up to Rs 600,000 and go up to 35% for income above Rs 7,000,000."
          }
        },
        {
          "@type": "Question",
          "name": "How are income tax slabs calculated in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Income tax in Pakistan is calculated using a marginal tax system where each income bracket is taxed at a specific rate."
          }
        }
      ]
    })
  }}
/>

<div className="mt-16 prose max-w-none">
  <h2>Which Tax Year is Better for Salaried Individuals?</h2>

  <p>
    Comparing tax slabs from 2021 to 2027 helps identify how tax policies
    changed over time. Middle-income earners saw adjustments in slab rates
    during 2026-27.
  </p>

  <p>
    You can also check salary-specific tax pages like
    <a href="/salary/180000" className="text-green-600 font-semibold">
      Tax on 180000 Salary
    </a>.
  </p>
</div>

    </div>
  );
}