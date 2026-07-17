import GuideFooter from "../../components/GuideFooter";

export const metadata = {
  title: "How to Calculate Income Tax in Pakistan (2026 Complete Guide)",
  description:
    "Step-by-step guide on how to calculate income tax in Pakistan using official FBR tax slabs for 2026-27. Learn annual income calculation, slab application, and tax breakdown.",
};

export default function Page() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow mt-6 max-w-4xl mx-auto">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        How to Calculate Income Tax in Pakistan (2026 Guide)
      </h1>

      <p className="mb-4">
        Income tax in Pakistan is calculated based on your annual taxable income
        and the official tax slabs announced by the Federal Board of Revenue (FBR).
        Pakistan follows a marginal tax system, which means different portions of
        your income are taxed at different rates.
      </p>

      <p className="mb-4">
        In this guide, we will explain step-by-step how income tax is calculated
        in Pakistan for salaried individuals.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Step 1: Calculate Your Annual Income
      </h2>

      <p className="mb-4">
        The first step is to determine your total annual income.
        If you are a salaried employee, multiply your monthly salary by 12.
      </p>

      <p className="mb-4 font-medium">
        Example:
        <br />
        Monthly Salary = Rs 100,000
        <br />
        Annual Income = 100,000 × 12 = Rs 1,200,000
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Step 2: Check the Applicable Tax Slab
      </h2>

      <p className="mb-4">
        Once you know your annual income, check the latest FBR tax slabs
        for the current tax year (e.g., 2026-27).
      </p>

      <p className="mb-4">
        Pakistan uses progressive slabs. This means:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Income up to Rs 600,000 may be tax-free.</li>
        <li>Income above that is taxed at increasing percentage rates.</li>
        <li>Higher income brackets pay higher marginal rates.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Step 3: Apply the Marginal Tax System
      </h2>

      <p className="mb-4">
        In a marginal system, tax is not applied to your entire income at one rate.
        Instead, each portion of income falls into a different slab.
      </p>

      <p className="mb-4">
        For example:
        If your annual income is Rs 1,200,000:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>The first Rs 600,000 may be tax-free.</li>
        <li>The remaining Rs 600,000 is taxed at the applicable slab rate.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Step 4: Calculate Monthly Tax
      </h2>

      <p className="mb-4">
        After calculating total yearly tax liability, divide the amount by 12
        to determine your monthly tax deduction.
      </p>

      <p className="mb-4">
        Employers usually deduct this amount from your salary each month
        under withholding tax rules.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Important Factors That Affect Income Tax
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Filer or Non-Filer status</li>
        <li>Tax year slab changes</li>
        <li>Additional taxable income</li>
        <li>Government exemptions</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Use an Online Income Tax Calculator
      </h2>

      <p className="mb-4">
        Instead of calculating manually, you can use our
        <a href="/" className="text-green-600 font-semibold hover:underline">
          {" "}Income Tax Calculator Pakistan{" "}
        </a>
        to instantly calculate monthly tax, yearly tax, and take-home salary.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-gray-700">

        <div>
          <p className="font-semibold">
            What is the tax-free income limit in Pakistan?
          </p>
          <p>
            Currently, annual income up to Rs 600,000 is generally tax-free
            for salaried individuals.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            How is income tax deducted from salary?
          </p>
          <p>
            Employers deduct tax monthly based on annual projected income
            and FBR slab rates.
          </p>
        </div>

      </div>

      <GuideFooter />

    </div>
  );
}