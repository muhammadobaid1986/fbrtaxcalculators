import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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

  // ✅ Dynamic Salary Pages (/salary/50000 → /salary/2500000)
  const dynamicSalaryPages = Array.from({ length: 2000 }, (_, i) => {
    const salary = (i + 1) * 50000; // 50k increments
    return `/salary/${salary}`;
  });

  const allPages = [...staticPages, ...dynamicSalaryPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}