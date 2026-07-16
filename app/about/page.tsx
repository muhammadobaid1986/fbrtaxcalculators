export default function About() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">
      <h1 className="text-3xl font-bold mb-6">
        About FBR Tax Calculators
      </h1>

      <p className="mb-4">
        FBR Tax Calculators is an independent online platform designed to help
        individuals in Pakistan calculate income tax, salary tax, zakat, and
        withholding tax using official publicly available FBR tax slabs.
      </p>

      <p className="mb-4">
        Our goal is to simplify complex tax rules and make financial planning
        easier for salaried individuals, freelancers, and professionals across
        Pakistan.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        What We Offer
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Income Tax Calculator Pakistan</li>
        <li>Salary After Tax Calculator</li>
        <li>Zakat Calculator</li>
        <li>Withholding Tax Calculator</li>
        <li>Tax Slab Comparison Tools</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Disclaimer
      </h2>

      <p>
        This website is not affiliated with the Federal Board of Revenue (FBR).
        All calculations are based on publicly available tax slab data and are
        intended for informational purposes only.
      </p>
    </div>
  );
}