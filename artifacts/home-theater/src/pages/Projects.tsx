import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, MapPin, Tag, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import portfolioImg1 from "@assets/LMp4_1780573575270.jpg";
import portfolioImg2 from "@assets/10k_Theater_1_1780573606798.png";

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

type GalleryItem = { src: string; label: string } | { gradient: string; label: string };

type Project = {
  title: string;
  type: string;
  location: string;
  year: string;
  size: string;
  gradient: string;
  featured: boolean;
  image?: string;
  gallery: GalleryItem[];
};

const filters = ["All", "Dedicated Theaters", "Media Room", "TV Walls", "Themed Theaters", "Commercial", "Star Ceiling", "Design Elements"];

const projects: Project[] = [
  {
    title: "Great Falls Estate",
    type: "Dedicated Theaters",
    location: "Great Falls, VA",
    year: "2024",
    size: "14-Seat Private Cinema — Full Build",
    gradient: "from-amber-950 via-stone-900 to-slate-900",
    featured: true,
    image: portfolioImg1,
    gallery: [
      { src: portfolioImg1, label: "Main Theater" },
      { src: portfolioImg1, label: "Rear Seating" },
      { src: portfolioImg1, label: "Screen Wall" },
      { gradient: "from-amber-950 via-stone-900 to-slate-900", label: "Projection Booth" },
    ],
  },
  {
    title: "Award-Winning Theater — CE Pro 2024",
    type: "Dedicated Theaters",
    location: "Northern Virginia",
    year: "2024",
    size: "CE Pro Home of the Year — Best Home Theater",
    gradient: "from-slate-900 via-zinc-800 to-gray-900",
    featured: true,
    image: portfolioImg2,
    gallery: [
      { src: portfolioImg2, label: "Full Room View" },
      { src: portfolioImg2, label: "Screen & Stage" },
      { gradient: "from-slate-900 via-zinc-800 to-gray-900", label: "Acoustic Panels" },
      { gradient: "from-zinc-800 via-slate-900 to-gray-900", label: "Seating Detail" },
    ],
  },
  {
    title: "Georgetown Rowhouse",
    type: "Media Room",
    location: "Washington, DC",
    year: "2023",
    size: "10-Seat Dedicated Screening Room",
    gradient: "from-gray-900 via-slate-800 to-zinc-900",
    featured: false,
    gallery: [
      { gradient: "from-gray-900 via-slate-800 to-zinc-900", label: "Main Room" },
      { gradient: "from-slate-800 via-gray-900 to-zinc-900", label: "Screen Wall" },
      { gradient: "from-zinc-900 via-slate-800 to-gray-900", label: "Side View" },
    ],
  },
  {
    title: "Bethesda Estate",
    type: "Dedicated Theaters",
    location: "Bethesda, MD",
    year: "2023",
    size: "16-Seat Home Cinema — Room-Within-Room Build",
    gradient: "from-zinc-900 via-stone-800 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-zinc-900 via-stone-800 to-slate-900", label: "Main Room" },
      { gradient: "from-stone-800 via-zinc-900 to-slate-900", label: "Entry Lobby" },
      { gradient: "from-slate-900 via-stone-800 to-zinc-900", label: "Rear Row" },
    ],
  },
  {
    title: "McLean Colonial",
    type: "Dedicated Theaters",
    location: "McLean, VA",
    year: "2023",
    size: "Full Basement Theater — Framing to Finish",
    gradient: "from-gray-900 via-neutral-800 to-gray-900",
    featured: false,
    gallery: [
      { gradient: "from-gray-900 via-neutral-800 to-gray-900", label: "Finished Theater" },
      { gradient: "from-neutral-800 via-gray-900 to-neutral-900", label: "Framing Stage" },
      { gradient: "from-gray-900 via-neutral-900 to-gray-800", label: "Complete View" },
    ],
  },
  {
    title: "Chevy Chase Manor",
    type: "Media Room",
    location: "Chevy Chase, MD",
    year: "2023",
    size: "8-Seat Luxury Screening Room",
    gradient: "from-slate-900 via-amber-900 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-slate-900 via-amber-900 to-slate-900", label: "Main Room" },
      { gradient: "from-amber-900 via-slate-900 to-amber-950", label: "Seating" },
      { gradient: "from-slate-900 via-amber-950 to-slate-900", label: "Screen Detail" },
    ],
  },
  {
    title: "Vienna Estate",
    type: "Dedicated Theaters",
    location: "Vienna, VA",
    year: "2022",
    size: "12-Seat Cinema — Custom Millwork & Star Ceiling",
    gradient: "from-zinc-900 via-gray-800 to-zinc-900",
    featured: false,
    gallery: [
      { gradient: "from-zinc-900 via-gray-800 to-zinc-900", label: "Star Ceiling" },
      { gradient: "from-gray-800 via-zinc-900 to-gray-900", label: "Millwork Detail" },
      { gradient: "from-zinc-900 via-gray-900 to-zinc-800", label: "Full Room" },
    ],
  },
  {
    title: "Old Town Penthouse",
    type: "Commercial",
    location: "Alexandria, VA",
    year: "2022",
    size: "Private Screening Lounge — 20-Seat Commercial Build",
    gradient: "from-amber-950 via-zinc-900 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-amber-950 via-zinc-900 to-slate-900", label: "Screening Lounge" },
      { gradient: "from-zinc-900 via-amber-950 to-slate-900", label: "Bar Area" },
      { gradient: "from-slate-900 via-zinc-900 to-amber-950", label: "Seating Layout" },
    ],
  },
  {
    title: "Falls Church Residence",
    type: "Dedicated Theaters",
    location: "Falls Church, VA",
    year: "2022",
    size: "Finished Basement — 6-Seat Family Cinema",
    gradient: "from-slate-800 via-stone-900 to-zinc-900",
    featured: false,
    gallery: [
      { gradient: "from-slate-800 via-stone-900 to-zinc-900", label: "Family Theater" },
      { gradient: "from-stone-900 via-slate-800 to-zinc-900", label: "Screen View" },
      { gradient: "from-zinc-900 via-stone-900 to-slate-800", label: "Side Aisle" },
    ],
  },
  {
    title: "Potomac Manor",
    type: "Dedicated Theaters",
    location: "Potomac, MD",
    year: "2021",
    size: "18-Seat Estate Cinema — Full Design & Build",
    gradient: "from-gray-900 via-slate-800 to-gray-900",
    featured: false,
    gallery: [
      { gradient: "from-gray-900 via-slate-800 to-gray-900", label: "Estate Cinema" },
      { gradient: "from-slate-800 via-gray-900 to-slate-900", label: "Upper Tier" },
      { gradient: "from-gray-900 via-slate-900 to-slate-800", label: "Lower Row" },
    ],
  },
  {
    title: "Leesburg Farmhouse",
    type: "Media Room",
    location: "Leesburg, VA",
    year: "2021",
    size: "Converted Barn Theater — Custom Acoustic Build",
    gradient: "from-zinc-900 via-amber-950 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-zinc-900 via-amber-950 to-slate-900", label: "Barn Theater" },
      { gradient: "from-amber-950 via-zinc-900 to-slate-900", label: "Acoustic Panels" },
      { gradient: "from-slate-900 via-amber-950 to-zinc-900", label: "Beam Ceiling" },
    ],
  },
  {
    title: "Capitol Hill Townhouse",
    type: "Dedicated Theaters",
    location: "Washington, DC",
    year: "2021",
    size: "Urban Basement Theater — 6-Seat Build",
    gradient: "from-slate-900 via-gray-800 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-slate-900 via-gray-800 to-slate-900", label: "Urban Theater" },
      { gradient: "from-gray-800 via-slate-900 to-gray-900", label: "Screen Close-Up" },
      { gradient: "from-slate-900 via-gray-900 to-gray-800", label: "Rear View" },
    ],
  },
];

function GalleryModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive((i) => (i - 1 + project.gallery.length) % project.gallery.length), [project.gallery.length]);
  const next = useCallback(() => setActive((i) => (i + 1) % project.gallery.length), [project.gallery.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const current = project.gallery[active];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] max-w-6xl bg-[hsl(220_15%_7%)] border border-[hsl(220_15%_16%)] flex flex-col h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-[hsl(220_15%_14%)] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Tag size={10} className="text-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-[10px] tracking-[0.2em] uppercase">{project.type}</span>
              <span className="text-[hsl(38_10%_40%)] text-[10px]">· {project.year}</span>
            </div>
            <h2 className="font-serif text-xl text-[hsl(38_20%_90%)]">{project.title}</h2>
            <div className="flex items-center gap-1 text-[hsl(38_10%_50%)] text-xs mt-1">
              <MapPin size={10} />
              <span>{project.location}</span>
              <span className="text-[hsl(38_10%_35%)] mx-1">·</span>
              <span>{project.size}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[hsl(38_10%_45%)] hover:text-[hsl(38_20%_88%)] transition-colors duration-200 p-1 mt-1 shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Slider */}
        <div className="relative flex-1 min-h-0 overflow-hidden">
          {/* Track */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ width: `${project.gallery.length * 100}%`, transform: `translateX(-${active * (100 / project.gallery.length)}%)` }}
          >
            {project.gallery.map((item, i) => (
              <div key={i} className="h-full flex-shrink-0" style={{ width: `${100 / project.gallery.length}%` }}>
                {"src" in item ? (
                  <img src={item.src} alt={item.label} className="w-full h-full object-contain" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <div className="text-center opacity-30">
                      <Images size={48} className="text-[hsl(38_75%_52%)] mx-auto mb-3" />
                      <p className="text-[hsl(38_10%_60%)] text-sm tracking-widest uppercase">{item.label}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Overlay gradient bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[hsl(220_15%_7%)] to-transparent pointer-events-none" />

          {/* Image label */}
          <div className="absolute bottom-4 left-6 text-[hsl(38_10%_60%)] text-xs tracking-widest uppercase pointer-events-none">
            {project.gallery[active].label}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 right-6 text-[hsl(38_10%_45%)] text-xs tabular-nums pointer-events-none">
            {active + 1} / {project.gallery.length}
          </div>

          {/* Prev / Next */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 border border-[hsl(220_15%_20%)] text-[hsl(38_10%_70%)] hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 border border-[hsl(220_15%_20%)] text-[hsl(38_10%_70%)] hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  useSEO({
    title: "Home Theater Portfolio — Luxury Cinema Projects | Home Cinema Group",
    description: "Browse our portfolio of luxury home theater builds across Virginia, DC, and Maryland. Award-winning private cinemas, screening rooms, and basement theaters.",
    canonical: "https://homecinemagroup.com/projects",
    ogImage: "https://homecinemagroup.com/opengraph.jpg",
  });
  const [activeFilter, setActiveFilter] = useState("All");
  const [heroReady, setHeroReady] = useState(false);
  const [openProject, setOpenProject] = useState<Project | null>(null);
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
              Luxury home theaters designed and built across Virginia, DC, Maryland, and beyond. Every project is unique — every result, extraordinary.
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
                  onClick={() => setOpenProject(project)}
                  className="group border border-[hsl(220_15%_14%)] overflow-hidden hover:border-[hsl(38_75%_52%/0.4)] transition-all duration-300 cursor-pointer"
                >
                  <div className={`h-52 relative overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.gradient}` : ""}`}>
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_7%)] via-[hsl(220_15%_7%/0.2)] to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <div className="w-24 h-24 border border-[hsl(38_75%_52%)] rounded-full" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_7%)] via-transparent to-transparent opacity-60" />
                      </>
                    )}
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-[10px] tracking-[0.2em] uppercase font-bold z-10">
                        Featured
                      </div>
                    )}
                    {/* Gallery count badge */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 border border-[hsl(220_15%_22%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Images size={10} className="text-[hsl(38_75%_52%)]" />
                      <span className="text-[hsl(38_10%_70%)] text-[10px] tracking-wide">{project.gallery.length} Photos</span>
                    </div>
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
              Ready to Build Yours?
            </h2>
            <p className="text-[hsl(38_10%_60%)] mb-10 leading-relaxed">
              Every great theater begins with a conversation. We serve clients across Virginia, DC, Maryland, and beyond.
            </p>
            <Link href="/contact" data-testid="projects-cta">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                Get a Quote <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Modal */}
      {openProject && (
        <GalleryModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </div>
  );
}
