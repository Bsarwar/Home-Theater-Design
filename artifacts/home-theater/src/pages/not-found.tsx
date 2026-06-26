import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[hsl(220_15%_7%)]">
      <div className="text-center px-6 max-w-lg">
        <div className="font-serif text-[10rem] font-light leading-none text-[hsl(220_15%_14%)] select-none mb-4">
          404
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-light text-[hsl(38_20%_90%)] mb-4">
          Page Not Found
        </h1>
        <p className="text-[hsl(38_10%_55%)] text-lg leading-relaxed mb-10">
          The page you're looking for doesn't exist. It may have been moved, renamed, or removed.
        </p>
        <Link href="/">
          <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
            Back to Home <ArrowRight size={14} />
          </span>
        </Link>
      </div>
    </div>
  );
}
