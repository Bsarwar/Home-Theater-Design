import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const siteStructure = [
  {
    label: "Home",
    href: "/",
    desc: "Welcome to Home Cinema Group — luxury home theater design & build.",
    children: [],
  },
  {
    label: "Services",
    href: "/services",
    desc: "Our full range of home cinema design and construction services.",
    children: [
      "Dedicated Theaters",
      "Media Rooms & TV Walls",
      "Theater Design & Consultation",
      "Lighting Design & Control",
      "Acoustical Fabric Treatment",
      "Sound Isolation",
      "Architectural Millwork & Elements",
      "Star Panel Ceiling",
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    desc: "A curated gallery of our completed home theater installations.",
    children: [],
  },
  {
    label: "Awards & Press",
    href: "/awards",
    desc: "Industry recognition and press coverage of our work.",
    children: [],
  },
  {
    label: "About",
    href: "/about",
    desc: "Our story, team, service areas, and partnership opportunities.",
    children: [
      "Our Story",
      "Who We Work With",
      "Areas We Serve",
      "Award-Winning Work",
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    desc: "Get in touch for a free consultation or project quote.",
    children: [],
  },
];

export default function Sitemap() {
  useSEO({
    title: "Sitemap | Home Cinema Group",
    description: "Full sitemap for Home Cinema Group — browse all pages including services, projects, awards, and contact information.",
    canonical: "https://homecinemagroup.com/sitemap",
  });

  return (
    <div className="bg-[hsl(220_15%_7%)] min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-[hsl(220_15%_14%)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
            <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Navigation</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-[hsl(38_20%_90%)] leading-tight mb-4">
            Site<span className="italic text-[hsl(38_75%_52%)]">map</span>
          </h1>
          <p className="text-[hsl(38_10%_55%)] text-lg max-w-xl leading-relaxed">
            A complete index of every page on the Home Cinema Group website.
          </p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteStructure.map((page) => (
              <div
                key={page.href}
                className="border border-[hsl(220_15%_16%)] border-l-2 border-l-[hsl(38_75%_52%)] bg-[hsl(220_15%_8%)] p-8 hover:border-[hsl(220_15%_22%)] hover:border-l-[hsl(38_75%_60%)] transition-colors duration-300"
              >
                <Link href={page.href}>
                  <span className="inline-flex items-center gap-2 font-serif text-2xl text-[hsl(38_20%_90%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200 cursor-pointer mb-2">
                    {page.label}
                    <ArrowRight size={16} className="text-[hsl(38_75%_52%)]" />
                  </span>
                </Link>
                <p className="text-[hsl(38_10%_50%)] text-sm leading-relaxed mb-5">{page.desc}</p>

                {page.children.length > 0 && (
                  <ul className="space-y-2 border-t border-[hsl(220_15%_14%)] pt-4">
                    {page.children.map((child) => (
                      <li key={child} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[hsl(38_75%_52%)] shrink-0" />
                        <Link href={page.href}>
                          <span className="text-[hsl(38_10%_55%)] text-sm hover:text-[hsl(38_75%_52%)] transition-colors duration-200 cursor-pointer">
                            {child}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
