import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SliderSlide {
  src: string;
  title: string;
  description: string;
  tag?: string;
}

interface ProjectSliderProps {
  slides: SliderSlide[];
  autoPlayMs?: number;
  aspectRatio?: string;
}

export default function ProjectSlider({
  slides,
  autoPlayMs = 5000,
  aspectRatio = "aspect-[16/7]",
}: ProjectSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setTransitioning(true);
      setCurrent(index);
      setTimeout(() => setTransitioning(false), 700);
    },
    [current, transitioning]
  );

  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, slides.length, goTo]);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, slides.length, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, autoPlayMs);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, autoPlayMs, next]);

  // Touch swipe
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${aspectRatio}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.title}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.10) 100%)" }} />

          {/* Text overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 px-8 pb-14 md:px-14 md:pb-16 transition-all duration-700 ${
              i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: i === current ? "200ms" : "0ms" }}
          >
            {slide.tag && (
              <span className="inline-block mb-3 text-[hsl(38_75%_52%)] text-[10px] tracking-[0.25em] uppercase font-medium border border-[hsl(38_75%_52%/0.5)] px-3 py-1">
                {slide.tag}
              </span>
            )}
            <h3 className="font-serif text-2xl md:text-4xl text-white leading-tight mb-2 drop-shadow-lg">
              {slide.title}
            </h3>
            <p className="text-white/65 text-sm md:text-base max-w-xl leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 bg-black/40 text-white/70 hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] hover:bg-black/60 transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 bg-black/40 text-white/70 hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] hover:bg-black/60 transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-1.5 bg-[hsl(38_75%_52%)]"
                : "w-2 h-1.5 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-px z-10 bg-white/10">
          <div
            key={current}
            className="h-full bg-[hsl(38_75%_52%)]"
            style={{ animation: `progressBar ${autoPlayMs}ms linear forwards` }}
          />
        </div>
      )}

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
