import { Link } from "react-router";
import { ArrowRight, Shield, FlaskConical, Stethoscope, BarChart3, Users, MapPin } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/scroll-reveal";
import { ChromosomeIcon } from "../components/telo-logo";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const HERO_IMG = "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=1400&h=700&fit=crop";
const MISSION_IMG = "https://images.unsplash.com/photo-1758520705254-1e9d913d78ea?w=800&h=600&fit=crop";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Medical Officer",
    bio: "Board-certified internal medicine physician with 15 years in precision medicine. Previously led clinical programs at a top academic medical center. Fellowship in longevity medicine.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Michael Torres",
    title: "Founder & CEO",
    bio: "Serial entrepreneur in health technology. Previous exits in digital health and diagnostics. Driven by the conviction that biological aging should be measurable and manageable.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. James Wright",
    title: "Head of Diagnostics",
    bio: "PhD in molecular biology with expertise in telomere biology and epigenetic clocks. Published researcher with 20+ peer-reviewed papers on biological aging markers.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Priya Patel",
    title: "Clinical Protocol Lead",
    bio: "Endocrinologist with deep expertise in metabolic optimization and GLP-1 therapeutics. Designs and oversees all protocol algorithms and clinical decision frameworks.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    title: "VP of Engineering",
    bio: "Former engineering lead at a major health data platform. Built HIPAA-compliant systems serving millions of patients. Obsessed with data visualization and patient experience.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Elena Rodriguez",
    title: "Director of Patient Experience",
    bio: "10 years in concierge medicine operations. Ensures every Telo patient receives clinical-grade care with a human touch. Oversees onboarding, support, and care team operations.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: <BarChart3 size={24} />,
    title: "Data-Driven",
    desc: "Every protocol decision is informed by objective biomarker data. We don't guess — we measure.",
  },
  {
    icon: <Stethoscope size={24} />,
    title: "Physician-Led",
    desc: "Licensed physicians oversee every protocol. Clinical rigor is not optional — it's foundational.",
  },
  {
    icon: <Shield size={24} />,
    title: "Outcome-Tracked",
    desc: "Retesting at 6 and 12 months validates what's working. The feedback loop is the product.",
  },
  {
    icon: <Users size={24} />,
    title: "Patient-Centered",
    desc: "Your goals, your biology, your pace. Protocols are personalized because people are not averages.",
  },
];

export function AboutPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero — Photography-First */}
      <section className="relative overflow-hidden bg-telo-navy">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Diverse medical professionals"
            className="w-full h-full object-cover opacity-25"
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
                About Telo
              </p>
              <h1
                className="text-[36px] lg:text-[52px] text-white mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                Making biological aging visible, measurable, and{" "}
                <span className="text-telo-orange">modifiable</span>
              </h1>
              <p className="text-white/70 text-[17px] max-w-lg" style={{ lineHeight: 1.8 }}>
                Telo Wellness exists at the intersection of precision diagnostics and
                physician-guided longevity medicine. We believe that aging isn't just something that
                happens to you — it's something you can understand, track, and influence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission — 2-Column with Photo */}
      <section className="py-20 lg:py-[120px] bg-white" aria-label="Our mission">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p
                className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                Our Mission
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                The Telo difference
              </h2>
              <p className="text-telo-gray text-[16px] mb-4" style={{ lineHeight: 1.8 }}>
                Most longevity platforms fall into one of two categories: diagnostics companies that
                test but don't treat, or telehealth platforms that prescribe without tracking
                outcomes.
              </p>
              <p className="text-telo-gray text-[16px] mb-4" style={{ lineHeight: 1.8 }}>
                Telo bridges this gap. We combine comprehensive diagnostics — including telomere
                length testing and advanced blood work — with physician-designed protocols and
                longitudinal retesting. The result is a closed-loop system where every intervention is
                validated by data.
              </p>
              <p className="text-telo-gray text-[16px]" style={{ lineHeight: 1.8 }}>
                We don't prescribe and disappear. We measure, intervene, retest, and refine. That's
                precision longevity medicine.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={MISSION_IMG}
                  alt="Active couple enjoying healthy lifestyle"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-[120px] bg-telo-off-white" aria-label="Our values">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p
                className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                Our Principles
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                Built on principles that matter
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white rounded-2xl p-6 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)] h-full">
                  <div className="w-12 h-12 rounded-xl bg-telo-orange/10 flex items-center justify-center text-telo-orange mb-4">
                    {v.icon}
                  </div>
                  <h3
                    className="text-telo-navy text-[16px] mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-telo-gray text-[13px]" style={{ lineHeight: 1.7 }}>
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-20 lg:py-[120px] bg-white" aria-label="Our partners">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p
                className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                Our Partners
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                Built on trusted clinical infrastructure
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "MD Integrations",
                role: "Physician Oversight",
                desc: "Licensed physicians provide clinical oversight for every patient. Good Faith Exams, protocol design, medication prescribing, and ongoing monitoring — all through a network of credentialed providers.",
                icon: <Stethoscope size={28} />,
              },
              {
                name: "Valiant Rx",
                role: "Compounding Pharmacy",
                desc: "A licensed US compounding pharmacy that prepares all Telo medications to exact specifications. FDA-registered, state-licensed, with rigorous quality control and temperature-controlled shipping.",
                icon: <FlaskConical size={28} />,
              },
              {
                name: "GeneMetrics / Full Metrics",
                role: "Diagnostic Laboratory",
                desc: "CLIA-certified laboratory partner for all blood work, telomere length testing, and genetic panels. Validated assays, rapid turnaround, and seamless data integration with the Telo platform.",
                icon: <BarChart3 size={28} />,
              },
            ].map((partner) => (
              <StaggerItem key={partner.name}>
                <div className="bg-white rounded-2xl p-8 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)] h-full">
                  <div className="w-14 h-14 rounded-2xl bg-telo-blue/10 flex items-center justify-center text-telo-blue mb-5">
                    {partner.icon}
                  </div>
                  <h3
                    className="text-telo-navy text-[20px] mb-1"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {partner.name}
                  </h3>
                  <p className="text-telo-orange text-[13px] mb-4" style={{ fontWeight: 500 }}>
                    {partner.role}
                  </p>
                  <p className="text-telo-gray text-[14px]" style={{ lineHeight: 1.7 }}>
                    {partner.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-[120px] bg-telo-off-white" aria-label="Our team">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p
                className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                Our Team
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                Physicians, scientists, and builders
              </h2>
              <p className="text-telo-gray text-[16px] max-w-xl mx-auto">
                A multidisciplinary team united by the conviction that biological aging can be
                measured, managed, and optimized.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white rounded-2xl p-6 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-telo-navy text-[17px]"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-telo-orange text-[13px] mb-3" style={{ fontWeight: 500 }}>
                    {member.title}
                  </p>
                  <p className="text-telo-gray text-[13px]" style={{ lineHeight: 1.7 }}>
                    {member.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white border-t border-telo-light-gray" aria-label="Company information">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-telo-blue" aria-hidden="true" />
                <div>
                  <p className="text-telo-navy text-[14px]">Telo Wellness LLC</p>
                  <p className="text-telo-gray text-[12px]">
                    Florida LLC &middot; Fully Insured &middot; Trademark Pending
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-telo-blue" aria-hidden="true" />
                <div>
                  <p className="text-telo-navy text-[14px]">HIPAA Compliant</p>
                  <p className="text-telo-gray text-[12px]">
                    End-to-end encryption &middot; SOC 2 Type II
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
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
              Join us in redefining what aging looks like
            </h2>
            <p
              className="text-white/50 text-[15px] mb-8 max-w-md mx-auto"
              style={{ lineHeight: 1.7 }}
            >
              Start your journey with a free online assessment tailored to your biology.
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