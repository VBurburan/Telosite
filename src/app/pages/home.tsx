import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Star,
  Quote,
  X as XIcon,
  Check,
  FlaskConical,
  Stethoscope,
  Package,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/scroll-reveal";
import { DashboardMockup } from "../components/dashboard-mockup";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─── Image Constants ─── */
const HERO_PORTRAIT = "https://images.unsplash.com/photo-1593215303222-24d14b9b0f8a?w=960&h=1120&fit=crop&crop=faces";
const PROGRAM_1 = "https://images.unsplash.com/photo-1758798458635-f01402b40919?w=800&h=600&fit=crop";
const PROGRAM_2 = "https://images.unsplash.com/photo-1734668488418-ad1024e97e6d?w=800&h=600&fit=crop";
const PROGRAM_3 = "https://images.unsplash.com/photo-1707257969667-68804d47f5da?w=800&h=600&fit=crop";
const HOW_IMGS = [
  "https://images.unsplash.com/photo-1635764131814-b980e291754a?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1618229745783-20e7b07793e1?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1731224365269-bdc0191583d4?w=800&h=600&fit=crop",
];
const MOSAIC_IMGS = [
  "https://images.unsplash.com/photo-1618229745783-20e7b07793e1?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1760594387039-8db5aa19c06a?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1616291969714-c7776d1a167b?w=600&h=400&fit=crop",
];
const SCIENCE_IMG = "https://images.unsplash.com/photo-1764268602056-2e0adb1f12bc?w=800&h=600&fit=crop";
const CTA_IMG = "https://images.unsplash.com/photo-1758523417905-7b388f8a68b7?w=1400&h=600&fit=crop&crop=center";

/* ────────────────────────────────────────────────────────────────────
   SECTION 1 — Hero (2-column, asymmetric)
   ──────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="pt-[72px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-telo-orange/10 text-telo-orange text-[13px] mb-6" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Science-Backed Longevity Care
            </span>

            <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] text-telo-navy mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
              Your biology is your blueprint.{" "}
              <span className="text-telo-orange">We help you read it.</span>
            </h1>

            <p className="text-telo-text-secondary text-[17px] lg:text-[18px] mb-10 max-w-lg" style={{ lineHeight: 1.7 }}>
              Telo combines diagnostic testing, genetic analysis, and protocol-driven management to help you age on your own terms.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-telo-orange text-white rounded-full text-[15px] hover:bg-telo-light-orange transition-all"
                style={{ fontWeight: 500 }}
              >
                Start Your Assessment <ArrowRight size={16} />
              </Link>
              <Link
                to="/protocols"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-telo-navy text-telo-navy rounded-full text-[15px] hover:bg-telo-navy hover:text-white transition-all"
                style={{ fontWeight: 500 }}
              >
                Explore Treatments
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-telo-text-secondary text-[13px]">
              <span className="flex items-center gap-2"><FlaskConical size={15} className="text-telo-orange" /> Blood + Genetic Testing</span>
              <span className="flex items-center gap-2"><Stethoscope size={15} className="text-telo-orange" /> Physician-Led Protocols</span>
              <span className="flex items-center gap-2"><Package size={15} className="text-telo-orange" /> Delivered to Your Door</span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[480/560]">
              <ImageWithFallback
                src={HERO_PORTRAIT}
                alt="Person in natural light, embodying wellness and vitality"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating overlay card */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg border border-telo-light-gray max-w-[220px]">
              <p className="text-[10px] uppercase tracking-[0.08em] text-telo-orange mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                Personalized Protocol
              </p>
              <p className="text-telo-navy text-[14px]" style={{ fontWeight: 600 }}>Rapamycin 5mg/week</p>
              <div className="mt-2 w-full h-[2px] bg-telo-light-gray rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-telo-blue rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 2 — Trust Marquee
   ──────────────────────────────────────────────────────────────────── */
function TrustMarquee() {
  const items = [
    "Physician-Led Protocols",
    "50+ Biomarkers Tracked",
    "Genetic + Blood Testing",
    "Compounding Pharmacy Partner",
    "Personalized Treatment Plans",
    "Telehealth Consultations",
    "Monthly Lab Monitoring",
    "Cancel Anytime",
  ];
  const doubledItems = [...items, ...items];

  return (
    <section className="bg-[#F0F2F5] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubledItems.map((item, i) => (
          <span key={i} className="flex items-center gap-2 mx-6 text-telo-navy text-[13px]" style={{ fontWeight: 500 }}>
            <CheckCircle2 size={14} className="text-telo-orange shrink-0" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 3 — Personal Care Statement + Stats
   ──────────────────────────────────────────────────────────────────── */
function PersonalCareStatement() {
  const stats = [
    { num: "3", label: "diagnostic inputs", desc: "Blood, genetic, and symptom data power every protocol." },
    { num: "50+", label: "biomarkers tracked", desc: "Comprehensive labs give your physician full visibility." },
    { num: "1:1", label: "physician oversight", desc: "Every prescription reviewed by a licensed clinician." },
    { num: "\u221E", label: "protocol adjustments", desc: "Your plan evolves as your data does." },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-[24px] lg:text-[32px] text-telo-navy mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.3 }}>
            There's nothing more personal than your biology, which is why your Telo care team uses lab testing, genetic data, and clinical protocols to build a plan as unique as you are.
          </h2>
          <Link to="/protocols" className="inline-flex items-center gap-2 text-telo-blue text-[15px] hover:gap-3 transition-all mb-14">
            Learn about our protocols <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="bg-telo-off-white rounded-2xl p-6 border border-telo-light-gray text-center h-full">
                <p className="text-[40px] text-telo-orange mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>{s.num}</p>
                <p className="text-telo-navy text-[15px] mb-2" style={{ fontWeight: 600 }}>{s.label}</p>
                <p className="text-telo-gray text-[13px]" style={{ lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 4 — Programs (3 large cards)
   ──────────────────────────────────────────────────────────────────── */
function ProgramsSection() {
  const programs = [
    {
      eyebrow: "Slow aging at the source.",
      title: "Longevity & Anti-Aging",
      body: "Target mTOR, autophagy, and biological age with evidence-based protocols including rapamycin, metformin, and LDN.",
      img: PROGRAM_1,
      alt: "Vibrant active person in their 50s",
      href: "/protocols#longevity",
    },
    {
      eyebrow: "Sustainable results, not crash diets.",
      title: "Weight Optimization",
      body: "GLP-1 therapies with glycine, B12, and physician monitoring for lasting metabolic change.",
      img: PROGRAM_2,
      alt: "Person in athletic wear with confident pose",
      href: "/protocols#weight",
    },
    {
      eyebrow: "Energy from the inside out.",
      title: "Cellular Energy & NAD+",
      body: "Restore mitochondrial function and cellular vitality with NAD+, methylene blue, and glutathione.",
      img: PROGRAM_3,
      alt: "Person stretching at sunrise",
      href: "/protocols#energy",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-telo-off-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-[32px] lg:text-[42px] text-telo-navy mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}>
              Protocols built for your goals
            </h2>
            <p className="text-telo-text-secondary text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              We combine diagnostics, physician guidance, and compounding pharmacy fulfillment to address root causes — not just symptoms.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <StaggerItem key={p.title}>
              <Link to={p.href} className="block bg-white rounded-2xl overflow-hidden border border-telo-light-gray hover:shadow-lg transition-all duration-300 h-full group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-telo-orange text-[13px] mb-2" style={{ fontWeight: 500 }}>{p.eyebrow}</p>
                  <h3 className="text-telo-navy text-[20px] mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{p.title}</h3>
                  <p className="text-telo-text-secondary text-[14px] mb-4" style={{ lineHeight: 1.7 }}>{p.body}</p>
                  <span className="inline-flex items-center gap-1 text-telo-blue text-[14px] group-hover:gap-2 transition-all" style={{ fontWeight: 500 }}>
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 5 — Treatments Carousel
   ──────────────────────────────────────────────────────────────────── */
const allTreatments = [
  { name: "Rapamycin (Sirolimus)", slug: "rapamycin", cat: "Longevity", desc: "Target mTOR to slow biological aging at the cellular level.", price: "$___/mo" },
  { name: "Metformin XR", slug: "metformin", cat: "Longevity", desc: "Improve insulin sensitivity and activate cellular repair pathways.", price: "$___/mo" },
  { name: "Low Dose Naltrexone", slug: "ldn", cat: "Longevity", desc: "Modulate immune function and reduce systemic inflammation.", price: "$___/mo" },
  { name: "NAD+", slug: "nad-plus", cat: "Energy", desc: "Restore the coenzyme that powers every cell in your body.", price: "$___/mo" },
  { name: "Methylene Blue", slug: "methylene-blue", cat: "Energy", desc: "Support mitochondrial energy for sharper cognition and vitality.", price: "$___/mo" },
  { name: "Glutathione", slug: "glutathione", cat: "Energy", desc: "The body's master antioxidant for cellular protection and detox.", price: "$___/mo" },
  { name: "Tirzepatide + Glycine + B12", slug: "tirzepatide", cat: "Weight", desc: "Dual GIP/GLP-1 with glycine for lean mass and B12 for energy.", price: "$___/mo" },
  { name: "Semaglutide + Glycine + B12", slug: "semaglutide", cat: "Weight", desc: "GLP-1 therapy enhanced with glycine and B12 for metabolic support.", price: "$___/mo" },
  { name: "Liraglutide + B12", slug: "liraglutide", cat: "Weight", desc: "Daily GLP-1 for steady appetite regulation and metabolic optimization.", price: "$___/mo" },
  { name: "B12/MIC Lipotropic", slug: "b12-mic", cat: "Weight", desc: "Lipotropic blend supporting fat metabolism between GLP-1 doses.", price: "$___/mo" },
  { name: "Tadalafil (Daily)", slug: "tadalafil", cat: "Sexual Health", desc: "Low-dose daily therapy for improved blood flow and erectile function.", price: "$___/mo" },
  { name: "Enclomiphene Citrate", slug: "enclomiphene", cat: "Hormonal", desc: "Stimulate natural testosterone production without exogenous hormones.", price: "$___/mo" },
  { name: "Telomere Length Testing", slug: "telomere-testing", cat: "Diagnostics", desc: "Measure your biological age through telomere analysis.", price: "$___" },
  { name: "Comprehensive Blood Panel", slug: "blood-panel", cat: "Diagnostics", desc: "Full metabolic, hormonal, and inflammatory picture.", price: "$___" },
  { name: "Genetic Testing", slug: "genetic-testing", cat: "Diagnostics", desc: "Pharmacogenomic + health risk profiling to personalize your protocol.", price: "$___" },
];

const catFilters = ["All", "Longevity", "Weight", "Energy", "Sexual Health", "Hormonal", "Diagnostics"];

function TreatmentsCarousel() {
  const [activeCat, setActiveCat] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const filtered = activeCat === "All" ? allTreatments : allTreatments.filter((t) => t.cat === activeCat);

  const scroll = (dir: number) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="text-[12px] uppercase tracking-[0.08em] text-telo-blue mb-3" style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>Treatments</p>
              <h2 className="text-[28px] lg:text-[36px] text-telo-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Our treatment catalog</h2>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => scroll(-1)} aria-label="Previous" className="w-10 h-10 rounded-full border border-telo-light-gray flex items-center justify-center hover:bg-telo-off-white transition-colors">
                <ArrowLeft size={18} className="text-telo-navy" />
              </button>
              <button onClick={() => scroll(1)} aria-label="Next" className="w-10 h-10 rounded-full border border-telo-light-gray flex items-center justify-center hover:bg-telo-off-white transition-colors">
                <ArrowRight size={18} className="text-telo-navy" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {catFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full text-[13px] transition-all border ${
                activeCat === cat ? "bg-telo-navy text-white border-telo-navy" : "bg-white text-telo-navy border-telo-light-gray hover:border-telo-blue/30"
              }`}
              style={{ fontWeight: 500 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable cards */}
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {filtered.map((t) => (
            <div key={t.slug} className="flex-shrink-0 w-[280px] snap-start bg-telo-off-white rounded-2xl border border-telo-light-gray overflow-hidden group hover:shadow-md transition-all">
              <div className="aspect-square bg-telo-light-gray/50 flex items-center justify-center">
                <span className="text-telo-gray text-[11px] uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>{t.cat}</span>
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.08em] text-telo-orange mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>{t.cat}</p>
                <h3 className="text-telo-navy text-[16px] mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{t.name}</h3>
                <p className="text-telo-gray text-[13px] mb-4" style={{ lineHeight: 1.6 }}>{t.desc}</p>
                <p className="text-telo-orange text-[16px] mb-4" style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>{t.price}</p>
                <div className="flex items-center gap-3">
                  <Link to="/get-started" className="px-4 py-2 bg-telo-orange text-white rounded-full text-[13px] hover:bg-telo-light-orange transition-colors" style={{ fontWeight: 500 }}>
                    Get Started
                  </Link>
                  <Link to={`/protocols/${t.slug}`} className="text-telo-blue text-[13px] hover:underline" style={{ fontWeight: 500 }}>
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 6 — Dashboard / App Section
   ──────────────────────────────────────────────────────────────────── */
function DashboardSection() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const tabs = ["Dashboard", "Lab Results", "Protocols", "Messaging", "Tracking"];
  const tabDescs: Record<string, string> = {
    Dashboard: "Your Telo dashboard keeps all your health data in one place — biomarker trends, protocol details, physician messages, and upcoming lab orders.",
    "Lab Results": "View detailed lab results with trend analysis, optimal ranges, and physician interpretations all in one place.",
    Protocols: "Track your active protocols, medication schedules, dosing history, and adherence metrics.",
    Messaging: "Communicate directly with your care team for questions, adjustments, and clinical guidance.",
    Tracking: "Monitor your biological age trajectory, biomarker improvements, and protocol effectiveness over time.",
  };

  return (
    <section className="py-20 lg:py-24 bg-telo-navy relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-[28px] lg:text-[38px] text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}>
              A full-service approach to your long-term health
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-[13px] transition-all ${
                    activeTab === tab ? "bg-telo-blue text-white" : "text-white/50 hover:text-white border border-white/10"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className="text-white/50 text-[15px] max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
              {tabDescs[activeTab]}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <DashboardMockup />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 7 — Personal Care Mosaic
   ──────────────────────────────────────────────────────────────────── */
function PersonalCareMosaic() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo grid */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/2]">
                  <ImageWithFallback src={MOSAIC_IMGS[0]} alt="Lab testing kit at home" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <ImageWithFallback src={MOSAIC_IMGS[2]} alt="Active couple hiking outdoors" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <ImageWithFallback src={MOSAIC_IMGS[1]} alt="Physician consultation" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/2]">
                  <ImageWithFallback src={MOSAIC_IMGS[3]} alt="Compounding pharmacy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.2}>
            <h2 className="text-[28px] lg:text-[38px] text-telo-navy mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}>
              Personal care for optimal health
            </h2>
            <p className="text-telo-text-secondary text-[16px] mb-8" style={{ lineHeight: 1.8 }}>
              Your dedicated care team analyzes your labs, personalizes your protocols, tracks your progress, and adjusts your plan — so you always have a clear path forward.
            </p>
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-telo-blue text-[15px] hover:gap-3 transition-all" style={{ fontWeight: 500 }}>
              Learn More <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 8 — How It Works
   ──────────────────────────────────────────────────────────────────── */
function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "Complete your online assessment", desc: "Tell us about your health goals, medical history, and what you're looking to achieve.", img: HOW_IMGS[0], alt: "Person filling out assessment on laptop" },
    { title: "Get your diagnostic testing", desc: "We send blood and genetic testing kits to your door. Complete them at home or at a local lab.", img: HOW_IMGS[1], alt: "Lab kit delivery at home" },
    { title: "Receive your personalized protocol", desc: "Your physician reviews your results and builds a treatment plan tailored to your biology.", img: HOW_IMGS[2], alt: "Doctor on video consultation" },
    { title: "Track, adjust, optimize", desc: "Monitor your progress through your dashboard. Your care team adjusts your plan as your data evolves.", img: HOW_IMGS[3], alt: "Person checking health tracking app" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-telo-off-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-[12px] uppercase tracking-[0.08em] text-telo-blue mb-3" style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>becoming a patient</p>
          <h2 className="text-[28px] lg:text-[38px] text-telo-navy mb-12" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}>
            Your journey to better health starts here
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps list */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-5 rounded-xl transition-all border ${
                  activeStep === i ? "bg-white border-telo-blue/20 shadow-sm" : "border-transparent hover:bg-white/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] shrink-0 ${
                    activeStep === i ? "bg-telo-orange text-white" : "bg-telo-light-gray text-telo-gray"
                  }`} style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-telo-navy text-[16px] mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{step.title}</h3>
                    <p className="text-telo-gray text-[14px]" style={{ lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Image */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <ImageWithFallback
                src={steps[activeStep].img}
                alt={steps[activeStep].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 9 — Testimonials
   ──────────────────────────────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The dashboard changed how I think about my health. Seeing my biological age drop over six months was the proof I needed.",
      name: "Michael R.",
      badge: "Rapamycin Protocol",
    },
    {
      quote: "Telo's tirzepatide protocol with glycine and B12 was the first GLP-1 experience where I didn't feel terrible. The monitoring made all the difference.",
      name: "Sarah K.",
      badge: "Weight Optimization",
    },
    {
      quote: "Finally a longevity platform that treats me like a patient, not a subscription. The genetic testing opened my eyes.",
      name: "David L.",
      badge: "Genetic Testing",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-telo-orange fill-telo-orange" />
              ))}
            </div>
            <p className="text-telo-gray text-[13px] mb-3" style={{ fontFamily: "var(--font-mono)" }}>Patient Reviews</p>
            <h2 className="text-[28px] lg:text-[38px] text-telo-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}>
              Hear from our patients
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-telo-off-white rounded-2xl p-6 lg:p-8 border border-telo-light-gray h-full flex flex-col">
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-telo-orange fill-telo-orange" />
                  ))}
                </div>
                <Quote size={20} className="text-telo-orange/30 mb-3" />
                <p className="text-telo-navy text-[15px] mb-6 flex-1" style={{ lineHeight: 1.7 }}>
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-telo-light-gray">
                  <p className="text-telo-navy text-[14px]" style={{ fontWeight: 600 }}>— {t.name}</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-telo-orange/10 text-telo-orange text-[11px]" style={{ fontWeight: 500 }}>
                    {t.badge}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 10 — Comparison Table
   ──────────────────────────────────────────────────────────────────── */
function ComparisonSection() {
  const rows = [
    { label: "Comprehensive", telo: "Blood, genetic, and telomere testing", other: "Basic questionnaire only" },
    { label: "Validated", telo: "6-month and 12-month retesting", other: "No outcome tracking" },
    { label: "Responsive", telo: "Protocol adjustments based on data", other: "Fixed prescriptions" },
    { label: "Personalized", telo: "DNA-informed dosing", other: "One-size-fits-all" },
    { label: "Measurable", telo: "Biological age trending", other: "No measurable outcomes" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-telo-off-white">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-[28px] lg:text-[36px] text-telo-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}>
              Why Telo is different
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-2xl border border-telo-light-gray overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-telo-light-gray">
              <div className="p-4" />
              <div className="p-4 text-center bg-telo-navy">
                <p className="text-white text-[14px]" style={{ fontWeight: 600 }}>Telo Wellness</p>
              </div>
              <div className="p-4 text-center">
                <p className="text-telo-gray text-[14px]" style={{ fontWeight: 500 }}>Others</p>
              </div>
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-telo-light-gray" : ""}`}>
                <div className="p-4">
                  <p className="text-telo-navy text-[14px]" style={{ fontWeight: 600 }}>{row.label}</p>
                  <p className="text-telo-gray text-[12px] hidden sm:block">{row.telo}</p>
                </div>
                <div className="p-4 flex items-center justify-center bg-telo-navy/[0.02]">
                  <Check size={20} className="text-telo-green" />
                </div>
                <div className="p-4 flex items-center justify-center">
                  <XIcon size={18} className="text-telo-red/50" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 11 — Science / Research
   ──────────────────────────────────────────────────────────────────── */
function ScienceSection() {
  const articles = [
    { title: "Rapamycin Dosing for Longevity: What Emerging Human Research Reveals", time: "8 min read" },
    { title: "NAD+ Precursors and Mitochondrial Function in Aging Adults", time: "6 min read" },
    { title: "GLP-1 Receptor Agonists Beyond Weight Loss: Cardiovascular and Neuroprotective Effects", time: "10 min read" },
    { title: "Telomere Length as a Biomarker of Biological Age: Current Evidence", time: "7 min read" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-[28px] lg:text-[38px] text-telo-navy mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}>
              We study the studies
            </h2>
            <p className="text-telo-text-secondary text-[16px] max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
              Telo's clinical team continuously reviews the latest longevity research to inform your protocols.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((a) => (
            <StaggerItem key={a.title}>
              <div className="bg-telo-off-white rounded-2xl p-6 border border-telo-light-gray hover:border-telo-blue/20 hover:shadow-sm transition-all cursor-pointer group h-full flex flex-col">
                <div className="w-full h-32 rounded-xl bg-telo-light-gray/50 mb-5 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback src={SCIENCE_IMG} alt="Scientific research" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                <h3 className="text-telo-navy text-[16px] mb-3 flex-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.4 }}>{a.title}</h3>
                <p className="text-telo-gray text-[12px]" style={{ fontFamily: "var(--font-mono)" }}>{a.time}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 12 — Mission Band
   ──────────────────────────────────────────────────────────────────── */
function MissionBand() {
  return (
    <section className="py-20 lg:py-28 bg-telo-navy">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-telo-orange text-[16px] mb-4">(Follow the science)</p>
          <h2 className="text-[24px] lg:text-[36px] text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.3 }}>
            We built Telo to make cutting-edge longevity science accessible — through real diagnostics, real physicians, and real protocols you can trust.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   SECTION 13 — Bottom CTA Band
   ──────────────────────────────────────────────────────────────────── */
function BottomCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback src={CTA_IMG} alt="Wellness and vitality" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-telo-navy/85" />
      </div>
      <div className="max-w-[720px] mx-auto px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-[28px] lg:text-[38px] text-white mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}>
            Ready to take control of how you age?
          </h2>
          <p className="text-white/60 text-[16px] mb-10 max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
            Start with a free online assessment. Your personalized protocol is a few steps away.
          </p>
          <Link to="/get-started" className="inline-flex items-center gap-2 px-10 py-4 bg-telo-orange text-white rounded-full text-[16px] hover:bg-telo-light-orange transition-all" style={{ fontWeight: 500 }}>
            Start Your Assessment <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   HOME PAGE ASSEMBLY
   ──────────────────────────────────────────────────────────────────── */
export function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustMarquee />
      <PersonalCareStatement />
      <ProgramsSection />
      <TreatmentsCarousel />
      <DashboardSection />
      <PersonalCareMosaic />
      <HowItWorksSection />
      <TestimonialsSection />
      <ComparisonSection />
      <ScienceSection />
      <MissionBand />
      <BottomCTA />
    </div>
  );
}