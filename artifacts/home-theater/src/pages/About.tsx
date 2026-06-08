import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Award, Users, Zap } from "lucide-react";
import aboutDesignerImg from "@assets/Benpic_1780959186114.jpg";

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

const serviceAreas = [
  { county: "Fairfax County", cities: "McLean, Great Falls, Vienna, Reston, Tysons, Burke, Springfield" },
  { county: "Washington, DC", cities: "Georgetown, Capitol Hill, Dupont Circle, Embassy Row, Chevy Chase DC" },
  { county: "Montgomery County, MD", cities: "Bethesda, Potomac, Chevy Chase, Rockville, North Bethesda" },
  { county: "Arlington County", cities: "Arlington, Ballston, Clarendon, Crystal City, Shirlington" },
  { county: "Loudoun County", cities: "Leesburg, Ashburn, Sterling, Lansdowne, Brambleton" },
  { county: "Prince William County", cities: "Woodbridge, Gainesville, Haymarket, Lake Ridge" },
  { county: "Alexandria City", cities: "Old Town, Del Ray, Seminary Hill, Rosemont" },
  { county: "Beyond the Region", cities: "New York, Miami, Caribbean, and select international engagements" },
];

const certifications = [
  "CEDIA Certified Installer",
  "THX Certified",
  "ISF Level III",
  "Control4 Diamond",
  "Crestron Platinum",
  "Lutron Maestro Certified",
  "Dolby Atmos Certified",
  "DTS:X Certified",
];

const values = [
  {
    icon: Award,
    title: "Uncompromising Excellence",
    desc: "We refuse to install equipment or designs that we wouldn't have in our own homes. If it doesn't meet our standard, we don't propose it.",
  },
  {
    icon: Users,
    title: "White-Glove Partnership",
    desc: "We're not installers — we're partners. Every client has a dedicated project lead who sees them from first call to final calibration.",
  },
  {
    icon: Zap,
    title: "Obsessive Precision",
    desc: "Room acoustics, cable routing, ISF calibration — every detail is engineered, not guessed. The difference is visible and audible.",
  },
];

export default function About() {
  useSEO({
    title: "About Home Cinema Group — Luxury Home Theater Specialists Since 2005",
    description: "Since 2005, Home Cinema Group has been designing and building extraordinary home theaters across Virginia, DC, and Maryland. CEDIA-certified, award-winning craftsmanship.",
    canonical: "https://homecinemagroup.com/about",
    ogImage: "https://homecinemagroup.com/opengraph.jpg",
  });
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, hsl(220 20% 12%) 0%, hsl(220 15% 5%) 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              About<br />
              <span className="italic text-[hsl(38_75%_52%)]">Us</span>
            </h1>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="space-y-6 text-[hsl(38_10%_60%)] leading-relaxed text-lg">
              <p>
                Home Cinema Group was founded in 2005 in Miami, Florida by Marcus Webb — a frustrated THX-certified technician who was tired of watching luxury clients receive mediocre installations from companies that prioritized margins over mastery.
              </p>
              <p>
                The premise was simple: build the kind of theater you'd want in your own home, and never stop until it's perfect. Eighteen years and 500+ projects later, that premise hasn't changed.
              </p>
              <p>
                Today, our team of 24 engineers, designers, and calibrators serves clients across North America, the Caribbean, and Europe — from intimate 4-seat screening rooms to landmark 40-seat private cinemas. Our work has been featured in Architectural Digest, Robb Report, and Dwell Magazine.
              </p>
              <p className="font-serif text-2xl text-[hsl(38_20%_85%)] italic border-l-2 border-[hsl(38_75%_52%)] pl-6">
                "We don't install home theaters. We engineer emotional experiences."
              </p>
              <p className="text-[hsl(38_10%_45%)] text-sm">— Marcus Webb, Founder</p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative">
              <img
                src={aboutDesignerImg}
                alt="Home Cinema Group designer at work"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[hsl(38_75%_52%/0.3)]" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-[hsl(38_75%_52%/0.15)]" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-[hsl(220_15%_5%)] border-y border-[hsl(220_15%_14%)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-14">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Values</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.title} delay={i * 100}>
                  <div data-testid={`value-${i}`} className="p-8 border border-[hsl(220_15%_16%)]">
                    <Icon className="text-[hsl(38_75%_52%)] mb-6" size={24} strokeWidth={1.5} />
                    <h3 className="font-serif text-xl text-[hsl(38_20%_88%)] mb-3">{v.title}</h3>
                    <p className="text-[hsl(38_10%_55%)] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-24 md:py-32" data-testid="areas-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Where We Work</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              Proudly Serving<br />
              <span className="italic">Virginia, DC & Maryland</span>
            </h2>
            <p className="text-[hsl(38_10%_55%)] text-lg leading-relaxed max-w-2xl mb-16">
              Home Cinema Group serves discerning homeowners throughout the greater DC Metro region. From the estates of Great Falls to the townhomes of Capitol Hill, we bring the same uncompromising craftsmanship to every project — no matter the zip code.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, i) => (
              <FadeIn key={area.county} delay={i * 80}>
                <div
                  data-testid={`area-${i}`}
                  className="border border-[hsl(220_15%_16%)] border-l-2 border-l-[hsl(38_75%_52%)] p-6 hover:border-[hsl(220_15%_22%)] hover:border-l-[hsl(38_75%_60%)] transition-colors duration-300 bg-[hsl(220_15%_8%)]"
                >
                  <h3 className="text-[hsl(38_20%_88%)] font-semibold text-base mb-2">{area.county}</h3>
                  <p className="text-[hsl(38_10%_50%)] text-sm leading-relaxed">{area.cities}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 bg-[hsl(220_15%_5%)] border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-center text-[hsl(38_10%_45%)] text-xs tracking-[0.3em] uppercase mb-10">Certifications & Accreditations</p>
          </FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, i) => (
              <FadeIn key={cert} delay={i * 50}>
                <span
                  data-testid={`cert-${i}`}
                  className="px-4 py-2 border border-[hsl(220_15%_20%)] text-[hsl(38_10%_55%)] text-xs tracking-[0.1em] uppercase"
                >
                  {cert}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(38_20%_90%)] mb-6">
              Work with the best.
            </h2>
            <p className="text-[hsl(38_10%_60%)] mb-10 leading-relaxed">
              18 years of experience. 500+ completed projects. Zero compromises.
            </p>
            <Link href="/contact" data-testid="about-cta">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                Start a Conversation <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
