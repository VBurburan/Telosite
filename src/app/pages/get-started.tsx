import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  Lock,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { ScrollReveal } from "../components/scroll-reveal";
import { ChromosomeIcon } from "../components/telo-logo";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const SIDEBAR_IMG = "https://images.unsplash.com/photo-1758274539654-23fa349cc090?w=600&h=900&fit=crop";

const healthGoals = [
  "Longevity & Anti-Aging",
  "Weight Optimization",
  "Cognitive Performance",
  "Energy & Recovery",
  "Hormonal Health",
  "General Wellness",
];

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

export function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    state: "",
    goals: [] as string[],
    medications: "",
    conditions: "",
    allergies: "",
    consent: false,
  });

  const totalSteps = 4;

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-[72px] min-h-screen bg-telo-off-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="mb-8">
                <p
                  className="text-telo-orange text-[13px] uppercase tracking-[0.08em] mb-2"
                  style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
                >
                  Get Started
                </p>
                <h1
                  className="text-[32px] lg:text-[40px] text-telo-navy mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  Let's start with your biology.
                </h1>
                <p className="text-telo-gray text-[16px]">
                  Complete a quick intake to see which Telo protocols are right for you.
                </p>
              </div>
            </ScrollReveal>

            {/* Progress Bar */}
            <div className="mb-10" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={totalSteps} aria-label={`Step ${step} of ${totalSteps}`}>
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-telo-navy text-[13px]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Step {step} of {totalSteps}
                </span>
                <span className="text-telo-gray text-[12px]">
                  {step === 1 && "Personal Information"}
                  {step === 2 && "Health Goals"}
                  {step === 3 && "Medical History"}
                  {step === 4 && "Review & Consent"}
                </span>
              </div>
              <div className="w-full h-2 bg-telo-light-gray rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-telo-orange rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Form Card */}
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
            >
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2
                    className="text-[20px] text-telo-navy mb-6"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    Personal Information
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-[13px] text-telo-navy mb-1.5">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-telo-light-gray bg-telo-off-white focus:border-telo-blue focus:ring-2 focus:ring-telo-blue/20 outline-none transition-all text-[14px]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[13px] text-telo-navy mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-telo-light-gray bg-telo-off-white focus:border-telo-blue focus:ring-2 focus:ring-telo-blue/20 outline-none transition-all text-[14px]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[13px] text-telo-navy mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-telo-light-gray bg-telo-off-white focus:border-telo-blue focus:ring-2 focus:ring-telo-blue/20 outline-none transition-all text-[14px]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dob" className="block text-[13px] text-telo-navy mb-1.5">
                        Date of Birth
                      </label>
                      <input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={(e) => updateField("dob", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-telo-light-gray bg-telo-off-white focus:border-telo-blue focus:ring-2 focus:ring-telo-blue/20 outline-none transition-all text-[14px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-[13px] text-telo-navy mb-1.5">
                        State of Residence
                      </label>
                      <select
                        id="state"
                        value={formData.state}
                        onChange={(e) => updateField("state", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-telo-light-gray bg-telo-off-white focus:border-telo-blue focus:ring-2 focus:ring-telo-blue/20 outline-none transition-all text-[14px] appearance-none"
                      >
                        <option value="">Select state...</option>
                        {states.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Health Goals */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2
                    className="text-[20px] text-telo-navy mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    Primary Health Goals
                  </h2>
                  <p className="text-telo-gray text-[14px] mb-4">
                    Select all that apply. This helps us tailor your protocol recommendations.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Health goals selection">
                    {healthGoals.map((goal) => {
                      const selected = formData.goals.includes(goal);
                      return (
                        <button
                          key={goal}
                          onClick={() => toggleGoal(goal)}
                          aria-pressed={selected}
                          className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                            selected
                              ? "border-telo-orange bg-telo-orange/5 ring-1 ring-telo-orange/20"
                              : "border-telo-light-gray bg-telo-off-white hover:border-telo-orange/30"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                              selected
                                ? "border-telo-orange bg-telo-orange"
                                : "border-telo-light-gray"
                            }`}
                          >
                            {selected && (
                              <CheckCircle2 size={12} className="text-white" />
                            )}
                          </div>
                          <span
                            className={`text-[14px] ${
                              selected ? "text-telo-navy" : "text-telo-gray"
                            }`}
                          >
                            {goal}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Medical History */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2
                    className="text-[20px] text-telo-navy mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    Medical History
                  </h2>
                  <p className="text-telo-gray text-[14px] mb-4">
                    This information helps our physicians evaluate safety and design your
                    protocol. All data is encrypted and HIPAA-protected.
                  </p>

                  <div>
                    <label htmlFor="medications" className="block text-[13px] text-telo-navy mb-1.5">
                      Current Medications
                    </label>
                    <textarea
                      id="medications"
                      value={formData.medications}
                      onChange={(e) => updateField("medications", e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-telo-light-gray bg-telo-off-white focus:border-telo-blue focus:ring-2 focus:ring-telo-blue/20 outline-none transition-all text-[14px] resize-none"
                      placeholder="List any current medications, supplements, or treatments..."
                    />
                  </div>

                  <div>
                    <label htmlFor="conditions" className="block text-[13px] text-telo-navy mb-1.5">
                      Known Medical Conditions
                    </label>
                    <textarea
                      id="conditions"
                      value={formData.conditions}
                      onChange={(e) => updateField("conditions", e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-telo-light-gray bg-telo-off-white focus:border-telo-blue focus:ring-2 focus:ring-telo-blue/20 outline-none transition-all text-[14px] resize-none"
                      placeholder="Any diagnosed conditions, past surgeries, or ongoing treatments..."
                    />
                  </div>

                  <div>
                    <label htmlFor="allergies" className="block text-[13px] text-telo-navy mb-1.5">
                      Allergies
                    </label>
                    <textarea
                      id="allergies"
                      value={formData.allergies}
                      onChange={(e) => updateField("allergies", e.target.value)}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-telo-light-gray bg-telo-off-white focus:border-telo-blue focus:ring-2 focus:ring-telo-blue/20 outline-none transition-all text-[14px] resize-none"
                      placeholder="Any known allergies (medications, foods, environmental)..."
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Review & Consent */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2
                    className="text-[20px] text-telo-navy mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    Review & Consent
                  </h2>

                  <div className="bg-telo-off-white rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-telo-gray text-[11px] uppercase tracking-wider">
                          Name
                        </p>
                        <p className="text-telo-navy text-[14px]">
                          {formData.firstName || "\u2014"} {formData.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-telo-gray text-[11px] uppercase tracking-wider">
                          Email
                        </p>
                        <p className="text-telo-navy text-[14px]">
                          {formData.email || "\u2014"}
                        </p>
                      </div>
                      <div>
                        <p className="text-telo-gray text-[11px] uppercase tracking-wider">
                          Date of Birth
                        </p>
                        <p className="text-telo-navy text-[14px]">
                          {formData.dob || "\u2014"}
                        </p>
                      </div>
                      <div>
                        <p className="text-telo-gray text-[11px] uppercase tracking-wider">
                          State
                        </p>
                        <p className="text-telo-navy text-[14px]">
                          {formData.state || "\u2014"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-telo-gray text-[11px] uppercase tracking-wider">
                        Health Goals
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {formData.goals.length > 0 ? (
                          formData.goals.map((g) => (
                            <span
                              key={g}
                              className="text-[12px] bg-telo-orange/10 text-telo-orange px-2.5 py-1 rounded-full"
                            >
                              {g}
                            </span>
                          ))
                        ) : (
                          <span className="text-telo-gray text-[14px]">&mdash;</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border border-telo-light-gray rounded-xl p-5">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => updateField("consent", e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-telo-light-gray text-telo-orange focus:ring-telo-orange/20 accent-[#E8862A]"
                      />
                      <span
                        className="text-telo-gray text-[13px]"
                        style={{ lineHeight: 1.6 }}
                      >
                        I acknowledge that Telo Wellness provides telemedicine services.
                        I consent to the collection and processing of my health
                        information in accordance with the{" "}
                        <a href="#" className="text-telo-blue underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-telo-blue underline">
                          Terms of Service
                        </a>
                        . I understand that all prescriptions require physician evaluation
                        and approval.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-telo-light-gray">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 px-5 py-2.5 text-telo-gray hover:text-telo-navy transition-colors text-[14px]"
                    aria-label="Go back to previous step"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="flex items-center gap-2 px-6 py-3 bg-telo-orange text-white rounded-full text-[14px] hover:bg-telo-light-orange transition-all hover:scale-[1.02] shadow-sm"
                    style={{ fontWeight: 500 }}
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    className="flex items-center gap-2 px-8 py-3 bg-telo-orange text-white rounded-full text-[14px] hover:bg-telo-light-orange transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    style={{ fontWeight: 500 }}
                    disabled={!formData.consent}
                  >
                    Continue to Lab Selection <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ScrollReveal delay={0.2}>
              {/* Hero image for sidebar */}
              <div className="rounded-2xl overflow-hidden mb-6 hidden lg:block">
                <ImageWithFallback
                  src={SIDEBAR_IMG}
                  alt="Peaceful wellness moment"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 border border-telo-light-gray shadow-[0_2px_16px_rgba(0,0,0,0.04)] sticky top-[96px]">
                <div className="flex items-center gap-2 mb-4">
                  <ChromosomeIcon size={20} />
                  <span
                    className="text-telo-navy text-[14px]"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    What happens next?
                  </span>
                </div>

                <ol className="space-y-4" aria-label="Next steps">
                  {[
                    {
                      step: 1,
                      label: "Complete intake",
                      desc: "Personal info & health goals",
                    },
                    {
                      step: 2,
                      label: "Physician review",
                      desc: "Eligibility & contraindication screening",
                    },
                    {
                      step: 3,
                      label: "Lab kit shipped",
                      desc: "At-home blood work & telomere test",
                    },
                    {
                      step: 4,
                      label: "Protocol assigned",
                      desc: "Personalized longevity plan",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[11px] ${
                          item.step <= step
                            ? "bg-telo-orange text-white"
                            : "bg-telo-light-gray text-telo-gray"
                        }`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <p className="text-telo-navy text-[13px]">{item.label}</p>
                        <p className="text-telo-gray text-[11px]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 pt-6 border-t border-telo-light-gray">
                  <div className="flex items-center gap-2 text-telo-gray mb-3">
                    <MessageSquare size={16} aria-hidden="true" />
                    <span className="text-[13px]">Questions? We're here.</span>
                  </div>
                  <a
                    href="mailto:support@telowellness.com"
                    className="text-telo-blue text-[13px] hover:underline"
                  >
                    support@telowellness.com
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-telo-light-gray space-y-2">
                  {[
                    { icon: <Lock size={14} />, label: "HIPAA Compliant" },
                    { icon: <Stethoscope size={14} />, label: "Physician-Led" },
                    { icon: <ShieldCheck size={14} />, label: "End-to-End Encrypted" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2 text-telo-gray text-[12px]"
                    >
                      <span aria-hidden="true">{badge.icon}</span>
                      <span>{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
