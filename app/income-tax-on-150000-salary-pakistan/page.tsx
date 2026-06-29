export const metadata = {
  title: "Income Tax on Rs.150,000 Salary in Pakistan (2025-26)",
  description:
    "Calculate income tax on Rs.150,000 monthly salary in Pakistan using official FBR tax slabs for tax year 2025-26.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-4xl font-bold mb-6">
        Income Tax on Rs.150,000 Salary in Pakistan
      </h1>

      <p className="mb-4 text-gray-700">
        If your monthly salary is Rs.150,000, your annual income is
        Rs.1,800,000. According to the applicable FBR tax slabs, your tax
        liability is calculated on your annual taxable income.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Salary Summary
      </h2>

      <table className="w-full border border-gray-200 mb-6">
        <tbody>
          <tr className="border">
            <td className="p-3 font-semibold">Monthly Salary</td>
            <td className="p-3">Rs.150,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Yearly Salary</td>
            <td className="p-3">Rs.1,800,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Tax Year</td>
            <td className="p-3">2025-26</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How is Tax Calculated?
      </h2>

      <p className="mb-4 text-gray-700">
        Pakistan uses progressive tax slabs. Tax is calculated on annual
        taxable income according to the applicable slab and then divided into
        monthly values where required.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Why Use Our Calculator?
      </h2>

      <p className="mb-4 text-gray-700">
        Instead of calculating tax manually, you can use our Income Tax
        Calculator to instantly estimate monthly tax, yearly tax and take-home
        salary.
      </p>

      <div className="mt-8 p-6 bg-green-50 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">
          Calculate Your Exact Tax
        </h3>

        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Open Income Tax Calculator
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold mb-2">
        Is Rs.150,000 salary taxable?
      </h3>

      <p className="mb-4 text-gray-700">
        Yes. A monthly salary of Rs.150,000 falls within the taxable income
        range under the applicable tax slabs.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Can I reduce my tax?
      </h3>

      <p className="mb-4 text-gray-700">
        Maintaining filer status and filing your return on time helps you remain
        compliant with FBR requirements.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Related Guides
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/" className="text-green-600">
              Income Tax Calculator Pakistan
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