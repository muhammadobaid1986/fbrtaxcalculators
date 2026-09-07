import Link from "next/link";

export const metadata = {
  title: "Pakistan Income Tax Complete Guide 2026-27 | Slabs, Filing & Filer Benefits",
  description:
    "Complete Pakistan income tax guide 2026-27: tax slabs, salary tax calculation, filer benefits, ATL, and how to file returns using FBR IRIS.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow mt-10 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Pakistan Income Tax Complete Guide (2026–27)
      </h1>

      <p className="mb-4 text-gray-700">
        This guide explains how income tax works in Pakistan, how tax slabs apply on annual income,
        how monthly deductions are estimated, and why filer status matters for many transactions.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
        <p className="text-gray-700">
          Try our{" "}
          <Link href="/" className="text-green-700 font-semibold hover:underline">
            Income Tax Calculator Pakistan
          </Link>{" "}
          to instantly calculate monthly and yearly tax.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Income Tax Slabs 2026–27</h2>
      <p className="mb-4 text-gray-700">
        Slabs are progressive. Higher annual income is charged at higher rates. For slab comparison, see:
        <Link href="/tax-slab-comparison-pakistan" className="text-green-700 font-semibold ml-1 hover:underline">
          Tax Slab Comparison
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Salary Tax (Monthly vs Yearly)</h2>
      <p className="mb-4 text-gray-700">
        Salary tax is ultimately yearly tax based on slabs. Employers often divide estimated yearly tax by 12 months
        for monthly deductions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Filer Status & ATL</h2>
      <p className="mb-4 text-gray-700">
        Filers appear on ATL and often face lower withholding taxes. Learn:
        <Link href="/blog/filer-vs-non-filer" className="text-green-700 font-semibold ml-1 hover:underline">
          Filer vs Non‑Filer
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How to File Return Online</h2>
      <p className="mb-4 text-gray-700">
        Step-by-step guide:
        <Link href="/how-to-file-tax-return-online-pakistan" className="text-green-700 font-semibold ml-1 hover:underline">
          How to File Tax Return Online in Pakistan
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Quick Links</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><Link href="/salary-after-tax-calculator" className="text-green-700 font-semibold hover:underline">Salary After Tax</Link></li>
        <li><Link href="/monthly-tax-calculator-pakistan" className="text-green-700 font-semibold hover:underline">Monthly Tax Calculator</Link></li>
        <li><Link href="/atl-status-check-pakistan" className="text-green-700 font-semibold hover:underline">ATL Status Check</Link></li>
      </ul>

      <div className="mt-10 border-t pt-6 text-gray-700">
        <p>
          For deeper explanation, read:
          <Link href="/how-income-tax-works-in-pakistan" className="text-green-700 font-semibold ml-1 hover:underline">
            How Income Tax Works in Pakistan
          </Link>
          .
        </p>
      </div>
    </div>
  );
}