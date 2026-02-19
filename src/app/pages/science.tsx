import { Link } from "react-router";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Tooltip,
} from "recharts";
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/scroll-reveal";
import { ChromosomeIcon } from "../components/telo-logo";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const HERO_IMG = "https://images.unsplash.com/photo-1742206594477-15139139c0df?w=1400&h=700&fit=crop";
const DNA_IMG = "https://images.unsplash.com/photo-1726323696906-54cd4af4aaed?w=800&h=600&fit=crop";

const telomereDeclineData = [
  { age: "20", normal: 9.5, intervention: 9.5 },
  { age: "30", normal: 8.8, intervention: 9.0 },
  { age: "40", normal: 7.9, intervention: 8.4 },
  { age: "50", normal: 7.0, intervention: 7.8 },
  { age: "60", normal: 6.2, intervention: 7.3 },
  { age: "70", normal: 5.5, intervention: 6.9 },
];

const factorsData = [
  { factor: "Chronic Stress", impact: -85 },
  { factor: "Poor Sleep", impact: -70 },
  { factor: "Smoking", impact: -90 },
  { factor: "Sedentary", impact: -55 },
  { factor: "Inflammation", impact: -75 },
  { factor: "Obesity", impact: -65 },
];

const interventionData = [
  { name: "Rapamycin", effect: 82 },
  { name: "NAD+", effect: 68 },
  { name: "Exercise", effect: 72 },
  { name: "Metformin", effect: 58 },
  { name: "LDN", effect: 45 },
  { name: "GLP-1", effect: 52 },
];

const references = [
  {
    title:
      "Rapamycin retards epigenetic ageing of keratinocytes independently of its effect on replicative senescence, proliferation, and differentiation",
    journal: "Aging (Albany NY)",
    year: "2019",
    doi: "10.18632/aging.102316",
  },
  {
    title:
      "NAD+ repletion improves mitochondrial and stem cell function and enhances life span in mice",
    journal: "Science",
    year: "2016",
    doi: "10.1126/science.aaf2693",
  },
  {
    title:
      "Telomere length as a marker of biological age: state-of-the-art, open issues, and future perspectives",
    journal: "Frontiers in Genetics",
    year: "2022",
    doi: "10.3389/fgene.2022.890317",
  },
  {
    title: "Metformin as a tool to target aging",
    journal: "Cell Metabolism",
    year: "2016",
    doi: "10.1016/j.cmet.2016.05.011",
  },
  {
    title:
      "Effect of comprehensive lifestyle changes on telomerase activity and telomere length",
    journal: "The Lancet Oncology",
    year: "2013",
    doi: "10.1016/S1470-2045(13)70366-8",
  },
  {
    title:
      "GLP-1 receptor agonists and cardiovascular outcomes: a systematic review and meta-analysis",
    journal: "The Lancet Diabetes & Endocrinology",
    year: "2021",
    doi: "10.1016/S2213-8587(21)00203-5",
  },
];

export function SciencePage() {
  return (
    <div className="pt-[72px]">
      {/* Hero — Photography-First */}
      <section className="relative overflow-hidden bg-telo-navy">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Scientific research in progress"
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
                The Science
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
                The biology of aging is measurable.{" "}
                <span className="text-telo-orange">And modifiable.</span>
              </h1>
              <p className="text-white/70 text-[17px] max-w-lg" style={{ lineHeight: 1.8 }}>
                Telo Wellness is built on decades of peer-reviewed research in telomere biology,
                cellular senescence, and longevity interventions. Here's the science that drives our
                protocols.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Are Telomeres — Editorial 2-column */}
      <section className="py-20 lg:py-[120px] bg-white" aria-label="What are telomeres">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p
                className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                Telomere Biology
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                What are telomeres?
              </h2>
              <p className="text-telo-gray text-[16px] mb-4" style={{ lineHeight: 1.8 }}>
                Telomeres are repetitive nucleotide sequences (TTAGGG) at the ends of chromosomes.
                They function as protective caps — like the aglets on shoelaces — preventing
                chromosomal degradation during cell division.
              </p>
              <p className="text-telo-gray text-[16px] mb-4" style={{ lineHeight: 1.8 }}>
                Each time a cell divides, telomeres shorten by approximately 50-70 base pairs due to
                the end-replication problem. When telomeres reach a critically short length, cells
                enter senescence — they stop dividing and begin secreting inflammatory signals.
              </p>
              <p className="text-telo-gray text-[16px] mb-6" style={{ lineHeight: 1.8 }}>
                This process is a fundamental driver of biological aging. But the rate of telomere
                shortening is not fixed — it's influenced by lifestyle, environment, and increasingly,
                by targeted pharmaceutical interventions.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "TTAGGG", label: "Repeat sequence" },
                  { value: "~15,000", label: "Base pairs at birth" },
                  { value: "50-70", label: "Lost per division" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-telo-off-white rounded-xl p-4 border border-telo-light-gray">
                    <p
                      className="text-telo-blue text-[18px]"
                      style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-telo-gray text-[11px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={DNA_IMG}
                  alt="DNA and genomics visualization"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Telomere Length & Biological Aging Chart */}
      <section className="py-20 lg:py-[120px] bg-telo-off-white" aria-label="Intervention divergence">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p
                className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                Research Data
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                The intervention divergence
              </h2>
              <p
                className="text-telo-gray text-[16px] max-w-2xl mx-auto"
                style={{ lineHeight: 1.7 }}
              >
                Research shows that targeted interventions can measurably slow telomere attrition
                compared to the natural rate of decline.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl p-8 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)] max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-telo-navy text-[15px]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Telomere Length by Age (kb)
                </h3>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <div className="w-4 h-[2px] bg-telo-gray rounded" /> Normal aging
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-4 h-[2px] bg-telo-blue rounded" /> With intervention
                  </span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={telomereDeclineData}>
                  <defs>
                    <linearGradient id="interventionGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B7DD8" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#3B7DD8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8ECF0" />
                  <XAxis
                    dataKey="age"
                    tick={{ fontSize: 11, fill: "#6B7B8D" }}
                    axisLine={false}
                    tickLine={false}
                    label={{ value: "Age", position: "bottom", fill: "#6B7B8D", fontSize: 11 }}
                  />
                  <YAxis
                    domain={[5, 10]}
                    tick={{ fontSize: 11, fill: "#6B7B8D" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      fontSize: 12,
                      borderRadius: 8,
                      border: "1px solid #E8ECF0",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="normal"
                    stroke="#6B7B8D"
                    strokeWidth={2}
                    strokeDasharray="6 4"
                    fill="none"
                    name="Normal aging"
                  />
                  <Area
                    type="monotone"
                    dataKey="intervention"
                    stroke="#3B7DD8"
                    strokeWidth={2.5}
                    fill="url(#interventionGrad)"
                    name="With intervention"
                    dot={{ fill: "#3B7DD8", r: 4, strokeWidth: 2, stroke: "#fff" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-telo-gray text-[11px] mt-4 text-center">
                Illustrative data based on published research trends. Individual results vary.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Factors & Interventions */}
      <section className="py-20 lg:py-[120px] bg-white" aria-label="Factors and interventions">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                Accelerators vs. interventions
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)] h-full">
                <h3
                  className="text-telo-navy text-[20px] mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  What accelerates telomere shortening?
                </h3>
                <p className="text-telo-gray text-[13px] mb-6">
                  Relative impact on telomere attrition rate
                </p>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={factorsData} layout="vertical">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E8ECF0"
                      horizontal={false}
                    />
                    <XAxis
                      type="number"
                      domain={[-100, 0]}
                      tick={{ fontSize: 10, fill: "#6B7B8D" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      dataKey="factor"
                      type="category"
                      tick={{ fontSize: 11, fill: "#1B2A4A" }}
                      axisLine={false}
                      tickLine={false}
                      width={100}
                    />
                    <Tooltip
                      contentStyle={{
                        fontSize: 12,
                        borderRadius: 8,
                        border: "1px solid #E8ECF0",
                      }}
                    />
                    <Bar
                      dataKey="impact"
                      fill="#E74C3C"
                      radius={[0, 4, 4, 0]}
                      barSize={16}
                      name="Impact"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)] h-full">
                <h3
                  className="text-telo-navy text-[20px] mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  How interventions help
                </h3>
                <p className="text-telo-gray text-[13px] mb-6">
                  Evidence strength for telomere maintenance
                </p>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={interventionData} layout="vertical">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E8ECF0"
                      horizontal={false}
                    />
                    <XAxis
                      type="number"
                      domain={[0, 100]}
                      tick={{ fontSize: 10, fill: "#6B7B8D" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      dataKey="name"
                      type="category"
                      tick={{ fontSize: 11, fill: "#1B2A4A" }}
                      axisLine={false}
                      tickLine={false}
                      width={90}
                    />
                    <Tooltip
                      contentStyle={{
                        fontSize: 12,
                        borderRadius: 8,
                        border: "1px solid #E8ECF0",
                      }}
                    />
                    <Bar
                      dataKey="effect"
                      fill="#3B7DD8"
                      radius={[0, 4, 4, 0]}
                      barSize={16}
                      name="Evidence"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Biological Age Concept */}
      <section
        className="py-20 lg:py-[120px] bg-telo-navy relative overflow-hidden"
        aria-label="Biological age"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p
                className="text-telo-orange text-[13px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                The Key Metric
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-white mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                Biological Age vs. Chronological Age
              </h2>
              <p className="text-white/70 text-[16px] mb-4" style={{ lineHeight: 1.8 }}>
                Your chronological age is the number of years since you were born. Your biological
                age is how old your cells actually are — based on telomere length, epigenetic
                markers, and metabolic function.
              </p>
              <p className="text-white/70 text-[16px] mb-6" style={{ lineHeight: 1.8 }}>
                Two people both aged 50 can have vastly different biological ages. One might have the
                cellular profile of a 42-year-old; the other, a 58-year-old. The difference is
                driven by genetics, environment, lifestyle — and increasingly, by deliberate
                intervention.
              </p>
              <p className="text-white/40 text-[14px]" style={{ lineHeight: 1.7 }}>
                Telo measures this gap. Then works to widen it in your favor.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center">
                {/* Dual gauge visual */}
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 200 200" className="w-full h-full" role="img" aria-label="Biological age gauge showing 42 years vs chronological 49">
                    {/* Outer ring — chronological */}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="10"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="10"
                      strokeDasharray="534"
                      strokeDashoffset="160"
                      strokeLinecap="round"
                      transform="rotate(-90 100 100)"
                    />
                    {/* Inner ring — biological */}
                    <circle
                      cx="100"
                      cy="100"
                      r="65"
                      fill="none"
                      stroke="rgba(59,125,216,0.2)"
                      strokeWidth="10"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="65"
                      fill="none"
                      stroke="#3B7DD8"
                      strokeWidth="10"
                      strokeDasharray="408"
                      strokeDashoffset="180"
                      strokeLinecap="round"
                      transform="rotate(-90 100 100)"
                    />
                    <text
                      x="100"
                      y="88"
                      textAnchor="middle"
                      fill="white"
                      style={{
                        fontSize: 36,
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                      }}
                    >
                      42
                    </text>
                    <text
                      x="100"
                      y="108"
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.5)"
                      style={{ fontSize: 11 }}
                    >
                      biological age
                    </text>
                    <text
                      x="100"
                      y="130"
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.3)"
                      style={{ fontSize: 11 }}
                    >
                      chronological: 49
                    </text>
                  </svg>
                </div>

                <div className="flex items-center gap-6 mt-6">
                  <span className="flex items-center gap-2 text-white/50 text-[12px]">
                    <div className="w-3 h-3 rounded-full bg-white/30" /> Chronological
                  </span>
                  <span className="flex items-center gap-2 text-white/50 text-[12px]">
                    <div className="w-3 h-3 rounded-full bg-telo-blue" /> Biological
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Telo Longitudinal Model */}
      <section className="py-20 lg:py-[120px] bg-telo-off-white" aria-label="Telo longitudinal model">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p
                className="text-telo-orange text-[12px] uppercase tracking-[0.08em] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                Our Model
              </p>
              <h2
                className="text-[28px] lg:text-[36px] text-telo-navy mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, lineHeight: 1.15 }}
              >
                The Telo longitudinal model
              </h2>
              <p
                className="text-telo-gray text-[16px] max-w-2xl mx-auto"
                style={{ lineHeight: 1.7 }}
              >
                Measure. Intervene. Validate. Refine. This is precision medicine with a built-in
                feedback loop.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Baseline",
                desc: "Full diagnostic panel establishes your starting point — telomere length, 40+ biomarkers, optional genetics.",
              },
              {
                step: "02",
                title: "Intervention",
                desc: "Physician-designed protocol targets your specific aging drivers. Medication + lifestyle + monitoring.",
              },
              {
                step: "03",
                title: "6-Month Retest",
                desc: "Complete retesting generates before/after comparison. Data proves what's working.",
              },
              {
                step: "04",
                title: "12-Month Validation",
                desc: "Trajectory confirmed. Protocol refined. Your optimization continues with objective proof.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-white rounded-2xl p-6 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)] h-full">
                  <span
                    className="text-telo-orange text-[12px]"
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}
                  >
                    {item.step}
                  </span>
                  <h3
                    className="text-telo-navy text-[18px] mt-2 mb-3"
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

      {/* References */}
      <section className="py-20 lg:py-[120px] bg-white" aria-label="Selected references">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <BookOpen size={24} className="text-telo-blue" />
              <h2
                className="text-[24px] lg:text-[28px] text-telo-navy"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Selected References
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4" role="list">
            {references.map((ref, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-telo-off-white rounded-xl p-5 border border-telo-light-gray hover:shadow-md transition-shadow" role="listitem">
                  <p className="text-telo-navy text-[14px] mb-1">{ref.title}</p>
                  <div className="flex items-center gap-3 text-[12px]">
                    <span className="text-telo-blue">{ref.journal}</span>
                    <span className="text-telo-gray">({ref.year})</span>
                    <a
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-telo-gray hover:text-telo-blue transition-colors"
                      aria-label={`View DOI for ${ref.title}`}
                    >
                      <ExternalLink size={12} /> DOI
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              See where your biology stands
            </h2>
            <p
              className="text-white/50 text-[15px] mb-8 max-w-md mx-auto"
              style={{ lineHeight: 1.7 }}
            >
              Start with your free assessment and discover your biological baseline.
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
