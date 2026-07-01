export const metadata = {
  title: "Income Tax on Rs.300,000 Salary in Pakistan (2025-26)",
  description:
    "Calculate income tax on Rs.300,000 monthly salary in Pakistan using the latest FBR tax slabs.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-4xl font-bold mb-6">
        Income Tax on Rs.300,000 Salary in Pakistan
      </h1>

      <p className="mb-4 text-gray-700">
        A monthly salary of Rs.300,000 results in an annual salary of
        Rs.3,600,000. The exact income tax depends on the applicable FBR tax
        slabs for the selected tax year.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Salary Summary
      </h2>

      <table className="w-full border border-gray-200 mb-6">
        <tbody>
          <tr className="border">
            <td className="p-3 font-semibold">Monthly Salary</td>
            <td className="p-3">Rs.300,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Yearly Salary</td>
            <td className="p-3">Rs.3,600,000</td>
          </tr>

          <tr className="border">
            <td className="p-3 font-semibold">Tax Year</td>
            <td className="p-3">2025-26</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8 p-6 bg-green-50 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-3">
          Calculate Your Exact Tax
        </h2>

        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Open Income Tax Calculator
        </a>
      </div>

    </div>
  );
}