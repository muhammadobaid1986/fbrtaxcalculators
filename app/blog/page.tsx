import Link from "next/link";

export const metadata = {
  title: "Tax Guides & Articles | FBR Tax Calculators",
};

const posts = [
  {
    title: "How to Calculate Income Tax in Pakistan",
    link: "/how-to-calculate-income-tax",
  },
  {
    title: "Filer vs Non Filer – Complete Guide",
    link: "/filer-vs-non-filer"
  },
  {
    title: "How to File Tax Return Online in Pakistan",
    link: "/how-to-file-tax-return-online"
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
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        Tax Guides & Articles
      </h1>

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
    </div>
  );
}