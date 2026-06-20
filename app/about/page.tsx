export const metadata = {
  title: "About Us | FBR Tax Calculators",
};

export default function About() {
  return (
    <div className="bg-white p-8 rounded-xl shadow mt-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="mb-4">
        FBR Tax Calculators is an independent platform providing free
        income tax calculation tools for Pakistan.
        Created By Muhammad Obaid Ullah
      </p>

      <p>
        Our goal is to simplify tax calculations and provide accurate
        estimates based on publicly available tax slabs.
      </p>
    </div>
  );
}