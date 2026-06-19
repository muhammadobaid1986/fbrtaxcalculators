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
      <body className="bg-gradient-to-b from-slate-50 to-gray-200">

        {/* NAVBAR */}
        <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-3">

    <Link
      href="/"
      className="text-2xl font-semibold text-white tracking-wide"
    >
      FBR Tax Calculators
    </Link>

    <div className="flex flex-wrap justify-center gap-2">

      <Link href="/" className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition">
        Home
      </Link>

      <Link href="/blog" className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition">
        Blog
      </Link>

      <Link href="/zakat-calculator" className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition">
        Zakat
      </Link>

      <Link href="/withholding-tax-calculator" className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition">
        WHT
      </Link>

      <Link href="/about" className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition">
        About
      </Link>

    </div>

  </div>
</nav>

        {/* PAGE CONTENT */}
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-6 md:py-10 flex flex-col md:flex-row gap-8">

  {/* SIDEBAR */}
  <aside className="w-full md:w-72">
  <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 sticky top-28 border border-gray-100 hover:shadow-2xl transition">

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
  <main className="flex-1 min-w-0">
    {children}
  </main>

</div>

        {/* FOOTER */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-24 pt-14 pb-8">
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                FBR Tax Calculators pk
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