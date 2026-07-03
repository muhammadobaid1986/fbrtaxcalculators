"use client";
import { useState } from "react";
import RelatedLinks from "../../components/RelatedLinks";

export default function ZakatCalculator() {
  const [amount, setAmount] = useState("");
  const [zakat, setZakat] = useState<number | null>(null);

  const calculateZakat = () => {
    const total = Number(amount);
    const result = total * 0.025;
    setZakat(result);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow mt-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Zakat Calculator Pakistan
      </h1>

      <input
        type="number"
        placeholder="Enter Total Savings (PKR)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />

      <button
        onClick={calculateZakat}
        className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
      >
        Calculate Zakat
      </button>

      {zakat !== null && (
        <div className="mt-6 text-center bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">
            Zakat Payable: Rs {zakat.toLocaleString()}
          </p>
        </div>
      )}
<RelatedLinks
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
      title: "Tax Slab Finder Pakistan",
      href: "/tax-slab-finder-pakistan",
    },
    {
      title: "Benefits of Being a Filer",
      href: "/benefits-of-being-filer-pakistan",
    },
  ]}
/>

    </div>
  );
}