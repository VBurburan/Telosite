const logoImg = "/telo-logo.png";

export function TeloLogo({ className = "h-10", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <ChromosomeIcon size={32} />
      <span
        className={`text-[22px] tracking-tight ${variant === "light" ? "text-white" : "text-telo-navy"}`}
        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "0.05em" }}
      >
        TELO
      </span>
    </div>
  );
}

export function TeloLogoImage({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Telo Wellness"
      className={className}
    />
  );
}

export function ChromosomeIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M20 8C20 8 24 28 32 32C40 36 44 56 44 56"
        stroke="#3B7DD8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M44 8C44 8 40 28 32 32C24 36 20 56 20 56"
        stroke="#3B7DD8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Telomere caps */}
      <circle cx="20" cy="8" r="5" fill="#E8873D" />
      <circle cx="44" cy="8" r="5" fill="#E8873D" />
      <circle cx="20" cy="56" r="5" fill="#E8873D" />
      <circle cx="44" cy="56" r="5" fill="#E8873D" />
    </svg>
  );
}
