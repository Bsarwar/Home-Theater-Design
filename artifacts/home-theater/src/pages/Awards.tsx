import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Award, Star } from "lucide-react";
import awardsHeroImg from "@assets/FTheater_1780950606414.jpg";
import theater1Img from "@assets/BR_1781626855491.jpg";
import theater2Img from "@assets/10k_Theater_1_1780573606798.png";
import theater3Img from "@assets/Screenmidrt3P_1781173087335.jpg";
import theater4Img from "@assets/MM_1781640063188.png";
import theater5Img from "@assets/DSC_1696a_1781641592539.jpg";
import theater6Img from "@assets/screen1_1781642188062.jpg";
import theater7Img from "@assets/ScreenLFTp.2jpg_1781108324880.jpg";
import theater8Img from "@assets/FTheater_1781652183272.jpg";
import theater9Img from "@assets/FCB1_1781653437804.jpg";
import ceprocover from "@assets/2024-11-27_12-42-34_1781654216399.jpg";
import cepro2017cover from "@assets/2026-06-16_19-49-53_1781654297270.jpg";
import cepro2025cover from "@assets/2025-12-09_21-53-40_1781654425189.jpg";
import houzzBadge from "@assets/commercial_1781659157953.jpg";

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
    image: theater7Img,
    project: "Blade Runner Theater — Vienna, Virginia",
    year: "2025",
    description: "Our client, an avid Blade Runner fan, came to us with a clear mission: build a theater that felt as immersive and cinematic as the film itself. We designed and constructed the room from the ground up — acoustics, sound isolation, fiber optic star ceiling, and the signature LED cove lighting that gives the space its dramatic glow. Central to the design is the iconic Frank Lloyd Wright Ennis House tile pattern, famously featured in the film's apartment scene. We commissioned our woodworking partner Robert Baden Woodwork to painstakingly recreate the intricate tile in custom millwork — a detail that anchors the entire room's identity. Custom Works LLC handled the full AV integration, completing a space where every element, from the fabric walls to the architectural accents, honors the vision.",
    highlights: ["Triad speakers & JL Audio subwoofers", "Smart LED lighting synced to sound", "JVC projection & Seymour Screen Excellence", "Brands: Marantz · Panasonic · Torus Power · AudioControl · URC · Fortress · Lutron · Strong"],
    awardOrg: "CE Pro",
    awardCategory: "Home of the Year — Silver Winner",
    badgeColor: "silver" as const,
    publication: "CE Pro Magazine",
    publicationNote: "Featured in CE Pro November/December 2025 — \"Bold Ode to Blade Runner.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
  },
  {
    image: theater3Img,
    project: "Family Oasis Theater — Great Falls, VA",
    year: "2025",
    description: "A Great Falls couple building their dream estate knew the theater had to be something special — the crown jewel of a 20,000-square-foot home designed as a central gathering hub for extended family and grandkids. Seating for everyone was a must. Custom Works LLC handled the full AV integration and furnished the room with three rows of Fortress seating — the finest luxury cinema line available — including two premium loungers. We designed and built the dedicated cinema from scratch, handling every aspect of the room construction: acoustics, sound isolation, fabric wall treatment, and finish.",
    highlights: ["Three rows of Fortress luxury cinema seating", "Includes 2 premium Fortress loungers", "Triad Gold speakers for immersive audio", "Two JL Audio Fathom subwoofers + in-wall sub", "150-inch Seymour Screen Excellence", "JVC NZ900 4K projector · URC remotes"],
    awardOrg: "CE Pro",
    awardCategory: "Home of the Year — Silver Winner",
    badgeColor: "silver" as const,
    publication: "CE Pro Magazine",
    publicationNote: "Featured in CE Pro 2025 — \"Custom Entertainment Oasis in Family Estate.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
  },
  {
    image: theater2Img,
    project: "The Nautilus Theater — Warrenton, VA",
    year: "2024",
    description: <>Two lifelong admirers of the legendary Disney film <em>20,000 Leagues Under the Sea</em> came to us with a singular vision: build them a theater that put them aboard the Nautilus. Our woodworking partner Robert Baden Woodwork took the lead on the room's aesthetic, carefully crafting every surface and architectural detail to give the space a genuine submarine feel. Custom Works AV joined the project as our integration partner, concealing all technology seamlessly within the themed environment so that not a speaker grille or projector mount breaks the illusion. The result is a space that is as visually captivating as it is sonically breathtaking.</>,
    highlights: ["Sony VPLXW5000ES laser projector", "Seymour Screen Excellence 120\" Neo Enlightor acoustic screen", "16 Triad In-Wall & In-Ceiling Bronze Dolby Atmos speakers", "JL Audio 12\" subwoofer", "URC controls · 4K Apple TV · Octane Seating", "AV integration by Custom Works AV"],
    awardOrg: "CE Pro",
    awardCategory: "Home of the Year — Gold Winner",
    badgeColor: "gold" as const,
    publication: "CE Pro Magazine",
    publicationNote: "CE Pro 2024 Home of the Year — \"Due Diligence Deep Dive Drives 'Nautilus' Themed Theater.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
  },
  {
    image: theater1Img,
    project: "Rustic Colors Home Theater — Fairfax Station, VA",
    year: "2022",
    description: "Not every great theater starts with a grand canvas. A small, odd-shaped unfinished basement became the challenge — and the opportunity. Our clients, who had relocated to be near their kids and grandkids, wanted a room the whole family could love. We developed a warm earth-tone palette with a custom fiber optic star ceiling to make the space feel far larger than it is. Fabric-wrapped trim panels conceal the in-wall Triad speakers throughout, while the walls were fully decoupled for sound isolation. Custom Works AV completed the integration — delivering bass performance that has to be felt to be believed.",
    highlights: ["Sony 4K projector · Screen Innovations Zero Edge screen", "In-wall Triad Dolby Atmos speakers — fully concealed", "Two JL Audio subwoofers (adjacent room, space-saving)", "Marantz AV receiver · Sony Blu-ray · WattBox power", "URC controls · decoupled walls for sound isolation", "AV integration by Custom Works AV"],
    awardOrg: "CE Pro",
    awardCategory: "Home of the Year — Silver Winner",
    badgeColor: "silver" as const,
    publication: "CE Pro Magazine",
    publicationNote: "CE Pro 2022 — \"Small but Mighty Cinematic Space.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
  },
  {
    image: theater4Img,
    project: "Simply Slim Home Theater — Stafford, VA",
    year: "2022",
    description: "A very tight, slim unfinished room full of mechanicals became the starting point. We navigated the ductwork, flipped the room's orientation to hide all equipment behind a new wall, and built out the space from scratch. The client's custom furniture set the design tone — warm, cozy, and classy — and we matched it with trim work and fabric wall panels that concealed the recessed Triad speakers throughout. Custom Works AV completed the integration, delivering the well-appointed home theater of the owners' dreams.",
    highlights: ["Sony 4K projector · Screen Innovations 120\" Zero Edge Slate screen", "Recessed Triad speakers — concealed in fabric wall panels", "Two JL Audio subwoofers · 11-channel Marantz AVR", "Room orientation flipped to fully conceal AV equipment", "Custom trim work & fabric panels throughout", "AV integration by Custom Works AV"],
    awardOrg: "CE Pro",
    awardCategory: "Home of the Year — Bronze Winner",
    badgeColor: "bronze" as const,
    publication: "CE Pro Magazine",
    publicationNote: "CE Pro 2022 — \"Head of Its Class.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
  },
  {
    image: theater5Img,
    project: "Modern Flair Home Theater — McLean, VA",
    year: "2020",
    description: "A full renovation of an outdated home theater brought together three collaborators for the first time: Lifestyle Solutions handled the complete design and build-out, Custom Works AV delivered the AV design and installation, and Florida-based interior designer Amanda Dillon of Interiors by Brown guided the fabric, lighting, trim, and paint selections. The result is a clean-lined, modern space with a redesigned front wall, new tray ceiling, custom fabric wall panels, and Fortress theater seating — all built around a 120-inch screen and Sony 4K laser projector.",
    highlights: ["Sony VPL-VW295ES 4K projector", "120\" Screen Innovations screen", "Fabricmate fabric wall panels", "Fortress custom theater chairs", "Slide-out rack in hidden wall niche", "Triad & Sunfire speakers/subs"],
    awardOrg: "CE Pro",
    awardCategory: "Home of the Year — Bronze",
    badgeColor: "bronze" as const,
    publication: "CE Pro Magazine",
    publicationNote: "CE Pro 2020 — \"Three's Company as Group Effort Equals Renovation Success.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
  },
  {
    image: theater6Img,
    project: "The Cavalier Theater — Aldie, VA",
    year: "2019",
    description: "Built for a passionate UVA Cavaliers fan who wanted the very best in projection, audio, and automation — plus the biggest screen possible. He contracted Lifestyle Solutions and Custom Works to design and build a room capable of watching multiple sporting events simultaneously. His wife collaborated closely with Lifestyle Solutions and partner Robert Baden Woodwork to source specialty cypress lumber, crafting the exposed ceiling beams and custom bar counter that define the room's warm, rustic character. The result: a 133-inch screen, Sony 4K projector with AVPro quad-view multiviewer, 11-channel Dolby Atmos sound, and two rows of Palliser seating for eight.",
    highlights: ["133\" Screen Innovations Slate screen", "Sony 4K projector + AVPro quad-view", "11-ch Marantz Dolby Atmos receiver", "11 Triad Silver Series speakers", "Sunfire HRS12 dual subwoofers", "Two rows of Palliser seating (8 seats)"],
    awardOrg: "CE Pro",
    awardCategory: "Best Project Award — Bronze",
    badgeColor: "bronze" as const,
    publication: "CE Pro Magazine",
    publicationNote: "CE Pro 2019 — \"UVA Fan Scores Sweet Sports Viewing Space.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
  },
  {
    image: theater8Img,
    project: "Modern Fusion Home Theater — Nokesville, VA",
    year: "2018",
    description: "One of the largest theater spaces Lifestyle Solutions has built — a massive room beneath a three-car garage with 12-foot ceilings. When contractor issues left the space unfinished after two years of home construction, Lifestyle Solutions and Custom Works stepped in to complete it. Even with a 160-inch screen, the original square footprint was oversized for ideal acoustics, so the team reframed the room to a more proportional rectangle and addressed a sloped floor with custom-angled shadow boxes. Vertical LED cascading panels flanking the screen give the room an expansive, cinematic grandeur — making even this extraordinary space feel as large as it truly is.",
    highlights: ["160\" Screen Innovations screen", "Sony 4K projector", "URC whole-room control", "Triad speakers + JL Audio subs", "Yamaha & Parasound electronics", "Palliser seating · SnapAV rack"],
    awardOrg: "EH Publishing",
    awardCategory: "Home of the Year — Bronze",
    badgeColor: "bronze" as const,
    publication: "Electronic House Magazine",
    publicationNote: "CE Pro August 2018 — \"Redesigned Room Plans Produce Refined Results.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
  },
  {
    image: theater9Img,
    project: "NEON Home Theater — Bristow, VA",
    year: "2017",
    description: "A client who knew exactly what he wanted: big lights and big sound. Lifestyle Solutions and Custom Works AV collaborated to deliver both. Lifestyle Solutions handled the full design, build-out, and acoustical engineering — decoupling the ceiling and walls for maximum sound isolation — while Custom Works AV designed and installed the A/V system. Acoustical fabric-wrapped panels float off the walls with LIFX color-changing LED strips glowing between each row, controlled by URC and operable via iPad. The result is a compact but immersive theater with Dolby Atmos audio, a 120-inch Zero Edge screen, Sony 4K projection, and an eye-catching star ceiling and custom carpet that complete the NEON identity.",
    highlights: ["Sony 4K VPL-HW675ES projector", "120\" SI Zero Edge Pure White screen", "Dolby Atmos via Triad InRoom Gold", "JL Audio Fathom V2 dual 12\" subs", "LIFX LED panels + URC control", "Torus Power conditioning"],
    awardOrg: "EH Publishing",
    awardCategory: "Home of the Year — Silver",
    badgeColor: "silver" as const,
    publication: "Electronic House Magazine",
    publicationNote: "CE Pro 2017 — \"Lights, Action Are Star Attractions to Compact Home Theater.\" Room design and construction by Lifestyle Solutions LLC, Bristow, Virginia. AV design and installation by Custom Works AV.",
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

                  {/* LEFT — room photo with overlays */}
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

                    {/* Award badge — top-right corner */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-black/75 border border-[hsl(38_75%_52%/0.4)] backdrop-blur-sm p-3">
                        <AwardBadge
                          org={item.awardOrg}
                          year={item.year}
                          category={item.awardCategory.split("—")[1]?.trim() ?? item.awardCategory}
                          color={item.badgeColor}
                        />
                      </div>
                    </div>

                    {/* Index number */}
                    <div className="absolute bottom-4 left-5 z-10">
                      <span className="font-serif text-5xl font-light text-white/10 select-none">0{i + 1}</span>
                    </div>
                  </div>

                  {/* RIGHT — full-width project info */}
                  <div className="lg:w-[45%] bg-[hsl(220_15%_9%)]">
                    <div className="p-8 lg:p-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="text-[hsl(38_75%_52%)] text-xs tracking-[0.2em] uppercase mb-2">{item.year} · {item.awardOrg}</div>
                        <h2 className="font-serif text-2xl md:text-3xl text-[hsl(38_20%_90%)] leading-tight mb-2">{item.awardCategory}</h2>
                        <div className="text-[hsl(38_10%_55%)] text-sm mb-5 tracking-wide">{item.project}</div>
                        <p className="text-[hsl(38_10%_60%)] text-sm leading-relaxed mb-6">{item.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-2 text-xs text-[hsl(38_10%_65%)]">
                              <div className="w-1 h-1 rounded-full bg-[hsl(38_75%_52%)] shrink-0 mt-1.5" />
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-[hsl(220_15%_16%)]">
                        <p className="text-[hsl(38_10%_45%)] text-xs leading-relaxed italic">{item.publicationNote}</p>
                      </div>
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
              { name: "Electronic House", sub: "Home of the Year", cover: cepro2017cover },
              { name: "CE Pro", sub: "Home of the Year", cover: ceprocover },
              { name: "CEDIA", sub: "Home of the Year", cover: cepro2025cover },
              { name: "Houzz", sub: "Best of Service 2023", cover: houzzBadge },
            ].map((pub, i) => (
              <FadeIn key={pub.name} delay={i * 80}>
                <div className="bg-[hsl(220_15%_7%)] flex flex-col items-center justify-center py-10 px-6 text-center hover:bg-[hsl(220_15%_9%)] transition-colors duration-300">
                  <div className="w-24 h-32 mb-4 flex items-center justify-center overflow-hidden">
                    {pub.cover ? (
                      <img
                        src={pub.cover}
                        alt={`${pub.name} magazine cover`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full border border-[hsl(38_75%_52%/0.4)] flex items-center justify-center">
                        <Star size={20} className="text-[hsl(38_75%_52%)]" />
                      </div>
                    )}
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
