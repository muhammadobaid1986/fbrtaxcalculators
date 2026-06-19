import Link from "next/link";

export const metadata = {
  title: "Income Tax Calculator 2025-26 Pakistan | Salaried Tax Slabs",
  description:
    "Free income tax calculator for Pakistan tax year 2025-26. Calculate monthly and yearly salary tax using latest FBR salaried tax slabs with examples and FAQs.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-4xl font-bold mb-4">
        Income Tax Calculator 2025-26 Pakistan
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to the most accurate Income Tax Calculator for Tax Year 2025-26 in Pakistan. 
        This tool is designed specifically for salaried individuals to estimate their monthly 
        and yearly income tax based on the latest tax slabs announced in the Federal Budget.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-8"
      >
        Calculate Your Tax Now
      </Link>

      <h2 className="text-2xl font-bold mb-3">Updated Tax Slabs for 2025-26 (Salaried)</h2>
      
      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Annual Taxable Income</th>
              <th className="border p-3 text-left">Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-3">Up to Rs. 600,000</td><td className="border p-3">0%</td></tr>
            <tr><td className="border p-3">Rs. 600,001 – 1,200,000</td><td className="border p-3">1% of amount exceeding 600,000</td></tr>
            <tr><td className="border p-3">Rs. 1,200,001 – 2,400,000</td><td className="border p-3">Rs. 6,000 + 15% of amount exceeding 1,200,000</td></tr>
            <tr><td className="border p-3">Rs. 2,400,001 – 3,600,000</td><td className="border p-3">Rs. 186,000 + 25% of amount exceeding 2,400,000</td></tr>
            <tr><td className="border p-3">Above Rs. 3,600,000</td><td className="border p-3">Rs. 486,000 + 35% of amount exceeding 3,600,000</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-3">How to Use This Calculator?</h2>
      <p className="text-gray-700 mb-4">
        Simply select Tax Year 2025-26, enter your monthly gross salary, and click "Calculate Tax". 
        Our system will instantly show your monthly tax, yearly tax, and take-home salary. The calculation 
        follows the marginal tax system used by FBR Pakistan.
      </p>

      <h2 className="text-2xl font-bold mb-3">Example Calculation</h2>
      <p className="text-gray-700 mb-6">
        If your monthly salary is Rs. 100,000 (Annual: Rs. 1,200,000), your tax will be 1% of Rs. 600,000 = Rs. 6,000 per year, which is Rs. 500 per month.
      </p>

      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded mb-8">
        <p className="font-semibold">Tax Year 2026-27 Update:</p>
        <p className="text-sm">The calculator for 2026-27 will be updated here as soon as the Federal Budget is officially passed by the Parliament of Pakistan. Please check back later.</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4 text-sm">
        <div>
          <p className="font-semibold">Is this calculator official?</p>
          <p>No, this is an independent tool for estimation based on publicly available FBR slabs.</p>
        </div>
        <div>
          <p className="font-semibold">Does this include all deductions?</p>
          <p>No, this calculates basic salary tax only. Allowances and other deductions are not included.</p>
        </div>
      </div>

      <div className="mt-10 text-sm">
        <p>Check other years: 
          <Link href="/income-tax-calculator-2024-25" className="text-green-600 ml-2 hover:underline">2024-25</Link>
          <Link href="/income-tax-calculator-2023-24" className="text-green-600 ml-2 hover:underline">2023-24</Link>
        </p>
      </div>
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


    </div>

    
  );
}