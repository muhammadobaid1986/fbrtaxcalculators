import PropertyAdvanceCalculator from "./PropertyAdvanceCalculator";
import Link from "next/link";
export const metadata = {
  title: "Property Advance Tax Calculator Pakistan 2026-2027 | 236C & 236K Rates",
  description:
    "Calculate property advance tax in Pakistan for 2026-2027 under Section 236C and 236K.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 pt-10 pb-16 px-4 rounded-3xl">

      <PropertyAdvanceCalculator />

      {/* ✅ SEO Content Yahan Add Karo */}
      <div className="max-w-4xl mx-auto mt-16 text-gray-200 space-y-8 px-4">
        {/* SEO Guide Content */}
      </div>

        <div className="max-w-4xl mx-auto mt-16 px-4">
  <div className="bg-gradient-to-r from-green-800 to-emerald-700 p-8 rounded-3xl text-center shadow-lg">

    <h3 className="text-2xl font-bold text-white mb-4">
      ✅ Reduce Your Property Tax Today
    </h3>

    <p className="text-green-100 mb-6">
      Become an Active Filer to avoid high non‑filer advance tax rates under Sections 236C & 236K.
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center">

      <Link
        href="/freelancer-it-tax-calculator-pakistan"
        className="bg-white text-green-800 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        💻 Check Freelancer Tax
      </Link>

      <Link
        href="/"
        className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        💰 Use Income Tax Calculator
      </Link>

    </div>

  </div>
</div>


    </div>
  );
}