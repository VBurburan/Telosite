import { Link } from "react-router";
import { TeloLogo } from "./telo-logo";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-telo-navy text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <TeloLogo className="h-10" variant="light" />
            </div>
            <p className="text-white/50 text-[13px] mb-6 max-w-xs" style={{ lineHeight: 1.6 }}>
              Science-backed longevity care
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/30 hover:text-telo-orange transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/30 hover:text-telo-orange transition-colors" aria-label="Twitter / X">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/30 hover:text-telo-orange transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-white/70 text-[12px] uppercase tracking-[0.08em] mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Treatments
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Longevity & Anti-Aging", href: "/protocols#longevity" },
                { label: "Weight Optimization", href: "/protocols#weight" },
                { label: "Cellular Energy & NAD+", href: "/protocols#energy" },
                { label: "Sexual Health", href: "/protocols#sexual-health" },
                { label: "Hormonal Optimization", href: "/protocols#hormonal" },
                { label: "Diagnostics & Testing", href: "/protocols#diagnostics" },
                { label: "View All Treatments", href: "/protocols" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/50 text-[14px] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/70 text-[12px] uppercase tracking-[0.08em] mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "The Science", href: "/science" },
                { label: "About Us", href: "/about" },
                { label: "Clinical Team", href: "/about" },
                { label: "Blog / Research", href: "/science" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/50 text-[14px] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white/70 text-[12px] uppercase tracking-[0.08em] mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Support
            </h4>
            <ul className="space-y-3">
              {["FAQ", "Contact Us", "Privacy Policy", "Terms of Service", "Telehealth Consent"].map((label) => (
                <li key={label}>
                  <a href="#" className="text-white/50 text-[14px] hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Treatments */}
          <div>
            <h4 className="text-white/70 text-[12px] uppercase tracking-[0.08em] mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Top Treatments
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Rapamycin", href: "/protocols/rapamycin" },
                { label: "Tirzepatide", href: "/protocols/tirzepatide" },
                { label: "NAD+", href: "/protocols/nad-plus" },
                { label: "Telomere Testing", href: "/protocols/telomere-testing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/50 text-[14px] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6">
          <p className="text-white/30 text-[12px] mb-3">
            &copy; 2026 Telo Wellness. All rights reserved.
          </p>
          <p className="text-white/20 text-[11px]">
            This site is for informational purposes only and does not provide medical advice. All treatments require physician review and approval. Compounded medications are prepared by licensed US pharmacies. Results vary by individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
