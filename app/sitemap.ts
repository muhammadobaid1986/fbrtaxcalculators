import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://fbrtaxcalculators.com";

  const staticPages = [
    "",
    "/income-tax-calculator-2025-26",
    "/income-tax-calculator-2024-25",
    "/income-tax-calculator-2023-24",
    "/income-tax-calculator-2022-23",
    "/income-tax-calculator-2021-22",
    "/blog",
    "/zakat-calculator",
    "/withholding-tax-calculator",
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
    "/filer-vs-non-filer-2025",
    "/how-to-become-a-filer",
    "/how-to-file-tax-return-online-pakistan",
    "/property-tax-in-pakistan",
    "/tax-on-bank-profit",
    "/tax-on-car-registration",
    "/latest-budget-2025-26-tax-slabs",
    "/tax-on-prize-bonds-pakistan",
    "/tax-on-freelancers-pakistan",
    "/benefits-of-being-filer-pakistan",
    "/atl-status-check-pakistan",
    "/how-to-register-on-fbr-iris",
    "/tax-on-remittances-pakistan",
    "/how-to-check-filer-status-pakistan",
    "/salary-after-tax-calculator",
    "/how-to-calculate-income-tax",
    "/income-tax-on-100000-salary-pakistan",
    "/income-tax-on-150000-salary-pakistan",
    "/income-tax-on-200000-salary-pakistan",
    "/income-tax-on-250000-salary-pakistan",
    "/income-tax-on-300000-salary-pakistan",
    "/tax-slab-finder-pakistan",
    "/monthly-tax-calculator-pakistan",
    "/tax-slab-comparison-pakistan",
  ];

  // ✅ Smart Salary Range Strategy

const dynamicSalaryPages: string[] = [];

// 10,000 se 500,000 tak har 10,000 increment
for (let i = 10000; i <= 500000; i += 10000) {
  dynamicSalaryPages.push(`/salary/${i}`);
}

// 550,000 se 2,000,000 tak har 50,000 increment
for (let i = 550000; i <= 2000000; i += 50000) {
  dynamicSalaryPages.push(`/salary/${i}`);
}
}