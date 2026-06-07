import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Monitor, Volume2, Layers, Hammer, Lightbulb, Sparkles, ShieldCheck, Pencil, ArrowRight, CheckCircle } from "lucide-react";
import servicesHeroImg from "@assets/DSC_1804_1780715585519.jpg";
import dedicatedTheatersImg from "@assets/screen--frontPO_1780795877779.jpg";
import mediaRoomsImg from "@assets/OUTV1_1780796278458.jpg";
import theaterDesignImg from "@assets/Generated_Image_June_06,_2026_-_9_44PM_1780796906733.jpg";

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
    title: "Dedicated Theaters",
    desc: "Our flagship offering — a purpose-built, fully dedicated home theater room designed from the ground up for the ultimate cinematic experience. Every element, from acoustic isolation to display calibration, is engineered specifically for your space.",
    features: ["Full room-within-a-room construction", "Reference-grade projection & display", "Dolby Atmos immersive audio", "Custom seating & tiered risers", "Photorealistic 3D design renderings", "Turnkey installation & calibration"],
    gradient: "from-amber-950/80 to-slate-900/90",
    image: dedicatedTheatersImg,
  },
  {
    icon: Monitor,
    title: "Media Rooms & TV Walls",
    desc: "For spaces that need to serve double duty — family room by day, cinematic escape by night. We design sophisticated media rooms and dramatic TV wall installations that deliver a premium experience without sacrificing everyday livability.",
    features: ["Large-format TV & LED wall systems", "Integrated surround sound", "Custom built-in cabinetry & millwork", "Multi-use lighting control", "Furniture & seating curation", "Cable management & AV integration"],
    gradient: "from-slate-900 to-zinc-900",
    image: mediaRoomsImg,
  },
  {
    icon: Pencil,
    title: "Theater Design & Consultation",
    desc: "Great theaters are born in the planning stage. Our design team delivers complete architectural drawings, acoustic modeling, 3D renderings, and detailed specifications — giving you a precise blueprint before a single nail is driven.",
    features: ["Architectural & spatial planning", "Acoustic room modeling & simulation", "Photorealistic 3D renderings", "Seating layout & sightline analysis", "Equipment specification & scheduling", "Lighting and electrical design"],
    gradient: "from-zinc-900 to-slate-800",
    image: theaterDesignImg,
  },
  {
    icon: Lightbulb,
    title: "Lighting Design & Control",
    desc: "Lighting is the unsung hero of the theater experience. We design dedicated lighting systems — aisle lighting, bias lighting, LED specialty solutions, and scene control — that heighten immersion without compromising picture quality.",
    features: ["LED aisle & step lighting", "Bias lighting behind screens", "LED specialty lighting solutions", "Dedicated dimming & scene control", "Sconce & decorative fixture integration", "Blackout solutions & light sealing"],
    gradient: "from-stone-900 to-slate-900",
  },
  {
    icon: Layers,
    title: "Acoustical Fabric Treatment",
    desc: "Acoustical fabric wall panels are the cornerstone of a professionally tuned room. We design, fabricate, and install custom fabric-wrapped panels that control reflections, eliminate flutter echo, and add a refined, finished aesthetic.",
    features: ["Custom fabric-wrapped panel fabrication", "Broadband absorption & diffusion", "Decorative pattern & color options", "Full-wall & wainscot configurations", "Guilford of Maine & acoustical fabric selection", "Integrated with room design & millwork"],
    gradient: "from-gray-900 to-zinc-900",
  },
  {
    icon: ShieldCheck,
    title: "Sound Isolation",
    desc: "True immersion requires silence from the outside world — and silence for the rest of your home. Our sound isolation systems use mass-loaded vinyl, decoupled framing, and resilient channel construction to contain your theater's sound where it belongs.",
    features: ["Room-within-a-room framing systems", "Mass-loaded vinyl installation", "Resilient channel & decoupled ceilings", "Acoustic door & window solutions", "HVAC vibration isolation", "STC & IIC rating consultation"],
    gradient: "from-slate-800 to-gray-900",
  },
  {
    icon: Hammer,
    title: "Architectural Millwork & Elements",
    desc: "The details make the theater. Our in-house millwork team designs and builds custom cabinetry, equipment bays, column surrounds, coffered ceilings, and every architectural element that transforms a room into a showpiece.",
    features: ["Custom equipment racks & bays", "Column & soffit construction", "Coffered & tray ceiling systems", "Built-in cabinetry & shelving", "Decorative molding & trim packages", "Paint, wallcovering & finish coordination"],
    gradient: "from-zinc-900 to-stone-900",
  },
  {
    icon: Sparkles,
    title: "Star Panel Ceiling",
    desc: "Our fiber optic star ceiling panels transform any room into a private universe. We design and install custom star field ceilings with adjustable star density, shooting star effects, and integrated color options — the signature finishing touch of a luxury theater.",
    features: ["Custom fiber optic star panels", "Adjustable star density & placement", "Shooting star & twinkle effects", "RGB color & nebula options", "Integrated with lighting control systems", "Available in flat, coffered & vaulted configurations"],
    gradient: "from-slate-900 to-indigo-950",
  },
];

export default function Services() {
  useSEO({
    title: "Home Theater Design & Construction Services | Home Cinema Group",
    description: "From custom theater design and projection systems to cinema audio, lighting, and seating — explore our full suite of luxury home theater services.",
    canonical: "https://homecinemagroup.com/services",
    ogImage: "https://homecinemagroup.com/opengraph.jpg",
  });
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[hsl(220_15%_18%)]">
        <img src={servicesHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(220 15% 5% / 0.95) 0%, hsl(220 15% 5% / 0.7) 50%, hsl(220 15% 5% / 0.2) 100%)" }} />
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
      <section className="pb-24 md:pb-36 pl-[0px] pt-[40px]" data-testid="services-list">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeIn key={svc.title} delay={i * 60}>
                <div
                  data-testid={`service-item-${i}`}
                  className="border border-[hsl(220_15%_14%)] overflow-hidden hover:border-[hsl(38_75%_52%/0.3)] transition-colors duration-300"
                >
                  {"image" in svc && svc.image ? (
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-3 p-10 bg-[hsl(220_15%_9%)] flex flex-col justify-between min-h-[220px]">
                        <div>
                          <div className="text-[hsl(38_75%_52%)] text-xs tracking-[0.2em] uppercase mb-2">0{i + 1}</div>
                          <h2 className="font-serif text-2xl md:text-3xl text-[hsl(38_20%_90%)] leading-tight mb-6">{svc.title}</h2>
                          <p className="text-[hsl(38_10%_60%)] leading-relaxed mb-6">{svc.desc}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {svc.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-sm text-[hsl(38_10%_65%)]">
                              <CheckCircle size={13} className="text-[hsl(38_75%_52%)] shrink-0" />
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] ring-1 ring-[hsl(38_75%_52%/0.2)]">
                        <img src={svc.image} alt={svc.title} className="absolute inset-0 w-full h-full object-cover border-t-[#e09d29] border-r-[#e09d29] border-b-[#e09d29] border-l-[#e09d29] border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] opacity-[0.7]" />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-3 p-10 bg-[hsl(220_15%_9%)] flex flex-col justify-between min-h-[220px]">
                        <div>
                          <div className="text-[hsl(38_75%_52%)] text-xs tracking-[0.2em] uppercase mb-2">0{i + 1}</div>
                          <h2 className="font-serif text-2xl md:text-3xl text-[hsl(38_20%_90%)] leading-tight mb-6">{svc.title}</h2>
                          <p className="text-[hsl(38_10%_60%)] leading-relaxed mb-6">{svc.desc}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {svc.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-sm text-[hsl(38_10%_65%)]">
                              <CheckCircle size={13} className="text-[hsl(38_75%_52%)] shrink-0" />
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={`lg:col-span-2 relative min-h-[220px] overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient}`} />
                        <div className="absolute inset-0 flex items-end p-8">
                          <Icon className="text-[hsl(38_75%_52%/0.25)]" size={80} strokeWidth={0.8} />
                        </div>
                      </div>
                    </div>
                  )}
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
