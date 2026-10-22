'use client';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2EDE3] text-[#1A1A1A]">
      {/* Compass SVG — subtle spinning indicator */}
      <div className="flex flex-col items-center gap-4">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wp-spin-compass"
          aria-hidden="true"
        >
          {/* Outer ring */}
          <circle cx="18" cy="18" r="16" stroke="#1A1A1A" strokeWidth="0.75" opacity="0.25" />
          {/* Tick marks — N/E/S/W */}
          <line x1="18" y1="2" x2="18" y2="5" stroke="#9E4214" strokeWidth="1" />
          <line x1="18" y1="31" x2="18" y2="34" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.4" />
          <line x1="2" y1="18" x2="5" y2="18" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.4" />
          <line x1="31" y1="18" x2="34" y2="18" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.4" />
          {/* Needle — north (accent) and south (charcoal) */}
          <polygon points="18,6 20,18 18,17 16,18" fill="#9E4214" />
          <polygon points="18,30 20,18 18,19 16,18" fill="#1A1A1A" opacity="0.5" />
          {/* Centre pin */}
          <circle cx="18" cy="18" r="1.5" fill="#1A1A1A" />
        </svg>

        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#1A1A1A]/50 wp-subhead">
          Loading&hellip;
        </p>
      </div>

      {/* Respect prefers-reduced-motion — spin only when animations are ok */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .wp-spin-compass {
            animation: wp-compass-spin 2.5s linear infinite;
          }
        }
        @keyframes wp-compass-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
