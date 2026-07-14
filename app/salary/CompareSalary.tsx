"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function CompareSalary() {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <div className="mt-16 bg-white p-6 rounded-2xl shadow">
      <h3 className="text-xl font-bold mb-4">
        🔄 Compare Another Salary
      </h3>

      <input
        type="number"
        placeholder="Enter salary to compare"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-3 rounded-lg w-full mb-4"
      />

      <button
        onClick={() => {
          if (value) {
            router.push(`/salary/${value}`);
          }
        }}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Compare
      </button>

       <CompareSalary />     


    </div>
  );
}
