export const metadata = {
  title: "Monthly Tax Calculator Pakistan (2025-26)",
  description:
    "Use our Monthly Tax Calculator Pakistan to estimate monthly salary tax according to the latest FBR tax slabs.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-4xl font-bold mb-6">
        Monthly Tax Calculator Pakistan
      </h1>

      <p className="mb-4 text-gray-700">
        Our Monthly Tax Calculator Pakistan helps salaried individuals estimate
        monthly income tax according to the latest FBR tax slabs. Simply enter
        your salary in our calculator to get instant results.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How Monthly Tax is Calculated
      </h2>

      <p className="mb-4 text-gray-700">
        Monthly income tax is calculated by first determining annual taxable
        income according to FBR tax slabs. The yearly tax amount is then divided
        into twelve months to estimate monthly deductions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Why Use Our Monthly Tax Calculator?
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Latest FBR tax slabs</li>
        <li>Instant monthly tax calculation</li>
        <li>Yearly tax estimation</li>
        <li>Take-home salary estimate</li>
        <li>Free and mobile friendly</li>
      </ul>

      <div className="mt-8 p-6 bg-green-50 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">
          Calculate Your Monthly Tax
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
        Is monthly tax different from yearly tax?
      </h3>

      <p className="mb-4 text-gray-700">
        Monthly tax is simply the yearly tax divided into monthly values for
        salary deduction purposes.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Does this calculator use FBR tax slabs?
      </h3>

      <p className="mb-4 text-gray-700">
        Yes. The calculator is based on publicly available FBR tax slabs for the
        selected tax year.
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
            <a href="/income-tax-on-100000-salary-pakistan" className="text-green-600">
              Tax on Rs.100,000 Salary
            </a>
          </li>

          <li>
            <a href="/income-tax-on-150000-salary-pakistan" className="text-green-600">
              Tax on Rs.150,000 Salary
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}