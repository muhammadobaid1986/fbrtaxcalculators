export const metadata = {
  title: "Latest Budget 2025-26 Tax Slabs Pakistan",
  description:
    "Check updated income tax slabs for salaried individuals announced in Budget 2025-26 Pakistan.",
};

export default function Article() {
  return (
    <div className="bg-white p-8 rounded-xl shadow mt-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Latest Budget 2025-26 Income Tax Slabs
      </h1>

      <p className="mb-4">
        The Government of Pakistan has announced updated income tax slabs
        for the tax year 2025-26.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Up to Rs 600,000 – 0%</li>
        <li>Rs 600,001 – Rs 1,200,000 – 5%</li>
        <li>Rs 1,200,001 – Rs 2,400,000 – 10%</li>
        <li>Rs 2,400,001 – Rs 3,600,000 – 20%</li>
        <li>Above Rs 3,600,000 – 30%</li>
      </ul>

      <p>
        Always verify tax updates from official government sources.
      </p>
    </div>
  );
}