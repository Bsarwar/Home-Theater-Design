import { useState } from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <footer className="bg-[hsl(220_15%_5%)] border-t border-[hsl(220_15%_14%)]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <span className="font-serif text-base font-semibold tracking-wider text-[hsl(38_20%_88%)]">
                  HOME CINEMA GROUP
                </span>
                <span className="block text-[9px] tracking-[0.18em] text-[hsl(38_75%_52%)] uppercase">
                  a Lifestyle Solution Company
                </span>
              </div>
            </div>
            <p className="text-[hsl(38_10%_55%)] text-sm leading-relaxed mb-6">
              Luxury home theater design and construction. Building extraordinary cinematic spaces across Virginia, DC, Maryland, and beyond — since 2005.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`footer-social-${i}`}
                  className="w-8 h-8 border border-[hsl(220_15%_20%)] flex items-center justify-center text-[hsl(38_10%_55%)] hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[hsl(38_20%_88%)] text-xs tracking-[0.2em] uppercase font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {["Theater Design", "Custom Construction", "Projection & Display", "Cinema Audio", "Cinema Lighting", "Seating & Interiors"].map((item) => (
                <li key={item}>
                  <Link href="/services">
                    <span className="text-[hsl(38_10%_55%)] text-sm hover:text-[hsl(38_75%_52%)] transition-colors duration-200 cursor-pointer">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[hsl(38_20%_88%)] text-xs tracking-[0.2em] uppercase font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
                { label: "Get a Quote", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-[hsl(38_10%_55%)] text-sm hover:text-[hsl(38_75%_52%)] transition-colors duration-200 cursor-pointer">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Quote Form */}
          <div>
            <h4 className="text-[hsl(38_20%_88%)] text-xs tracking-[0.2em] uppercase font-semibold mb-2">Quick Quote</h4>
            <p className="text-[hsl(38_10%_45%)] text-xs mb-5 leading-relaxed">Receive a free consultation for your home theater project.</p>

            {sent ? (
              <div className="border border-[hsl(38_75%_52%/0.3)] bg-[hsl(38_75%_52%/0.05)] p-5 text-center">
                <p className="text-[hsl(38_75%_52%)] text-sm font-medium mb-1">Thank you!</p>
                <p className="text-[hsl(38_10%_55%)] text-xs">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                    required
                    className="bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_10%_75%)] placeholder-[hsl(38_10%_35%)] text-xs px-3 py-2.5 w-full focus:outline-none focus:border-[hsl(38_75%_52%)] transition-colors duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                    required
                    className="bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_10%_75%)] placeholder-[hsl(38_10%_35%)] text-xs px-3 py-2.5 w-full focus:outline-none focus:border-[hsl(38_75%_52%)] transition-colors duration-200"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  className="bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_10%_75%)] placeholder-[hsl(38_10%_35%)] text-xs px-3 py-2.5 w-full focus:outline-none focus:border-[hsl(38_75%_52%)] transition-colors duration-200"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_10%_75%)] placeholder-[hsl(38_10%_35%)] text-xs px-3 py-2.5 w-full focus:outline-none focus:border-[hsl(38_75%_52%)] transition-colors duration-200"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                  required
                  className="bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-xs px-3 py-2.5 w-full focus:outline-none focus:border-[hsl(38_75%_52%)] transition-colors duration-200 appearance-none"
                  style={{ color: form.service ? "hsl(38,10%,75%)" : "hsl(38,10%,35%)" }}
                >
                  <option value="" disabled>Service Interested In</option>
                  <option value="Theater Room">Theater Room</option>
                  <option value="Media Room">Media Room</option>
                  <option value="TV Walls">TV Walls</option>
                  <option value="Custom Project">Custom Project</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-xs tracking-[0.15em] uppercase font-semibold py-3 hover:bg-[hsl(38_75%_60%)] transition-colors duration-200"
                >
                  Get a Free Quote
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <div className="border-t border-[hsl(220_15%_12%)] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(38_10%_40%)] text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Home Cinema Group — a Lifestyle Solution Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-[hsl(38_10%_40%)] text-xs hover:text-[hsl(38_75%_52%)] transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
