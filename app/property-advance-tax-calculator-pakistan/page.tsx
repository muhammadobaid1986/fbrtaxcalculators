import PropertyAdvanceCalculator from "./PropertyAdvanceCalculator";

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

    </div>
  );
}