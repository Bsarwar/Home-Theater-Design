import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

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

const projectTypes = [
  "New Home Theater — Full Design & Build",
  "Basement Theater Conversion",
  "Existing Room Renovation",
  "Commercial Screening Room",
  "Consultation / Design Only",
  "Other / Not Sure",
];

export default function Contact() {
  useSEO({
    title: "Contact Home Cinema Group — Free Home Theater Consultation | McLean, VA",
    description: "Ready to build your dream home theater? Contact our McLean, VA design team for a free consultation. Serving Virginia, DC, Maryland, and beyond.",
    canonical: "https://homecinemagroup.com/contact",
    ogImage: "https://homecinemagroup.com/opengraph.jpg",
  });
  const [heroReady, setHeroReady] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });

  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 40% 50%, hsl(220 20% 12%) 0%, hsl(220 15% 5%) 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Let's Talk</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              Get in<br />
              <span className="italic text-[hsl(38_75%_52%)]">Touch</span>
            </h1>
            <p className="text-[hsl(38_10%_60%)] text-xl max-w-xl leading-relaxed">
              Every extraordinary theater begins with a conversation. Tell us about your vision — we serve clients across Virginia, DC, Maryland, and beyond.
            </p>
          </div>
        </div>
      </section>
      {/* CONTACT GRID */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* FORM */}
          <FadeIn className="lg:col-span-3">
            <div className="border border-[hsl(220_15%_16%)] p-8 md:p-12">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 border border-[hsl(38_75%_52%)] flex items-center justify-center mx-auto mb-6">
                    <div className="w-6 h-6 bg-[hsl(38_75%_52%)]" />
                  </div>
                  <h2 className="font-serif text-3xl text-[hsl(38_20%_90%)] mb-4">Thank You</h2>
                  <p className="text-[hsl(38_10%_60%)] leading-relaxed">
                    We've received your inquiry and will be in touch within one business day. We look forward to learning more about your vision.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl text-[hsl(38_20%_90%)] mb-2">Send a Message</h2>
                  <p className="text-[hsl(38_10%_55%)] text-sm mb-8">Fill in the form below and we'll respond within one business day.</p>

                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[hsl(38_10%_65%)] text-xs tracking-[0.15em] uppercase mb-2">
                          Full Name <span className="text-[hsl(38_75%_52%)]">*</span>
                        </label>
                        <input
                          data-testid="input-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_20%_85%)] px-4 py-3 text-sm outline-none focus:border-[hsl(38_75%_52%)] transition-colors placeholder-[hsl(38_10%_35%)]"
                        />
                      </div>
                      <div>
                        <label className="block text-[hsl(38_10%_65%)] text-xs tracking-[0.15em] uppercase mb-2">
                          Email Address <span className="text-[hsl(38_75%_52%)]">*</span>
                        </label>
                        <input
                          data-testid="input-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@email.com"
                          className="w-full bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_20%_85%)] px-4 py-3 text-sm outline-none focus:border-[hsl(38_75%_52%)] transition-colors placeholder-[hsl(38_10%_35%)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[hsl(38_10%_65%)] text-xs tracking-[0.15em] uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        data-testid="input-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(305) 000-0000"
                        className="w-full bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_20%_85%)] px-4 py-3 text-sm outline-none focus:border-[hsl(38_75%_52%)] transition-colors placeholder-[hsl(38_10%_35%)]"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-[hsl(38_10%_65%)] text-xs tracking-[0.15em] uppercase mb-2">
                        Project Type <span className="text-[hsl(38_75%_52%)]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          data-testid="select-project-type"
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          required
                          className="w-full bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_20%_85%)] px-4 py-3 text-sm outline-none focus:border-[hsl(38_75%_52%)] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a project type</option>
                          {projectTypes.map((pt) => (
                            <option key={pt} value={pt}>{pt}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(38_10%_45%)] pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[hsl(38_10%_65%)] text-xs tracking-[0.15em] uppercase mb-2">
                        Tell Us About Your Project <span className="text-[hsl(38_75%_52%)]">*</span>
                      </label>
                      <textarea
                        data-testid="textarea-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your space, vision, and any specific requirements..."
                        className="w-full bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(38_20%_85%)] px-4 py-3 text-sm outline-none focus:border-[hsl(38_75%_52%)] transition-colors resize-none placeholder-[hsl(38_10%_35%)]"
                      />
                    </div>

                    <button
                      data-testid="button-submit"
                      type="submit"
                      className="w-full py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.2em] uppercase font-bold hover:bg-[hsl(38_75%_60%)] transition-colors duration-300"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </FadeIn>

          {/* SIDEBAR INFO */}
          <FadeIn delay={200} className="lg:col-span-2 space-y-8">
            <div className="border border-[hsl(220_15%_16%)] p-8">
              <h3 className="font-serif text-xl text-[hsl(38_20%_90%)] mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Bristow, VA" },
                  { icon: Phone, label: "Phone", value: "(703) 625-1714" },
                  { icon: Mail, label: "Email", value: "info@homecinemagroup.com" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 9am – 6pm\nSat: By appointment" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4" data-testid={`contact-info-${item.label.toLowerCase()}`}>
                      <Icon size={16} className="text-[hsl(38_75%_52%)] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[hsl(38_10%_50%)] text-[10px] tracking-[0.2em] uppercase mb-0.5">{item.label}</div>
                        <div className="text-[hsl(38_20%_80%)] text-sm whitespace-pre-line">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border border-[hsl(220_15%_16%)] p-8">
              <h3 className="font-serif text-xl text-[hsl(38_20%_90%)] mb-4">Our Promise</h3>
              <p className="text-[hsl(38_10%_55%)] text-sm leading-relaxed mb-4">
                Every inquiry receives a personal response — not a form letter. Our design team will review your project and respond with a thoughtful assessment within one business day.
              </p>
              <p className="text-[hsl(38_10%_55%)] text-sm leading-relaxed">
                We offer complimentary in-home consultations across Virginia, DC, and Maryland — with no obligation.
              </p>
            </div>

            <div className="p-6 bg-[hsl(38_75%_52%/0.07)] border border-[hsl(38_75%_52%/0.2)]">
              <p className="text-[hsl(38_75%_52%)] text-xs tracking-[0.15em] uppercase mb-2">Prefer to call?</p>
              <a href="tel:+13059876543" data-testid="contact-phone-link" className="font-serif text-2xl text-[hsl(38_20%_90%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200">(703) 625-1714</a>
              <p className="text-[hsl(38_10%_50%)] text-xs mt-1">Mon–Fri, 9am – 6pm EST</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
