import RelatedLinks from "./RelatedLinks";

export default function GuideFooter() {
  return (
    <>
      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          Need an Exact Tax Calculation?
        </h2>

        <p className="text-gray-700 mb-5">
          Use our free Income Tax Calculator to calculate your monthly tax,
          yearly tax and take-home salary according to the latest available
          FBR tax slabs.
        </p>

        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Open Income Tax Calculator
        </a>
      </div>

      <RelatedLinks
        title="Related Tax Guides"
        links={[
          {
            title: "Income Tax Calculator Pakistan",
            href: "/",
          },
          {
            title: "Salary After Tax Calculator",
            href: "/salary-after-tax-calculator",
          },
          {
            title: "Monthly Tax Calculator Pakistan",
            href: "/monthly-tax-calculator-pakistan",
          },
          {
            title: "Tax Slab Finder Pakistan",
            href: "/tax-slab-finder-pakistan",
          },
          {
            title: "Benefits of Being a Filer",
            href: "/benefits-of-being-filer-pakistan",
          },
        ]}
      />

      <p className="mt-8 text-sm text-gray-500">
        Last reviewed: July 2026. Always verify the latest tax rules through
        official FBR notifications before making financial decisions.
      </p>
    </>
  );
}