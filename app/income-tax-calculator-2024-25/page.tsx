import Link from "next/link";

export const metadata = {
  title: "Income Tax Calculator 2024-25 Pakistan | Salaried Slabs",
  description:
    "Check salary income tax slabs for tax year 2024-25 in Pakistan.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">
      <h1 className="text-4xl font-bold mb-6">
        Income Tax Calculator 2024-25 Pakistan (Salaried)
      </h1>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-8"
      >
        Open Salary Tax Calculator
      </Link>

      <h2 className="text-2xl font-bold mb-4">
        2024-25 Tax Slabs (Salaried Individuals)
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-sm">
        <li>Up to Rs 600,000 – 0%</li>
        <li>600,001 – 1,200,000 – 5%</li>
        <li>1,200,001 – 2,400,000 – 15%</li>
        <li>2,400,001 – 3,600,000 – 25%</li>
        <li>Above 3,600,000 – 30%</li>
      </ul>
    {/* Detailed SEO Content */}

<div className="mt-10 text-gray-700 text-sm space-y-4">

  <h3 className="text-xl font-semibold mt-6">
    Detailed Explanation of 2025-26 Tax Slabs
  </h3>

  <p>
    The tax slabs for 2025-26 are structured to apply marginal taxation.
    This means higher income portions are taxed at higher rates.
    For example, if your annual income is Rs 1,200,000,
    only the portion above Rs 600,000 is taxed at 1%.
  </p>

  <p>
    It is important to understand that income tax is calculated annually.
    Employers usually deduct tax monthly based on estimated yearly income.
  </p>

  <h3 className="text-xl font-semibold mt-6">
    Example Calculation for 2025-26
  </h3>

  <p>
    If your monthly salary is Rs 100,000,
    your annual income becomes Rs 1,200,000.
    The first Rs 600,000 is tax-free.
    The remaining Rs 600,000 is taxed at 1%.
    This results in Rs 6,000 yearly tax.
  </p>

  <p>
    Our calculator automatically performs this calculation
    and provides both monthly and yearly tax breakdown.
  </p>

</div>
    
    
    </div>
  );
}