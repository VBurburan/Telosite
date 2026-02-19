import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Shield,
  CheckCircle2,
  Star,
  Quote,
  Truck,
  FlaskConical,
  Stethoscope,
  BarChart3,
  RefreshCw,
  Flame,
  Brain,
  Zap,
  Activity,
} from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/scroll-reveal";
import { getTreatmentBySlug, treatments, treatmentImages } from "../components/treatment-data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─── FAQ Accordion ─── */
function FAQAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-telo-light-gray rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-telo-navy text-[15px] pr-4" style={{ fontWeight: 500 }}>{q}</span>
        <ChevronDown
          size={18}
          className={`text-telo-gray shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-4 text-telo-gray text-[14px]" style={{ lineHeight: 1.7 }}>
          {a}
        </p>
      </motion.div>
    </div>
  );
}

/* ─── Main Treatment Page ─── */
export function TreatmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = getTreatmentBySlug(slug || "");

  if (!treatment) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[32px] text-telo-navy mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
            Treatment not found
          </h1>
          <Link to="/protocols" className="text-telo-blue hover:underline">
            View all treatments
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = treatmentImages[treatment.slug];
  const isDiagnostic = treatment.category === "Diagnostics & Testing";
  const relatedTreatments = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 4);

  // Science benefits
  const scienceBenefits = [
    { icon: <Flame size={20} />, title: "Reduce inflammation", desc: "Addresses tissue-damaging inflammation linked to stiffness and limited mobility, supporting immune responses and long-term physical performance." },
    { icon: <Brain size={20} />, title: "Optimize brain longevity", desc: "Targets neuroinflammation and activates brain cell repair mechanisms to support memory and processing speed." },
    { icon: <Zap size={20} />, title: "Extend prime performance", desc: "Works at the cellular level to delay age-related deterioration, maintaining physical and cognitive capabilities longer." },
  ];

  // Included items
  const includedItems = [
    { icon: <Truck size={20} />, title: "Prescription & delivery", desc: "Health history reviewed by your care team, with pharmacy-prepared medication delivered to your door." },
    { icon: <FlaskConical size={20} />, title: "Lab testing", desc: "Included at no extra cost. Track key biomarkers tied to metabolic and longevity health." },
    { icon: <Stethoscope size={20} />, title: "Clinical support", desc: "Licensed clinicians guide your protocol, answer questions, and adjust your plan." },
    { icon: <BarChart3 size={20} />, title: "Ongoing optimization", desc: "Your care team interprets results and makes data-informed dosing adjustments." },
  ];

  // Testimonials for this treatment
  const treatmentTestimonials = [
    { stars: 5, quote: "I feel like my inflammation is almost gone. I'm exercising more than before since my joints aren't hurting.", name: "Tiffany C." },
    { stars: 5, quote: "Seeing my biological age drop over six months was the proof I needed.", name: "Michael R." },
    { stars: 5, quote: "Great care when prescribing alongside frequent lab tests and detailed progress monitoring.", name: "James F." },
  ];

  return (
    <div className="pt-[72px]">
      {/* ── Section 1: Product Hero ── */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Link
            to="/protocols"
            className="inline-flex items-center gap-1.5 text-telo-gray text-[13px] mb-8 hover:text-telo-blue transition-colors"
          >
            <ArrowLeft size={14} /> All Treatments
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Image */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-telo-off-white aspect-[4/5]">
                <ImageWithFallback
                  src={heroImage}
                  alt={`${treatment.name} product`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Quote card */}
              <div className="mt-4 bg-telo-off-white rounded-xl p-5 border border-telo-light-gray">
                <Quote size={18} className="text-telo-orange/40 mb-2" />
                <p className="text-telo-navy text-[14px] italic mb-2" style={{ lineHeight: 1.6 }}>
                  "Nothing short of miraculous — it's been a game changer for my health."
                </p>
                <p className="text-telo-gray text-[12px]">— Michel S.</p>
              </div>
            </div>

            {/* Right — Details */}
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.08em] mb-4 ${treatment.categoryColor}`} style={{ fontWeight: 500 }}>
                {treatment.category}
              </span>
              <h1 className="text-[28px] lg:text-[36px] text-telo-navy mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.1 }}>
                {treatment.name}
              </h1>
              <p className="text-telo-text-secondary text-[16px] mb-8" style={{ lineHeight: 1.7 }}>
                {treatment.oneLiner}
              </p>

              {/* Benefit mini-cards */}
              <div className="space-y-3 mb-8">
                {scienceBenefits.slice(0, 3).map((b) => (
                  <div key={b.title} className="flex items-start gap-3 p-4 bg-telo-off-white rounded-xl border border-telo-light-gray">
                    <div className="w-9 h-9 rounded-lg bg-telo-orange/10 flex items-center justify-center text-telo-orange shrink-0">{b.icon}</div>
                    <div>
                      <p className="text-telo-navy text-[14px] mb-0.5" style={{ fontWeight: 600 }}>{b.title}</p>
                      <p className="text-telo-gray text-[13px]" style={{ lineHeight: 1.5 }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["Physician-Led", "Cancel Anytime", "Lab Monitoring Included", "Expert Dosing"].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 text-[12px] text-telo-gray">
                    <CheckCircle2 size={14} className="text-telo-green" /> {badge}
                  </span>
                ))}
              </div>

              <div className="border-t border-telo-light-gray pt-6 mb-6">
                <p className="text-telo-gray text-[13px] mb-1">Everything included: labs, medication, and ongoing optimization</p>
                <p className="text-telo-orange text-[28px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  Starting at $___/mo
                </p>
              </div>

              <Link
                to="/get-started"
                className="block w-full text-center py-4 bg-telo-orange text-white rounded-full text-[16px] hover:bg-telo-light-orange transition-all mb-3"
                style={{ fontWeight: 600 }}
              >
                GET STARTED
              </Link>
              <p className="text-telo-gray text-[12px] text-center">Physician review required. Results may vary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Science ── */}
      <section className="py-16 lg:py-20 bg-telo-off-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-[28px] lg:text-[36px] text-telo-navy mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                The science of aging starts at the cellular level
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {scienceBenefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="bg-white rounded-2xl p-6 border border-telo-light-gray h-full">
                  <div className="w-11 h-11 rounded-xl bg-telo-blue/8 flex items-center justify-center text-telo-blue mb-4">{b.icon}</div>
                  <h3 className="text-telo-navy text-[17px] mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{b.title}</h3>
                  <p className="text-telo-gray text-[14px]" style={{ lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center">
            <Link to="/get-started" className="inline-flex items-center gap-2 px-8 py-3.5 bg-telo-orange text-white rounded-full text-[15px] hover:bg-telo-light-orange transition-all shadow-sm" style={{ fontWeight: 500 }}>
              Begin Assessment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: Value Prop Banner ── */}
      <section className="py-16 lg:py-20 bg-telo-navy">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3" style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>Telo Patients Get More</p>
              <h2 className="text-[24px] lg:text-[32px] text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}>
                Expert-guided protocol, personalized with precision lab insights
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              "Precision dosing tailored to your biology",
              "Comprehensive lab work with aging analysis",
              "Ongoing physician oversight and coaching",
              "Continuous results tracking and optimization",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-telo-orange shrink-0 mt-0.5" />
                  <p className="text-white/80 text-[14px]" style={{ lineHeight: 1.6 }}>{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center">
            <Link to="/get-started" className="inline-flex items-center gap-2 px-8 py-3.5 bg-telo-orange text-white rounded-full text-[15px] hover:bg-telo-light-orange transition-all" style={{ fontWeight: 500 }}>
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Mechanism Deep Dive ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] uppercase tracking-[0.08em] text-telo-blue mb-3" style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>Going Deeper</p>
            <h2 className="text-[24px] lg:text-[32px] text-telo-navy mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              Cellular pathways are roads to peak performance
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {["Inflammation", "Cellular Renewal", "Metabolic Flexibility", "Autophagy Activation", "mTOR Regulation"].map((tag) => (
              <span key={tag} className="px-5 py-3 bg-telo-navy text-white rounded-full text-[14px]" style={{ fontWeight: 500 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: What It Does (from data) ── */}
      <section className="py-16 lg:py-20 bg-telo-off-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-[24px] lg:text-[32px] text-telo-navy mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              What {treatment.name} does
            </h2>
            {treatment.whatItDoes.map((p, i) => (
              <p key={i} className="text-telo-text-secondary text-[16px] mb-4" style={{ lineHeight: 1.8 }}>{p}</p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 6: How It Works (Mechanism) ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-[24px] lg:text-[32px] text-telo-navy mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              How it works
            </h2>
            {treatment.howItWorks.map((p, i) => (
              <p key={i} className="text-telo-text-secondary text-[16px] mb-4" style={{ lineHeight: 1.8 }}>{p}</p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 7: Your Protocol ── */}
      <section className="py-16 lg:py-20 bg-telo-off-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-[24px] lg:text-[32px] text-telo-navy mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              Your protocol
            </h2>
            {treatment.protocols.map((proto, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-telo-light-gray mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-telo-gray mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>Formulation</p>
                    <p className="text-telo-navy text-[15px]" style={{ fontWeight: 500 }}>{proto.formulation}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-telo-gray mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>Dosing</p>
                    <p className="text-telo-navy text-[15px]" style={{ fontWeight: 500 }}>{proto.dose}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-telo-gray mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>Included</p>
                  <ul className="space-y-1.5">
                    {proto.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-telo-text-secondary text-[14px]">
                        <CheckCircle2 size={14} className="text-telo-green shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-telo-gray mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>Pharmacy</p>
                  <p className="text-telo-navy text-[14px]">{proto.pharmacy}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 8: What's Included (4-card grid) ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-[24px] lg:text-[32px] text-telo-navy text-center mb-10" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              Included with your {treatment.name.split(" (")[0]} Protocol
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {includedItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-telo-off-white rounded-2xl p-6 border border-telo-light-gray h-full">
                  <div className="w-11 h-11 rounded-xl bg-telo-blue/8 flex items-center justify-center text-telo-blue mb-4">{item.icon}</div>
                  <h3 className="text-telo-navy text-[16px] mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{item.title}</h3>
                  <p className="text-telo-gray text-[13px]" style={{ lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center">
            <Link to="/get-started" className="inline-flex items-center gap-2 px-8 py-3.5 bg-telo-orange text-white rounded-full text-[15px] hover:bg-telo-light-orange transition-all shadow-sm" style={{ fontWeight: 500 }}>
              Get Ongoing Care <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 9: Stats Bar ── */}
      <section className="py-16 lg:py-20 bg-telo-navy">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[22px] lg:text-[28px] text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.2 }}>
              {treatment.name.split(" (")[0]} is powerful only when prescribed with precision.
            </h2>
            <Link to="/get-started" className="inline-flex items-center gap-2 px-8 py-3 bg-telo-orange text-white rounded-full text-[15px] hover:bg-telo-light-orange transition-all mb-10" style={{ fontWeight: 500 }}>
              Start Your Protocol <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "50+", label: "biomarkers tracked" },
              { num: "1:1", label: "physician oversight" },
              { num: "\u221E", label: "protocol adjustments" },
              { num: "24/7", label: "dashboard access" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center">
                  <p className="text-telo-orange text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>{s.num}</p>
                  <p className="text-white/60 text-[14px]">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Section 10: Safety ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-start gap-3 mb-6">
              <Shield size={24} className="text-telo-blue shrink-0 mt-1" />
              <h2 className="text-[24px] lg:text-[32px] text-telo-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                Safety & side effects
              </h2>
            </div>
            {treatment.safety.map((p, i) => (
              <p key={i} className="text-telo-text-secondary text-[15px] mb-4" style={{ lineHeight: 1.8 }}>{p}</p>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-telo-off-white rounded-2xl p-6 border border-telo-light-gray">
                <h3 className="text-telo-navy text-[16px] mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Who it's for</h3>
                <p className="text-telo-gray text-[14px]" style={{ lineHeight: 1.7 }}>{treatment.whoItsFor}</p>
              </div>
              <div className="bg-telo-off-white rounded-2xl p-6 border border-telo-light-gray">
                <h3 className="text-telo-navy text-[16px] mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Who it's not for</h3>
                <p className="text-telo-gray text-[14px]" style={{ lineHeight: 1.7 }}>{treatment.whoItsNotFor}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 11: Testimonials ── */}
      <section className="py-16 lg:py-20 bg-telo-off-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-[24px] lg:text-[32px] text-telo-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                What patients say
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatmentTestimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white rounded-2xl p-6 border border-telo-light-gray h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={14} className="text-telo-orange fill-telo-orange" />
                    ))}
                  </div>
                  <p className="text-telo-navy text-[14px] flex-1 mb-4" style={{ lineHeight: 1.7 }}>"{t.quote}"</p>
                  <p className="text-telo-gray text-[13px]" style={{ fontWeight: 500 }}>— {t.name}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Section 12: Related Treatments ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[12px] uppercase tracking-[0.08em] text-telo-blue mb-2" style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>Our Treatments</p>
                <h2 className="text-[24px] lg:text-[32px] text-telo-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Related treatments</h2>
              </div>
              <Link to="/protocols" className="text-telo-blue text-[14px] hover:underline hidden sm:block" style={{ fontWeight: 500 }}>
                View all <ArrowRight size={14} className="inline" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedTreatments.map((t) => (
              <Link
                key={t.slug}
                to={`/protocols/${t.slug}`}
                className="bg-telo-off-white rounded-2xl p-5 border border-telo-light-gray hover:border-telo-blue/20 hover:shadow-sm transition-all group"
              >
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider mb-3 ${t.categoryColor}`} style={{ fontWeight: 500 }}>
                  {t.category}
                </span>
                <h3 className="text-telo-navy text-[15px] mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{t.name}</h3>
                <p className="text-telo-gray text-[13px] mb-3" style={{ lineHeight: 1.5 }}>{t.oneLiner.slice(0, 80)}...</p>
                <span className="text-telo-blue text-[13px] group-hover:underline" style={{ fontWeight: 500 }}>Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 13: FAQ Accordion ── */}
      <section className="py-16 lg:py-20 bg-telo-off-white">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-[24px] lg:text-[32px] text-telo-navy mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              Frequently asked questions
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {treatment.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <FAQAccordion q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 14: Bottom CTA ── */}
      <section className="py-16 lg:py-20 bg-telo-navy">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[24px] lg:text-[32px] text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.2 }}>
              Ready to start your {treatment.name.split(" (")[0]} protocol?
            </h2>
            <p className="text-white/50 text-[15px] mb-8 max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
              Begin with your online assessment. Your physician will review your results and build a plan tailored to you.
            </p>
            <Link to="/get-started" className="inline-flex items-center gap-2 px-10 py-4 bg-telo-orange text-white rounded-full text-[16px] hover:bg-telo-light-orange transition-all" style={{ fontWeight: 600 }}>
              GET STARTED <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Sticky Bottom CTA Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-telo-light-gray z-40 py-3 px-4 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="hidden sm:block">
            <p className="text-telo-navy text-[15px]" style={{ fontWeight: 600 }}>{treatment.name.split(" (")[0]} Protocol</p>
            <p className="text-telo-gray text-[13px]">Starting at $___/month</p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link to="/get-started" className="flex-1 sm:flex-none text-center px-8 py-3 bg-telo-orange text-white rounded-full text-[14px] hover:bg-telo-light-orange transition-all" style={{ fontWeight: 600 }}>
              GET STARTED
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-5 text-[11px] text-telo-gray">
            <span>No hidden fees</span>
            <span>Personalized Protocols</span>
            <span>Free Shipping</span>
            <span>Physician-Led Care</span>
          </div>
        </div>
      </div>
    </div>
  );
}