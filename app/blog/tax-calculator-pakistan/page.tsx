import Link from "next/link";

export const metadata = {
  title: "Tax Calculator Pakistan 2026-27 | FBR Income Tax & Salary Tax Guide",
  description:
    "Tax Calculator Pakistan 2026-27: Learn how income tax is calculated under FBR slabs, how to estimate monthly tax, who should file returns, and how filer status affects tax.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-white rounded-2xl shadow mt-10 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Tax Calculator Pakistan (2026–27) – Income Tax & Salary Tax
      </h1>

      <p className="mb-4 text-gray-700">
        A tax calculator helps you estimate your monthly and yearly income tax based on the latest
        FBR tax slabs. If you are salaried, a freelancer, or a small business owner, an estimate
        helps you plan your finances and avoid surprise deductions.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
        <p className="text-gray-700">
          Use our{" "}
          <Link href="/" className="text-green-700 font-semibold hover:underline">
            FBR Income Tax Calculator
          </Link>{" "}
          to calculate salary tax instantly.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How Income Tax Is Calculated in Pakistan</h2>
      <p className="mb-4 text-gray-700">
        Income tax in Pakistan is calculated on annual taxable income using progressive slabs
        announced under the Finance Act. Your monthly tax is usually an estimate: yearly tax divided by 12.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Monthly vs Yearly Tax (Simple Example)</h2>
      <p className="mb-4 text-gray-700">
        If your monthly salary is Rs 150,000, your annual income becomes Rs 1,800,000. The slab rates
        determine the yearly tax. Your employer may deduct it monthly as an approximation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Who Should Use This Tax Calculator?</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Salaried individuals who want monthly and yearly tax estimate</li>
        <li>Freelancers/IT exporters to understand yearly tax impact</li>
        <li>People planning to become filer and check benefits</li>
        <li>Anyone comparing tax slabs year by year</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Filer vs Non-Filer Impact</h2>
      <p className="mb-4 text-gray-700">
        Filer status affects withholding taxes on property, vehicle registration, banking transactions and more.
        Learn details here:
        <Link href="/blog/filer-vs-non-filer" className="text-green-700 font-semibold ml-1 hover:underline">
          Filer vs Non‑Filer Guide
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Helpful Tools</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/salary-after-tax-calculator" className="text-green-700 font-semibold hover:underline">
            Salary After Tax Calculator
          </Link>
        </li>
        <li>
          <Link href="/tax-slab-comparison-pakistan" className="text-green-700 font-semibold hover:underline">
            Tax Slab Comparison
          </Link>
        </li>
        <li>
          <Link href="/monthly-tax-calculator-pakistan" className="text-green-700 font-semibold hover:underline">
            Monthly Tax Calculator
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">FAQs</h2>
      <div className="space-y-5 text-gray-700">
        <div>
          <p className="font-semibold">Is this calculator officially affiliated with FBR?</p>
          <p>No. It is an independent informational tool based on publicly available slab data.</p>
        </div>
        <div>
          <p className="font-semibold">What salary is tax free in Pakistan?</p>
          <p>
            Many years the annual exemption threshold is around Rs 600,000 for salaried individuals. Confirm for your tax year.
          </p>
        </div>
        <div>
          <p className="font-semibold">Can I calculate tax for any salary?</p>
          <p>Yes, use the calculator and select the correct tax year.</p>
        </div>
      </div>
    </div>
  );
}