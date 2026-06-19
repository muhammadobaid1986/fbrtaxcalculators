import Link from "next/link";

export const metadata = {
  title: "Income Tax Calculator 2021-22 Pakistan",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">
      <h1 className="text-4xl font-bold mb-6">
        Income Tax Calculator 2021-22 Pakistan
      </h1>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-8"
      >
        Open Salary Tax Calculator
      </Link>

      <ul className="list-disc pl-6 space-y-2 text-sm">
        <li>Up to Rs 600,000 – 0%</li>
        <li>600,001 – 1,200,000 – 5%</li>
        <li>1,200,001 – 1,800,000 – 10%</li>
        <li>Above 1,800,000 – 15%+</li>
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
    {/* Deep SEO Authority Content */}

<div className="mt-12 text-gray-700 text-sm space-y-5">

  <h2 className="text-2xl font-bold">
    Complete Guide to Income Tax in Pakistan 2025-26
  </h2>

  <p>
    The Income Tax Calculator 2025-26 Pakistan helps salaried individuals
    understand how their income tax is calculated according to official
    FBR tax slabs. Income tax is applied on annual taxable income using
    marginal tax rules.
  </p>

  <h3 className="text-xl font-semibold">
    Understanding Marginal Tax System
  </h3>

  <p>
    Pakistan uses a marginal tax system, which means higher portions
    of income are taxed at higher rates. Only the income within
    a specific slab is taxed at that slab's rate.
  </p>

  <h3 className="text-xl font-semibold">
    Example Calculation for Rs 100,000 Monthly Salary
  </h3>

  <p>
    Monthly Salary: Rs 100,000  
    Annual Income: Rs 1,200,000  
    First Rs 600,000 → 0%  
    Remaining Rs 600,000 → 1%  
    Total Yearly Tax: Rs 6,000  
    Monthly Tax: Rs 500
  </p>

  <h3 className="text-xl font-semibold">
    Who Should Use This Salary Tax Calculator?
  </h3>

  <p>
    This tool is ideal for government employees, private sector workers,
    corporate professionals, freelancers on payroll, and anyone
    receiving salaried income in Pakistan.
  </p>

  <h3 className="text-xl font-semibold">
    Important Notes
  </h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>Tax slabs may change after Federal Budget updates.</li>
    <li>Always verify tax figures before filing official returns.</li>
    <li>This calculator provides estimation only.</li>
  </ul>

</div>
    </div>
  );
}