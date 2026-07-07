export type Slab = {
  min: number;
  max: number;
  rate: number;
  fixed: number;
};

export const taxData: Record<string, Slab[]> = {
  "2025-26": [
    { min: 0, max: 600000, rate: 0, fixed: 0 },
    { min: 600000, max: 1200000, rate: 0.01, fixed: 0 },
    { min: 1200000, max: 2400000, rate: 0.15, fixed: 6000 },
    { min: 2400000, max: 3600000, rate: 0.25, fixed: 186000 },
    { min: 3600000, max: Infinity, rate: 0.35, fixed: 486000 },
  ],
    
};

export function calculateSalaryTax(
  monthlySalary: number,
  year: string = "2025-26"
) {
  const annualIncome = monthlySalary * 12;

  const slabs = taxData[year];

  let yearlyTax = 0;

  for (const slab of slabs) {
    if (annualIncome > slab.min && annualIncome <= slab.max) {
      yearlyTax =
        slab.fixed + (annualIncome - slab.min) * slab.rate;
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

  const slabs = taxData[year];

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

  if (tax.annualIncome === 0) {
    return 0;
  }

  return (tax.yearlyTax / tax.annualIncome) * 100;
}