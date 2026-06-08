import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Award, Star } from "lucide-react";
import awardsHeroImg from "@assets/FTheater_1780950606414.jpg";
import theater1Img from "@assets/LMp4_1780573575270.jpg";
import theater2Img from "@assets/10k_Theater_1_1780573606798.png";
import theater3Img from "@assets/FTheater_1780950606414.jpg";
import theater4Img from "@assets/DSC_1804_1780715585519.jpg";
import theater5Img from "@assets/screen--frontPO_1780795877779.jpg";
import theater6Img from "@assets/DSC_1924_1780947966821.jpg";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function AwardBadge({ org, year, category, color = "gold" }: { org: string; year: string; category: string; color?: "gold" | "silver" | "bronze" | "blue" }) {
  const colors = {
    gold:   { ring: "#c9a227", fill: "#c9a227", text: "#1a1209", label: "hsl(38 75% 52%)" },
    silver: { ring: "#9ca3af", fill: "#9ca3af", text: "#111827", label: "#9ca3af" },
    bronze: { ring: "#b45309", fill: "#b45309", text: "#fef3c7", label: "#b45309" },
    blue:   { ring: "#3b82f6", fill: "#3b82f6", text: "#eff6ff", label: "#60a5fa" },
  };
  const c = colors[color];
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full">
          <polygon points="60,6 72,40 108,40 80,62 90,96 60,76 30,96 40,62 12,40 48,40" fill="none" stroke={c.ring} strokeWidth="2" opacity="0.5" />
          <circle cx="60" cy="60" r="34" fill={c.fill} opacity="0.12" />
          <circle cx="60" cy="60" r="34" fill="none" stroke={c.ring} strokeWidth="1.5" />
        </svg>
        <div className="relative z-10 text-center px-2">
          <div className="font-serif text-2xl font-light leading-none" style={{ color: c.ring }}>{year}</div>
          <div className="text-[8px] tracking-[0.18em] uppercase font-bold mt-1" style={{ color: c.ring }}>Award</div>
        </div>
      </div>
      <div className="text-center">
        <div className="font-serif text-base text-[hsl(38_20%_88%)] leading-tight">{org}</div>
        <div className="text-[10px] tracking-[0.15em] uppercase mt-1" style={{ color: c.label }}>{category}</div>
      </div>
    </div>
  );
}

const awards = [
  {
    image: theater3Img,
    project: "Leesburg, VA — Dedicated Theater",
    year: "2018",
    description: "A full dedicated theater featuring fiber optic star ceiling, custom acoustical fabric panels, and integrated purple LED scene lighting. Recognized by Electronic House magazine for exceptional design and execution.",
    highlights: ["Fiber optic star panel ceiling", "Custom fabric acoustical treatment", "Tiered seating for 8", "Dolby Atmos 7.2.4 audio"],
    awardOrg: "Electronic House",
    awardCategory: "Home of the Year — Bronze",
    badgeColor: "bronze" as const,
    publication: "Electronic House Magazine",
    publicationNote: "Featured in the annual Home of the Year awards, recognizing the most outstanding residential technology installations across the country.",
  },
  {
    image: theater2Img,
    project: "McLean, VA — 10K Dedicated Theater",
    year: "2024",
    description: "An ultra-premium dedicated cinema room featuring a 4K laser projection system, full Dolby Atmos surround configuration, and custom architectural millwork from floor to ceiling. Named CE Pro's top dedicated theater of the year.",
    highlights: ["4K laser projection", "Dolby Atmos immersive audio", "Custom coffered ceiling", "Full millwork package"],
    awardOrg: "CE Pro",
    awardCategory: "Home of the Year — Gold",
    badgeColor: "gold" as const,
    publication: "CE Pro Magazine",
    publicationNote: "CE Pro's Home of the Year competition is the industry's most prestigious recognition program for custom electronics professionals.",
  },
  {
    image: theater1Img,
    project: "Great Falls, VA — Luxury Home Cinema",
    year: "2022",
    description: "A sprawling luxury cinema for a Great Falls estate, complete with a full raised stage, custom riser construction, and a 180-inch projection surface. Featured in Custom Home magazine as a benchmark of residential entertainment design.",
    highlights: ["180-inch projection screen", "Raised performance stage", "Custom leather seating for 12", "Hidden equipment room"],
    awardOrg: "Custom Home",
    awardCategory: "Best Home Theater — Featured",
    badgeColor: "silver" as const,
    publication: "Custom Home Magazine",
    publicationNote: "Custom Home magazine spotlights the most innovative and beautifully designed custom residences, including dedicated entertainment spaces.",
  },
  {
    image: theater4Img,
    project: "Potomac, MD — Estate Media Room",
    year: "2021",
    description: "A grand estate media room designed to serve as the social heart of the home — accommodating family movie nights, sports viewing, and formal screenings alike. Recognized by CEDIA as a standout example of multi-use entertainment design.",
    highlights: ["LED video wall system", "Integrated bar & lounge seating", "Blackout window solutions", "Multi-zone audio"],
    awardOrg: "CEDIA",
    awardCategory: "Best Media Room — Finalist",
    badgeColor: "blue" as const,
    publication: "CEDIA Awards",
    publicationNote: "CEDIA's global awards program recognizes excellence in the design and installation of home technology systems.",
  },
  {
    image: theater5Img,
    project: "Alexandria, VA — Screening Room",
    year: "2020",
    description: "A sleek, minimalist screening room built inside a historic Alexandria townhome. The design challenge was extraordinary — delivering full cinema performance within strict structural constraints while maintaining the home's architectural character.",
    highlights: ["Reference-grade projection", "Concealed acoustic panels", "Motorized blackout shades", "Hidden wiring & AV rack"],
    awardOrg: "Electronic House",
    awardCategory: "Home of the Year — Silver",
    badgeColor: "silver" as const,
    publication: "Electronic House Magazine",
    publicationNote: "Selected as a silver winner for exceptional integration of high-performance technology within a historically sensitive residential setting.",
  },
  {
    image: theater6Img,
    project: "Arlington, VA — Media Room & Bar",
    year: "2019",
    description: "A dramatic media room and wet bar combination built for a high-profile Arlington residence. The project combined a precision-tuned surround system with custom millwork, under-cabinet lighting, and a full bar installation — all functioning as one cohesive entertainment environment.",
    highlights: ["Custom wet bar integration", "Surround sound with bar seating", "Under-cabinet LED lighting", "Automated scene control"],
    awardOrg: "CE Pro",
    awardCategory: "Best Entertainment Space",
    badgeColor: "gold" as const,
    publication: "CE Pro Magazine",
    publicationNote: "Honored for seamlessly blending high-performance AV with luxury hospitality design in a residential setting.",
  },
];

export default function Awards() {
  useSEO({
    title: "Awards & Press | Home Cinema Group",
    description: "Home Cinema Group's award-winning home theater projects — recognized by Electronic House, CE Pro, CEDIA, and Custom Home magazine.",
    canonical: "https://homecinemagroup.com/awards",
    ogImage: "https://homecinemagroup.com/opengraph.jpg",
  });
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[hsl(220_15%_18%)]">
        <img src={awardsHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(220 15% 5% / 0.97) 0%, hsl(220 15% 5% / 0.75) 50%, hsl(220 15% 5% / 0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Recognition</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              Awards<br />
              <span className="italic text-[hsl(38_75%_52%)]">&amp; Press</span>
            </h1>
            <p className="text-[hsl(38_10%_60%)] text-xl max-w-xl leading-relaxed">
              Over two decades of award-winning projects, recognized by the industry's most respected publications and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* AWARDS LIST */}
      <section className="pb-24 md:pb-36 pt-10" data-testid="awards-list">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {awards.map((item, i) => (
            <FadeIn key={item.project} delay={i * 60}>
              <div
                data-testid={`award-card-${i}`}
                className="border border-[hsl(220_15%_14%)] overflow-hidden hover:border-[hsl(38_75%_52%/0.3)] transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row min-h-[320px]">

                  {/* LEFT — room photo with award icon overlay */}
                  <div className="relative lg:w-[55%] min-h-[260px] lg:min-h-0 overflow-hidden bg-[hsl(220_15%_5%)]">
                    <img
                      src={item.image}
                      alt={item.project}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Dark vignette so overlay reads */}
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 55%, hsl(220 15% 7%) 100%)" }} />

                    {/* Award icon badge — top-left corner */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-black/70 border border-[hsl(38_75%_52%/0.5)] backdrop-blur-sm">
                        <Award size={12} className="text-[hsl(38_75%_52%)]" />
                        <span className="text-[hsl(38_75%_52%)] text-[10px] tracking-[0.2em] uppercase font-semibold">{item.awardOrg} {item.year}</span>
                      </div>
                    </div>

                    {/* Index number */}
                    <div className="absolute bottom-4 left-5 z-10">
                      <span className="font-serif text-5xl font-light text-white/10 select-none">0{i + 1}</span>
                    </div>
                  </div>

                  {/* RIGHT — project info + award badge */}
                  <div className="lg:w-[45%] bg-[hsl(220_15%_9%)] flex flex-col lg:flex-row">

                    {/* Info panel */}
                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="text-[hsl(38_75%_52%)] text-xs tracking-[0.2em] uppercase mb-2">{item.year} · {item.awardOrg}</div>
                        <h2 className="font-serif text-2xl md:text-3xl text-[hsl(38_20%_90%)] leading-tight mb-2">{item.awardCategory}</h2>
                        <div className="text-[hsl(38_10%_55%)] text-sm mb-5 tracking-wide">{item.project}</div>
                        <p className="text-[hsl(38_10%_60%)] text-sm leading-relaxed mb-6">{item.description}</p>
                        <div className="space-y-2">
                          {item.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-xs text-[hsl(38_10%_65%)]">
                              <div className="w-1 h-1 rounded-full bg-[hsl(38_75%_52%)] shrink-0" />
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-[hsl(220_15%_16%)]">
                        <p className="text-[hsl(38_10%_45%)] text-xs leading-relaxed italic">{item.publicationNote}</p>
                      </div>
                    </div>

                    {/* Award badge panel */}
                    <div className="lg:w-36 shrink-0 flex items-center justify-center p-6 border-t lg:border-t-0 lg:border-l border-[hsl(220_15%_14%)] bg-[hsl(220_15%_7%)]">
                      <AwardBadge
                        org={item.awardOrg}
                        year={item.year}
                        category={item.awardCategory.split("—")[1]?.trim() ?? item.awardCategory}
                        color={item.badgeColor}
                      />
                    </div>

                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PRESS LOGOS / PUBLICATIONS */}
      <section className="py-16 bg-[hsl(220_15%_5%)] border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
                <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">As Seen In</span>
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              </div>
              <p className="text-[hsl(38_10%_50%)] text-sm max-w-lg mx-auto">
                Our work has been featured and recognized by the home technology industry's most respected media outlets.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(220_15%_14%)]">
            {[
              { name: "Electronic House", sub: "Home of the Year" },
              { name: "CE Pro", sub: "Home of the Year" },
              { name: "CEDIA", sub: "Global Awards" },
              { name: "Custom Home", sub: "Best Theater" },
            ].map((pub, i) => (
              <FadeIn key={pub.name} delay={i * 80}>
                <div className="bg-[hsl(220_15%_7%)] flex flex-col items-center justify-center py-10 px-6 text-center hover:bg-[hsl(220_15%_9%)] transition-colors duration-300">
                  <div className="w-10 h-10 border border-[hsl(38_75%_52%/0.4)] flex items-center justify-center mb-4">
                    <Star size={16} className="text-[hsl(38_75%_52%)]" />
                  </div>
                  <div className="font-serif text-[hsl(38_20%_80%)] text-base mb-1">{pub.name}</div>
                  <div className="text-[hsl(38_10%_45%)] text-[10px] tracking-[0.15em] uppercase">{pub.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(220_15%_7%)] border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(38_20%_90%)] mb-6">
              Build Your Award-Winning Theater
            </h2>
            <p className="text-[hsl(38_10%_60%)] mb-10 leading-relaxed">
              Join our list of distinguished clients across Virginia, DC, and Maryland. Start with a complimentary in-home consultation.
            </p>
            <Link href="/contact" data-testid="awards-cta">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                Schedule a Consultation <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
