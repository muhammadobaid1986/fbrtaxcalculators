import "./globals.css";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://fbrtaxcalculators.com"),
  title: {
    default: "FBR Tax Calculators Pakistan | Income Tax, Zakat & WHT Tools",
    template: "%s | FBR Tax Calculators",
  },
  description:
  "Free Income Tax Calculator Pakistan 2025-26. Calculate salary income tax for tax years 2021-2026 using official FBR tax slabs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-white via-gray-50 to-green-50">

        {/* NAVBAR */}
        <nav className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <Link
  href="/"
  className="text-3xl font-extrabold bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 bg-clip-text text-transparent tracking-wide"
>
  FBR Tax Calculators
</Link>

            <div className="space-x-6 text-gray-700 font-medium hidden md:block">
  <Link
  href="/"
  className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
>
  Home
</Link>
  <Link
  href="/blog"
  className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
>
  Blog
</Link>

<Link
  href="/zakat-calculator"
  className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
>
  Zakat
</Link>

<Link
  href="/withholding-tax-calculator"
  className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
>
  WHT
</Link>

<Link
  href="/about"
  className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
>
  About
</Link>
</div>

          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">

  {/* SIDEBAR */}
  <aside className="w-72 hidden md:block">
  <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-28 border border-gray-100 hover:shadow-2xl transition">

    <h3 className="text-xl font-bold mb-6 text-green-600">
      🚀 Quick Tools
    </h3>

    <ul className="space-y-4 text-sm">

      <li>
        <Link href="/" className="flex items-center gap-2 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition">
          💰 Income Tax Calculator
        </Link>
      </li>

      <li>
        <Link href="/zakat-calculator" className="flex items-center gap-2 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition">
          🕌 Zakat Calculator
        </Link>
      </li>

      <li>
        <Link href="/withholding-tax-calculator" className="flex items-center gap-2 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition">
          📊 Withholding Tax
        </Link>
      </li>

      <li>
        <Link href="/blog" className="flex items-center gap-2 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition">
          📘 Tax Guides
        </Link>
      </li>

    </ul>

  </div>
</aside>

  {/* MAIN CONTENT */}
  <main className="flex-1">
    {children}
  </main>

</div>

        {/* FOOTER */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-24 pt-14 pb-8">
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                FBR Tax Calculators
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Free modern tax & financial calculation tools for Pakistan.
                Not affiliated with Federal Board of Revenue (FBR).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Tools
              </h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="hover:text-green-400 transition">Income Tax Calculator</Link></li>
                <li><Link href="/zakat-calculator" className="hover:text-green-400 transition">Zakat Calculator</Link></li>
                <li><Link href="/withholding-tax-calculator" className="hover:text-green-400 transition">WHT Calculator</Link></li>
                <li><Link href="/blog" className="hover:text-green-400 transition">Tax Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-green-400 transition">Privacy Policy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-green-400 transition">Disclaimer</Link></li>
                <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
            © 2026 FBR Tax Calculators. All rights reserved.
          </div>
        </footer>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FBR Tax Calculators",
              url: "https://fbrtaxcalculators.com",
            }),
          }}
        />

      </body>
    </html>
  );
}