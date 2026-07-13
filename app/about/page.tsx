export const metadata = {
  title: "About FBR Tax Calculators Pakistan",
  description:
    "Learn about FBR Tax Calculators, a free online platform for Pakistan income tax and salary tax tools.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">
      <h1 className="text-3xl font-bold mb-6">
        About FBR Tax Calculators
      </h1>

      <p className="mb-4 text-gray-700">
        FBR Tax Calculators is an independent online platform providing
        accurate income tax, salary tax, zakat, and withholding tax tools
        for individuals in Pakistan.
      </p>

      <p className="mb-4 text-gray-700">
        Our calculators are based on official FBR tax slabs and updated
        according to the latest Finance Act.
      </p>

      <p className="mb-4 text-gray-700">
        We aim to simplify complex tax rules and help salaried individuals
        calculate their take-home salary instantly.
      </p>

      <p className="text-gray-600 text-sm">
        Disclaimer: This website is not affiliated with the Federal Board of Revenue (FBR).
      </p>
    </div>
  );
}