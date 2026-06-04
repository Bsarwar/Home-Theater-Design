import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Play, Star, Award, Users, Home as HomeIcon, Volume2, Wifi, Monitor } from "lucide-react";

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
  { icon: Monitor, title: "Custom Home Theaters", desc: "Immersive screening rooms engineered to your space — from intimate 4-seaters to 20-person private cinemas." },
  { icon: Volume2, title: "Whole-Home Audio", desc: "Multi-zone audio systems delivering concert-quality sound in every room, indoors and out." },
  { icon: Wifi, title: "Smart Home Control", desc: "One-touch command of lighting, climate, security, shades, and entertainment from any device." },
  { icon: HomeIcon, title: "Outdoor Cinema", desc: "Weatherproof screens and all-weather audio that bring the cinematic experience to your backyard or terrace." },
];

const projects = [
  { title: "Palm Beach Estate", type: "Private Cinema", location: "Palm Beach, FL", gradient: "from-slate-900 via-amber-950 to-slate-900" },
  { title: "Miami Penthouse", type: "Whole-Home AV", location: "Miami, FL", gradient: "from-gray-900 via-zinc-800 to-gray-900" },
  { title: "Malibu Compound", type: "Outdoor Theater", location: "Malibu, CA", gradient: "from-slate-800 via-gray-900 to-slate-900" },
  { title: "Aspen Retreat", type: "Smart Home + Cinema", location: "Aspen, CO", gradient: "from-zinc-900 via-stone-800 to-zinc-900" },
  { title: "Manhattan Loft", type: "Screening Room", location: "New York, NY", gradient: "from-gray-900 via-neutral-800 to-gray-900" },
  { title: "Hamptons Villa", type: "Multi-Zone Audio", location: "Hamptons, NY", gradient: "from-slate-900 via-amber-900 to-slate-900" },
];

const testimonials = [
  { quote: "Home Cinema Group transformed our basement into a world-class screening room. Every detail was considered — the acoustics, the lighting, the seating. It feels like a private AMC.", name: "James Hartwell", title: "CEO, Hartwell Capital", rating: 5 },
  { quote: "The smart home integration they designed is flawless. One touch and the entire house responds. Our guests are consistently amazed. Worth every penny.", name: "Sarah & Michael Chen", title: "Residence, Palm Beach", rating: 5 },
  { quote: "We've worked with AV companies across the country — none come close to the craftsmanship and attention to detail that this team delivers. Exceptional.", name: "David Rosenthal", title: "Architect, DR Studio", rating: 5 },
];

const brands = ["Sony", "Samsung", "Dolby", "JBL", "Crestron", "Lutron", "Control4", "Klipsch", "Epson", "Sonos"];

const processSteps = [
  { num: "01", title: "Consultation", desc: "We meet on-site or virtually to understand your vision, space, and lifestyle requirements." },
  { num: "02", title: "Design", desc: "Our engineers produce detailed 3D renderings, acoustic modeling, and full system schematics." },
  { num: "03", title: "Installation", desc: "Our certified technicians handle every cable, bracket, and calibration with surgical precision." },
  { num: "04", title: "Calibration", desc: "ISF-certified calibrators tune every display and THX-trained engineers tune every speaker." },
  { num: "05", title: "Handover", desc: "We walk you through your system, ensure you're comfortable, and remain your AV partner for life." },
];

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 60% 40%, hsl(220 20% 12%) 0%, hsl(220 15% 5%) 70%)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(135deg, transparent 40%, hsl(38 75% 52% / 0.03) 100%)",
          }} />
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            <div
              className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
                <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase font-medium">Since 2005</span>
              </div>
              <h1 className="font-serif text-6xl md:text-8xl font-light leading-[0.9] text-[hsl(38_20%_90%)] mb-8">
                Cinema.<br />
                <span className="italic text-[hsl(38_75%_52%)]">Perfected.</span>
              </h1>
              <p className="text-[hsl(38_10%_60%)] text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light">
                We design and install bespoke home theaters and whole-home AV systems for clients who refuse to compromise on the extraordinary.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" data-testid="hero-cta-projects">
                  <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                    View Our Work
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link href="/contact" data-testid="hero-cta-contact">
                  <span className="inline-flex items-center gap-3 px-8 py-4 border border-[hsl(38_20%_88%/0.25)] text-[hsl(38_20%_88%)] text-sm tracking-[0.15em] uppercase font-medium cursor-pointer hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-300">
                    Get a Quote
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${heroReady ? "opacity-100" : "opacity-0"}`}
          >
            <ChevronDown className="text-[hsl(38_75%_52%)] animate-bounce" size={24} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(38_75%_52%/0.4)] to-transparent" />
      </section>

      {/* STATS BAR */}
      <section className="bg-[hsl(220_15%_10%)] border-y border-[hsl(220_15%_16%)]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "18", label: "Years of Excellence" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12", label: "Industry Awards" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center" data-testid={`stat-${i}`}>
                <div className="font-serif text-4xl text-[hsl(38_75%_52%)] mb-1">{stat.value}</div>
                <div className="text-[hsl(38_10%_55%)] text-xs tracking-[0.15em] uppercase">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
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
                Engineering<br />
                <span className="italic">Experiences</span>
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
              Schedule a complimentary consultation with our design team and discover what's possible for your home.
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
