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
    </div>
  );
}