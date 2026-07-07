import Link from "next/link";

export const metadata = {
  title: "Pakistan Tax Guides & Articles | FBR Tax Calculators",
  description:
    "Read practical Pakistan tax guides covering income tax, FBR registration, filer status, salary tax, withholding tax, property tax, freelancers and more.",
};

const posts = [
  {
    title: "How to Calculate Income Tax in Pakistan",
    link: "/how-to-calculate-income-tax",
  },
  {
  title: "Filer vs Non Filer – Complete Guide",
  link: "/filer-vs-non-filer-2025"
},
  {
  title: "How to File Tax Return Online in Pakistan",
  link: "/how-to-file-tax-return-online-pakistan"
},
  {
    title: "How to Become a Filer in Pakistan",
    link: "/how-to-become-a-filer"
  },
  {
    title: "Latest Budget 2025-26 Income Tax Slabs",
    link: "/latest-budget-2025-26-tax-slabs"
  },
  {
    title: "Property Tax in Pakistan – Complete Guide",
    link: "/property-tax-in-pakistan"
  },
  {
    title: "Tax on Bank Profit in Pakistan",
    link: "/tax-on-bank-profit"
  },
  {
    title: "Tax on Car Registration in Pakistan",
    link: "/tax-on-car-registration"
  },
  {
  title: "Tax on Prize Bonds in Pakistan",
  link: "/tax-on-prize-bonds-pakistan"
},
{
  title: "Tax on Freelancers in Pakistan",
  link: "/tax-on-freelancers-pakistan"
},
{
  title: "Benefits of Being a Filer in Pakistan",
  link: "/benefits-of-being-filer-pakistan"
},
{
  title: "How to Check ATL Status in Pakistan",
  link: "/atl-status-check-pakistan"
},
{
  title: "How to Register on FBR Iris",
  link: "/how-to-register-on-fbr-iris"
},
{
  title: "Tax on Foreign Remittances in Pakistan",
  link: "/tax-on-remittances-pakistan"
},
{
  title: "How to Check Filer Status in Pakistan",
  link: "/how-to-check-filer-status-pakistan"
},
{
  title: "Salary After Tax Calculator",
  link: "/salary-after-tax-calculator"
},
{
  title: "Income Tax on Rs.100,000 Salary in Pakistan",
  link: "/income-tax-on-100000-salary-pakistan"
},

{
  title: "Income Tax on Rs.150,000 Salary in Pakistan",
  link: "/income-tax-on-150000-salary-pakistan"
},

{
  title: "Monthly Tax Calculator Pakistan",
  link: "/monthly-tax-calculator-pakistan"
},

{
  title: "Income Tax on Rs.200,000 Salary in Pakistan",
  link: "/income-tax-on-200000-salary-pakistan"
},

{
  title: "Income Tax on Rs.250,000 Salary in Pakistan",
  link: "/income-tax-on-250000-salary-pakistan"
},

{
  title: "Tax Slab Finder Pakistan",
  link: "/tax-slab-finder-pakistan"
},

{
  title: "Income Tax on Rs.300,000 Salary in Pakistan",
  link: "/income-tax-on-300000-salary-pakistan"
},
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        Tax Guides & Articles
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
  Explore our collection of Pakistan tax guides covering income tax,
  salary tax, filer registration, tax returns, FBR updates, withholding
  tax and other useful financial topics.
</p>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="card p-8 hover:scale-105 transition transform"
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text">
              {post.title}
            </h2>

            <Link
              href={post.link}
              className="text-green-600 font-semibold"
            >
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>
<div className="mt-16 bg-white rounded-2xl shadow p-8">
  <h2 className="text-2xl font-bold mb-4">
    Why Read Our Tax Guides?
  </h2>

  <p className="text-gray-700 mb-4">
    Our articles explain Pakistan tax rules in simple language with
    practical examples to help taxpayers understand FBR requirements.
  </p>

  <p className="text-gray-700">
    We regularly update our guides whenever important tax changes are
    announced so readers can access current information.
  </p>
</div>

    </div>
  );
}