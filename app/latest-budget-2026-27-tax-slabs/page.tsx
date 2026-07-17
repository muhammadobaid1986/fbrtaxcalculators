export const metadata = {
  title: "Pakistan Budget 2026-27 | FBR Tax Slabs & Key Updates",
  description:
    "Complete details of Pakistan Budget 2026-27 including latest FBR income tax slabs, salary tax changes, and financial updates.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Pakistan Budget 2026-27 – Complete Overview
      </h1>

      <p className="mb-4">
        The Federal Budget 2026-27 introduces updates in income tax slabs,
        salary taxation, and financial policies affecting individuals and businesses in Pakistan.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Key Highlights of Budget 2026-27
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Updated income tax slabs for salaried individuals</li>
        <li>Changes in withholding tax rates</li>
        <li>Revised ATL compliance measures</li>
        <li>New policies for freelancers and digital earners</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Income Tax Slabs 2026-27
      </h2>

      <p className="mb-4">
        The following slabs apply to salaried individuals for tax year 2026-27:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Income Range</th>
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
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Impact on Salaried Individuals
      </h2>

      <p className="mb-4">
        These slab changes affect monthly take-home salaries. 
        You can use our Income Tax Calculator to estimate updated deductions instantly.
      </p>

      <div className="mt-8 text-center">
        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Use Income Tax Calculator
        </a>
      </div>

    </div>
  );
}