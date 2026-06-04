import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Monitor, Volume2, Layers, Hammer, Lightbulb, Armchair, ArrowRight, CheckCircle } from "lucide-react";

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
    icon: Layers,
    title: "Theater Design",
    desc: "Every great theater begins with a great design. Our team produces full architectural drawings, acoustic modeling, 3D renderings, and detailed material specifications — giving you a precise blueprint before a single nail is driven.",
    features: ["Architectural & spatial planning", "Acoustic room modeling & simulation", "Photorealistic 3D renderings", "Seating layout & sightline analysis", "Equipment specification & scheduling", "Lighting and electrical design"],
    gradient: "from-amber-950 to-slate-900",
  },
  {
    icon: Hammer,
    title: "Custom Construction",
    desc: "We are builders as much as we are designers. Our in-house construction team handles every stage of the build — from structural framing and soundproofing to finish carpentry and custom millwork.",
    features: ["Structural framing & room-within-a-room builds", "Mass-loaded vinyl & decoupled wall systems", "Acoustic ceiling treatment & isolation", "Custom cabinetry & built-ins", "Equipment rack fabrication", "Paint, trim & final finishes"],
    gradient: "from-slate-900 to-zinc-900",
  },
  {
    icon: Monitor,
    title: "Projection & Display",
    desc: "From 4K laser projectors to massive LED walls, we specify and calibrate the finest display technology available — optimized for your screen size, throw distance, and ambient light conditions.",
    features: ["4K & 8K laser projection systems", "Fixed-frame & motorized screens", "Micro-LED & direct-view LED walls", "ISF-certified picture calibration", "Screen material selection & sizing", "Ambient light rejection solutions"],
    gradient: "from-zinc-900 to-slate-800",
  },
  {
    icon: Volume2,
    title: "Cinema Audio",
    desc: "A great theater sounds as extraordinary as it looks. We design and tune Dolby Atmos and immersive surround systems engineered precisely for the acoustics of your room.",
    features: ["Dolby Atmos 7.1.4+ systems", "THX-certified speaker selection", "In-wall & in-ceiling speaker integration", "Subwoofer placement & tuning", "Room correction & acoustic treatment", "Reference-level audio calibration"],
    gradient: "from-stone-900 to-slate-900",
  },
  {
    icon: Lightbulb,
    title: "Cinema Lighting",
    desc: "Lighting is the unsung hero of the theater experience. We design dedicated lighting systems — aisle lighting, bias lighting, star ceilings, and scene control — that enhance immersion without compromising picture quality.",
    features: ["LED aisle & step lighting", "Bias lighting behind screens", "Star ceiling & fiber optic systems", "Dedicated dimming & scene control", "Sconce & decorative fixture integration", "Blackout solutions & light sealing"],
    gradient: "from-gray-900 to-zinc-900",
  },
  {
    icon: Armchair,
    title: "Seating & Interiors",
    desc: "Your seating and interior finishes are the final layer of the experience. We source luxury theater seating, acoustically transparent fabrics, wall panels, and every finish that brings the room to life.",
    features: ["Luxury recliner & row seating", "Custom upholstery & fabric selection", "Acoustically transparent wall panels", "Tiered riser design & construction", "Carpet, flooring & baseboard details", "Full interior styling consultation"],
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
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">What We Do</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              Our<br />
              <span className="italic text-[hsl(38_75%_52%)]">Services</span>
            </h1>
            <p className="text-[hsl(38_10%_60%)] text-xl max-w-xl leading-relaxed">
              We design and build luxury home theaters — from initial concept through finished construction. Everything under one roof, across Virginia, DC, and Maryland.
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
              Ready to Build Your Theater?
            </h2>
            <p className="text-[hsl(38_10%_60%)] mb-10 leading-relaxed">
              We offer complimentary in-home consultations across Virginia, DC, and Maryland. Let us see your space and share what's possible.
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
