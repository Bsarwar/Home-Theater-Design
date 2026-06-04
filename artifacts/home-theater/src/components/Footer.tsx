import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(220_15%_5%)] border-t border-[hsl(220_15%_14%)]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-[hsl(38_75%_52%)] flex items-center justify-center">
                <div className="w-4 h-4 bg-[hsl(38_75%_52%)]" />
              </div>
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
              Premium home theater design and installation. Crafting extraordinary cinematic experiences for discerning clients since 2005.
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

          <div>
            <h4 className="text-[hsl(38_20%_88%)] text-xs tracking-[0.2em] uppercase font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {["Home Theater Design", "Whole-Home Audio", "Smart Home", "Outdoor Cinema", "Commercial Screening", "Maintenance Plans"].map((item) => (
                <li key={item}>
                  <Link href="/services">
                    <span className="text-[hsl(38_10%_55%)] text-sm hover:text-[hsl(38_75%_52%)] transition-colors duration-200 cursor-pointer">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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

          <div>
            <h4 className="text-[hsl(38_20%_88%)] text-xs tracking-[0.2em] uppercase font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[hsl(38_10%_55%)] text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[hsl(38_75%_52%)]" />
                <span>1200 Brickell Ave, Suite 800<br />Miami, FL 33131</span>
              </li>
              <li className="flex gap-3 text-[hsl(38_10%_55%)] text-sm">
                <Phone size={14} className="mt-0.5 shrink-0 text-[hsl(38_75%_52%)]" />
                <a href="tel:+13059876543" className="hover:text-[hsl(38_75%_52%)] transition-colors duration-200">(305) 987-6543</a>
              </li>
              <li className="flex gap-3 text-[hsl(38_10%_55%)] text-sm">
                <Mail size={14} className="mt-0.5 shrink-0 text-[hsl(38_75%_52%)]" />
                <a href="mailto:info@homecinemagroup.com" className="hover:text-[hsl(38_75%_52%)] transition-colors duration-200">info@homecinemagroup.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[hsl(220_15%_12%)] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(38_10%_40%)] text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Home Cinema Group. All rights reserved.
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
