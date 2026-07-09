import { taxData } from "../lib/tax";

export const metadata = {
  title: "Pakistan Income Tax Slab Comparison 2021-2027 | FBR Tax Changes",
  description:
    "Compare Pakistan income tax slabs from 2021 to 2027. See how FBR tax rates changed year by year for salaried individuals.",
  keywords:
    "tax slab comparison Pakistan, FBR tax changes 2025-26, income tax slabs 2026-27 Pakistan",
};

export default function TaxComparison() {
  const years = Object.keys(taxData);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Pakistan Income Tax Slab Comparison (2021-2027)
      </h1>

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
                    {slab.rate * 100}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}