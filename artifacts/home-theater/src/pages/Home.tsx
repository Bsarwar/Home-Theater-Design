import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
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

const services = [
  { icon: Layers, title: "Theater Design", desc: "Full architectural and cinematic design — from concept drawings and acoustic modeling to detailed 3D renderings of your finished space." },
  { icon: Hammer, title: "Custom Construction", desc: "We build your theater from the ground up: framing, soundproofing, isolation, drywall, and custom millwork — all under one roof." },
  { icon: Monitor, title: "Projection & Display", desc: "4K and 8K laser projection, motorized screens, and LED walls calibrated to reference-grade picture quality." },
  { icon: Volume2, title: "Cinema Audio", desc: "Dolby Atmos and immersive surround systems engineered specifically for your room's acoustics and dimensions." },
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
          {/* Solid dark overlay at 60% */}
          <div className="absolute inset-0 bg-black/60" />
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
              <p className="text-[hsl(38_5%_80%)] text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light drop-shadow">
                We design and build bespoke luxury home theaters for clients who demand the very best — across Virginia, DC, Maryland, and beyond.
              </p>
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
      <section className="py-24 md:py-36" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
                <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">What We Do</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-[hsl(38_20%_90%)] leading-tight">
                Built for<br />
                <span className="italic">Pure Cinema</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(220_15%_14%)]">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <FadeIn key={svc.title} delay={i * 80}>
                  <div
                    data-testid={`service-card-${i}`}
                    className="bg-[hsl(220_15%_7%)] p-8 group hover:bg-[hsl(220_15%_10%)] transition-colors duration-300"
                  >
                    <Icon className="text-[hsl(38_75%_52%)] mb-6" size={24} strokeWidth={1.5} />
                    <h3 className="font-serif text-xl text-[hsl(38_20%_88%)] mb-3 group-hover:text-[hsl(38_75%_52%)] transition-colors duration-300">{svc.title}</h3>
                    <p className="text-[hsl(38_10%_55%)] text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={400} className="mt-10">
            <Link href="/services" data-testid="services-learn-more">
              <span className="inline-flex items-center gap-2 text-[hsl(38_75%_52%)] text-sm tracking-[0.15em] uppercase font-medium cursor-pointer hover:gap-4 transition-all duration-300">
                Explore All Services <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
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

      {/* BRAND PARTNERS */}
      <section className="py-16 border-y border-[hsl(220_15%_14%)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-center text-[hsl(38_10%_45%)] text-xs tracking-[0.3em] uppercase mb-10">Our Trusted Partners</p>
          </FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {brands.map((brand, i) => (
              <FadeIn key={brand} delay={i * 50}>
                <span
                  data-testid={`brand-${brand.toLowerCase()}`}
                  className="text-[hsl(38_10%_38%)] text-sm tracking-[0.2em] uppercase font-medium hover:text-[hsl(38_75%_52%)] transition-colors duration-300 cursor-default"
                >
                  {brand}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-36" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
                <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Process</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-[hsl(38_20%_90%)] leading-tight">
                From Vision<br />
                <span className="italic">to Reality</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div data-testid={`process-step-${i}`} className="relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[hsl(38_75%_52%/0.4)] to-transparent" />
                  )}
                  <div className="text-[hsl(38_75%_52%)] font-serif text-5xl font-light mb-4">{step.num}</div>
                  <h3 className="text-[hsl(38_20%_88%)] font-medium text-sm tracking-wide uppercase mb-3">{step.title}</h3>
                  <p className="text-[hsl(38_10%_55%)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-36 bg-[hsl(220_15%_5%)]" data-testid="testimonials-section">
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
