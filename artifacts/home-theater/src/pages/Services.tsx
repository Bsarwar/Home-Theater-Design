import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Monitor, Volume2, Wifi, Sunset, Building2, Wrench, ArrowRight, CheckCircle } from "lucide-react";

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

const services = [
  {
    icon: Monitor,
    title: "Custom Home Theater Design & Build",
    desc: "Our signature offering: a fully engineered, acoustically optimized screening room designed from the ground up for your space and tastes. We handle architecture, acoustics, seating, projection or LED wall, audio calibration, and lighting design.",
    features: ["4K/8K Laser Projection & LED Walls", "Dolby Atmos & Auro-3D Audio", "Acoustic treatment & room modeling", "Custom seating & millwork integration", "Dedicated server & streaming setup", "ISF & THX calibration"],
    gradient: "from-amber-950 to-slate-900",
  },
  {
    icon: Volume2,
    title: "Whole-Home Audio",
    desc: "Multi-zone audio architecture that delivers studio-quality sound anywhere in your home. From invisible in-ceiling speakers to outdoor landscape arrays, every space becomes a listening experience.",
    features: ["Up to 32 independent audio zones", "Streaming & vinyl integration", "In-ceiling, in-wall & landscape speakers", "Voice control integration", "Custom soundbar & shelf systems", "Music server & NAS setup"],
    gradient: "from-slate-900 to-zinc-900",
  },
  {
    icon: Wifi,
    title: "Smart Home Automation",
    desc: "Unified control of every system in your home through a single, elegantly designed interface. From Crestron to Control4, we program and commission the world's most sophisticated automation platforms.",
    features: ["Lighting scenes & circadian rhythm tuning", "Climate & HVAC integration", "Motorized shades & drapery", "Security & surveillance integration", "One-touch 'Good Morning' & 'Cinema' scenes", "Remote access & monitoring"],
    gradient: "from-zinc-900 to-slate-800",
  },
  {
    icon: Sunset,
    title: "Outdoor Cinema & Entertainment",
    desc: "We bring cinematic quality outdoors with weatherproof screens, all-weather speakers, and hidden infrastructure that looks as refined as your interior spaces.",
    features: ["4K outdoor laser projectors", "Motorized weatherproof screens", "All-weather surround sound", "Pool-side & terrace installations", "Mosquito/bug-resistant builds", "Integrated landscape lighting"],
    gradient: "from-stone-900 to-slate-900",
  },
  {
    icon: Building2,
    title: "Commercial Screening Rooms",
    desc: "Private cinemas for boutique hotels, executive offices, yacht clubs, and private aviation terminals. We design spaces that impress the most discerning guests.",
    features: ["Up to 100-seat custom cinemas", "DCI-compliant projection", "Luxury hospitality seating", "Box-office-quality sound", "Branded control interfaces", "Ongoing maintenance & support"],
    gradient: "from-gray-900 to-zinc-900",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance Plans",
    desc: "Your investment deserves lifetime care. Our white-glove service plans include regular calibration, software updates, 24/7 remote monitoring, and priority on-site response.",
    features: ["Annual ISF recalibration", "24/7 remote system monitoring", "Priority on-site service (4-hour SLA)", "Software & firmware updates", "Dedicated account manager", "Loaner equipment program"],
    gradient: "from-slate-800 to-gray-900",
  },
];

export default function Services() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(220 20% 12%) 0%, hsl(220 15% 5%) 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">What We Offer</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              Our<br />
              <span className="italic text-[hsl(38_75%_52%)]">Services</span>
            </h1>
            <p className="text-[hsl(38_10%_60%)] text-xl max-w-xl leading-relaxed">
              Six disciplines. One philosophy: no compromise. Every project is engineered, not assembled.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-24 md:pb-36" data-testid="services-list">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeIn key={svc.title} delay={i * 60}>
                <div
                  data-testid={`service-item-${i}`}
                  className="border border-[hsl(220_15%_14%)] overflow-hidden hover:border-[hsl(38_75%_52%/0.3)] transition-colors duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className={`lg:col-span-2 bg-gradient-to-br ${svc.gradient} p-10 flex flex-col justify-between min-h-[220px]`}>
                      <Icon className="text-[hsl(38_75%_52%)]" size={32} strokeWidth={1.2} />
                      <div>
                        <div className="text-[hsl(38_75%_52%)] text-xs tracking-[0.2em] uppercase mb-2">0{i + 1}</div>
                        <h2 className="font-serif text-2xl md:text-3xl text-[hsl(38_20%_90%)] leading-tight">{svc.title}</h2>
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-10 bg-[hsl(220_15%_9%)]">
                      <p className="text-[hsl(38_10%_60%)] leading-relaxed mb-8">{svc.desc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {svc.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-[hsl(38_10%_65%)]">
                            <CheckCircle size={13} className="text-[hsl(38_75%_52%)] shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(220_15%_5%)] border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(38_20%_90%)] mb-6">
              Not sure what you need?
            </h2>
            <p className="text-[hsl(38_10%_60%)] mb-10 leading-relaxed">
              Our design consultants will assess your space and recommend the perfect solution — no commitment required.
            </p>
            <Link href="/contact" data-testid="services-cta">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                Book a Free Consultation <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
