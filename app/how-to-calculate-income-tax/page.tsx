import GuideFooter from "../../components/GuideFooter";
export const metadata = {
  title: "How to Calculate Income Tax in Pakistan",
  description:
    "Learn how income tax is calculated in Pakistan using official FBR tax slabs.",
};

export default function Page() {
  return (
    <div className="bg-white p-8 rounded-xl shadow mt-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        How to Calculate Income Tax in Pakistan
      </h1>

      <p className="mb-4">
        Income tax in Pakistan is calculated using annual taxable income and
        applicable FBR tax slabs.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step 1: Calculate Annual Income
      </h2>

      <p className="mb-4">
        Multiply your monthly salary by 12 to determine annual income.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step 2: Apply Tax Slabs
      </h2>

      <p className="mb-4">
        Use the relevant tax year slab rates announced by FBR.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step 3: Calculate Tax Liability
      </h2>

      <p className="mb-4">
        Apply the slab rate to the taxable portion of income.
      </p>

      <GuideFooter />

    </div>
  );
}