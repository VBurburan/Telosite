import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/scroll-reveal";

/* ─── Treatment Catalog Data ─── */
interface CatalogItem {
  name: string;
  slug: string;
  category: string;
  categoryId: string;
  desc: string;
  formulations: string[];
  dosing: string;
  price: string;
}

const catalogItems: CatalogItem[] = [
  // LONGEVITY
  { name: "Rapamycin (Sirolimus)", slug: "rapamycin", category: "Longevity & Anti-Aging", categoryId: "longevity", desc: "The most-studied longevity compound, targeting mTOR to slow biological aging.", formulations: ["Oral"], dosing: "3-6mg once weekly", price: "$___/mo" },
  { name: "Metformin XR", slug: "metformin", category: "Longevity & Anti-Aging", categoryId: "longevity", desc: "The longevity workhorse — improves insulin sensitivity and activates cellular repair pathways.", formulations: ["Oral (extended release)"], dosing: "500-1,000mg daily", price: "$___/mo" },
  { name: "Low Dose Naltrexone (LDN)", slug: "ldn", category: "Longevity & Anti-Aging", categoryId: "longevity", desc: "Modulates immune function and reduces systemic inflammation at micro-doses.", formulations: ["Oral"], dosing: "1.5-4.5mg nightly", price: "$___/mo" },
  // CELLULAR ENERGY
  { name: "NAD+", slug: "nad-plus", category: "Cellular Energy & NAD+", categoryId: "energy", desc: "Restore the coenzyme that powers every cell — combats age-related NAD+ decline.", formulations: ["Injectable", "Nasal Spray", "Patches", "Face Cream"], dosing: "Varies by form", price: "$___/mo" },
  { name: "Methylene Blue", slug: "methylene-blue", category: "Cellular Energy & NAD+", categoryId: "energy", desc: "Supports mitochondrial electron transport for sharper cognition and cellular energy.", formulations: ["Oral capsule (5mg)"], dosing: "1 capsule morning, 5 on / 2 off", price: "$___/mo" },
  { name: "Glutathione", slug: "glutathione", category: "Cellular Energy & NAD+", categoryId: "energy", desc: "The body's master antioxidant — protects cells from oxidative damage and supports detoxification.", formulations: ["Injectable", "Patches", "Nasal Spray"], dosing: "Per physician schedule", price: "$___/mo" },
  // WEIGHT
  { name: "Tirzepatide + Glycine + B12", slug: "tirzepatide", category: "Weight Optimization", categoryId: "weight", desc: "Dual GIP/GLP-1 action with glycine for lean mass preservation and B12 for energy.", formulations: ["Injectable", "Oral Sublingual"], dosing: "Starting 2.5-5mg weekly, titrated", price: "$___/mo" },
  { name: "Semaglutide + Glycine + B12", slug: "semaglutide", category: "Weight Optimization", categoryId: "weight", desc: "GLP-1 receptor agonist enhanced with glycine and B12 for comprehensive metabolic support.", formulations: ["Injectable", "Oral Sublingual"], dosing: "Starting 0.2mg weekly, titrated", price: "$___/mo" },
  { name: "Liraglutide + B12", slug: "liraglutide", category: "Weight Optimization", categoryId: "weight", desc: "Daily GLP-1 therapy with B12 for steady appetite regulation and metabolic optimization.", formulations: ["Injectable"], dosing: "Daily injection, titrated", price: "$___/mo" },
  { name: "B12/MIC Lipotropic", slug: "b12-mic", category: "Weight Optimization", categoryId: "weight", desc: "Lipotropic blend supporting fat metabolism and energy between GLP-1 doses.", formulations: ["Injectable"], dosing: "1mL every 3 days", price: "$___/mo" },
  // SEXUAL HEALTH
  { name: "Tadalafil (Daily)", slug: "tadalafil", category: "Sexual Health", categoryId: "sexual-health", desc: "Low-dose daily PDE5 inhibitor for consistent improvement in erectile function and blood flow.", formulations: ["Oral"], dosing: "2.5-5mg daily", price: "$___/mo" },
  // HORMONAL
  { name: "Enclomiphene Citrate", slug: "enclomiphene", category: "Hormonal Optimization", categoryId: "hormonal", desc: "Selective estrogen receptor modulator that stimulates natural testosterone production without exogenous hormones.", formulations: ["Oral"], dosing: "12.5-25mg daily", price: "$___/mo" },
  // DIAGNOSTICS
  { name: "Telomere Length Testing", slug: "telomere-testing", category: "Diagnostics & Testing", categoryId: "diagnostics", desc: "Measure your biological age through telomere analysis — the gold standard in aging biomarkers.", formulations: ["Blood draw (at-home kit or lab)"], dosing: "One-time + periodic retest", price: "$___" },
  { name: "Comprehensive Blood Panel (50+ biomarkers)", slug: "blood-panel", category: "Diagnostics & Testing", categoryId: "diagnostics", desc: "Full metabolic, hormonal, inflammatory, and longevity marker picture.", formulations: ["Blood draw (at-home kit or lab)"], dosing: "Baseline + quarterly", price: "$___" },
  { name: "Genetic Testing (Pharmacogenomic + Health Risk)", slug: "genetic-testing", category: "Diagnostics & Testing", categoryId: "diagnostics", desc: "Personalize your protocol based on your DNA — drug metabolism, health risks, and more.", formulations: ["Saliva/cheek swab (at-home kit)"], dosing: "One-time", price: "$___" },
];

const filterCategories = [
  { label: "All", id: "all" },
  { label: "Longevity & Anti-Aging", id: "longevity" },
  { label: "Cellular Energy & NAD+", id: "energy" },
  { label: "Weight Optimization", id: "weight" },
  { label: "Sexual Health", id: "sexual-health" },
  { label: "Hormonal Optimization", id: "hormonal" },
  { label: "Diagnostics & Testing", id: "diagnostics" },
];

const catColorMap: Record<string, string> = {
  longevity: "bg-telo-blue/10 text-telo-blue",
  energy: "bg-telo-green/10 text-telo-green",
  weight: "bg-telo-orange/10 text-telo-orange",
  "sexual-health": "bg-purple-50 text-purple-600",
  hormonal: "bg-purple-50 text-purple-600",
  diagnostics: "bg-telo-navy/10 text-telo-navy",
};

export function ProtocolsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const location = useLocation();

  // Handle hash-based scrolling to category
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && filterCategories.find((f) => f.id === hash)) {
      setActiveFilter(hash);
    }
  }, [location.hash]);

  const filtered = activeFilter === "all" ? catalogItems : catalogItems.filter((item) => item.categoryId === activeFilter);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h1 className="text-[36px] lg:text-[52px] text-telo-navy mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
                Treatments & Protocols
              </h1>
              <p className="text-telo-text-secondary text-[17px]" style={{ lineHeight: 1.7 }}>
                Every Telo protocol starts with your data — blood work, genetic testing, and clinical review — so your treatment is built for your biology, not averages.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-telo-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-3">
          <div className="flex flex-wrap gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-[13px] whitespace-nowrap transition-all border ${
                  activeFilter === cat.id
                    ? "bg-telo-navy text-white border-telo-navy"
                    : "bg-white text-telo-navy border-telo-light-gray hover:border-telo-blue/30"
                }`}
                style={{ fontWeight: 500 }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Treatment Grid */}
      <section className="py-12 lg:py-16 bg-telo-off-white min-h-[60vh]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <StaggerItem key={item.slug}>
                <div className="bg-white rounded-2xl overflow-hidden border border-telo-light-gray hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
                  {/* Placeholder image area */}
                  <div className="aspect-square bg-telo-off-white flex items-center justify-center relative">
                    <span className="text-telo-gray text-[11px] uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className={`inline-block self-start px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-[0.08em] mb-3 ${catColorMap[item.categoryId] || "bg-telo-blue/10 text-telo-blue"}`} style={{ fontWeight: 500 }}>
                      {item.category}
                    </span>
                    <h3 className="text-telo-navy text-[17px] mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{item.name}</h3>
                    <p className="text-telo-gray text-[14px] mb-3 flex-1" style={{ lineHeight: 1.6 }}>{item.desc}</p>

                    {/* Formulation badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.formulations.map((f) => (
                        <span key={f} className="px-2 py-0.5 bg-telo-off-white rounded text-[11px] text-telo-navy border border-telo-light-gray">{f}</span>
                      ))}
                    </div>

                    <p className="text-telo-gray text-[12px] mb-4" style={{ fontFamily: "var(--font-mono)" }}>{item.dosing}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-telo-light-gray">
                      <p className="text-telo-orange text-[18px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>{item.price}</p>
                      <div className="flex items-center gap-3">
                        <Link to="/get-started" className="px-4 py-2 bg-telo-orange text-white rounded-full text-[12px] hover:bg-telo-light-orange transition-colors" style={{ fontWeight: 500 }}>
                          Get Started
                        </Link>
                        <Link to={`/protocols/${item.slug}`} className="text-telo-blue text-[12px] hover:underline" style={{ fontWeight: 500 }}>
                          Learn More &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-telo-navy">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[24px] lg:text-[32px] text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.2 }}>
              Not sure where to start?
            </h2>
            <p className="text-white/50 text-[15px] mb-8 max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
              Take our 5-minute health assessment and we'll recommend the right protocol for your goals.
            </p>
            <Link to="/get-started" className="inline-flex items-center gap-2 px-10 py-4 bg-telo-orange text-white rounded-full text-[16px] hover:bg-telo-light-orange transition-all" style={{ fontWeight: 500 }}>
              Start Your Assessment <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
