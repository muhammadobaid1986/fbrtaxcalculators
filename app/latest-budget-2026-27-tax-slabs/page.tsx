export const metadata = {
  title: "Pakistan Budget 2026-27 | Complete Income Tax Slabs & Key Updates",
  description:
    "Full details of Pakistan Federal Budget 2026-27 including updated FBR income tax slabs, salary tax impact, filer rules, and financial changes.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Pakistan Federal Budget 2026-27 – Complete Guide
      </h1>

      <p className="mb-4">
        The Federal Budget 2026-27 introduced several changes in income tax slabs,
        withholding tax rates, and compliance requirements for salaried individuals,
        freelancers, and businesses across Pakistan.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Key Highlights of Budget 2026-27
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Revised income tax slabs for salaried individuals</li>
        <li>Adjustments in withholding tax rates</li>
        <li>Updated Active Taxpayer List (ATL) compliance rules</li>
        <li>Policy updates for freelancers and digital earners</li>
        <li>Changes in property and vehicle transaction taxes</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Income Tax Slabs 2026-27 (Salaried Individuals)
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Annual Income</th>
              <th className="border p-2 text-left">Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Up to Rs 600,000</td>
              <td className="border p-2">0%</td>
            </tr>
            <tr>
              <td className="border p-2">Rs 600,001 – Rs 1,200,000</td>
              <td className="border p-2">5%</td>
            </tr>
            <tr>
              <td className="border p-2">Rs 1,200,001 – Rs 2,200,000</td>
              <td className="border p-2">15%</td>
            </tr>
            <tr>
              <td className="border p-2">Rs 2,200,001 – Rs 3,200,000</td>
              <td className="border p-2">25%</td>
            </tr>
            <tr>
              <td className="border p-2">Above Rs 3,200,000</td>
              <td className="border p-2">30%+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Impact on Salaried Individuals
      </h2>

      <p className="mb-4">
        The updated slabs affect monthly take-home salary calculations.
        Employees earning above the tax-free threshold should review
        their annual tax liability under the new rates.
      </p>

      <p className="mb-4">
        Use our Income Tax Calculator to check how the 2026-27
        budget affects your salary instantly.
      </p>

      <div className="mt-8 text-center">
        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Use Income Tax Calculator
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Changes for Freelancers & Businesses
      </h2>

      <p className="mb-4">
        Budget 2026-27 also introduced updates for freelancers,
        IT exporters, and small businesses. Tax compliance rules
        have been strengthened to improve documentation and reporting.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-gray-700">

        <div>
          <p className="font-semibold">
            Did tax rates increase in Budget 2026-27?
          </p>
          <p>
            Some income brackets experienced revisions depending on
            government fiscal policies and revenue targets.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            When do the new tax slabs apply?
          </p>
          <p>
            The new slabs apply to the relevant tax year starting
            from July 1, 2026.
          </p>
        </div>

      </div>

    </div>
  );
}