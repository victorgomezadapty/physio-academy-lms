interface AcademyLogoProps {
  className?: string
  iconOnly?: boolean
  light?: boolean
}

// Neutral demo brand mark for Physio Academy (not affiliated with any real organization).
export default function AcademyLogo({ className = '', iconOnly = false, light = false }: AcademyLogoProps) {
  const primary = '#4F46E5'
  const accent = '#14B8A6'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Abstract learning + movement mark */}
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="76" height="76" rx="20" stroke={primary} strokeWidth="7" fill="none" />
        <path d="M30 62 L50 34 L70 62" stroke={accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="36" y1="72" x2="64" y2="72" stroke={primary} strokeWidth="7" strokeLinecap="round" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col leading-tight">
          <span
            className="font-bold tracking-[0.15em] text-sm uppercase"
            style={{ color: light ? '#1A1A2E' : '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
          >
            PHYSIO
          </span>
          <span
            className="text-[10px] tracking-[0.2em] font-medium"
            style={{ color: accent, letterSpacing: '0.15em' }}
          >
            ACADEMY
          </span>
        </div>
      )}
    </div>
  )
}
