export type Slab = {
  min: number;
  max: number;
  rate: number;
  fixed: number;
};

export const taxData: Record<string, Slab[]> = {
  "2021-22": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
    { min: 1200000, max: 1800000, rate: 0.10, fixed: 30000 },
    { min: 1800000, max: 2500000, rate: 0.15, fixed: 90000 },
    { min: 2500000, max: 3500000, rate: 0.175, fixed: 195000 },
    { min: 3500000, max: 5000000, rate: 0.20, fixed: 370000 },
    { min: 5000000, max: Infinity, rate: 0.25, fixed: 670000 },
  ],
  "2022-23": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
    { min: 2400000, max: 3600000, rate: 0.20, fixed: 165000 },
    { min: 3600000, max: 6000000, rate: 0.25, fixed: 405000 },
    { min: 6000000, max: Infinity, rate: 0.35, fixed: 1005000 },
  ],
  "2023-24": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
    { min: 2400000, max: 3600000, rate: 0.225, fixed: 165000 },
    { min: 3600000, max: 6000000, rate: 0.275, fixed: 435000 },
    { min: 6000000, max: Infinity, rate: 0.35, fixed: 1095000 },
  ],
  "2024-25": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
    { min: 1200000, max: 2200000, rate: 0.15, fixed: 30000 },
    { min: 2200000, max: 3200000, rate: 0.25, fixed: 180000 },
    { min: 3200000, max: 4100000, rate: 0.30, fixed: 430000 },
    { min: 4100000, max: Infinity, rate: 0.35, fixed: 700000 },
  ],
  "2025-26": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.01, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.15, fixed: 6000 },
    { min: 2400000, max: 3600000, rate: 0.25, fixed: 186000 },
    { min: 3600000, max: Infinity, rate: 0.35, fixed: 486000 },
  ],
  "2026-27": [
  { min: 0, max: 600000, rate: 0, fixed: 0 },
  { min: 600000, max: 1200000, rate: 0.01, fixed: 0 },
  { min: 1200000, max: 2200000, rate: 0.11, fixed: 6000 },
  { min: 2200000, max: 3200000, rate: 0.20, fixed: 116000 },
  { min: 3200000, max: 4100000, rate: 0.25, fixed: 316000 },
  { min: 4100000, max: 5600000, rate: 0.29, fixed: 541000 },
  { min: 5600000, max: 7000000, rate: 0.32, fixed: 976000 },
  { min: 7000000, max: Infinity, rate: 0.35, fixed: 1424000 },
],
};

// Dropdown ke liye years export kar rahay hain (Latest first)
export const taxYears = Object.keys(taxData).reverse();

export function calculateSalaryTax(
  monthlySalary: number,
  year: string = "2025-26"
) {
  const annualIncome = monthlySalary * 12;
  const slabs = taxData[year] || taxData["2025-26"]; // Safety check
  let yearlyTax = 0;

  for (const slab of slabs) {
    if (annualIncome > slab.min && annualIncome <= slab.max) {
      yearlyTax = slab.fixed + (annualIncome - slab.min) * slab.rate;
      break;
    }
  }

  return {
    annualIncome,
    yearlyTax,
    monthlyTax: yearlyTax / 12,
    monthlyTakeHome: monthlySalary - yearlyTax / 12,
    yearlyTakeHome: annualIncome - yearlyTax,
  };
}

export function findTaxSlab(
  monthlySalary: number,
  year: string = "2025-26"
) {
  const annualIncome = monthlySalary * 12;
  const slabs = taxData[year] || taxData["2025-26"];

  for (const slab of slabs) {
    if (annualIncome > slab.min && annualIncome <= slab.max) {
      return slab;
    }
  }
  return null;
}

export function getEffectiveTaxRate(
  monthlySalary: number,
  year: string = "2025-26"
) {
  const tax = calculateSalaryTax(monthlySalary, year);
  if (tax.annualIncome === 0) return 0;
  return (tax.yearlyTax / tax.annualIncome) * 100;
}