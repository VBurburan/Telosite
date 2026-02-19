/* ─── Treatment Page Data ─── */

export interface TreatmentFAQ {
  q: string;
  a: string;
}

export interface TreatmentProtocol {
  formulation: string;
  dose: string;
  included: string[];
  pharmacy: string;
  notes?: string;
}

export interface TreatmentData {
  slug: string;
  name: string;
  category: string;
  categoryColor: string;
  oneLiner: string;
  whatItDoes: string[];
  howItWorks: string[];
  protocols: TreatmentProtocol[];
  alternateFormulations?: { name: string; details: string }[];
  safety: string[];
  whoItsFor: string;
  whoItsNotFor: string;
  faqs: TreatmentFAQ[];
  stateRestrictions?: string;
}

export const treatments: TreatmentData[] = [
  /* ─── LONGEVITY & ANTI-AGING ─── */
  {
    slug: "rapamycin",
    name: "Rapamycin (Sirolimus)",
    category: "Longevity & Anti-Aging",
    categoryColor: "bg-telo-blue/10 text-telo-blue",
    oneLiner:
      "The most-studied longevity compound in modern medicine, prescribed at low doses to slow biological aging.",
    whatItDoes: [
      "Rapamycin inhibits a cellular pathway called mTOR \u2014 the master switch that regulates how your cells grow, repair, and age. At low, pulsed doses, rapamycin promotes autophagy (cellular cleanup), reduces chronic inflammation, and has been shown in multiple studies to extend lifespan in animal models. It is now being studied in human longevity trials.",
    ],
    howItWorks: [
      "Your cells constantly balance between growth mode and repair mode. mTOR drives growth. When mTOR is always on \u2014 from modern diets, sedentary lifestyles, and chronic metabolic stress \u2014 cells accumulate damage instead of clearing it.",
      "Low-dose rapamycin temporarily dials down mTOR once per week, triggering autophagy: the process where cells break down and recycle damaged proteins and organelles. Think of it as a scheduled deep-clean for your cells. Between doses, mTOR returns to normal, avoiding the immune suppression seen at transplant-level dosing.",
    ],
    protocols: [
      {
        formulation: "Oral tablet or compounded capsule",
        dose: "3\u20135 mg once weekly, titrated based on biomarker response over 30\u201390 days",
        included: [
          "Physician consultation",
          "Baseline labs (CMP, CBC, lipid panel, HbA1c, hsCRP)",
          "Ongoing monitoring",
          "Dosing adjustments",
        ],
        pharmacy: "Valiant Rx (pharmaceutical-grade, US-based)",
      },
    ],
    safety: [
      "At longevity doses (3\u20138 mg/week), rapamycin is generally well tolerated. The most common side effects are mild and transient: mouth sores (aphthous ulcers), mild GI discomfort, and temporary changes in lipid panels.",
      "These typically resolve with dose adjustment. Your Telo physician monitors labs regularly to catch any metabolic shifts early. Rapamycin at these doses does not cause the immune suppression seen in organ transplant patients, who take 10\u201320x higher daily doses.",
    ],
    whoItsFor:
      "Adults focused on biological age reduction, cellular repair optimization, and evidence-based longevity interventions. Especially relevant for patients with elevated inflammatory markers, metabolic syndrome risk factors, or a family history of age-related disease.",
    whoItsNotFor:
      "Not appropriate for patients who are immunocompromised, pregnant or planning pregnancy, have active infections, or are on immunosuppressive therapy. Your Telo physician will screen for contraindications during intake.",
    faqs: [
      {
        q: "Is rapamycin FDA-approved for longevity?",
        a: "Rapamycin is FDA-approved for organ transplant rejection and certain cancers. Its use for longevity is off-label, prescribed at much lower doses based on a growing body of preclinical and early clinical evidence. Your physician will review the evidence with you.",
      },
      {
        q: "How long until I see results?",
        a: "Most patients track changes via biomarkers (hsCRP, HbA1c, lipids) at 3- and 6-month intervals. Subjective improvements in energy, recovery, and skin quality are sometimes reported within 4\u20138 weeks, though individual response varies.",
      },
      {
        q: "Can I take rapamycin with metformin?",
        a: "Yes \u2014 rapamycin and metformin are commonly combined in longevity protocols. Your physician will evaluate whether a combination protocol is appropriate for your profile.",
      },
      {
        q: "Do I need regular blood work?",
        a: "Yes. Baseline labs are required before starting, with follow-up panels at regular intervals to monitor metabolic and immune markers.",
      },
    ],
  },
  {
    slug: "metformin",
    name: "Metformin XR",
    category: "Longevity & Anti-Aging",
    categoryColor: "bg-telo-blue/10 text-telo-blue",
    oneLiner:
      "A well-established metabolic optimizer now studied as a longevity intervention for healthy aging.",
    whatItDoes: [
      "Metformin XR (extended release) has been used safely for decades to manage blood sugar. More recently, it has gained attention as a longevity compound after large observational studies found that diabetic patients on metformin had lower all-cause mortality than matched non-diabetic controls \u2014 suggesting the drug may do more than manage glucose. The landmark TAME (Targeting Aging with Metformin) trial is now investigating this directly.",
    ],
    howItWorks: [
      "Metformin activates AMPK, a cellular energy sensor that shifts cells from growth mode into maintenance mode. This mimics some of the metabolic benefits of caloric restriction: improved insulin sensitivity, reduced inflammation, better mitochondrial function, and lower circulating glucose and insulin.",
      "Extended release formulation minimizes GI side effects and maintains steady blood levels.",
    ],
    protocols: [
      {
        formulation: "Extended-release oral tablet",
        dose: "500 mg daily, with option to titrate to 1,000 mg based on tolerance and labs",
        included: [
          "Physician consultation",
          "Baseline metabolic panel",
          "HbA1c monitoring",
          "Ongoing dose optimization",
        ],
        pharmacy: "Compounded or generic via Valiant Rx or partner pharmacy",
      },
    ],
    safety: [
      "Metformin XR is one of the most well-studied medications in history with an excellent long-term safety profile. Common side effects include mild GI symptoms (nausea, diarrhea, bloating), particularly in the first 1\u20132 weeks, which usually resolve.",
      "Extended release formulation significantly reduces GI issues compared to immediate release. Rare: vitamin B12 depletion with long-term use (monitored via labs). Contraindicated in severe kidney impairment (eGFR < 30).",
    ],
    whoItsFor:
      "Adults interested in metabolic optimization, insulin sensitivity, and evidence-based longevity strategies. Particularly relevant for patients with prediabetic markers, elevated fasting insulin, or metabolic syndrome indicators.",
    whoItsNotFor:
      "Not appropriate for patients with severe renal impairment, active liver disease, history of lactic acidosis, or excessive alcohol consumption. B12 levels should be monitored with long-term use.",
    faqs: [
      {
        q: "I'm not diabetic \u2014 why would I take metformin?",
        a: "Metformin's longevity benefits appear to be independent of its glucose-lowering effects. Research suggests it improves cellular energy metabolism, reduces inflammation, and may slow age-related decline even in metabolically healthy individuals.",
      },
      {
        q: "What is the TAME trial?",
        a: "TAME (Targeting Aging with Metformin) is an NIH-supported clinical trial specifically designed to test whether metformin can slow aging in non-diabetic older adults. It's the first FDA-sanctioned trial to target \"aging\" as a clinical indication.",
      },
      {
        q: "Will metformin interfere with exercise gains?",
        a: "Some studies have suggested metformin may blunt certain exercise adaptations (particularly mitochondrial biogenesis from resistance training). Your Telo physician can help you time doses around training if this is a concern.",
      },
    ],
  },
  {
    slug: "ldn",
    name: "Low Dose Naltrexone (LDN)",
    category: "Longevity & Anti-Aging",
    categoryColor: "bg-telo-blue/10 text-telo-blue",
    oneLiner:
      "A low-dose immune modulator that reduces chronic inflammation and supports immune balance.",
    whatItDoes: [
      "At standard doses (50 mg), naltrexone blocks opioid receptors. At very low doses (1.5\u20134.5 mg), it produces a paradoxical effect: a brief, temporary opioid receptor blockade that triggers a rebound increase in endorphin production and modulates immune function. This has been shown to reduce chronic low-grade inflammation \u2014 one of the primary drivers of biological aging.",
    ],
    howItWorks: [
      "LDN is typically taken at bedtime. The brief receptor blockade (4\u20136 hours) prompts your body to upregulate endorphin and enkephalin production. This rebound effect modulates the immune system by shifting it away from a chronically inflammatory state.",
      "LDN has been shown to reduce pro-inflammatory cytokines (TNF-\u03b1, IL-6) and may support regulatory T-cell function. It is increasingly used in integrative and functional medicine for autoimmune conditions, chronic pain, and immune optimization.",
    ],
    protocols: [
      {
        formulation: "Compounded oral capsule",
        dose: "Start at 1.5 mg nightly, titrate to 4.5 mg over 2\u20134 weeks",
        included: [
          "Physician consultation",
          "Baseline inflammatory markers (hsCRP, ESR)",
          "Ongoing monitoring",
        ],
        pharmacy: "Valiant Rx",
      },
    ],
    safety: [
      "LDN is generally very well tolerated. The most common side effect is vivid dreams during the first 1\u20132 weeks, which typically resolve. Some patients report mild headache or sleep disruption initially.",
      "LDN should not be taken concurrently with opioid medications or within 7\u201310 days of opioid use.",
    ],
    whoItsFor:
      "Adults with chronic low-grade inflammation, autoimmune tendencies, or those seeking immune optimization as part of a longevity protocol. Often used alongside rapamycin and metformin in multi-agent longevity stacks.",
    whoItsNotFor:
      "Not appropriate for patients currently taking opioid medications (prescription or otherwise), patients with acute hepatitis or liver failure, or those with active opioid dependence.",
    faqs: [
      {
        q: "How is LDN different from regular naltrexone?",
        a: "Regular naltrexone (50 mg) is used for opioid/alcohol dependence and fully blocks opioid receptors. LDN (1.5\u20134.5 mg) causes only a brief, partial blockade that triggers an immune-modulating rebound effect \u2014 a completely different clinical application.",
      },
      {
        q: "Can I take LDN with rapamycin and metformin?",
        a: "Yes. LDN is commonly combined with other longevity interventions. Your Telo physician will evaluate your full protocol for interactions.",
      },
      {
        q: "How long until I notice effects?",
        a: "Most patients report improvements in energy, sleep quality, and general well-being within 2\u20134 weeks. Inflammatory biomarker changes are typically measurable at the 3-month follow-up lab panel.",
      },
    ],
  },
  {
    slug: "glutathione",
    name: "Glutathione Injectable",
    category: "Longevity & Anti-Aging",
    categoryColor: "bg-telo-blue/10 text-telo-blue",
    oneLiner:
      "The body's master antioxidant, delivered via injection for maximum absorption and cellular protection.",
    whatItDoes: [
      "Glutathione is the most abundant intracellular antioxidant in the human body. It protects cells from oxidative stress, supports detoxification pathways in the liver, and plays a critical role in immune function. Oral glutathione is poorly absorbed; injectable delivery bypasses the gut for significantly higher bioavailability.",
    ],
    howItWorks: [
      "Glutathione neutralizes reactive oxygen species (free radicals) that damage DNA, proteins, and cell membranes. It also recycles other antioxidants (vitamins C and E), supports Phase II liver detoxification, and modulates immune cell function.",
      "As we age, glutathione levels naturally decline \u2014 a process linked to increased oxidative damage, reduced detoxification capacity, and accelerated aging.",
    ],
    protocols: [
      {
        formulation: "Subcutaneous injection, 200 mg/mL",
        dose: "Per protocol, 10 mL vial (two vials), 10 SubQ syringes",
        included: [
          "Physician consultation",
          "Injection training",
          "Baseline labs",
          "20 alcohol swabs, ice packs",
        ],
        pharmacy: "Valiant Rx",
        notes: "Refrigeration required. BUD: 150 days.",
      },
    ],
    alternateFormulations: [
      {
        name: "Glutathione Iontophoresis Patches",
        details:
          "6- or 12-pack \u2014 weekly transdermal delivery. Apply 20 drops of solution to (-) part of patch and 1 mL saline to (+) part. Wear for 4 hours.",
      },
      {
        name: "Glutathione Nasal Spray 20%",
        details: "15 mL \u2014 1 spray each nostril, once or twice daily.",
      },
    ],
    safety: [
      "Glutathione injections are generally well tolerated. Mild injection site reactions (redness, minor swelling) may occur. Rarely, some patients report temporary bloating or mild cramping.",
      "No significant drug interactions at standard doses.",
    ],
    whoItsFor:
      "Adults seeking enhanced antioxidant protection, liver support, skin health improvement, or those with elevated oxidative stress markers. Commonly combined with NAD+ protocols.",
    whoItsNotFor:
      "Patients with known sensitivity to glutathione or sulfur-containing compounds. Those with active asthma should use with caution.",
    faqs: [
      {
        q: "Why inject instead of taking a pill?",
        a: "Oral glutathione has very poor bioavailability \u2014 most is broken down in the gut before reaching cells. Subcutaneous injection delivers glutathione directly into tissue for significantly higher cellular uptake.",
      },
      {
        q: "What about the patches?",
        a: "Glutathione iontophoresis patches use a mild electrical current to drive glutathione through the skin. They're a convenient needle-free alternative with good absorption, worn once weekly for 4 hours.",
      },
      {
        q: "How does glutathione relate to longevity?",
        a: "Declining glutathione levels are one of the most consistent biomarkers of aging. Restoring levels supports cellular repair, reduces oxidative damage, and enhances immune function \u2014 all core pillars of longevity medicine.",
      },
    ],
  },

  /* ─── CELLULAR ENERGY & NAD+ ─── */
  {
    slug: "nad-plus",
    name: "NAD+ Injectable",
    category: "Cellular Energy & NAD+",
    categoryColor: "bg-telo-green/10 text-telo-green",
    oneLiner:
      "Restore cellular energy production by replenishing NAD+, a coenzyme essential to every cell in your body.",
    whatItDoes: [
      "NAD+ (nicotinamide adenine dinucleotide) is required for hundreds of metabolic processes, including mitochondrial energy production, DNA repair, and sirtuin activation. NAD+ levels decline significantly with age \u2014 by up to 50% between ages 40 and 60. This decline is linked to fatigue, cognitive fog, reduced recovery, and accelerated aging. Injectable NAD+ restores levels far more effectively than oral supplements.",
    ],
    howItWorks: [
      "NAD+ is the central coenzyme in cellular energy metabolism. It shuttles electrons in the mitochondria to produce ATP (cellular energy), activates sirtuins (longevity-associated proteins involved in DNA repair and gene expression), and fuels PARP enzymes that repair damaged DNA.",
      "Subcutaneous injection delivers NAD+ directly into tissue, bypassing the GI tract where oral NAD precursors (NMN, NR) lose significant potency.",
    ],
    protocols: [
      {
        formulation: "Subcutaneous injection, 200 mg/mL (Strive) or 100 mg/mL (Valiant)",
        dose: "Start 25 units (50 mg) SQ 1\u20132x/week for 2 weeks, increase by 25 units every 2 weeks to minimum effective dose (max 100 units/dose), up to 3x/week maintenance",
        included: [
          "Physician consultation",
          "Injection supplies",
          "Dosing guidance",
        ],
        pharmacy: "Strive Pharmacy / Valiant Rx",
        notes: "Inject slowly into abdominal fat or outer thigh. Avoid late evening dosing.",
      },
    ],
    alternateFormulations: [
      {
        name: "NAD+ Nasal Spray (300 mg/mL)",
        details: "1 spray each nostril daily. Refrigerate. BUD 90 days.",
      },
      {
        name: "NAD+ Iontophoresis Patches (6 or 12 pack)",
        details:
          "Apply 20 drops NAD+ solution to (+) part and 1 mL saline to (-) part. Wear weekly for 4 hours. Refrigerate.",
      },
      {
        name: "NAD+ Face Cream 10% (15 g)",
        details:
          "Apply pea-sized amount (0.5 g) to moist skin before bed. Refrigerate. BUD 35 days.",
      },
    ],
    safety: [
      "The most common side effect is transient flushing, warmth, or mild nausea during/after injection \u2014 this is normal and typically resolves within 30 minutes. Starting with a lower dose and injecting slowly minimizes this.",
      "Some patients report increased energy or alertness (avoid evening dosing if sleep-sensitive). No significant drug interactions at standard doses.",
    ],
    whoItsFor:
      "Adults experiencing age-related fatigue, brain fog, slow recovery, or those seeking to optimize mitochondrial function and cellular repair. Core component of most longevity stacks.",
    whoItsNotFor:
      "Patients with active cancer should consult their oncologist before NAD+ supplementation. Not recommended during pregnancy/breastfeeding.",
    faqs: [
      {
        q: "Why not just take NMN or NR supplements?",
        a: "Oral NAD+ precursors (NMN, NR) must be converted through multiple enzymatic steps before becoming active NAD+. Bioavailability is variable and often low. Injectable NAD+ delivers the active molecule directly.",
      },
      {
        q: "How quickly will I feel the difference?",
        a: "Many patients report improved energy and mental clarity within 1\u20132 weeks. Objective biomarker changes are measured at 3- and 6-month follow-ups.",
      },
      {
        q: "What's the difference between injection, nasal spray, and patches?",
        a: "Injection delivers the highest bioavailability. Nasal spray offers convenience with good mucosal absorption. Patches provide steady transdermal delivery. Your Telo physician will recommend based on your goals and preferences.",
      },
      {
        q: "Will NAD+ keep me awake at night?",
        a: "NAD+ can have an energizing effect in some patients. We recommend dosing in the morning or early afternoon and avoiding late evening administration.",
      },
    ],
  },
  {
    slug: "methylene-blue",
    name: "Methylene Blue",
    category: "Cellular Energy & Nootropic",
    categoryColor: "bg-telo-green/10 text-telo-green",
    oneLiner:
      "A mitochondrial electron carrier that enhances cellular energy production and supports cognitive function.",
    whatItDoes: [
      "Methylene blue is one of the oldest synthetic compounds in medicine, with a unique ability to act as an alternative electron carrier in the mitochondrial electron transport chain. At low doses, it enhances mitochondrial efficiency, supports ATP production, and has demonstrated neuroprotective and nootropic (cognitive-enhancing) properties in clinical research.",
    ],
    howItWorks: [
      "In the mitochondria, electrons move through a chain of protein complexes (Complex I \u2192 IV) to produce ATP. When these complexes are damaged or inefficient (common with aging), energy production drops.",
      "Methylene blue can accept and donate electrons directly, essentially creating a bypass around damaged complexes. This restores ATP output, reduces reactive oxygen species production, and improves mitochondrial membrane potential. In the brain, this translates to enhanced memory consolidation, neuroprotection, and improved cognitive performance.",
    ],
    protocols: [
      {
        formulation: "Oral capsule, 5 mg",
        dose: "1 capsule in morning, 5 days on / 2 days off",
        included: [
          "Physician consultation",
          "Contraindication screening",
          "60 capsules / 90-day supply",
        ],
        pharmacy: "Strive Pharmacy",
      },
    ],
    safety: [
      "Common: Methylene blue will temporarily discolor urine (blue-green) and may mildly discolor the tongue. This is harmless and expected. Start at a lower dose if sensitive.",
      "CRITICAL: Methylene blue must NOT be used with SSRIs, SNRIs, MAOIs, or other serotonergic medications due to risk of serotonin syndrome. Your Telo physician will screen for contraindications during intake.",
    ],
    whoItsFor:
      "Adults seeking cognitive enhancement, mitochondrial support, or neuroprotection. Often combined with NAD+ in cellular energy protocols.",
    whoItsNotFor:
      "Patients taking SSRIs, SNRIs, MAOIs, or other serotonergic drugs. Patients with G6PD deficiency. Pregnant or breastfeeding patients.",
    faqs: [
      {
        q: "Will it turn my urine blue?",
        a: "Yes \u2014 this is completely normal and expected. It may also mildly discolor your tongue. Both are temporary and harmless.",
      },
      {
        q: "Can I take it with my antidepressant?",
        a: "No. Methylene blue is contraindicated with SSRIs, SNRIs, and MAOIs due to the risk of serotonin syndrome. If you take any serotonergic medication, your physician will recommend alternative protocols.",
      },
      {
        q: "Why 5 days on, 2 days off?",
        a: "Cycling prevents tolerance buildup and allows mitochondrial pathways to reset. This dosing pattern maintains efficacy while minimizing side effects.",
      },
    ],
  },

  /* ─── WEIGHT OPTIMIZATION ─── */
  {
    slug: "tirzepatide",
    name: "Tirzepatide (with Glycine + B12)",
    category: "Weight Optimization",
    categoryColor: "bg-telo-orange/10 text-telo-orange",
    oneLiner:
      "A dual GIP/GLP-1 receptor agonist \u2014 the most effective weight loss medication available \u2014 enhanced with glycine and B12.",
    whatItDoes: [
      "Tirzepatide is the active compound in Mounjaro and Zepbound. It targets two incretin hormones (GIP and GLP-1) simultaneously, producing significantly greater weight loss than single-agonist GLP-1 drugs. In clinical trials, patients lost up to 22.5% of body weight. Telo's formulation adds glycine (to help preserve lean muscle mass during weight loss) and B12 (to reduce nausea and support metabolic function).",
    ],
    howItWorks: [
      "Tirzepatide activates receptors for both GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 (glucagon-like peptide-1). This dual action reduces appetite, slows gastric emptying, improves insulin sensitivity, and shifts the body's metabolic set point.",
      "The glycine addition is important: rapid weight loss can lead to muscle wasting, and glycine is a key amino acid for muscle protein synthesis and connective tissue health. B12 supports energy metabolism and helps manage the nausea common with GLP-1 class medications.",
    ],
    protocols: [
      {
        formulation: "Subcutaneous injection, 10 mg/mL compounded vial",
        dose: "50 units (5 mg) SQ once weekly for 4 weeks (initial) / 12 weeks (extended)",
        included: [
          "Physician consultation",
          "SubQ insulin syringes included",
          "Dosing guidance",
          "Follow-up monitoring",
        ],
        pharmacy: "Strive Pharmacy",
        notes:
          "Do not increase dosing if severe side effects present. Flexible dosing allows for lowest effective dose.",
      },
    ],
    alternateFormulations: [
      {
        name: "Oral Tirzepatide Suspension (Valiant Rx)",
        details:
          "20 mg/mL sublingual suspension. Available in 4.5\u201310.5 mL sizes (3\u20137 mg daily). Shake well. Hold under tongue 2 min. Use 30 min before first meal.",
      },
    ],
    safety: [
      "The most common side effects are GI-related: nausea, vomiting, diarrhea, decreased appetite, and constipation. These are typically most pronounced in the first 2\u20134 weeks and improve with continued use. B12 helps reduce nausea.",
      "Rare but serious: pancreatitis (seek immediate care for severe abdominal pain), thyroid C-cell tumors (contraindicated in patients with personal/family history of medullary thyroid cancer or MEN2).",
    ],
    whoItsFor:
      "Adults with BMI \u2265 30 (or \u2265 27 with weight-related comorbidities) who are seeking medically supervised weight loss. Patients who want the most effective available GLP-1 class medication.",
    whoItsNotFor:
      "Patients with personal or family history of medullary thyroid carcinoma or MEN2 syndrome. Patients with a history of pancreatitis. Pregnant or breastfeeding patients. Not appropriate for BMI < 27 without clinical indication.",
    faqs: [
      {
        q: "What's the difference between tirzepatide and semaglutide?",
        a: "Tirzepatide targets two receptors (GIP + GLP-1) while semaglutide targets only GLP-1. Clinical trials showed tirzepatide produces approximately 5\u20137% more weight loss than semaglutide at comparable doses.",
      },
      {
        q: "Why glycine and B12?",
        a: "Glycine supports lean muscle preservation during caloric deficit \u2014 critical because standard GLP-1 weight loss includes ~30\u201340% lean mass loss. B12 helps manage nausea and supports metabolic energy.",
      },
      {
        q: "Is this the same as Mounjaro/Zepbound?",
        a: "Same active compound (tirzepatide), compounded by a US-based pharmacy with added glycine and B12 for enhanced tolerability and muscle preservation.",
      },
      {
        q: "How long will I be on it?",
        a: "Weight optimization is typically a 6\u201312 month process with ongoing monitoring. Your physician will work with you on maintenance strategy, which may include dose reduction, cycling, or transition to metabolic-support protocols.",
      },
    ],
  },
  {
    slug: "semaglutide",
    name: "Semaglutide (with Glycine + B12)",
    category: "Weight Optimization",
    categoryColor: "bg-telo-orange/10 text-telo-orange",
    oneLiner:
      "The original GLP-1 receptor agonist for weight loss, enhanced with glycine and B12 for better tolerability.",
    stateRestrictions: "Not available in AK, AR, IN, MI, MN, SC.",
    whatItDoes: [
      "Semaglutide is the active compound in Ozempic and Wegovy. It targets GLP-1 receptors to reduce appetite, slow gastric emptying, and improve metabolic function. Clinical trials demonstrated 15\u201317% average body weight loss. Telo's formulation includes glycine for muscle preservation and B12 for nausea reduction.",
    ],
    howItWorks: [
      "Semaglutide mimics the natural hormone GLP-1, which is released after eating to signal satiety. By activating GLP-1 receptors in the brain and gut, semaglutide reduces hunger, slows stomach emptying (so you feel fuller longer), and improves insulin sensitivity.",
      "The net effect is reduced caloric intake without the constant willpower battle of traditional dieting.",
    ],
    protocols: [
      {
        formulation: "Subcutaneous injection (Strive) or Sublingual (Valiant)",
        dose: "Injectable: Month 1: 0.2 mg weekly, Month 2: 0.4 mg, Month 3: 0.9 mg | Oral: 1\u20135 mg/mL sublingual daily",
        included: [
          "Physician consultation",
          "Injection supplies or sublingual bottles",
          "Dosing guidance",
          "Follow-up monitoring",
        ],
        pharmacy: "Strive Pharmacy / Valiant Rx",
      },
    ],
    safety: [
      "Similar to tirzepatide: nausea, vomiting, diarrhea, constipation, and decreased appetite are most common, typically worst in weeks 1\u20134 and improving over time. B12 inclusion helps manage nausea.",
      "Same serious risks: pancreatitis (rare), thyroid C-cell tumors (contraindicated in MTC/MEN2 history).",
    ],
    whoItsFor:
      "Adults with BMI \u2265 30 (or \u2265 27 with comorbidities) seeking medically supervised weight loss. Good option for patients who prefer a well-established, single-receptor GLP-1 agonist.",
    whoItsNotFor:
      "Same contraindications as tirzepatide. Not available in AK, AR, IN, MI, MN, SC.",
    faqs: [
      {
        q: "Should I choose semaglutide or tirzepatide?",
        a: "Tirzepatide generally produces more weight loss (dual receptor), but semaglutide has a longer track record and more published safety data. Your Telo physician will recommend based on your health profile and goals.",
      },
      {
        q: "Is the oral version as effective as the injection?",
        a: "Sublingual semaglutide provides good bioavailability when held under the tongue for the full 90 seconds. Some patients prefer daily oral dosing over weekly injections.",
      },
    ],
  },
  {
    slug: "liraglutide",
    name: "Liraglutide (with B12)",
    category: "Weight Optimization",
    categoryColor: "bg-telo-orange/10 text-telo-orange",
    oneLiner:
      "A daily GLP-1 agonist offering steady appetite control with a well-established safety profile.",
    whatItDoes: [
      "Liraglutide is the active compound in Saxenda (weight loss) and Victoza (diabetes). It was the first GLP-1 receptor agonist approved specifically for chronic weight management. Daily dosing provides steady-state appetite suppression without the peaks and troughs of weekly injections.",
    ],
    howItWorks: [
      "Like semaglutide, liraglutide activates GLP-1 receptors to reduce appetite and slow gastric emptying. The key difference is pharmacokinetics: liraglutide has a shorter half-life, requiring daily injection but providing more consistent blood levels throughout the day.",
      "Some patients prefer this steady-state approach, particularly if they experience end-of-week appetite return with weekly injections.",
    ],
    protocols: [
      {
        formulation: "Subcutaneous injection, 6 mg/mL",
        dose: "Daily SQ, 5 mL or 10 mL vials",
        included: [
          "Physician consultation",
          "30 syringes, 60 alcohol swabs, ice packs",
          "Titration schedule",
          "Monitoring",
        ],
        pharmacy: "Valiant Rx",
        notes: "Refrigeration required. BUD: 90 days.",
      },
    ],
    safety: [
      "GI side effects (nausea, vomiting, diarrhea) are common initially but typically milder than weekly GLP-1 agents due to steady-state dosing.",
      "Same class-wide precautions regarding pancreatitis and thyroid C-cell tumors apply.",
    ],
    whoItsFor:
      "Adults seeking GLP-1-based weight loss who prefer daily dosing, experience end-of-week appetite breakthrough with weekly agents, or want to start with a shorter-acting option.",
    whoItsNotFor:
      "Same contraindications as other GLP-1 agents. Personal/family history of MTC or MEN2.",
    faqs: [
      {
        q: "Why daily instead of weekly?",
        a: "Liraglutide's shorter half-life means daily dosing, but also more consistent appetite control throughout the day. Some patients find this preferable to weekly agents where appetite may return before the next dose.",
      },
      {
        q: "Can I switch from semaglutide to liraglutide?",
        a: "Yes. Your physician can guide the transition between GLP-1 agents based on your response and preferences.",
      },
    ],
  },
  {
    slug: "b12-mic",
    name: "B12/MIC Injections",
    category: "Weight Optimization",
    categoryColor: "bg-telo-orange/10 text-telo-orange",
    oneLiner:
      "A lipotropic injection combining B12 with methionine, inositol, and choline to support fat metabolism and energy.",
    whatItDoes: [
      "MIC injections combine B12 with three lipotropic compounds \u2014 methionine, inositol, and choline \u2014 that support the body's ability to metabolize fat. They are commonly used as an adjunct to GLP-1 protocols or as a standalone metabolic support therapy.",
    ],
    howItWorks: [
      "Methionine helps break down fats in the liver. Inositol supports insulin signaling and fat transport. Choline is essential for lipid metabolism and liver function. Cyanocobalamin (B12) supports red blood cell formation and energy metabolism.",
      "Together, these compounds enhance the liver's ability to process and eliminate fat while supporting cellular energy production.",
    ],
    protocols: [
      {
        formulation: "Subcutaneous injection",
        dose: "Inject 1 mL (100 units) SQ once every 3 days",
        included: [
          "10 mL vial",
          "10 SubQ syringes",
          "20 alcohol swabs",
        ],
        pharmacy: "Valiant Rx",
        notes: "Room temperature storage. BUD: 180 days.",
      },
    ],
    safety: [
      "Very well tolerated. Mild injection site redness is the most common side effect. Rarely, mild GI discomfort.",
      "No significant drug interactions.",
    ],
    whoItsFor:
      "Patients on GLP-1 weight loss protocols who want additional metabolic support. Patients with low energy, sluggish metabolism, or suboptimal liver function markers.",
    whoItsNotFor:
      "No major contraindications. Your physician will evaluate based on your health profile.",
    faqs: [
      {
        q: "Can I take this with a GLP-1 medication?",
        a: "Yes. B12/MIC injections are commonly used alongside GLP-1 protocols to support fat metabolism and energy levels during weight loss.",
      },
      {
        q: "How soon will I notice effects?",
        a: "Most patients report improved energy within 1\u20132 weeks. Metabolic benefits are best measured via lab work at follow-up visits.",
      },
    ],
  },

  /* ─── HORMONAL OPTIMIZATION ─── */
  {
    slug: "enclomiphene",
    name: "Enclomiphene Citrate",
    category: "Hormonal Optimization",
    categoryColor: "bg-purple-50 text-purple-600",
    oneLiner:
      "A selective estrogen receptor modulator (SERM) that stimulates natural testosterone production without shutting down your own hormones.",
    whatItDoes: [
      "Unlike exogenous testosterone (TRT), which replaces your body's own production and suppresses the HPG axis, enclomiphene stimulates your hypothalamus and pituitary to produce more of your own testosterone naturally. This preserves fertility, maintains testicular function, and avoids the shutdown/dependency cycle of traditional TRT.",
    ],
    howItWorks: [
      "Enclomiphene blocks estrogen receptors in the hypothalamus, which removes the negative feedback signal that suppresses gonadotropin release. This causes the pituitary to release more LH and FSH, which stimulate the testes to produce more testosterone.",
      "The result: increased testosterone levels while maintaining your body's natural hormone production pathway and preserving spermatogenesis.",
    ],
    protocols: [
      {
        formulation: "Oral capsule",
        dose: "12.5\u201325 mg daily",
        included: [
          "Physician consultation",
          "Baseline hormone panel (total T, free T, LH, FSH, estradiol, SHBG)",
          "Follow-up labs at 6\u20138 weeks",
        ],
        pharmacy: "Valiant Rx or partner pharmacy",
      },
    ],
    safety: [
      "Generally well tolerated. Possible side effects include headache, mood changes, visual disturbances (rare), and acne.",
      "Unlike TRT, enclomiphene does not cause testicular atrophy, suppress sperm production, or require PCT upon discontinuation.",
    ],
    whoItsFor:
      "Men with suboptimal testosterone levels (typically < 400\u2013500 ng/dL) who want to increase testosterone naturally, preserve fertility, or avoid the dependency of exogenous TRT.",
    whoItsNotFor:
      "Women (different indication profile). Men with primary hypogonadism (testicular failure). Patients with active liver disease or history of venous thromboembolism.",
    faqs: [
      {
        q: "How is this different from TRT?",
        a: "TRT replaces your testosterone with an external source, which shuts down your body's own production, shrinks the testes, and suppresses fertility. Enclomiphene stimulates your body to make more of its own testosterone while preserving all natural pathways.",
      },
      {
        q: "Will this affect my fertility?",
        a: "Unlike TRT, enclomiphene actually supports fertility by increasing LH and FSH, which maintain sperm production.",
      },
      {
        q: "How soon will I see results?",
        a: "Most men notice improvements in energy, libido, and mood within 2\u20134 weeks. Testosterone levels typically show measurable increases on lab work within 4\u20136 weeks.",
      },
    ],
  },

  /* ─── SEXUAL HEALTH ─── */
  {
    slug: "tadalafil",
    name: "Tadalafil (Daily)",
    category: "Sexual Health",
    categoryColor: "bg-purple-50 text-purple-600",
    oneLiner:
      "Low-dose daily PDE5 inhibitor for consistent improvement in erectile function and blood flow.",
    whatItDoes: [
      "Tadalafil is a PDE5 inhibitor that increases blood flow by relaxing smooth muscle in blood vessels. At low daily doses (2.5-5 mg), it provides consistent improvement in erectile function without the need for timing doses around sexual activity. It also has demonstrated cardiovascular benefits through improved endothelial function.",
    ],
    howItWorks: [
      "PDE5 normally breaks down cyclic GMP, a molecule that relaxes smooth muscle and dilates blood vessels. By inhibiting PDE5, tadalafil allows cGMP levels to remain elevated, improving blood flow to the penis and other vascular beds.",
      "Daily low-dose tadalafil maintains steady blood levels, providing continuous improvement rather than on-demand peaks. This approach also supports overall vascular health and has been studied for benign prostatic hyperplasia (BPH) symptoms.",
    ],
    protocols: [
      {
        formulation: "Oral tablet",
        dose: "2.5-5 mg daily",
        included: [
          "Physician consultation",
          "Baseline cardiovascular screening",
          "Ongoing monitoring",
        ],
        pharmacy: "Valiant Rx or partner pharmacy",
      },
    ],
    safety: [
      "Generally well tolerated. Common side effects include headache, nasal congestion, flushing, and mild back pain. These typically diminish with continued use.",
      "Contraindicated with nitrate medications. Patients with significant cardiovascular disease should be evaluated before starting. Not appropriate for patients with recent stroke or MI, uncontrolled hypertension, or retinal conditions.",
    ],
    whoItsFor:
      "Men experiencing erectile dysfunction who prefer consistent daily dosing over on-demand use. Also appropriate for men with concurrent BPH symptoms.",
    whoItsNotFor:
      "Patients taking nitrates or alpha-blockers (without physician coordination). Patients with severe cardiovascular disease, recent stroke or heart attack, or retinal disorders such as NAION.",
    faqs: [
      {
        q: "Why daily dosing instead of as-needed?",
        a: "Daily low-dose tadalafil (2.5-5 mg) maintains steady blood levels, eliminating the need to plan around sexual activity. Many patients prefer this approach for spontaneity and overall vascular health benefits.",
      },
      {
        q: "How long does it take to work?",
        a: "With daily dosing, most men notice consistent improvement within 3-5 days. Full therapeutic effect is typically achieved within 1-2 weeks.",
      },
      {
        q: "Can I take this with other Telo protocols?",
        a: "Yes, tadalafil is generally compatible with longevity protocols. Your physician will review your full medication list for potential interactions.",
      },
    ],
  },

  /* ─── DIAGNOSTICS & TESTING ─── */
  {
    slug: "telomere-testing",
    name: "Telomere Length Testing",
    category: "Diagnostics & Testing",
    categoryColor: "bg-telo-navy/10 text-telo-navy",
    oneLiner:
      "Measure your biological age at the chromosomal level with a validated telomere length assay.",
    whatItDoes: [
      "Telomere length is one of the most direct measures of biological aging. Telomeres are protective caps at the ends of your chromosomes that shorten with each cell division. Critically short telomeres trigger cellular senescence, chronic inflammation, and increased disease risk. Telo's telomere testing establishes your baseline biological age and tracks changes over time.",
    ],
    howItWorks: [
      "A standard blood draw is analyzed in a CLIA-certified laboratory using validated qPCR or FISH assay methods. Results are integrated into your Telo dashboard with physician interpretation and protocol recommendations.",
      "Baseline measurement plus 6-month and 12-month retests provide longitudinal tracking of your biological age trajectory.",
    ],
    protocols: [
      {
        formulation: "Diagnostic test (blood draw)",
        dose: "Baseline + 6-month and 12-month retests",
        included: [
          "At-home blood collection kit (or lab visit coordination)",
          "Telomere length measurement via validated assay",
          "Dashboard integration",
          "Physician interpretation",
        ],
        pharmacy: "GeneMetrics / Full Metrics (CLIA-certified)",
      },
    ],
    safety: [
      "Standard blood draw. Minimal risk: brief discomfort at draw site, rare bruising.",
    ],
    whoItsFor:
      "All Telo patients. Telomere testing is the foundation of the Telo longitudinal model \u2014 it provides the objective measure of whether your protocol is working at the cellular level.",
    whoItsNotFor:
      "No contraindications. Recommended for all patients as part of baseline assessment.",
    faqs: [
      {
        q: "How often should I retest?",
        a: "Baseline at onboarding, then at 6-month and 12-month intervals. Telomeres change slowly, so more frequent testing isn't clinically useful.",
      },
      {
        q: "Can telomere length actually improve?",
        a: "Research shows that lifestyle interventions and certain pharmacological protocols can slow or modestly reverse telomere shortening. The goal is to slow the rate of shortening and maintain length relative to chronological age.",
      },
      {
        q: "How is telomere testing done?",
        a: "A standard blood draw. The sample is analyzed in a CLIA-certified laboratory using validated assay methods.",
      },
    ],
  },
  {
    slug: "blood-panel",
    name: "Comprehensive Blood Panel",
    category: "Diagnostics & Testing",
    categoryColor: "bg-telo-navy/10 text-telo-navy",
    oneLiner:
      "A deep-dive blood panel tracking 50+ biomarkers across metabolic, inflammatory, hormonal, and organ function systems.",
    whatItDoes: [
      "Standard annual physicals test a handful of basic markers. Telo's panel is designed to detect early signals of metabolic dysfunction, hormonal imbalance, and inflammatory activation years before they become diagnosable diseases. Your results feed directly into the protocol algorithm to personalize your treatment plan.",
    ],
    howItWorks: [
      "The panel includes: Complete Metabolic Panel (CMP), Complete Blood Count (CBC), Advanced Lipid Panel (including ApoB), Inflammatory Markers (hsCRP, ESR, homocysteine), Metabolic Markers (HbA1c, fasting insulin, HOMA-IR), Hormones (total/free testosterone, estradiol, DHEA-S, IGF-1, cortisol, thyroid panel), Vitamins & Minerals (B12, folate, vitamin D, ferritin, magnesium RBC), and Organ Function markers.",
    ],
    protocols: [
      {
        formulation: "Diagnostic test (blood draw)",
        dose: "Baseline + retests at 3, 6, and 12 months",
        included: [
          "50+ biomarker panel",
          "At-home kit or partner lab visit",
          "Dashboard integration",
          "Physician interpretation",
        ],
        pharmacy: "GeneMetrics / Full Metrics (CLIA-certified)",
      },
    ],
    safety: [
      "Standard blood draw. Fasting may be required for accurate insulin and lipid measurements. Your care team will provide preparation instructions.",
    ],
    whoItsFor:
      "All Telo patients. The comprehensive blood panel is the data layer that drives protocol personalization and outcome tracking.",
    whoItsNotFor:
      "No contraindications.",
    faqs: [
      {
        q: "Is this covered by insurance?",
        a: "Telo's testing is self-pay. Many panels are HSA/FSA eligible. We provide itemized receipts for potential out-of-network reimbursement.",
      },
      {
        q: "Where do I get the blood drawn?",
        a: "At-home kit or at a partner lab location near you. Details provided after enrollment.",
      },
      {
        q: "How often should I test?",
        a: "Baseline at onboarding, then at 3-month, 6-month, and 12-month intervals depending on your protocol.",
      },
    ],
  },
  {
    slug: "genetic-testing",
    name: "Genetic Testing",
    category: "Diagnostics & Testing",
    categoryColor: "bg-telo-navy/10 text-telo-navy",
    oneLiner:
      "Pharmacogenomic and health-risk genetic analysis to personalize your protocol at the DNA level.",
    whatItDoes: [
      "Genetic testing through GeneMetrics/Full Metrics analyzes key genetic variants that influence drug metabolism, disease risk, and nutrient processing. This allows your Telo physician to personalize medication selection, dosing, and monitoring based on your genetic profile \u2014 not population averages.",
    ],
    howItWorks: [
      "An at-home saliva or cheek swab collection kit is used to collect your sample. The analysis covers pharmacogenomic variants (CYP enzymes, drug metabolism pathways), health risk assessment (APOE, MTHFR, inflammation-related variants), and more.",
      "Approximately 99% of people carry at least one actionable pharmacogenomic variant. Knowing whether you're a fast or slow metabolizer of specific drugs can mean the difference between an effective dose and a dangerous one.",
    ],
    protocols: [
      {
        formulation: "Diagnostic test (saliva/cheek swab)",
        dose: "One-time test \u2014 your DNA doesn't change",
        included: [
          "At-home collection kit",
          "Pharmacogenomic variant analysis",
          "Health risk assessment",
          "Dashboard integration",
          "Physician interpretation and protocol customization",
        ],
        pharmacy: "GeneMetrics / Full Metrics",
      },
    ],
    safety: [
      "Non-invasive saliva or cheek swab collection. No physical risks.",
    ],
    whoItsFor:
      "All patients who want the highest level of protocol personalization. Especially valuable for patients starting multiple medications where drug interaction and metabolism profiles matter.",
    whoItsNotFor:
      "No contraindications. Optional but strongly recommended.",
    faqs: [
      {
        q: "What genes are tested?",
        a: "Pharmacogenomic markers (drug metabolism), longevity-associated variants, inflammatory pathway genes, MTHFR, APOE status, and nutrient metabolism markers. Full gene list provided during onboarding.",
      },
      {
        q: "Do I only need to test once?",
        a: "Yes. Your DNA doesn't change. One test provides lifetime data that informs all current and future protocols.",
      },
      {
        q: "Is my genetic data secure?",
        a: "Your genetic data is stored in HIPAA-compliant systems and is never shared with third parties, insurance companies, or genetic databases. You own your data.",
      },
    ],
  },
];

/* ─── Helper: Get treatment by slug ─── */
export function getTreatmentBySlug(slug: string): TreatmentData | undefined {
  return treatments.find((t) => t.slug === slug);
}

/* ─── Image map for treatment hero images ─── */
export const treatmentImages: Record<string, string> = {
  rapamycin:
    "https://images.unsplash.com/photo-1712995519613-60d8d4143de9?w=600&h=400&fit=crop",
  metformin:
    "https://images.unsplash.com/photo-1745091946544-8b9034bcc20b?w=600&h=400&fit=crop",
  ldn:
    "https://images.unsplash.com/photo-1745091946544-8b9034bcc20b?w=600&h=400&fit=crop",
  glutathione:
    "https://images.unsplash.com/photo-1648139347040-857f024f8da4?w=600&h=400&fit=crop",
  "nad-plus":
    "https://images.unsplash.com/photo-1648139347040-857f024f8da4?w=600&h=400&fit=crop",
  "methylene-blue":
    "https://images.unsplash.com/photo-1745091946544-8b9034bcc20b?w=600&h=400&fit=crop",
  tirzepatide:
    "https://images.unsplash.com/photo-1629398782216-43d63775ff65?w=600&h=400&fit=crop",
  semaglutide:
    "https://images.unsplash.com/photo-1629398782216-43d63775ff65?w=600&h=400&fit=crop",
  liraglutide:
    "https://images.unsplash.com/photo-1629398782216-43d63775ff65?w=600&h=400&fit=crop",
  "b12-mic":
    "https://images.unsplash.com/photo-1648139347040-857f024f8da4?w=600&h=400&fit=crop",
  enclomiphene:
    "https://images.unsplash.com/photo-1745091946544-8b9034bcc20b?w=600&h=400&fit=crop",
  tadalafil:
    "https://images.unsplash.com/photo-1631447661435-b86ae5ecd564?w=600&h=400&fit=crop",
  "telomere-testing":
    "https://images.unsplash.com/photo-1579154341184-22069e4614d2?w=600&h=400&fit=crop",
  "blood-panel":
    "https://images.unsplash.com/photo-1579154341184-22069e4614d2?w=600&h=400&fit=crop",
  "genetic-testing":
    "https://images.unsplash.com/photo-1579154341184-22069e4614d2?w=600&h=400&fit=crop",
};

/* ─── Category images for protocol cards ─── */
export const categoryImages: Record<string, string> = {
  longevity:
    "https://images.unsplash.com/photo-1712995519613-60d8d4143de9?w=400&h=240&fit=crop",
  weight:
    "https://images.unsplash.com/photo-1629398782216-43d63775ff65?w=400&h=240&fit=crop",
  energy:
    "https://images.unsplash.com/photo-1648139347040-857f024f8da4?w=400&h=240&fit=crop",
  cognitive:
    "https://images.unsplash.com/photo-1745091946544-8b9034bcc20b?w=400&h=240&fit=crop",
  diagnostics:
    "https://images.unsplash.com/photo-1579154341184-22069e4614d2?w=400&h=240&fit=crop",
};