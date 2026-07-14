"use client";

import { useRouter } from "next/navigation";

export default function SalarySlider({ salary }: { salary: number }) {
  const router = useRouter();

  return (
    <div className="mt-6">
      <label className="block text-sm font-semibold mb-2">
        Adjust Salary with Slider
      </label>

      <input
        type="range"
        min="10000"
        max="1000000"
        step="10000"
        value={salary}
        onChange={(e) => {
          const value = Number(e.target.value);
          router.push(`/salary/${value}`);
        }}
        className="w-full"
      />
    </div>
  );
}