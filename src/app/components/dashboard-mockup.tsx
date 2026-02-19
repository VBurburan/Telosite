import { motion } from "motion/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp, TrendingDown, Clock, Activity } from "lucide-react";
import { ChromosomeIcon } from "./telo-logo";

const telomereData = [
  { month: "Baseline", length: 6.8, bio: 48 },
  { month: "Month 2", length: 6.85, bio: 47.5 },
  { month: "Month 4", length: 6.95, bio: 46.8 },
  { month: "6-Month", length: 7.15, bio: 45.2 },
  { month: "Month 8", length: 7.2, bio: 44.8 },
  { month: "Month 10", length: 7.35, bio: 43.5 },
  { month: "12-Month", length: 7.52, bio: 42.1 },
];

const biomarkers = [
  { name: "Fasting Insulin", value: "5.2", unit: "mIU/L", trend: "down", status: "optimal", prev: "8.1" },
  { name: "hsCRP", value: "0.4", unit: "mg/L", trend: "down", status: "optimal", prev: "1.8" },
  { name: "HbA1c", value: "5.1", unit: "%", trend: "down", status: "optimal", prev: "5.6" },
  { name: "Testosterone", value: "685", unit: "ng/dL", trend: "up", status: "optimal", prev: "520" },
  { name: "DHEA-S", value: "342", unit: "ug/dL", trend: "up", status: "good", prev: "265" },
  { name: "IGF-1", value: "168", unit: "ng/mL", trend: "stable", status: "optimal", prev: "172" },
];

const protocols = [
  { name: "Rapamycin 6mg", schedule: "Weekly", adherence: 96 },
  { name: "NAD+ 200mg SC", schedule: "3x/week", adherence: 88 },
  { name: "Metformin XR 500mg", schedule: "Daily", adherence: 100 },
];

export function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-telo-light-gray overflow-hidden max-w-[1100px] mx-auto">
      {/* Dashboard Header */}
      <div className="bg-telo-navy px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChromosomeIcon size={24} />
          <span className="text-white text-[14px]" style={{ fontFamily: "var(--font-heading)" }}>
            TELO Dashboard
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white/60 text-[12px]">
            <Clock size={14} />
            <span>Next retest: 47 days</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-telo-blue/30 flex items-center justify-center text-white text-[12px]">
            JD
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Top Row: Telomere Chart + Bio Age */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Telomere Trend */}
          <div className="lg:col-span-2 border border-telo-light-gray rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-telo-navy text-[14px]">Telomere Length Trend</h4>
                <p className="text-telo-gray text-[12px]">kilobases (kb) over 12 months</p>
              </div>
              <div className="flex items-center gap-1 bg-telo-green/10 text-telo-green px-3 py-1 rounded-full text-[12px]">
                <TrendingUp size={12} />
                +10.6%
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={telomereData}>
                  <defs>
                    <linearGradient id="telomereGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B7DD8" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#3B7DD8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8ECF0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#6B7B8D" }} axisLine={false} tickLine={false} />
                  <YAxis domain={[6.5, 7.8]} tick={{ fontSize: 10, fill: "#6B7B8D" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E8ECF0" }}
                    formatter={(value: number) => [`${value} kb`, "Telomere Length"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="length"
                    stroke="#3B7DD8"
                    strokeWidth={2.5}
                    fill="url(#telomereGrad)"
                    dot={{ fill: "#3B7DD8", r: 4, strokeWidth: 2, stroke: "#fff" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Biological Age Gauge */}
          <div className="border border-telo-light-gray rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="text-telo-gray text-[12px] mb-3">Biological Age</p>
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#E8ECF0" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#3B7DD8"
                  strokeWidth="8"
                  strokeDasharray="314"
                  strokeDashoffset="80"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
                <text x="60" y="52" textAnchor="middle" className="fill-telo-navy" style={{ fontSize: 28, fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  42
                </text>
                <text x="60" y="70" textAnchor="middle" className="fill-telo-gray" style={{ fontSize: 10 }}>
                  years
                </text>
              </svg>
            </div>
            <div className="mt-3 text-center">
              <p className="text-telo-gray text-[11px]">Chronological: <span className="text-telo-navy" style={{ fontFamily: "var(--font-mono)" }}>49</span></p>
              <div className="flex items-center gap-1 text-telo-green text-[12px] mt-1">
                <TrendingDown size={12} />
                <span>7 years younger</span>
              </div>
            </div>
          </div>
        </div>

        {/* Biomarker Cards */}
        <div>
          <h4 className="text-telo-navy text-[14px] mb-3">Key Biomarkers</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {biomarkers.map((bm) => (
              <div
                key={bm.name}
                className="border border-telo-light-gray rounded-lg p-3 hover:shadow-md transition-shadow"
              >
                <p className="text-telo-gray text-[10px] mb-1 truncate">{bm.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-telo-navy text-[18px]" style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                    {bm.value}
                  </span>
                  <span className="text-telo-gray text-[9px]">{bm.unit}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {bm.trend === "up" && <TrendingUp size={10} className="text-telo-green" />}
                  {bm.trend === "down" && <TrendingDown size={10} className="text-telo-green" />}
                  {bm.trend === "stable" && <Activity size={10} className="text-telo-blue" />}
                  <span className="text-[9px] text-telo-gray">from {bm.prev}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protocol Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-telo-light-gray rounded-xl p-5">
            <h4 className="text-telo-navy text-[14px] mb-3">Active Protocols</h4>
            <div className="space-y-3">
              {protocols.map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-telo-navy text-[13px]">{p.name}</p>
                    <p className="text-telo-gray text-[11px]">{p.schedule}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-telo-light-gray rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${p.adherence}%`,
                          backgroundColor: p.adherence > 90 ? "#2ECC71" : "#F5A623",
                        }}
                      />
                    </div>
                    <span className="text-[11px] text-telo-gray" style={{ fontFamily: "var(--font-mono)" }}>
                      {p.adherence}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio Age Trend */}
          <div className="border border-telo-light-gray rounded-xl p-5">
            <h4 className="text-telo-navy text-[14px] mb-3">Biological Age Trend</h4>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={telomereData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8ECF0" />
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#6B7B8D" }} axisLine={false} tickLine={false} />
                <YAxis domain={[40, 50]} tick={{ fontSize: 9, fill: "#6B7B8D" }} axisLine={false} tickLine={false} />
                <Line
                  type="monotone"
                  dataKey="bio"
                  stroke="#E8873D"
                  strokeWidth={2}
                  dot={{ fill: "#E8873D", r: 3, strokeWidth: 2, stroke: "#fff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
