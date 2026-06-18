import { useState } from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Linkedin, ChevronDown } from "lucide-react";

const inputCls = "bg-[hsl(220_15%_11%)] border border-[hsl(220_15%_22%)] text-[hsl(38_10%_80%)] placeholder-[hsl(38_10%_38%)] text-sm px-3 py-2.5 w-full focus:outline-none focus:border-[hsl(38_75%_52%)] transition-colors duration-200";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/bsarwar1@outlook.com";

export default function Footer() {
  const [form, setForm] = useState({
    firstName: "", lastName: "",
    projectType: "",
    streetAddress: "", email: "",
    phone: "", zipCode: "",
    subscribe: false,
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone || "Not provided",
          "Project Type": form.projectType,
          "Street Address": form.streetAddress || "Not provided",
          "Zip Code": form.zipCode || "Not provided",
          "Newsletter Opt-in": form.subscribe ? "Yes" : "No",
          _subject: `New Quote Request from ${form.firstName} ${form.lastName} — Home Cinema Group`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Unable to send. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
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
              {["Dedicated Theaters", "Media Rooms & TV Walls", "Theater Design & Consultation", "Lighting Design & Control", "Acoustical Fabric Treatment", "Sound Isolation", "Architectural Millwork & Elements", "Star Panel Ceiling"].map((item) => (
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

          {/* Get in Touch Form */}
          <div className="border border-[hsl(220_15%_16%)] bg-[hsl(220_15%_8%)] p-6 border-t-[#e09d298a] border-r-[#e09d298a] border-b-[#e09d298a] border-l-[#e09d298a] pl-[24px] pr-[24px] ml-[0px] mr-[0px] mt-[0px] mb-[0px] border-t-[0.45px] border-r-[0.45px] border-b-[0.45px] border-l-[0.45px]">
            <h3 className="font-serif text-2xl font-semibold text-[hsl(38_20%_90%)] mb-1">Get in Touch</h3>
            <p className="text-[hsl(38_10%_50%)] text-xs leading-relaxed mb-5">
              Receive a Free Quote for Your Home Theater Project
            </p>

            {sent ? (
              <div className="border border-[hsl(38_75%_52%/0.3)] bg-[hsl(38_75%_52%/0.05)] p-5 text-center">
                <p className="text-[hsl(38_75%_52%)] text-sm font-medium mb-1">Thank you!</p>
                <p className="text-[hsl(38_10%_55%)] text-xs">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                {/* First / Last */}
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                    required
                    className={inputCls}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                    required
                    className={inputCls}
                  />
                </div>

                {/* Project Type */}
                <div className="relative">
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                    required
                    className={`${inputCls} appearance-none pr-8`}
                    style={{ color: form.projectType ? "hsl(38,10%,80%)" : "hsl(38,10%,38%)" }}
                  >
                    <option value="" disabled>Project Type:</option>
                    <option value="Theater Room">Theater Room</option>
                    <option value="Media Room">Media Room</option>
                    <option value="TV Walls">TV Walls</option>
                    <option value="Custom Project">Custom Project</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(38_10%_45%)] pointer-events-none" />
                </div>

                {/* Street / Email */}
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Street Address"
                    value={form.streetAddress}
                    onChange={(e) => setForm((f) => ({ ...f, streetAddress: e.target.value }))}
                    className={inputCls}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                    className={inputCls}
                  />
                </div>

                {/* Phone / Zip */}
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className={inputCls}
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    value={form.zipCode}
                    onChange={(e) => setForm((f) => ({ ...f, zipCode: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-2.5 cursor-pointer group pt-1">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      checked={form.subscribe}
                      onChange={(e) => setForm((f) => ({ ...f, subscribe: e.target.checked }))}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 border flex items-center justify-center transition-colors duration-200 ${form.subscribe ? "bg-[hsl(38_75%_52%)] border-[hsl(38_75%_52%)]" : "bg-[hsl(220_15%_11%)] border-[hsl(220_15%_28%)]"}`}>
                      {form.subscribe && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="hsl(220,15%,7%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-[hsl(38_10%_50%)] text-xs leading-relaxed group-hover:text-[hsl(38_10%_65%)] transition-colors duration-200">
                    I would like to learn more about HCG's home theater services.
                  </span>
                </label>

                {error && (
                  <p className="text-red-400 text-xs pt-1">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[hsl(38_75%_52%)] border border-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm font-bold py-3 hover:bg-[hsl(38_75%_60%)] hover:border-[hsl(38_75%_60%)] transition-colors duration-200 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Submit"}
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
