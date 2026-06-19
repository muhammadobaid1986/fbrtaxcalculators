export const metadata = {
  title: "Latest Budget 2025-26 Pakistan – Income Tax Changes Explained",
  description:
    "Complete breakdown of Federal Budget 2025-26 Pakistan including updated income tax slabs, salaried tax changes, and impact on taxpayers.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-4xl font-bold mb-6">
        Latest Budget 2025-26 Pakistan – Income Tax Changes Explained
      </h1>

      <p className="mb-4 text-gray-700">
        The Federal Budget 2025-26 introduced updates to income tax slabs
        for salaried individuals in Pakistan. In this guide, we explain
        the key tax changes, revised salary tax rates, and how these updates
        affect taxpayers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Overview of Budget 2025-26 Tax Changes
      </h2>

      <p className="mb-4 text-gray-700">
        The government revised income tax slabs to adjust tax burden
        on salaried individuals. Some slabs have lower entry rates,
        while higher income groups face progressive tax adjustments.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Updated Salaried Income Tax Slabs 2025-26
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Annual Income</th>
              <th className="border p-3 text-left">Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-3">Up to Rs 600,000</td><td className="border p-3">0%</td></tr>
            <tr><td className="border p-3">600,001 – 1,200,000</td><td className="border p-3">1%</td></tr>
            <tr><td className="border p-3">1,200,001 – 2,400,000</td><td className="border p-3">15%</td></tr>
            <tr><td className="border p-3">2,400,001 – 3,600,000</td><td className="border p-3">25%</td></tr>
            <tr><td className="border p-3">Above 3,600,000</td><td className="border p-3">35%</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Example Salary Tax Calculation
      </h2>

      <p className="mb-4 text-gray-700">
        Suppose your monthly salary is Rs 100,000.
        Your annual income will be Rs 1,200,000.
        The first Rs 600,000 is tax-free.
        The remaining Rs 600,000 is taxed at 1%,
        resulting in Rs 6,000 yearly tax.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Who Is Affected by These Changes?
      </h2>

      <p className="mb-4 text-gray-700">
        These tax changes primarily affect salaried employees
        in the private and government sectors.
        Higher income earners will see larger adjustments
        due to progressive tax slabs.
      </p>

      <div className="mt-8 p-6 bg-green-50 rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-3">
          Calculate Your Updated Tax
        </h3>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Open Income Tax Calculator
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-sm text-gray-700">
        <div>
          <p className="font-semibold">
            When does Budget 2025-26 apply?
          </p>
          <p>
            The updated tax slabs apply from the start of the new fiscal year.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Are non-salaried slabs different?
          </p>
          <p>
            Yes, non-salaried individuals follow a separate tax structure.
          </p>
        </div>
      </div>

    </div>
  );
}