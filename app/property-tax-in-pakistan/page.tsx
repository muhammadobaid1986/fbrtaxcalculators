import RelatedLinks from "../../components/RelatedLinks";
export const metadata = {
  title: "Property Tax in Pakistan – Complete Guide 2025",
  description:
    "Learn about property tax in Pakistan, tax rates, filer vs non filer property tax, and how to calculate property tax.",
};

export default function Article() {
  return (
    <div className="bg-white p-8 rounded-xl shadow mt-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Property Tax in Pakistan – Complete Guide 2025
      </h1>

      <p className="mb-4">
        Property tax in Pakistan applies when you purchase,
        sell, or transfer property. The tax rate depends on
        whether you are a filer or non-filer.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Property Tax for Filers
      </h2>

      <p className="mb-4">
        Filers usually pay lower withholding tax
        on property transactions compared to non-filers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Property Tax for Non-Filers
      </h2>

      <p className="mb-4">
        Non-filers pay significantly higher tax
        during property registration and transfer.
      </p>

      <p className="mt-6 mb-6">
Always verify the latest property tax rates through official government
notifications before completing any property transaction, as tax rules
may change over time.
</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
How Is Property Tax Calculated?
</h2>

<p className="mb-4">
Property tax depends on the type of transaction, the value of the
property and whether the buyer or seller is a filer or a non-filer.
Applicable taxes may include withholding tax, advance tax and stamp
duties depending on current government rules.
</p>

<h2 className="text-2xl font-semibold mt-8 mb-3">
Important Tips
</h2>

<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>Always verify current tax rates before purchasing property.</li>
  <li>Maintain active filer status to reduce applicable taxes.</li>
  <li>Keep transaction documents for future tax records.</li>
</ul>

<h2 className="text-2xl font-semibold mt-8 mb-3">
Frequently Asked Questions
</h2>

<h3 className="text-xl font-semibold mt-6 mb-2">
Who pays property tax in Pakistan?
</h3>

<p className="mb-4">
Taxes may apply to buyers and sellers depending on the transaction and
the applicable tax laws.
</p>

<h3 className="text-xl font-semibold mt-6 mb-2">
Why is filer status important?
</h3>

<p className="mb-4">
Filers generally benefit from lower withholding tax rates compared with
non-filers where applicable.
</p>
<RelatedLinks
  links={[
    {
      title: "Income Tax Calculator Pakistan",
      href: "/",
    },
    {
      title: "Benefits of Being a Filer",
      href: "/benefits-of-being-filer-pakistan",
    },
    {
      title: "How to Become a Filer",
      href: "/how-to-become-a-filer",
    },
    {
      title: "Tax on Car Registration",
      href: "/tax-on-car-registration",
    },
  ]}
/>
      
    </div>
  );
}