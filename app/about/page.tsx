export const metadata = {
  title: "About FBR Tax Calculators – Our Mission & Purpose",
  description:
    "Learn about FBR Tax Calculators, our mission, purpose, and commitment to providing accurate and updated tax guidance for Pakistan.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow mt-10 leading-relaxed">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        About FBR Tax Calculators
      </h1>

      <p className="mb-4 text-gray-700">
        FBR Tax Calculators is an independent informational platform created to 
        simplify income tax calculations and financial compliance for individuals 
        and businesses in Pakistan.
      </p>

      <p className="mb-4 text-gray-700">
        Our mission is to provide accurate, easy‑to‑use, and up‑to‑date tax tools 
        based on publicly available Federal Board of Revenue (FBR) tax slabs and 
        official finance act updates.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        What We Provide
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Income tax calculator based on official FBR slabs</li>
        <li>Filer vs Non‑Filer comparison guidance</li>
        <li>Salary after tax breakdown</li>
        <li>Property advance tax and capital gain tax tools</li>
        <li>Step‑by‑step tax return filing guidance</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Transparency & Disclaimer
      </h2>

      <p className="mb-4 text-gray-700">
        This website is not affiliated with the Federal Board of Revenue (FBR) 
        or any government authority. All calculations are based on publicly 
        available tax slab data and are provided for informational purposes only.
      </p>

      <p className="mb-4 text-gray-700">
        Users are encouraged to verify financial decisions through official 
        government portals or qualified tax professionals.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Our Commitment
      </h2>

      <p className="mb-4 text-gray-700">
        We are committed to keeping tax calculators and guides updated according 
        to the latest Finance Act and federal budget announcements to ensure 
        accuracy and reliability.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Contact Information
      </h2>

      <p className="mb-4 text-gray-700">
        For inquiries, feedback, or corrections, please contact us through the 
        <a href="/contact" className="text-green-600 font-semibold ml-1">
          Contact Page
        </a>.
      </p>

    </div>
  );
}