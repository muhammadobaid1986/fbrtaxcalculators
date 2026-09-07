import Link from "next/link";

export const metadata = {
  title: "Tax Free Salary in Pakistan 2026-27 | FBR Exemption Limit Explained",
  description:
    "Tax free salary in Pakistan 2026-27: Understand the FBR exemption threshold, how salary tax is calculated, and how to estimate tax using slabs.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow mt-10 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Tax Free Salary in Pakistan (2026–27)
      </h1>

      <p className="mb-4 text-gray-700">
        “Tax free salary” usually means the annual income level up to which income tax is not charged
        (or is effectively zero) under the salaried slab rules for a given tax year.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl mb-6 text-gray-700">
        <p>
          Commonly discussed exemption figure is around <b>Rs 600,000 annual</b> for salaried individuals
          (varies by tax year). Always confirm slabs for the selected year.
        </p>
      </div>

      <p className="mb-4 text-gray-700">
        Use our{" "}
        <Link href="/" className="text-green-700 font-semibold hover:underline">
          Income Tax Calculator
        </Link>{" "}
        to estimate monthly and yearly tax instantly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Monthly Salary Equivalent (Quick Idea)</h2>
      <p className="mb-4 text-gray-700">
        If annual exemption is Rs 600,000, then monthly equivalent is roughly Rs 50,000. If your monthly salary
        is above this, tax may apply depending on slab rules.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Why People Still File Returns</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>To appear in Active Taxpayer List (ATL) as a filer</li>
        <li>To reduce withholding tax on certain transactions</li>
        <li>To maintain financial documentation and compliance</li>
      </ul>

      <p className="mb-4 text-gray-700">
        Related:{" "}
        <Link href="/blog/filer-vs-non-filer" className="text-green-700 font-semibold hover:underline">
          Filer vs Non‑Filer in Pakistan
        </Link>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">FAQ</h2>
      <div className="space-y-5 text-gray-700">
        <div>
          <p className="font-semibold">Is tax-free salary the same for everyone?</p>
          <p>No, it depends on tax year and slab category.</p>
        </div>
        <div>
          <p className="font-semibold">Can my employer deduct tax even if I’m near exemption?</p>
          <p>Some employers estimate tax monthly; final liability is yearly based on slabs.</p>
        </div>
      </div>
    </div>
  );
}