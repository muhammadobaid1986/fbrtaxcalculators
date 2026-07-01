export const metadata = {
  title: "Income Tax on Rs.250,000 Salary in Pakistan (2025-26)",
  description:
    "Calculate income tax on Rs.250,000 monthly salary in Pakistan according to FBR tax slabs.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-4xl font-bold mb-6">
        Income Tax on Rs.250,000 Salary in Pakistan
      </h1>

      <p className="mb-4 text-gray-700">
        A monthly salary of Rs.250,000 equals an annual salary of
        Rs.3,000,000. Income tax is calculated using the applicable FBR tax
        slabs for the selected tax year.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Salary Summary
      </h2>

      <table className="w-full border border-gray-200 mb-6">
        <tbody>
          <tr className="border">
            <td className="p-3 font-semibold">Monthly Salary</td>
            <td className="p-3">Rs.250,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Yearly Salary</td>
            <td className="p-3">Rs.3,000,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Tax Year</td>
            <td className="p-3">2025-26</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How Tax is Calculated
      </h2>

      <p className="mb-4 text-gray-700">
        Tax is calculated on annual taxable income according to the official
        FBR tax slabs. The yearly tax can then be converted into monthly tax
        deductions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Why Use Our Tax Calculator?
      </h2>

      <p className="mb-4 text-gray-700">
        Our free calculator provides quick salary tax estimates, yearly tax,
        monthly tax and take-home salary based on the latest tax slabs.
      </p>

      <div className="mt-8 p-6 bg-green-50 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">
          Calculate Your Exact Salary Tax
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
        Is Rs.250,000 salary taxable?
      </h3>

      <p className="mb-4 text-gray-700">
        Yes. A monthly salary of Rs.250,000 falls within the taxable income
        range and tax is calculated according to the applicable slab.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Can I calculate monthly tax online?
      </h3>

      <p className="mb-4 text-gray-700">
        Yes. Use our free Income Tax Calculator to estimate monthly and yearly
        tax instantly.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Related Guides
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/" className="text-green-600">
              Income Tax Calculator
            </a>
          </li>

          <li>
            <a href="/monthly-tax-calculator-pakistan" className="text-green-600">
              Monthly Tax Calculator
            </a>
          </li>

          <li>
            <a href="/income-tax-on-200000-salary-pakistan" className="text-green-600">
              Income Tax on Rs.200,000 Salary
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}