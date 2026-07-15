import { calculateSalaryTax } from "../../lib/tax";
import CompareSalary from "../CompareSalary";
import SalarySlider from "../SalarySlider";

export async function generateStaticParams() {
  return Array.from({ length: 150 }, (_, i) => ({
    salary: String((i + 1) * 10000),
  }));
}

export async function generateMetadata({ params }: any) {
  const salary = Number(params.salary);

  return {
    title: `Income Tax on Rs ${salary.toLocaleString()} Salary in Pakistan 2026-27`,
    description: `Calculate exact monthly tax, yearly tax and take-home salary for Rs ${salary.toLocaleString()} per month in Pakistan using official FBR slabs.`,
  };
}

export default function Page({ params }: any) {
  const monthlySalary = Number(params.salary);

  if (!monthlySalary || isNaN(monthlySalary)) {
    return <div className="p-10 text-center">Invalid salary</div>;
  }

  const result = calculateSalaryTax(monthlySalary, "2026-27");
  const annualSalary = monthlySalary * 12;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">

      <h1 className="text-3xl font-bold mb-6 leading-tight">
        Income Tax on Rs {monthlySalary.toLocaleString()} Salary in Pakistan 2026-27
      </h1>

      <p className="text-gray-700 mb-6">
        If you earn Rs {monthlySalary.toLocaleString()} per month, your annual income becomes Rs {annualSalary.toLocaleString()}.
        Below is your complete tax breakdown according to official FBR slabs.
      </p>

      {/* GREEN CALCULATOR CARD */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-xl font-bold mb-4">
          Quick Salary Calculator
        </h2>

        <SalarySlider salary={monthlySalary} />

        <p className="mt-3">
          Annual Income: Rs {annualSalary.toLocaleString()}
        </p>
      </div>

      {/* BREAKDOWN TABLE */}
      <div className="bg-white rounded-2xl shadow p-6 mb-12 border">
        <h2 className="text-xl font-bold mb-6">
          Salary & Tax Breakdown
        </h2>

        <table className="w-full border-collapse text-sm">
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-semibold">Monthly Salary</td>
              <td className="p-3">Rs {monthlySalary.toLocaleString()}</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Yearly Salary</td>
              <td className="p-3">Rs {annualSalary.toLocaleString()}</td>
            </tr>
            <tr className="border-b text-red-600">
              <td className="p-3 font-semibold">Monthly Tax</td>
              <td className="p-3">Rs {result.monthlyTax.toLocaleString()}</td>
            </tr>
            <tr className="border-b text-red-600">
              <td className="p-3 font-semibold">Yearly Tax</td>
              <td className="p-3">Rs {result.yearlyTax.toLocaleString()}</td>
            </tr>
            <tr className="bg-green-50 text-green-700 font-bold">
              <td className="p-3">Monthly Take‑Home</td>
              <td className="p-3">Rs {result.monthlyTakeHome.toLocaleString()}</td>
            </tr>
            <tr className="bg-green-50 text-green-700 font-bold">
              <td className="p-3">Yearly Take‑Home</td>
              <td className="p-3">Rs {result.yearlyTakeHome.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* EXPLANATION */}
      <div className="prose max-w-none mb-12">
        <h2>How Much Tax on Rs {monthlySalary.toLocaleString()} Salary?</h2>
        <p>
          Income tax in Pakistan is calculated using a marginal slab system.
          Different portions of your annual income are taxed at different rates.
        </p>

        <h3>Is Rs {monthlySalary.toLocaleString()} Salary Taxable?</h3>
        <p>
          Yes. Since your annual income exceeds the tax-free threshold,
          income tax applies according to FBR rules.
        </p>
      </div>

      {/* RELATED SALARIES */}
      <div className="mt-10 border-t pt-6">
        <h3 className="font-bold mb-4">Compare Other Salaries</h3>

        <div className="grid grid-cols-2 gap-4 text-green-600 font-medium">
          {[100000,150000,200000,250000,300000].map((amt) => (
            <a key={amt} href={`/salary/${amt}`} className="hover:underline">
              Income Tax on Rs {amt.toLocaleString()}
            </a>
          ))}
        </div>
      </div>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `How much tax on Rs ${monthlySalary} salary?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yearly tax on Rs ${monthlySalary} salary is Rs ${result.yearlyTax}.`
                }
              }
            ]
          })
        }}
      />

      <CompareSalary />

    </div>
  );
}