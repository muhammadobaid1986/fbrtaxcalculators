export const metadata = {
  title: "How to File Tax Return Online in Pakistan (2025 Guide)",
  description:
    "Step-by-step guide on how to file income tax return online in Pakistan using FBR Iris portal.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow mt-10">

      <h1 className="text-4xl font-bold mb-6">
        How to File Tax Return Online in Pakistan (2025 Guide)
      </h1>

      <p className="mb-4 text-gray-700">
        Filing income tax return online in Pakistan is easier than ever.
        The Federal Board of Revenue (FBR) provides an online system
        called IRIS where salaried individuals can submit their returns.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Step 1: Create FBR IRIS Account
      </h2>

      <p className="mb-4 text-gray-700">
        Visit the official FBR website and register using your CNIC.
        You will receive login credentials after verification.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Step 2: Declare Income
      </h2>

      <p className="mb-4 text-gray-700">
        Enter your salary income, allowances, and any other taxable income.
        The system will calculate your payable tax automatically.
      </p>

      <div className="mt-8 p-6 bg-green-50 rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-3">
          Estimate Your Tax First
        </h3>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Use Income Tax Calculator
        </a>
      </div>

    </div>
  );
}