export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fbrtaxcalculators.vercel.app/sitemap.xml",
  };
}