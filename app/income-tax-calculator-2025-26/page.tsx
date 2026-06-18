import Link from "next/link";

export const metadata = {
  title: "Income Tax Calculator 2025-26 Pakistan | FBR Tax Calculators",
  description:
    "Calculate your salary income tax for tax year 2025-26 in Pakistan using latest FBR tax slabs.",
};

export default function Page() {
  return (
    <div className="bg-white p-8 rounded-xl shadow mt-6">
      <h1 className="text-3xl font-bold mb-4">
        Income Tax Calculator 2025-26 Pakistan
      </h1>

      <p className="mb-4 text-gray-700">
        Use our updated income tax calculator for the tax year 2025-26
        according to the latest FBR salary tax slabs.
      </p>

      <Link
        href="/"
        className="text-green-600 font-semibold underline"
      >
        Go to Main Tax Calculator
      </Link>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          Tax Slabs 2025-26 (Salaried Individuals)
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Up to Rs 600,000 – 0% Tax</li>
          <li>Rs 600,001 – Rs 1,200,000 – 5%</li>
          <li>Rs 1,200,001 – Rs 2,400,000 – 10%</li>
          <li>Above Rs 2,400,000 – 15%</li>
        </ul>
      </div>
    </div>
  );
}