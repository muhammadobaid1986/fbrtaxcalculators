export const metadata = {
  title: "Income Tax on Rs.100,000 Salary in Pakistan (2025-26)",
  description:
    "Calculate income tax on Rs.100,000 monthly salary in Pakistan for tax year 2025-26 using FBR tax slabs.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-4xl font-bold mb-6">
        Income Tax on Rs.100,000 Salary in Pakistan
      </h1>

      <p className="mb-4 text-gray-700">
        If your monthly salary is Rs.100,000, your estimated yearly income is
        Rs.1,200,000. According to the 2025-26 FBR tax slabs, the estimated
        yearly income tax is approximately Rs.6,000.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Salary Breakdown
      </h2>

      <table className="w-full border border-gray-200 mb-6">
        <tbody>
          <tr className="border">
            <td className="p-3 font-semibold">Monthly Salary</td>
            <td className="p-3">Rs.100,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Yearly Salary</td>
            <td className="p-3">Rs.1,200,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Estimated Monthly Tax</td>
            <td className="p-3">Rs.500</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Estimated Yearly Tax</td>
            <td className="p-3">Rs.6,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Monthly Take Home Salary</td>
            <td className="p-3">Rs.99,500</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How is Tax Calculated?
      </h2>

      <p className="mb-4 text-gray-700">
        Income tax is calculated on annual taxable income according to the
        official FBR tax slabs. The tax is then divided into monthly values for
        easier understanding.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Is Rs.100,000 salary taxable?
      </h3>

      <p className="mb-4 text-gray-700">
        Yes. A monthly salary of Rs.100,000 falls within the taxable income
        range according to the applicable tax slabs.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        How can I reduce my tax?
      </h3>

      <p className="mb-4 text-gray-700">
        Filing tax returns on time and maintaining filer status may help reduce
        withholding taxes.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Related Tools
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/" className="text-green-600">
              Income Tax Calculator
            </a>
          </li>

          <li>
            <a href="/salary-after-tax-calculator" className="text-green-600">
              Salary After Tax Calculator
            </a>
          </li>

          <li>
            <a href="/how-to-become-a-filer" className="text-green-600">
              How to Become a Filer
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}