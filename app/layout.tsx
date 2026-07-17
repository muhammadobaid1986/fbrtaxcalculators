import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = { 
  verification: {
  google: "3-xbUq141sg0V22gQIqOdUa8WcpugZrgWj6caHV2MUw",
},  
  metadataBase: new URL("https://fbrtaxcalculators.com"),
  title: {
  default: "FBR Tax Calculator Pakistan 2026-27 | Salary & Income Tax Slabs",
  template: "%s | FBR Tax Calculators",
},
  description:
  
  "Calculate income tax in Pakistan for 2026-27 using official FBR tax slabs. Check salary tax, comparison charts, and dynamic salary breakdown instantly.",
    
  openGraph: {
    title: "FBR Tax Calculators Pakistan",
    description:
  "Calculate income tax in Pakistan for 2026-27 using official FBR tax slabs. View salary tax breakdown, slab comparison, and filer benefits instantly.",
    url: "https://fbrtaxcalculators.com",
    siteName: "FBR Tax Calculators",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "FBR Tax Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FBR Tax Calculators Pakistan",
    description:
      "Free Pakistan Income Tax Calculator based on FBR tax slabs.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
      <script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1040104111900400"
  crossOrigin="anonymous"
></script>
    </head>
      <body className="bg-white text-gray-900">

      

        {/* NAVBAR */}
       {/* Royal Black Bismillah Bar */}
<div className="w-full bg-black py-3 border-b border-yellow-500/40">
  <div className="text-center">
    <span className="text-xl md:text-2xl font-extrabold tracking-widest bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(255,215,0,0.4)]">
      بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
    </span>
  </div>
</div>



        <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 shadow-lg sticky top-0 z-50">

  <div className="max-w-7xl mx-auto px-3 md:px-4 py-6 md:py-10 flex flex-col md:flex-row gap-8 bg-transparent">

    {/* Logo + Title */}
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/logo.png"
        alt="FBR Tax Calculators Logo"
        width={44}
        height={44}
        priority
        className="rounded-xl"
      />

      <div>
        <h1 className="text-xl md:text-2xl font-bold text-white leading-none">
          FBR Tax Calculators
        </h1>

        <p className="text-xs text-gray-300">
          Pakistan Tax Tools
        </p>
      </div>
    </Link>

    {/* Menu */}
    <div className="flex flex-wrap gap-3">

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
        <div className="max-w-7xl mx-auto px-3 md:px-4 flex flex-col md:flex-row gap-8">

  {/* SIDEBAR */}
  <div className="hidden lg:block">
  <aside className="w-full md:w-72">
  <div className="relative bg-white rounded-3xl shadow-xl p-6 sticky top-28 transition border border-transparent">
  {/* Premium Golden Frame */}
<div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-yellow-400/60"></div>
<div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[0_0_20px_rgba(255,215,0,0.2)]"></div>

    <h3 className="text-xl font-extrabold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent tracking-wide">
      🚀 Quick Tools
    </h3>

    <ul className="space-y-4 text-sm">

  <li>
    <Link href="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-50 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      💰 Income Tax Calculator
    </Link>
  </li>

  <li>
    <Link href="/monthly-tax-calculator-pakistan" className="flex items-center gap-3 p-3 rounded-xl 
           hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-50 
           hover:shadow-md hover:-translate-y-1 
           transition-all duration-200">
      📅 Monthly Tax Calculator
    </Link>
  </li>

  <li>
    <Link href="/salary-after-tax-calculator" className="flex items-center gap-3 p-3 rounded-xl 
           hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-50 
           hover:shadow-md hover:-translate-y-1 
           transition-all duration-200">
      💸 Salary After Tax
    </Link>
  </li>

  <li>
    <Link href="/tax-slab-finder-pakistan" className="flex items-center gap-3 p-3 rounded-xl 
           hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-50 
           hover:shadow-md hover:-translate-y-1 
           transition-all duration-200">
      📊 Tax Slab Finder
    </Link>
  </li>

  <li>
    <Link href="/tax-slab-comparison-pakistan" className="flex items-center gap-3 p-3 rounded-xl 
           hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-50 
           hover:shadow-md hover:-translate-y-1 
           transition-all duration-200">
      📈 Tax Slab Comparison
    </Link>
  </li>

  <li>
    <Link href="/withholding-tax-calculator" className="flex items-center gap-3 p-3 rounded-xl 
           hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-50 
           hover:shadow-md hover:-translate-y-1 
           transition-all duration-200">
      🧾 Withholding Tax
    </Link>
  </li>

  <li>
    <Link href="/zakat-calculator" className="flex items-center gap-3 p-3 rounded-xl 
           hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-50 
           hover:shadow-md hover:-translate-y-1 
           transition-all duration-200">
      🕌 Zakat Calculator
    </Link>
  </li>

  <li>
    <Link href="/blog" className="flex items-center gap-3 p-3 rounded-xl 
           hover:bg-gradient-to-r hover:from-green-100 hover:to-yellow-50 
           hover:shadow-md hover:-translate-y-1 
           transition-all duration-200">
      📘 Tax Guides
    </Link>
  </li>

</ul>

  </div>
</aside>
</div>

  {/* MAIN CONTENT */}
  <main className="flex-1 min-w-0">
    {children}
  </main>

</div>

<div className="my-8 text-center" style={{ minHeight: "250px" }}>
  <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-1040104111900400"
    data-ad-slot="9876543210"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
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
                <li><Link href="/salary-after-tax-calculator" className="hover:text-green-400 transition">Salary After Tax</Link></li>
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
                <li>
                <Link href="/about" className="hover:text-green-400 transition">
                About
                </Link>
              </li>
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
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://fbrtaxcalculators.com/#website",
          "url": "https://fbrtaxcalculators.com",
          "name": "FBR Tax Calculators",
          "description":
            "Income Tax Calculator Pakistan, Zakat Calculator, Withholding Tax Calculator and FBR Tax Guides.",
          "inLanguage": "en",
          "potentialAction": {
            "@type": "SearchAction",
            "target":
              "https://fbrtaxcalculators.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "@id": "https://fbrtaxcalculators.com/#organization",
          "name": "FBR Tax Calculators",
          "url": "https://fbrtaxcalculators.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://fbrtaxcalculators.com/favicon.ico"
          }
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://fbrtaxcalculators.com/#software",
          "name": "Income Tax Calculator Pakistan",
          "operatingSystem": "All",
          "applicationCategory": "FinanceApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "PKR"
          }
        }
      ]
    })
  }}
/>
    </body>
    </html>
  );
}

