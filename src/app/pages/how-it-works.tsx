import { Link } from "react-router";
import {
  ClipboardList,
  TestTube,
  Stethoscope,
  Truck,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  RefreshCcw,
  Clock,
  MessageSquare,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/scroll-reveal";
import { ChromosomeIcon } from "../components/telo-logo";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const HERO_IMG = "https://images.unsplash.com/photo-1764111586062-516dafebeb14?w=960&h=640&fit=crop";
const PHASE_IMGS = [
  "https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1768498993096-6db9950eeb1b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1758101512269-660feabf64fd?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1758523670564-d1d6a734dc0b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1647365368632-90028b7faa23?w=800&h=600&fit=crop",
];

const phases = [
  {
    phase: "01",
    icon: <ClipboardList size={28} />,
    title: "Intake & Eligibility",
    subtitle: "Your journey starts with understanding where you are.",
    color: "bg-telo-blue",
    items: [
      "Comprehensive online health questionnaire",
      "Medical history review and documentation",
      "Contraindication screening for all protocol categories",
      "State eligibility verification for telemedicine",
      "Consent and telemedicine acknowledgements",
      "Primary health goal selection and prioritization",
    ],
    detail:
      "Our intake is designed by physicians to gather the clinical information needed for safe, effective protocol design. It takes approximately 15 minutes and covers your medical history, current medications, lifestyle factors, and health goals.",
  },
  {
    phase: "02",
    icon: <TestTube size={28} />,
    title: "Diagnostics",
    subtitle: "The data layer that drives everything.",
    color: "bg-telo-orange",
    items: [
      "At-home lab kit shipped to your door",
      "Comprehensive blood panel (40+ biomarkers)",
      "Telomere length test via qPCR assay",
      "Optional genetic panel through GeneMetrics/Full Metrics",
      "Results processed through CLIA-certified labs",
      "Data integrated into your personalized patient profile",
    ],
    detail:
      "Your lab kit includes everything needed for a mobile phlebotomist blood draw and telomere sample collection. Results typically process within 7-10 business days and are immediately available in your dashboard.",
  },
  {
    phase: "03",
    icon: <Stethoscope size={28} />,
    title: "Clinical Review & Protocol Assignment",
    subtitle: "Physician expertise meets algorithmic precision.",
    color: "bg-telo-green",
    items: [
      "MDI physicians review all diagnostic results",
      "Good Faith Exam / telehealth visit as required",
      "Protocol assigned based on labs + genetics + history + goals",
      "Medication selection with dosing and titration schedules",
      "Monitoring schedule and stop/escalation criteria defined",
      "Follow-up cadence and retest windows established",
    ],
    detail:
      "Our clinical team doesn't just read your results — they integrate them. Lab values, genetic signals, medical history, and your personal goals all inform a protocol that's uniquely yours. Every protocol includes clear monitoring criteria and safety guidelines.",
  },
  {
    phase: "04",
    icon: <Truck size={28} />,
    title: "Fulfillment & Onboarding",
    subtitle: "From protocol to your doorstep.",
    color: "bg-telo-deep-blue",
    items: [
      "Medications compounded and shipped via Valiant Rx",
      "Comprehensive onboarding materials and welcome kit",
      "Injection tutorials and technique guides (if applicable)",
      "Detailed dosing schedule with calendar integration",
      "Dashboard access activated with baseline data loaded",
      "Care team introduction and communication channels",
    ],
    detail:
      "Valiant Rx compounds your medications to exact specifications. Shipping is discreet and temperature-controlled where required. Your onboarding includes video guides, a dosing calendar, and direct messaging access to your care team.",
  },
  {
    phase: "05",
    icon: <BarChart3 size={28} />,
    title: "Monitoring & Retesting",
    subtitle: "The feedback loop that proves what works.",
    color: "bg-telo-navy",
    items: [
      "Ongoing tracking via your longevity dashboard",
      "Symptom logging and wellness check-ins",
      "Adverse effect reporting with clinical escalation",
      "Medication adherence tracking",
      "6-month retest with full biomarker comparison",
      "Protocol adjustment per algorithm + physician oversight",
      "12-month comprehensive review and trajectory validation",
    ],
    detail:
      "This is where Telo is fundamentally different. We don't prescribe and disappear. Your 6-month retest generates a before/after comparison across every biomarker — including telomere length. At 12 months, we validate your trajectory and refine your protocol for the year ahead.",
  },
];

export function HowItWorksPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero — Photography-First */}
      <section className="relative overflow-hidden bg-telo-navy">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Person in morning wellness routine"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-telo-navy via-telo-navy/90 to-telo-navy/60" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-24 lg:py-[120px] relative z-10">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p
                className="text-telo-orange text-[13px] uppercase tracking-[0.08em] mb-4"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                How It Works
              </p>
              <h1
                className="text-[36px] lg:text-[52px] text-white mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em" }}
              >
                From baseline to biological optimization
              </h1>
              <p className="text-white/70 text-[17px] max-w-lg" style={{ lineHeight: 1.8 }}>
                Telo Wellness follows a structured, physician-guided process designed to measure, intervene, and
                validate. Every step is connected by data — your data.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Timeline Bar — Desktop */}
      <section className="py-6 bg-white border-b border-telo-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-telo-light-gray -translate-y-1/2" />
            {phases.map((p) => (
              <div key={p.phase} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full ${p.color} text-white flex items-center justify-center text-[14px] shadow-lg`}
                  style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}
                >
                  {p.phase}
                </div>
                <span
                  className="mt-2 text-telo-navy text-[12px] text-center max-w-[100px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {p.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Details — Alternating Layout with Photos */}
      <section className="py-20 lg:py-[120px] bg-telo-off-white" aria-label="Journey phases">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-[120px]">
            {phases.map((p, i) => (
              <ScrollReveal key={p.phase}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                  {/* Text column */}
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${p.color} text-white flex items-center justify-center`}>
                        {p.icon}
                      </div>
                      <span className="text-telo-orange text-[12px]" style={{ fontFamily: "var(--font-mono)" }}>
                        Phase {p.phase}
                      </span>
                    </div>
                    <h2
                      className="text-[24px] lg:text-[32px] text-telo-navy mb-2"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
                    >
                      {p.title}
                    </h2>
                    <p className="text-telo-blue text-[16px] mb-4" style={{ fontWeight: 500 }}>
                      {p.subtitle}
                    </p>
                    <p className="text-telo-gray text-[15px] mb-6" style={{ lineHeight: 1.7 }}>
                      {p.detail}
                    </p>

                    <ul className="space-y-2.5" role="list">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-telo-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-telo-navy text-[14px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image column */}
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                      <ImageWithFallback
                        src={PHASE_IMGS[i]}
                        alt={`Phase ${p.phase}: ${p.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 lg:py-[120px] bg-white" aria-label="What makes this different">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p
                className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                The Difference
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                What makes this different
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <RefreshCcw size={24} />,
                title: "Closed-Loop Tracking",
                desc: "We don't prescribe and disappear. Every protocol is validated by retesting — so you know exactly what's working.",
              },
              {
                icon: <Clock size={24} />,
                title: "Longitudinal Data",
                desc: "Your baseline isn't a snapshot — it's the starting point of a trajectory you can track for years.",
              },
              {
                icon: <MessageSquare size={24} />,
                title: "Continuous Access",
                desc: "Messaging access to your care team, symptom logging, and adverse effect reporting keep you connected between visits.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-8 border border-telo-light-gray h-full shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-telo-orange/10 flex items-center justify-center text-telo-orange mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-telo-navy text-[18px] mb-3"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-telo-gray text-[14px]" style={{ lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20 lg:py-[120px] bg-telo-navy text-center relative overflow-hidden"
        aria-label="Get started"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-telo-navy to-[#1E3158]" />
        <div className="max-w-[600px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <ChromosomeIcon size={40} className="mx-auto mb-6 opacity-60" />
            <h2
              className="text-[28px] lg:text-[34px] text-white mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Ready to see what your biology says?
            </h2>
            <p className="text-white/50 text-[15px] mb-8 max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
              Start with your free online assessment. Your personalized protocol is a few steps away.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-telo-orange text-white rounded-full text-[15px] hover:bg-telo-light-orange transition-all shadow-lg"
              style={{ fontWeight: 500 }}
            >
              Start Your Baseline <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
