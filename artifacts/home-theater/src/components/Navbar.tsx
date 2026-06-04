import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/20 ${
        scrolled
          ? "bg-[hsl(220_15%_7%/0.97)] shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" data-testid="nav-logo">
          <div className="flex items-center gap-3 cursor-pointer">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="24" height="24" rx="1.5" stroke="hsl(38,75%,52%)" strokeWidth="1.5" fill="none"/>
              <rect x="4" y="5" width="24" height="6" fill="hsl(38,75%,52%)" opacity="0.12"/>
              <rect x="4" y="21" width="24" height="6" fill="hsl(38,75%,52%)" opacity="0.12"/>
              <rect x="6.5" y="6.5" width="3" height="3" rx="0.4" fill="hsl(38,75%,52%)"/>
              <rect x="12" y="6.5" width="3" height="3" rx="0.4" fill="hsl(38,75%,52%)"/>
              <rect x="17.5" y="6.5" width="3" height="3" rx="0.4" fill="hsl(38,75%,52%)"/>
              <rect x="23" y="6.5" width="2.5" height="3" rx="0.4" fill="hsl(38,75%,52%)"/>
              <rect x="6.5" y="22.5" width="3" height="3" rx="0.4" fill="hsl(38,75%,52%)"/>
              <rect x="12" y="22.5" width="3" height="3" rx="0.4" fill="hsl(38,75%,52%)"/>
              <rect x="17.5" y="22.5" width="3" height="3" rx="0.4" fill="hsl(38,75%,52%)"/>
              <rect x="23" y="22.5" width="2.5" height="3" rx="0.4" fill="hsl(38,75%,52%)"/>
              <rect x="7" y="13" width="18" height="7" rx="0.5" stroke="hsl(38,75%,52%)" strokeWidth="1" fill="hsl(38,75%,52%)" opacity="0.08"/>
            </svg>
            <div>
              <span className="font-serif text-lg font-semibold tracking-wider text-[hsl(38_20%_88%)]">
                HOME CINEMA GROUP
              </span>
              <span className="block text-[9px] tracking-[0.18em] text-[hsl(38_75%_52%)] uppercase">
                a Lifestyle Solution Company
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`nav-link-${link.label.toLowerCase()}`}>
              <span
                className={`text-sm tracking-[0.12em] uppercase font-medium transition-colors duration-200 cursor-pointer ${
                  location === link.href
                    ? "text-[hsl(38_75%_52%)]"
                    : "text-[hsl(38_10%_60%)] hover:text-[hsl(38_20%_88%)]"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a href="tel:+13059876543" className="flex items-center gap-2 text-[hsl(38_10%_60%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200">
            <Phone size={13} strokeWidth={1.5} />
            <span className="text-xs tracking-[0.08em] font-medium">(305) 987-6543</span>
          </a>
          <Link href="/contact" data-testid="nav-cta">
            <span className="ml-2 px-6 py-2.5 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-xs tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-200">
              Get a Quote
            </span>
          </Link>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-[hsl(38_20%_88%)] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(220_15%_7%)] border-t border-[hsl(220_15%_16%)] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`nav-mobile-${link.label.toLowerCase()}`}>
              <span
                className={`block text-sm tracking-[0.12em] uppercase font-medium py-2 cursor-pointer ${
                  location === link.href
                    ? "text-[hsl(38_75%_52%)]"
                    : "text-[hsl(38_10%_60%)]"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <span className="mt-2 inline-block px-6 py-3 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-xs tracking-[0.15em] uppercase font-semibold cursor-pointer">
              Get a Quote
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
