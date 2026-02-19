import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { TeloLogo } from "./telo-logo";
import { Menu, X, ChevronDown, ChevronRight, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* ─── Treatments Mega Menu Data ─── */
const treatmentColumns = [
  {
    title: "Longevity & Anti-Aging",
    items: [
      { label: "Rapamycin", href: "/protocols/rapamycin" },
      { label: "Metformin XR", href: "/protocols/metformin" },
      { label: "Low Dose Naltrexone", href: "/protocols/ldn" },
    ],
  },
  {
    title: "Weight Optimization",
    items: [
      { label: "Tirzepatide + Glycine + B12", href: "/protocols/tirzepatide" },
      { label: "Semaglutide + Glycine + B12", href: "/protocols/semaglutide" },
      { label: "Liraglutide + B12", href: "/protocols/liraglutide" },
      { label: "B12/MIC Lipotropic", href: "/protocols/b12-mic" },
    ],
  },
  {
    title: "Cellular Energy & NAD+",
    items: [
      { label: "NAD+", href: "/protocols/nad-plus" },
      { label: "Methylene Blue", href: "/protocols/methylene-blue" },
      { label: "Glutathione", href: "/protocols/glutathione" },
    ],
  },
  {
    title: "Sexual Health",
    items: [{ label: "Tadalafil (Daily)", href: "/protocols/tadalafil" }],
  },
  {
    title: "Hormonal Optimization",
    items: [{ label: "Enclomiphene Citrate", href: "/protocols/enclomiphene" }],
  },
  {
    title: "Diagnostics & Testing",
    items: [
      { label: "Telomere Length Testing", href: "/protocols/telomere-testing" },
      { label: "Comprehensive Blood Panel", href: "/protocols/blood-panel" },
      { label: "Genetic Testing", href: "/protocols/genetic-testing" },
    ],
  },
];

const scienceDropdown = [
  { label: "Our Approach", href: "/science" },
  { label: "Research & Evidence", href: "/science" },
  { label: "The Telo Dashboard", href: "/science" },
];

const aboutDropdown = [
  { label: "Our Story", href: "/about" },
  { label: "Clinical Team", href: "/about" },
  { label: "Partners & Pharmacy", href: "/about" },
];

/* ─── Dropdown Wrapper ─── */
function NavDropdown({
  label,
  items,
  isActive,
}: {
  label: string;
  items: { label: string; href: string }[];
  isActive: boolean;
  scrolled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`flex items-center gap-1 text-[15px] transition-colors hover:text-telo-blue ${
          isActive ? "text-telo-blue" : "text-telo-navy"
        }`}
        onClick={() => setOpen(!open)}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="bg-white rounded-xl shadow-lg border border-telo-light-gray py-2 min-w-[220px]">
              {items.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-[14px] text-telo-navy hover:bg-telo-off-white hover:text-telo-blue transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Treatments Mega Menu ─── */
function TreatmentsMegaMenu({ isActive }: { isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`flex items-center gap-1 text-[15px] transition-colors hover:text-telo-blue ${
          isActive ? "text-telo-blue" : "text-telo-navy"
        }`}
        onClick={() => setOpen(!open)}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Treatments
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 -translate-x-1/2 top-[72px] z-50 w-full max-w-[1100px] px-4"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-telo-light-gray p-8 mt-1">
              <div className="grid grid-cols-3 gap-8">
                {treatmentColumns.map((col) => (
                  <div key={col.title}>
                    <p
                      className="text-[11px] uppercase tracking-[0.08em] text-telo-gray mb-3"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                    >
                      {col.title}
                    </p>
                    <div className="space-y-0.5">
                      {col.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 px-2 rounded-md text-[14px] text-telo-navy hover:bg-telo-off-white hover:text-telo-blue transition-colors"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom link */}
              <div className="mt-6 pt-5 border-t border-telo-light-gray flex items-center justify-between">
                <Link
                  to="/protocols"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-[14px] text-telo-blue hover:text-telo-navy transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  View All Treatments <ChevronRight size={14} />
                </Link>
                <div className="hidden lg:flex items-center gap-3">
                  {[
                    { label: "Rapamycin", href: "/protocols/rapamycin" },
                    { label: "Tirzepatide", href: "/protocols/tirzepatide" },
                    { label: "NAD+", href: "/protocols/nad-plus" },
                    { label: "Telomere Testing", href: "/protocols/telomere-testing" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="text-[12px] text-telo-gray hover:text-telo-blue transition-colors px-2.5 py-1 rounded-md border border-telo-light-gray hover:border-telo-blue/20"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile Accordion Section ─── */
function MobileAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-telo-light-gray/50">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center justify-between w-full py-4 text-[16px] text-telo-navy"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {title}
        <ChevronDown size={18} className={`text-telo-gray transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Navbar ─── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-telo-light-gray"
            : "bg-white border-b border-telo-light-gray/50"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Telo Wellness Home">
              <TeloLogo className="h-10" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              <TreatmentsMegaMenu isActive={location.pathname.startsWith("/protocols")} />

              <Link
                to="/how-it-works"
                className={`text-[15px] transition-colors hover:text-telo-blue ${
                  location.pathname === "/how-it-works" ? "text-telo-blue" : "text-telo-navy"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                How It Works
              </Link>

              <NavDropdown
                label="The Science"
                items={scienceDropdown}
                isActive={location.pathname === "/science"}
              />

              <NavDropdown
                label="About"
                items={aboutDropdown}
                isActive={location.pathname === "/about"}
              />
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className="flex items-center gap-2 text-[14px] text-telo-gray hover:text-telo-navy transition-colors"
                aria-label="Patient Portal"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <span>Log In</span>
              </button>
              <Link
                to="/get-started"
                className="inline-flex items-center px-6 py-2.5 bg-telo-orange text-white rounded-full text-[15px] hover:bg-telo-light-orange transition-all hover:scale-[1.02] shadow-sm"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-telo-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
            style={{ top: 72 }}
          >
            <div className="h-full overflow-y-auto pb-32">
              <div className="px-6 py-4">
                {/* Treatments Accordion */}
                <MobileAccordion title="Treatments">
                  {treatmentColumns.map((col) => (
                    <div key={col.title} className="mb-4">
                      <p
                        className="text-[10px] uppercase tracking-[0.08em] text-telo-gray mb-2"
                        style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                      >
                        {col.title}
                      </p>
                      {col.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block py-2 text-[14px] text-telo-navy hover:text-telo-blue transition-colors"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    to="/protocols"
                    className="inline-flex items-center gap-1 text-[14px] text-telo-blue mt-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    View All Treatments <ChevronRight size={14} />
                  </Link>
                </MobileAccordion>

                {/* How It Works */}
                <Link
                  to="/how-it-works"
                  className="block py-4 text-[16px] text-telo-navy border-b border-telo-light-gray/50"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  How It Works
                </Link>

                {/* The Science */}
                <MobileAccordion title="The Science">
                  {scienceDropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-[14px] text-telo-navy hover:text-telo-blue transition-colors"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </MobileAccordion>

                {/* About */}
                <MobileAccordion title="About">
                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-[14px] text-telo-navy hover:text-telo-blue transition-colors"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </MobileAccordion>

                {/* Log In */}
                <button
                  className="flex items-center gap-2 py-4 text-[16px] text-telo-gray border-b border-telo-light-gray/50 w-full"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <User size={18} />
                  Log In
                </button>
              </div>
            </div>

            {/* Sticky Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-telo-light-gray p-4 z-50">
              <Link
                to="/get-started"
                className="block text-center px-6 py-3.5 bg-telo-orange text-white rounded-full text-[16px] shadow-lg"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
