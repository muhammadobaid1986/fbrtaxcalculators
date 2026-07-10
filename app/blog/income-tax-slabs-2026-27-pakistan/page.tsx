export const metadata = {
  title: "Income Tax Slabs 2026-27 Pakistan | Complete FBR Guide",
  description:
    "Complete guide to Pakistan income tax slabs 2026-27 including rates, salary brackets, and FBR marginal tax system.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Income Tax Slabs 2026-27 Pakistan (Complete Guide)
      </h1>

      <p className="mb-4 text-gray-700">
        The Government of Pakistan announced revised income tax slabs for 2026-27
        under the Finance Act. These slabs define how much tax salaried individuals
        pay based on their annual income.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Tax-Free Limit 2026-27
      </h2>

      <p className="mb-4 text-gray-700">
        The tax-free annual salary limit remains Rs 600,000.
        Any income above this threshold is taxed according to marginal slabs.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How Marginal Tax Works
      </h2>

      <p className="mb-4 text-gray-700">
        Pakistan follows a marginal tax system where only the portion of income
        within a slab is taxed at that slab’s rate.
      </p>

      <p className="mt-6">
        You can calculate your exact tax using our 
        <a href="/" className="text-green-600 font-semibold"> Income Tax Calculator</a> or
        check salary-specific pages like 
        <a href="/salary/180000" className="text-green-600 font-semibold"> Tax on 180000 Salary</a>.
      </p>
    </div>
  );
}