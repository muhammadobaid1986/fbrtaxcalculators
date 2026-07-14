import { calculateSalaryTax } from "../../lib/tax";
import SalarySlider from "./SalarySlider";

export async function generateStaticParams() {
  return Array.from({ length: 200 }, (_, i) => ({
    salary: String((i + 1) * 10000),
  }));
}

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const salary = Number(resolvedParams.salary);

  return {
    title: `Income Tax on ${salary.toLocaleString()} Salary in Pakistan (2026-27)`,
    description: `Calculate income tax and take-home salary for Rs ${salary.toLocaleString()} per month in Pakistan.`,
  };
}
export default async function Page({ params }: any) {
  const resolvedParams = await params;
  const salaryValue = resolvedParams.salary;

  if (!salaryValue) {
    return <div className="p-10 text-center">Salary not provided</div>;
  }

  const monthlySalary = Number(salaryValue);

  if (isNaN(monthlySalary)) {
    return <div className="p-10 text-center">Invalid salary</div>;
  }

  const result = calculateSalaryTax(monthlySalary, "2026-27");

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">
  Income Tax on Rs {monthlySalary.toLocaleString()} Salary in Pakistan 2026-27 | After Tax Breakdown
</h1>
<p className="text-gray-700 mb-6">
  If you are earning Rs {monthlySalary.toLocaleString()} per month,
  this page explains exactly how much income tax you will pay in Pakistan
  according to 2026-27 FBR tax slabs.
</p>
<p className="text-gray-600">
  Many users search for income tax on {monthlySalary.toLocaleString()} salary in Pakistan.
  This page shows the exact monthly and yearly tax calculation.
</p>

      <p className="text-gray-600 mb-6">
  Calculate monthly and yearly income tax on Rs {monthlySalary.toLocaleString()} salary according to official FBR tax slabs.
</p>

      <div className="bg-green-600 text-white p-6 md:p-8 rounded-2xl shadow-md mb-8">
  <h1 className="text-xl md:text-3xl font-bold leading-snug">
    Income Tax on Rs {monthlySalary.toLocaleString()} Salary
  </h1>

  <SalarySlider salary={monthlySalary} />

  <p className="mt-3 text-sm md:text-base">
    Annual Income: Rs {(monthlySalary * 12).toLocaleString()}
  </p>

    

</div>

<div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-200">
  <h2 className="text-xl font-bold mb-6">Salary & Tax Breakdown</h2>

  <table className="w-full text-left border-collapse">
    <tbody>
      <tr className="border-b">
        <td className="p-3 font-semibold">Monthly Salary</td>
        <td className="p-3">Rs {monthlySalary.toLocaleString()}</td>
      </tr>

      <tr className="border-b">
        <td className="p-3 font-semibold">Yearly Salary</td>
        <td className="p-3">Rs {(monthlySalary * 12).toLocaleString()}</td>
      </tr>

      <tr className="border-b">
        <td className="p-3 font-semibold text-red-600">Monthly Tax</td>
        <td className="p-3 text-red-600">
          Rs {result.monthlyTax.toLocaleString()}
        </td>
      </tr>

      <tr className="border-b">
        <td className="p-3 font-semibold text-red-600">Yearly Tax</td>
        <td className="p-3 text-red-600">
          Rs {result.yearlyTax.toLocaleString()}
        </td>
      </tr>

      <tr className="border-b bg-green-50">
        <td className="p-3 font-bold text-green-700">
          Monthly Take‑Home Salary
        </td>
        <td className="p-3 font-bold text-green-700">
          Rs {result.monthlyTakeHome.toLocaleString()}
        </td>
      </tr>

      <tr className="bg-green-50">
        <td className="p-3 font-bold text-green-700">
          Yearly Take‑Home Salary
        </td>
        <td className="p-3 font-bold text-green-700">
          Rs {result.yearlyTakeHome.toLocaleString()}
        </td>
      </tr>
    </tbody>
  </table>

    <div className="mt-10 bg-yellow-50 p-6 rounded-xl">
  <h3 className="font-bold mb-2">💡 Tax Saving Tip</h3>
  <p>
    Filing your income tax return on time may help reduce withholding taxes
    and improve your compliance status with FBR.
  </p>
</div>


    <h2 className="mt-10 text-xl font-bold">
  300,000 Salary After Taxes in Pakistan
</h2>

<p className="text-gray-700">
  If your salary is Rs 300,000 per month, your take-home salary after taxes
  depends on the applicable FBR tax slab.
</p>

  
  <div className="my-10 text-center" style={{ minHeight: "250px" }}>
  <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-1040104111900400"
    data-ad-slot="4444444444"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</div>
  
  <div className="mt-10 prose max-w-none">
  <h2>How Much Tax on {monthlySalary.toLocaleString()} Salary in Pakistan?</h2>

  <p>
    If you earn Rs {monthlySalary.toLocaleString()} per month in Pakistan,
    your annual income becomes Rs {(monthlySalary * 12).toLocaleString()}.
    According to the 2026-27 FBR tax slabs, your income tax is calculated
    using a marginal tax structure.
  </p>

  <p>
    This means different portions of your income are taxed at different rates
    depending on the slab.
  </p>

  <h3>Related Salary Pages</h3>

  <div className="grid grid-cols-2 gap-3 text-green-600 font-medium">
    {[100000,150000,200000,250000,300000].map((amt) => (
      <a key={amt} href={`/salary/${amt}`} className="hover:underline">
        Income Tax on {amt.toLocaleString()} Salary
      </a>
    ))}
  </div>
</div>

  <div className="mt-10 prose max-w-none">
  <h2>Income Tax on 150000 Salary in 2026-27</h2>

  <p>
    If you earn Rs 150,000 per month in Pakistan, your yearly income becomes
    Rs 1,800,000. Under the 2026-27 FBR tax slabs, this income falls within
    the applicable marginal tax bracket.
  </p>

  <p>
    Many people search for "150000/26 tax" or "150000 salary tax 2026".
    This page shows your exact monthly tax, yearly tax, and take-home salary.
  </p>
</div>

    <div className="mt-10 prose max-w-none">
  <h2>How Much Tax on {monthlySalary.toLocaleString()} Salary in Pakistan?</h2>

  <p>
    If your monthly salary is Rs {monthlySalary.toLocaleString()}, your annual income becomes
    Rs {(monthlySalary * 12).toLocaleString()}. According to the 2026-27 FBR tax slabs,
    income tax is calculated using a marginal tax system.
  </p>

  <p>
    The first Rs 600,000 is tax-free. The remaining income is taxed at
    applicable slab rates depending on your annual bracket.
  </p>

  <h3>Is {monthlySalary.toLocaleString()} Salary Taxable?</h3>

  <p>
    Yes, if your annual income exceeds the tax-free limit of Rs 600,000,
    you are required to pay income tax according to FBR rules.
  </p>

  <p>
    You can compare different salary brackets using our
    <a href="/tax-slab-comparison-pakistan" className="text-green-600 font-semibold">
      Tax Slab Comparison Tool
    </a>.
  </p>
</div>

  <div className="mt-6 text-right">
  <span className="animate-pulse">
  Rs {result.yearlyTax.toLocaleString()}
</span>
</div>
</div>

<div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl">
  <h2 className="text-xl font-bold mb-2">
    How is Income Tax Calculated in Pakistan?
  </h2>
  <p className="text-gray-700">
    Income tax is calculated using a marginal tax system defined by FBR.
    Different portions of your annual income are taxed at different rates
    according to the latest Finance Act.
  </p>
</div>
<div className="mt-10 border-t pt-6">
  <h3 className="font-bold mb-4">Explore Other Salary Tax Pages</h3>

  <div className="grid grid-cols-2 gap-4 text-green-600 font-medium">
    <a href="/salary/100000" className="hover:underline">
      Income Tax on 100000 Salary
    </a>

    <a href="/salary/150000" className="hover:underline">
      Income Tax on 150000 Salary
    </a>

    <a href="/salary/200000" className="hover:underline">
      Income Tax on 200000 Salary
    </a>

    <a href="/salary/250000" className="hover:underline">
      Income Tax on 250000 Salary
    </a>
  </div>
</div>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How much tax on ${monthlySalary} salary in Pakistan?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `If your monthly salary is Rs ${monthlySalary}, your yearly tax is Rs ${result.yearlyTax}.`
          }
        },
        {
          "@type": "Question",
          "name": `What is the take home salary after tax on ${monthlySalary}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `After tax, your monthly take-home salary is Rs ${result.monthlyTakeHome}.`
          }
        }
      ]
    })
  }}
/>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How much tax on ${monthlySalary} salary in Pakistan?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `The yearly tax on Rs ${monthlySalary} salary is Rs ${result.yearlyTax}.`
          }
        }
      ]
    })
  }}

  
/>
<div className="fixed bottom-4 right-4 hidden md:block">
  <a
    href="/"
    className="bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
  >
    🔥 Try Main Tax Calculator
  </a>
</div>

<div className="my-8 text-center" style={{ minHeight: "250px" }}>
  <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-1040104111900400"
    data-ad-slot="1234567890"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</div>

  <div className="my-6 text-center" style={{ minHeight: "250px" }}>
  <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-1040104111900400"
    data-ad-slot="1234567890"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</div>

  <div className="mt-12">
  <h3 className="text-xl font-bold mb-4">
    🔎 People Also Searched
  </h3>

  <ul className="list-disc pl-6 text-green-600 space-y-2">
    <li><a href="/salary/150000">Income Tax on 150000 Salary</a></li>
    <li><a href="/salary/250000">Income Tax on 250000 Salary</a></li>
    <li><a href="/tax-slab-comparison-pakistan">Tax Slab Comparison</a></li>
  </ul>
</div>


    </div>
  );
}