interface LogoIconProps {
  className?: string
  variant?: "light" | "dark"
}

export function LogoIcon({ className = "w-8 h-8", variant = "light" }: LogoIconProps) {
  const fillColor = variant === "light" ? "#60A5FA" : "#1E293B"
  const accentColor = variant === "light" ? "#3B82F6" : "#60A5FA"

  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Círculo principal */}
      <circle cx="20" cy="20" r="18" fill={fillColor} stroke={accentColor} strokeWidth="2" />

      {/* Símbolo de IA - Neurônio estilizado */}
      <circle cx="20" cy="20" r="4" fill={accentColor} />

      {/* Conexões neurais */}
      <circle cx="12" cy="12" r="2" fill={accentColor} opacity="0.7" />
      <circle cx="28" cy="12" r="2" fill={accentColor} opacity="0.7" />
      <circle cx="12" cy="28" r="2" fill={accentColor} opacity="0.7" />
      <circle cx="28" cy="28" r="2" fill={accentColor} opacity="0.7" />

      {/* Linhas conectoras */}
      <line x1="14" y1="14" x2="18" y2="18" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="26" y1="14" x2="22" y2="18" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="14" y1="26" x2="18" y2="22" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="26" y1="26" x2="22" y2="22" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />

      {/* Texto "H" estilizado no centro */}
      <text
        x="20"
        y="25"
        textAnchor="middle"
        className="text-xs font-bold"
        fill={variant === "light" ? "white" : fillColor}
      >
        H
      </text>
    </svg>
  )
}
