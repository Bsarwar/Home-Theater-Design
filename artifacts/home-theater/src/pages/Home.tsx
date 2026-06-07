import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Play, Star, Award, Users, Layers, Volume2, Hammer, Monitor } from "lucide-react";
import heroImg1 from "@assets/LMp4_1780573575270.jpg";
import heroImg2 from "@assets/10k_Theater_1_1780573606798.png";
import laurelImg from "@assets/2026-06-03_15-07-58_1780581176579.jpg";

const heroSlides = [
  { src: heroImg1, caption: "Luxury Home Cinema — Palm Beach, FL" },
  { src: heroImg2, caption: "Award-Winning Theater Design — CE Pro Home of the Year 2024" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const serviceCards = [
  { title: "Theater Design", gradient: "from-slate-900 via-teal-950 to-slate-900" },
  { title: "Lighting & Control", gradient: "from-amber-950 via-stone-900 to-zinc-900" },
  { title: "Home Theater", image: heroImg1 },
  { title: "Cinema Audio", gradient: "from-red-950 via-zinc-900 to-slate-900" },
  { title: "Smart Automation", gradient: "from-blue-950 via-slate-900 to-gray-900" },
  { title: "Seating & Interiors", image: heroImg2 },
];

const projects = [
  { title: "Great Falls Estate", type: "Private Cinema", location: "Great Falls, VA", gradient: "from-slate-900 via-amber-950 to-slate-900" },
  { title: "Georgetown Townhouse", type: "Dedicated Theater", location: "Washington, DC", gradient: "from-gray-900 via-zinc-800 to-gray-900" },
  { title: "McLean Residence", type: "Luxury Screening Room", location: "McLean, VA", gradient: "from-slate-800 via-gray-900 to-slate-900" },
];

const testimonials = [
  { quote: "Home Cinema Group built us an extraordinary private theater in our Great Falls home. The acoustic design, the picture quality, the craftsmanship — it is simply beyond anything we imagined.", name: "Robert & Jennifer Ashford", title: "Private Residence, Great Falls, VA", rating: 5 },
  { quote: "From the first design meeting to the final calibration, the team was meticulous, professional, and genuinely passionate. Our theater is the showpiece of our home.", name: "Mark Donovan", title: "Private Residence, McLean, VA", rating: 5 },
  { quote: "We interviewed four theater builders. Home Cinema Group was the only team that truly understood what we wanted. The finished result exceeded every expectation.", name: "Sarah Whitmore", title: "Principal, Whitmore Architecture — Washington, DC", rating: 5 },
];

const brands = ["Sony", "Dolby", "JBL", "Klipsch", "Epson", "Stewart Filmscreen", "Screen Innovations", "Paradigm", "Anthem", "Seymour"];

const processSteps = [
  { num: "01", title: "Consultation", desc: "We visit your home, assess the space, and get to know your vision — whether you're starting from scratch or finishing a basement." },
  { num: "02", title: "Design", desc: "Our team produces architectural drawings, acoustic models, 3D renderings, and full material specifications tailored to your space." },
  { num: "03", title: "Construction", desc: "We build your theater from the ground up — framing, soundproofing, isolation, and custom millwork executed to exacting standards." },
  { num: "04", title: "Systems & Calibration", desc: "We install projection, audio, and lighting, then calibrate every element to reference-grade performance." },
  { num: "05", title: "Handover", desc: "We walk you through your finished theater and remain your dedicated partner for years to come." },
];

export default function Home() {
  useSEO({
    title: "Home Cinema Group — Luxury Home Theater Design & Build | McLean, VA",
    description: "Home Cinema Group designs and builds bespoke luxury home theaters across Virginia, DC, and Maryland. Award-winning cinematic spaces since 2005. CEDIA-certified.",
    canonical: "https://homecinemagroup.com/",
    ogImage: "https://homecinemagroup.com/opengraph.jpg",
  });
  const [heroReady, setHeroReady] = useState(false);
  const [slide, setSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = (next: number) => {
    if (transitioning || next === slide) return;
    setPrevSlide(slide);
    setTransitioning(true);
    setSlide(next);
    setTimeout(() => { setPrevSlide(null); setTransitioning(false); }, 900);
  };

  const nextSlide = () => goToSlide((slide + 1) % heroSlides.length);
  const prevSlideFn = () => goToSlide((slide - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    setTimeout(() => setHeroReady(true), 100);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(nextSlide, 5500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [slide]);

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* SLIDER IMAGES */}
        <div className="absolute inset-0">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-900"
              style={{ opacity: i === slide ? 1 : (i === prevSlide ? 0 : 0) }}
            >
              <img
                src={s.src}
                alt={s.caption}
                className="w-full h-full object-cover"
                style={{ transition: "opacity 0.9s ease" }}
              />
            </div>
          ))}
          {/* Gradient overlay — darker on left where text sits, lighter on right */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.25) 100%)" }} />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-32 w-full">
          <div className="max-w-3xl">
            <div className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
                <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase font-medium">Since 2005</span>
              </div>
              <h1 className="font-serif text-6xl md:text-8xl font-light leading-[0.9] text-white mb-8 drop-shadow-2xl">
                Cinema.<br />
                <span className="italic text-[hsl(38_75%_52%)]">Perfected.</span>
              </h1>
              <p className="text-[hsl(38_5%_80%)] text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light drop-shadow">We design and build award winning bespoke luxury home theaters for clients who demand the very best — across Virginia, DC, Maryland, and beyond.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" data-testid="hero-cta-projects">
                  <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                    View Our Work
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link href="/contact" data-testid="hero-cta-contact">
                  <span className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-sm tracking-[0.15em] uppercase font-medium cursor-pointer hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-300">
                    Get a Quote
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* SLIDER CONTROLS */}
          <div className={`absolute bottom-10 left-6 right-6 flex items-end justify-between transition-all duration-1000 delay-500 ${heroReady ? "opacity-100" : "opacity-0"}`}>
            {/* Caption + dots */}
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    data-testid={`hero-dot-${i}`}
                    onClick={() => goToSlide(i)}
                    className={`transition-all duration-300 ${i === slide ? "w-8 h-1 bg-[hsl(38_75%_52%)]" : "w-4 h-1 bg-white/30 hover:bg-white/60"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <span className="text-white/50 text-xs tracking-[0.15em] uppercase hidden sm:block">
                {heroSlides[slide].caption}
              </span>
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                data-testid="hero-prev"
                onClick={prevSlideFn}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                data-testid="hero-next"
                onClick={nextSlide}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${heroReady ? "opacity-100" : "opacity-0"}`}>
            <ChevronDown className="text-[hsl(38_75%_52%)] animate-bounce" size={24} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(38_75%_52%/0.4)] to-transparent" />
      </section>
      {/* STATS BAR */}
      <section className="bg-[hsl(220_15%_10%)] border-y border-[hsl(220_15%_16%)]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-center gap-6 md:gap-10">

          {/* Left laurel */}
          <div className="shrink-0 w-20 h-20 overflow-hidden" style={{ mixBlendMode: "screen" }}>
            <img src={laurelImg} alt="" className="w-full h-full object-contain" style={{ filter: "grayscale(1) brightness(2.2)" }} />
          </div>

          {/* Stats */}
          <div className="flex flex-1 items-center justify-center divide-x divide-[hsl(220_15%_20%)]">
            {[
              { value: "18", label: "Years in Business" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "12", label: "Industry Awards" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100}>
                <div className="text-center px-8 md:px-12" data-testid={`stat-${i}`}>
                  <div className="font-serif text-4xl text-[hsl(38_75%_52%)] mb-1">{stat.value}</div>
                  <div className="text-[hsl(38_10%_55%)] text-xs tracking-[0.15em] uppercase">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right laurel (mirrored) */}
          <div className="shrink-0 w-20 h-20 overflow-hidden" style={{ mixBlendMode: "screen", transform: "scaleX(-1)" }}>
            <img src={laurelImg} alt="" className="w-full h-full object-contain" style={{ filter: "grayscale(1) brightness(2.2)" }} />
          </div>

        </div>
      </section>
      {/* SERVICES OVERVIEW */}
      <section data-testid="services-section" className="bg-[hsl(220_15%_5%)]">
        {/* Ticker bar */}
        <div className="border-b border-[hsl(220_15%_14%)] py-4 overflow-hidden">
          <p className="text-center text-[hsl(38_10%_50%)] text-xs tracking-[0.25em] uppercase">
            Design&nbsp;&nbsp;·&nbsp;&nbsp;Consultation&nbsp;&nbsp;·&nbsp;&nbsp;Installation&nbsp;&nbsp;·&nbsp;&nbsp;VA&nbsp;&nbsp;·&nbsp;&nbsp;MD&nbsp;&nbsp;·&nbsp;&nbsp;DC and Beyond
          </p>
        </div>

        {/* Statement */}
        <FadeIn>
          <div className="max-w-3xl mx-auto px-6 py-24 text-center pt-[45px] pb-[45px] pl-[10px] pr-[10px] mt-[0px] mb-[0px]">
            <h2 className="font-serif text-4xl md:text-5xl italic leading-tight mb-10 text-[#d6c1a7]">
              HCG — Redefining Home Entertainment
            </h2>
            <p className="text-[hsl(38_10%_58%)] text-sm md:text-base leading-relaxed mb-6">
              For over two decades, Home Cinema Group has been transforming homes across the region. What began as a premier basement remodeling company has evolved into the area's top award-winning home theater design and build firm.
            </p>
            <p className="text-[hsl(38_10%_50%)] text-sm md:text-base leading-relaxed mb-6">
              Whether you are looking for an entertaining, high-end basement finish or a dedicated, luxury home cinema, we design and build spaces tailored entirely to your family's lifestyle.
            </p>
            <p className="text-[hsl(38_10%_50%)] text-sm md:text-base leading-relaxed mb-10">
              <span className="text-[hsl(38_20%_75%)] font-semibold">Our Unique Approach:</span> We specialize exclusively in the architectural construction, sound isolation, and acoustic treatment of the room itself—we do not sell AV hardware. Instead, we collaborate seamlessly with your chosen AV professional, or introduce you to our long-time premier technology partner,{" "}
              <a
                href="https://www.customworksllc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(38_75%_52%)] font-semibold hover:text-[hsl(38_75%_65%)] transition-colors duration-200"
              >
                Custom Works
              </a>
              , to deliver a flawless, turn-key entertainment experience.
            </p>
            <Link href="/contact" data-testid="services-cta">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.2em] uppercase font-bold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                Schedule a Consultation
              </span>
            </Link>
          </div>
        </FadeIn>
      </section>
      {/* WHY HCG */}
      <section className="py-0 bg-[#16181d] ml-[0px] mr-[0px] pt-[30px] pb-[30px]" data-testid="why-hcg-section">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row min-h-[420px] border-x border-[hsl(220_15%_14%)]">
          {/* Left: heading + body */}
          <div className="lg:w-[30%] shrink-0 flex flex-col justify-center pl-[35px] pr-[35px] py-12 lg:py-16 border-r border-[hsl(220_15%_14%)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] tracking-[0.3em] uppercase text-[20px]">WHAT WE DO</span>
            </div>
            <h2 className="font-serif md:text-4xl font-light text-[hsl(38_20%_90%)] mb-6 text-[30px] text-right">
              Tailored Solutions for<br />
              <span className="italic text-[hsl(38_75%_52%)]">Your Next Project</span>
            </h2>
          </div>

          {/* Right: service image cards + link */}
          <div className="lg:w-[70%] flex flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 flex-1">
              {[
                { title: "Lighting Design & Control", gradient: "from-[hsl(35_30%_14%)] to-[hsl(35_40%_7%)]" },
                { title: "AV Systems Integration",    gradient: "from-[hsl(215_22%_16%)] to-[hsl(215_30%_8%)]" },
                { title: "Dedicated Theater Rooms", image: heroImg1 },
                { title: "Media Rooms & TV Walls", image: heroImg2 },
                { title: "Theater Design & Consultation", gradient: "from-[hsl(220_20%_18%)] to-[hsl(220_30%_10%)]" },
                { title: "Acoustics Treatment & Sound Isolation", gradient: "from-[hsl(230_18%_16%)] to-[hsl(230_28%_9%)]" },
                { title: "Sound Isolation",      gradient: "from-[hsl(210_20%_15%)] to-[hsl(210_28%_8%)]" },
                { title: "Star Panel Ceiling",   gradient: "from-[hsl(240_25%_12%)] to-[hsl(240_35%_6%)]" },
              ].map((card, i) => (
                <FadeIn key={card.title} delay={i * 70}>
                  <div className="relative overflow-hidden group cursor-pointer" style={{ aspectRatio: "4/3" }}>
                    {"image" in card && card.image ? (
                      <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${"gradient" in card ? card.gradient : ""}`} />
                    )}
                    <div className="absolute inset-0 bg-black/60 rounded-tl-[1px] rounded-tr-[1px] rounded-br-[1px] rounded-bl-[1px]" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                      <p className="text-white text-xs tracking-[0.15em] uppercase font-semibold leading-tight">{card.title}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="px-4 pb-4 pt-2 border-t border-[hsl(220_15%_14%)]">
              <Link href="/services">
                <span className="inline-flex items-center gap-2 text-[hsl(38_75%_52%)] text-xs tracking-[0.2em] uppercase font-medium cursor-pointer hover:gap-4 transition-all duration-300">
                  Explore All Services <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="py-24 md:py-36 overflow-x-hidden" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
                <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Process</span>
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-[hsl(38_20%_90%)] leading-tight">
                From Vision <span className="italic">to Reality</span>
              </h2>
            </div>
          </FadeIn>

          {/* Mobile: stacked list */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div data-testid={`process-step-${i}`} className="border border-[hsl(220_15%_16%)] bg-[hsl(220_15%_9%)] p-6">
                  <div className="text-[hsl(38_75%_52%)] font-serif text-3xl font-light mb-3">{step.num}</div>
                  <h3 className="text-[hsl(38_20%_88%)] font-semibold text-xs tracking-[0.2em] uppercase mb-2">{step.title}</h3>
                  <p className="text-[hsl(38_10%_52%)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Desktop: horizontal zigzag */}
          <div className="hidden md:block">
            {/* 3-row grid: top cards | timeline | bottom cards */}
            <div className="grid grid-cols-5">

              {/* ROW 1 — cards for steps 1, 3, 5 (above the line) */}
              {processSteps.map((step, i) => (
                <FadeIn key={`top-${step.num}`} delay={i * 100}>
                  <div className="px-3 pb-8 flex flex-col items-center">
                    {i % 2 === 0 ? (
                      <div
                        data-testid={`process-step-${i}`}
                        className="w-full border border-[hsl(220_15%_16%)] bg-[hsl(220_15%_9%)] p-5 hover:border-[hsl(38_75%_52%/0.3)] transition-colors duration-300"
                      >
                        <div className="text-[hsl(38_75%_52%)] font-serif text-2xl font-light mb-3">{step.num}</div>
                        <h3 className="text-[hsl(38_20%_88%)] font-semibold text-[10px] tracking-[0.2em] uppercase mb-2">{step.title}</h3>
                        <p className="text-[hsl(38_10%_52%)] text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      /* Empty spacer to keep grid aligned */
                      <div className="w-full" />
                    )}
                  </div>
                </FadeIn>
              ))}

              {/* ROW 2 — horizontal line + dots */}
              {processSteps.map((step, i) => (
                <div key={`dot-${step.num}`} className="relative flex items-center justify-center px-3">
                  {/* Horizontal line segments (not on last step) */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-1/2 right-0 top-1/2 h-px bg-[hsl(220_15%_20%)] -translate-y-1/2" />
                  )}
                  {i > 0 && (
                    <div className="absolute left-0 right-1/2 top-1/2 h-px bg-[hsl(220_15%_20%)] -translate-y-1/2" />
                  )}
                  {/* Dot */}
                  <div className="relative z-10 w-9 h-9 rounded-full border border-[hsl(38_75%_52%)] bg-[hsl(220_15%_7%)] flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[hsl(38_75%_52%)]" />
                  </div>
                </div>
              ))}

              {/* ROW 3 — cards for steps 2, 4 (below the line) */}
              {processSteps.map((step, i) => (
                <FadeIn key={`bot-${step.num}`} delay={i * 100}>
                  <div className="px-3 pt-8 flex flex-col items-center">
                    {i % 2 !== 0 ? (
                      <div
                        data-testid={`process-step-bottom-${i}`}
                        className="w-full border border-[hsl(220_15%_16%)] bg-[hsl(220_15%_9%)] p-5 hover:border-[hsl(38_75%_52%/0.3)] transition-colors duration-300"
                      >
                        <div className="text-[hsl(38_75%_52%)] font-serif text-2xl font-light mb-3">{step.num}</div>
                        <h3 className="text-[hsl(38_20%_88%)] font-semibold text-[10px] tracking-[0.2em] uppercase mb-2">{step.title}</h3>
                        <p className="text-[hsl(38_10%_52%)] text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="w-full" />
                    )}
                  </div>
                </FadeIn>
              ))}

            </div>
          </div>
        </div>
      </section>
      {/* FEATURED PROJECTS */}
      <section className="py-24 md:py-36 bg-[hsl(220_15%_5%)]" data-testid="projects-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
                  <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Portfolio</span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-light text-[hsl(38_20%_90%)] leading-tight">
                  Featured<br />
                  <span className="italic">Projects</span>
                </h2>
              </div>
              <Link href="/projects" data-testid="projects-view-all">
                <span className="inline-flex items-center gap-2 text-[hsl(38_75%_52%)] text-sm tracking-[0.15em] uppercase font-medium cursor-pointer hover:gap-4 transition-all duration-300">
                  View All Projects <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 80}>
                <div
                  data-testid={`project-card-${i}`}
                  className={`relative overflow-hidden group cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <div
                    className={`bg-gradient-to-br ${project.gradient} flex items-center justify-center ${i === 0 ? "h-72 md:h-full min-h-[350px]" : "h-48 md:h-56"}`}
                  >
                    <div className="text-center p-8">
                      <div className="w-16 h-16 border border-[hsl(38_75%_52%/0.4)] flex items-center justify-center mx-auto mb-4">
                        <Play className="text-[hsl(38_75%_52%)]" size={20} />
                      </div>
                      <div className="font-serif text-2xl text-[hsl(38_20%_88%)] opacity-60">{project.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_5%)] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[hsl(38_75%_52%)] text-xs tracking-[0.2em] uppercase mb-1">{project.type}</div>
                    <div className="font-serif text-xl text-[hsl(38_20%_90%)]">{project.title}</div>
                    <div className="text-[hsl(38_10%_55%)] text-xs mt-1">{project.location}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-24 md:py-36 bg-[hsl(220_15%_5%)] pt-[80px] pb-[80px] border-t border-[hsl(220_15%_18%)]" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
                <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Client Stories</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-[hsl(38_20%_90%)] leading-tight">
                What Our<br />
                <span className="italic">Clients Say</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 120}>
                <div
                  data-testid={`testimonial-${i}`}
                  className="border border-[hsl(220_15%_16%)] p-8 hover:border-[hsl(38_75%_52%/0.4)] transition-colors duration-300"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star key={si} size={12} className="text-[hsl(38_75%_52%)] fill-current" />
                    ))}
                  </div>
                  <p className="font-serif text-lg text-[hsl(38_20%_80%)] leading-relaxed italic mb-6">"{t.quote}"</p>
                  <div>
                    <div className="text-[hsl(38_20%_88%)] text-sm font-medium">{t.name}</div>
                    <div className="text-[hsl(38_10%_50%)] text-xs mt-0.5">{t.title}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 md:py-36 relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(38 75% 52% / 0.08) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Begin Your Journey</span>
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-[hsl(38_20%_90%)] leading-tight mb-8">
              Ready to Experience<br />
              <span className="italic text-[hsl(38_75%_52%)]">Pure Cinema?</span>
            </h2>
            <p className="text-[hsl(38_10%_60%)] text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              Schedule a complimentary in-home consultation with our design team and discover what's possible for your space — in Virginia, DC, Maryland, and beyond.
            </p>
            <Link href="/contact" data-testid="cta-get-quote">
              <span className="inline-flex items-center gap-3 px-10 py-5 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.2em] uppercase font-bold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300 shadow-2xl">
                Schedule a Consultation
                <ArrowRight size={16} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
