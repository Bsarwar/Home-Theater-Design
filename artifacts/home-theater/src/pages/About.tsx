import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight } from "lucide-react";
import aboutDesignerImg from "@assets/Benpic_1780959496082.jpg";
import award2025Silver from "@assets/2025-Theater-Silver_1780976540110.jpg";
import award2024Gold from "@assets/2024_Theater_Gold_1780976540110.jpg";
import award2023Houzz from "@assets/2023_Houzz__1780976540110.jpg";
import award2022Silver from "@assets/2022_Theater_Silver_1780976540109.jpg";
import award2022Bronze from "@assets/2022_Theater_Bronze_1780976540109.jpg";
import award2022Houzz from "@assets/2022_Houzz__1780976540109.jpg";
import award2020Bronze from "@assets/2020_Theater_Bronze_1780976540108.jpg";
import award2019Cedia from "@assets/2019-award_1780976540108.jpg";
import award2018Cedia from "@assets/2018-award_1780976540108.jpg";
import award2018Bronze from "@assets/2018_Theater_Bronze_1780976540108.jpg";
import award2016Silver from "@assets/2016_Theater_Silver_1780976540107.jpg";

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

const serviceAreas = [
  { county: "Fairfax County", cities: "McLean, Great Falls, Vienna, Reston, Tysons, Burke, Springfield" },
  { county: "Washington, DC", cities: "Georgetown, Capitol Hill, Dupont Circle, Embassy Row, Chevy Chase DC" },
  { county: "Montgomery County, MD", cities: "Bethesda, Potomac, Chevy Chase, Rockville, North Bethesda" },
  { county: "Arlington County", cities: "Arlington, Ballston, Clarendon, Crystal City, Shirlington" },
  { county: "Loudoun County", cities: "Leesburg, Ashburn, Sterling, Lansdowne, Brambleton" },
  { county: "Prince William County", cities: "Woodbridge, Gainesville, Haymarket, Lake Ridge" },
  { county: "Alexandria City", cities: "Old Town, Del Ray, Seminary Hill, Rosemont" },
  { county: "Beyond the Region", cities: "Design & Consulting Service on select projects throughout the US" },
];



export default function About() {
  useSEO({
    title: "About Home Cinema Group — Luxury Home Theater Specialists Since 2005",
    description: "Since 2005, Home Cinema Group has been designing and building extraordinary home theaters across Virginia, DC, and Maryland. CEDIA-certified, award-winning craftsmanship.",
    canonical: "https://homecinemagroup.com/about",
    ogImage: "https://homecinemagroup.com/opengraph.jpg",
  });
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[hsl(220_15%_18%)]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, hsl(220 20% 12%) 0%, hsl(220 15% 5%) 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              About<br />
              <span className="italic text-[hsl(38_75%_52%)]">Us</span>
            </h1>
          </div>
        </div>
      </section>
      {/* STORY */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="space-y-6 text-[hsl(38_10%_60%)] text-lg mt-[30px] mb-[30px]">
              <p>
                Founded in 2001 as Lifestyle Solutions, we spent over a decade as Northern Virginia's premier basement finishing company. While transforming underutilized spaces into spectacular family entertainment hubs, one room consistently stole the show: the custom home theater.
              </p>
              <p className="font-serif text-xl text-[hsl(38_20%_85%)] italic border-l-2 border-[hsl(38_75%_52%)] pl-6">
                The Power of Specialization
              </p>
              <p>
                By 2015, the demand for dedicated private cinemas skyrocketed. To deliver the highest level of craftsmanship, we made a strategic decision to focus entirely on what we do best — design and construction — and partnered with Northern Virginia's premier AV integration firm,{" "}
                <a
                  href="https://www.customworksllc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(38_75%_52%)] font-semibold hover:text-[hsl(38_75%_65%)] transition-colors duration-200"
                >
                  Custom Works LLC
                </a>
                .
              </p>
              <p>
                By letting Custom Works handle the AV design and installation while we focus on the room aesthetics and build, we created a powerhouse combination. This evolution transformed our company into the region's top award-winning home theater design and build specialist, operating today as <span className="text-[hsl(38_20%_85%)] font-semibold">Home Cinema Group.</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative">
              <img
                src={aboutDesignerImg}
                alt="Home Cinema Group designer at work"
                className="w-full h-96 object-cover object-center border border-[hsl(38_75%_52%/0.4)]"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[hsl(38_75%_52%/0.3)]" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-[hsl(38_75%_52%/0.15)]" />
            </div>
            <div className="mt-6">
              <p className="text-[hsl(38_20%_85%)] font-semibold text-sm">Behzad Sarwar (Ben)</p>
              <p className="text-[hsl(38_75%_52%)] text-xs tracking-[0.15em] uppercase mt-0.5">President &amp; Owner</p>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* WHO WE WORK WITH */}
      <section className="pb-24 md:pb-32 border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Clients</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[hsl(38_20%_90%)] leading-tight mb-10">
              Who We <span className="italic">Work With</span>
            </h2>
            <p className="text-[hsl(38_10%_60%)] text-lg leading-relaxed max-w-2xl mb-12">
              Our collaborative, specialized approach allows us to integrate seamlessly with:
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {[
              {
                label: "Homeowners",
                desc: "Whether you are looking for a full-service home theater contractor or you are a passionate DIYer needing expert design and consulting to build your own, we are here to help. Reach out to us today, and let's turn your dream cinema into a reality!",
              },
              {
                label: "Builders & Architects",
                desc: "Architects and builders, let's team up. If you want to offer your clients high-end, professionally designed theater rooms without the headache, we are your go-to partner. Reach out today to discuss how we can work together.",
              },
              {
                label: "AV Companies",
                desc: "AV companies that want to offer high-end home cinemas to their clients — we would love to collaborate with you. We handle the specialized room design and construction while you handle the technology and integration, increasing your margins and offering a true turnkey solution to your clients.",
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 100} className="h-full">
                <div className="h-full border border-[hsl(220_15%_16%)] border-l-2 border-l-[hsl(38_75%_52%)] p-8 bg-[hsl(220_15%_8%)] hover:border-[hsl(220_15%_22%)] hover:border-l-[hsl(38_75%_60%)] transition-colors duration-300">
                  <h3 className="text-[hsl(38_20%_88%)] font-semibold text-base mb-3">{item.label}</h3>
                  <p className="text-[hsl(38_10%_55%)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="border border-[hsl(220_15%_16%)] bg-[hsl(220_15%_9%)] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-[hsl(38_20%_90%)] mb-3">Start Your Project</h3>
                <p className="text-[hsl(38_10%_60%)] text-lg leading-relaxed max-w-xl">
                  Have a project in mind? Let's collaborate to build something extraordinary. Please give us a call today.
                </p>
              </div>
              <a href="tel:+17036251714" className="shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[hsl(38_75%_60%)] transition-colors duration-300 whitespace-nowrap">
                (703) 625-1714
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* AREAS WE SERVE */}
      <section className="py-24 md:py-32 border-t border-[hsl(220_15%_14%)]" data-testid="areas-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Where We Work</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              Proudly Serving<br />
              <span className="italic">Virginia, DC & Maryland</span>
            </h2>
            <p className="text-[hsl(38_10%_55%)] text-lg leading-relaxed max-w-2xl mb-16">
              Home Cinema Group serves discerning homeowners throughout the greater DC Metro region. From the estates of Great Falls to the townhomes of Capitol Hill, we bring the same uncompromising craftsmanship to every project — no matter the zip code.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, i) => (
              <FadeIn key={area.county} delay={i * 80}>
                <div
                  data-testid={`area-${i}`}
                  className="border border-[hsl(220_15%_16%)] border-l-2 border-l-[hsl(38_75%_52%)] p-6 hover:border-[hsl(220_15%_22%)] hover:border-l-[hsl(38_75%_60%)] transition-colors duration-300 bg-[hsl(220_15%_8%)]"
                >
                  <h3 className="text-[hsl(38_20%_88%)] font-semibold text-base mb-2">{area.county}</h3>
                  <p className="text-[hsl(38_10%_50%)] text-sm leading-relaxed">{area.cities}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* CERTIFICATIONS */}
      <section className="py-16 bg-[hsl(220_15%_5%)] border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[hsl(38_20%_90%)] text-center mb-10">
              Award-<span className="italic">Winning</span> Work
            </h2>
          </FadeIn>
          <div className="grid grid-cols-11 gap-3 items-stretch mb-12">
            {[
              { src: award2025Silver, alt: "CEPro Home of the Year 2025 Silver Winner" },
              { src: award2024Gold,   alt: "CEPro Home of the Year 2024 Gold Winner" },
              { src: award2023Houzz,  alt: "Best of Houzz Service 2023" },
              { src: award2022Silver, alt: "CEPro Home of the Year 2022 Silver Winner" },
              { src: award2022Bronze, alt: "CEPro Home of the Year 2022 Bronze Winner" },
              { src: award2022Houzz,  alt: "Best of Houzz Service 2022" },
              { src: award2020Bronze, alt: "CEPro Home of the Year 2020 Bronze Winner" },
              { src: award2019Cedia,  alt: "CE Pro Best Project CEDIA Expo 2019" },
              { src: award2018Cedia,  alt: "CE Pro Best Project CEDIA Expo 2018" },
              { src: award2018Bronze, alt: "EH Home of the Year 2018 Bronze Winner" },
              { src: award2016Silver, alt: "EH Home of the Year 2016 Silver Winner" },
            ].map((award, i) => (
              <FadeIn key={`cert-badge-${award.alt}`} delay={i * 40} className="h-full">
                <div className="flex items-center justify-center p-3 bg-[hsl(220_15%_10%)] border border-[hsl(220_15%_18%)] hover:border-[hsl(220_15%_24%)] transition-colors duration-300 h-full">
                  <img
                    src={award.src}
                    alt={award.alt}
                    className="w-full h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(38_20%_90%)] mb-6">
              Work with the best.
            </h2>
            <p className="text-[hsl(38_10%_60%)] mb-10 leading-relaxed">25 years in business and 500+ projects.</p>
            <Link href="/contact" data-testid="about-cta">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                Start a Conversation <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
