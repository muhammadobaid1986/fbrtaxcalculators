import Link from "next/link";

type LinkItem = {
  title: string;
  href: string;
};

type RelatedLinksProps = {
  title?: string;
  links: LinkItem[];
};

export default function RelatedLinks({
  title = "Related Tools & Guides",
  links,
}: RelatedLinksProps) {
  return (
    <div className="mt-12 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-5">
        {title}
      </h2>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-green-700 hover:underline font-medium"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}