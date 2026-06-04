import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, Tag } from "lucide-react";

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

const filters = ["All", "Home Theater", "Whole-Home AV", "Smart Home", "Outdoor", "Commercial"];

const projects = [
  { title: "Palm Beach Oceanfront Estate", type: "Home Theater", location: "Palm Beach, FL", year: "2024", size: "18-Seat Private Cinema", gradient: "from-amber-950 via-stone-900 to-slate-900", featured: true },
  { title: "Brickell Penthouse", type: "Whole-Home AV", location: "Miami, FL", year: "2024", size: "6,200 sq ft Penthouse", gradient: "from-slate-900 via-zinc-800 to-gray-900", featured: true },
  { title: "Malibu Coastal Compound", type: "Outdoor", location: "Malibu, CA", year: "2023", size: "Oceanfront Terrace Cinema", gradient: "from-gray-900 via-slate-800 to-zinc-900", featured: false },
  { title: "Aspen Mountain Retreat", type: "Smart Home", location: "Aspen, CO", year: "2023", size: "12,000 sq ft Mountain Home", gradient: "from-zinc-900 via-stone-800 to-slate-900", featured: false },
  { title: "Manhattan Upper East Townhouse", type: "Home Theater", location: "New York, NY", year: "2023", size: "12-Seat Screening Room", gradient: "from-gray-900 via-neutral-800 to-gray-900", featured: false },
  { title: "Hamptons Waterfront Villa", type: "Whole-Home AV", location: "Hamptons, NY", year: "2023", size: "22-Zone Audio System", gradient: "from-slate-900 via-amber-900 to-slate-900", featured: false },
  { title: "Beverly Hills Modern Estate", type: "Smart Home", location: "Beverly Hills, CA", year: "2022", size: "Full Automation — 18 Systems", gradient: "from-zinc-900 via-gray-800 to-zinc-900", featured: false },
  { title: "Four Seasons Private Villa", type: "Commercial", location: "Cabo San Lucas, MX", year: "2022", size: "14-Seat Hospitality Cinema", gradient: "from-amber-950 via-zinc-900 to-slate-900", featured: false },
  { title: "Fisher Island Residence", type: "Home Theater", location: "Miami Beach, FL", year: "2022", size: "8-Seat Intimate Theater", gradient: "from-slate-800 via-stone-900 to-zinc-900", featured: false },
  { title: "Greenwich Estate", type: "Whole-Home AV", location: "Greenwich, CT", year: "2021", size: "30+ Zone Estate System", gradient: "from-gray-900 via-slate-800 to-gray-900", featured: false },
  { title: "Laguna Beach Cliffside Home", type: "Outdoor", location: "Laguna Beach, CA", year: "2021", size: "Infinity Pool Cinema", gradient: "from-zinc-900 via-amber-950 to-slate-900", featured: false },
  { title: "Chicago Tribune Tower Penthouse", type: "Smart Home", location: "Chicago, IL", year: "2021", size: "Luxury High-Rise Automation", gradient: "from-slate-900 via-gray-800 to-slate-900", featured: false },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, hsl(220 20% 12%) 0%, hsl(220 15% 5%) 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Work</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              Project<br />
              <span className="italic text-[hsl(38_75%_52%)]">Portfolio</span>
            </h1>
            <p className="text-[hsl(38_10%_60%)] text-xl max-w-xl leading-relaxed">
              Over 500 extraordinary installations across North America and beyond. Every project is unique — every result, exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-20 z-40 bg-[hsl(220_15%_7%/0.98)] border-b border-[hsl(220_15%_14%)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {filters.map((f) => (
            <button
              key={f}
              data-testid={`filter-${f.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setActiveFilter(f)}
              className={`shrink-0 px-5 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${
                activeFilter === f
                  ? "bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)]"
                  : "border border-[hsl(220_15%_20%)] text-[hsl(38_10%_55%)] hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-16 md:py-24" data-testid="projects-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <FadeIn key={project.title} delay={Math.min(i * 60, 400)}>
                <div
                  data-testid={`project-item-${i}`}
                  className="group border border-[hsl(220_15%_14%)] overflow-hidden hover:border-[hsl(38_75%_52%/0.4)] transition-all duration-300 cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${project.gradient} h-52 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-24 h-24 border border-[hsl(38_75%_52%)] rounded-full" />
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-[10px] tracking-[0.2em] uppercase font-bold">
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_7%)] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6 bg-[hsl(220_15%_9%)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag size={10} className="text-[hsl(38_75%_52%)]" />
                      <span className="text-[hsl(38_75%_52%)] text-[10px] tracking-[0.2em] uppercase">{project.type}</span>
                      <span className="text-[hsl(38_10%_40%)] text-[10px]">· {project.year}</span>
                    </div>
                    <h3 className="font-serif text-xl text-[hsl(38_20%_88%)] mb-2 group-hover:text-[hsl(38_75%_52%)] transition-colors duration-300">{project.title}</h3>
                    <div className="flex items-center gap-1 text-[hsl(38_10%_50%)] text-xs mb-3">
                      <MapPin size={10} />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-[hsl(38_10%_45%)] text-xs">{project.size}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[hsl(38_10%_45%)]">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(220_15%_5%)] border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(38_20%_90%)] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-[hsl(38_10%_60%)] mb-10 leading-relaxed">
              Every great project begins with a conversation. Let us understand your vision.
            </p>
            <Link href="/contact" data-testid="projects-cta">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                Get a Quote <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
