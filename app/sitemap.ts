import type { MetadataRoute } from "next";

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
  ];

  const dynamicSalaryPages: string[] = [];

  // ✅ 10k se 500k
  for (let i = 10000; i <= 500000; i += 10000) {
    dynamicSalaryPages.push(`/salary/${i}`);
  }

  // ✅ 550k se 2M
  for (let i = 550000; i <= 2000000; i += 50000) {
    dynamicSalaryPages.push(`/salary/${i}`);
  }

  const allPaths = [...staticPages, ...dynamicSalaryPages];

  return allPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}