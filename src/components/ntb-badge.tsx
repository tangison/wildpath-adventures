import Image from 'next/image';
import { NTB_REG_NUMBER } from '@/lib/site';
import { withBP } from '@/lib/base-path';

/**
 * NtbBadge — Namibia Tourism Board registration mark.
 *
 * A typographic seal in the site's editorial language (sharp border, tracked
 * small caps, hairline rule) rather than a recreation of the NTB's official
 * logo, which is a registered mark we do not hold assets for.
 *
 * - When NTB_REG_NUMBER is set (src/lib/site.ts or NEXT_PUBLIC_NTB_REG_NUMBER),
 *   every badge renders "NTB Reg. <number>".
 * - While it is empty the badge renders the verified-generic statement only;
 *   the statutory line stays honest ("Registration number available on
 *   request" on /terms carries that detail).
 *
 * Variant `dark` is for the footer band (#1A1A1A); `light` for ivory pages.
 * Pure server component: zero client JS, zero bytes beyond the markup.
 */

export function NtbBadge({
  variant = 'light',
  compact = false,
  className = '',
}: {
  variant?: 'light' | 'dark';
  compact?: boolean;
  className?: string;
}) {
  const line = variant === 'dark' ? 'border-[#F2EDE3]/25' : 'border-[#1A1A1A]/25';
  const ink = variant === 'dark' ? 'text-[#F2EDE3]' : 'text-[#1A1A1A]';
  const muted = variant === 'dark' ? 'text-[#F2EDE3]/60' : 'text-[#1A1A1A]/60';
  const soft = variant === 'dark' ? 'text-[#F2EDE3]/45' : 'text-[#1A1A1A]/45';
  const rule = variant === 'dark' ? 'bg-[#F2EDE3]/25' : 'bg-[#1A1A1A]/25';
  const accent = variant === 'dark' ? 'text-[#E8854A]' : 'text-[#9E4214]';

  if (compact) {
    return (
      <p
        className={`inline-flex items-center gap-2 border ${line} px-3 py-2 ${className}`}
        data-testid="ntb-badge"
      >
        {/* 1:1 scale-locked mark, decorative — the text carries the meaning */}
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
          <rect x="0.5" y="0.5" width="17" height="17" fill="none" stroke="currentColor" className={muted} strokeWidth="1" />
          <path d="M4.5 12.5v-7l4.5 5v-5h1v7l-4.5-5v5z" fill="currentColor" className={ink} />
          <path d="M12.5 5.5h1v7h-1z" fill="currentColor" className={accent} />
        </svg>
        <span className={`text-[0.6rem] tracking-[0.22em] uppercase ${muted}`}>
          {NTB_REG_NUMBER ? (
            <>NTB Reg. <span className={ink}>{NTB_REG_NUMBER}</span></>
          ) : (
            <>Registered · Namibia Tourism Board</>
          )}
        </span>
      </p>
    );
  }

  return (
    <div
      className={`inline-flex flex-col items-center border ${line} px-6 py-5 text-center ${className}`}
      data-testid="ntb-badge"
    >
      <Image
        src={withBP(variant === 'dark'
          ? '/images/brand/wildpath-logo-dark-theme.webp'
          : '/images/brand/wildpath-logo-light-theme.webp')}
        alt=""
        width={48}
        height={54}
        className="w-12 h-[3.375rem] object-contain mb-3"
      />
      <p className={`wp-display text-2xl leading-none ${ink} mb-2`}>NTB</p>
      <span className={`block w-10 h-px ${rule} mb-2`} aria-hidden="true" />
      <p className={`text-[0.6rem] tracking-[0.24em] uppercase ${muted}`}>
        Namibia Tourism Board
      </p>
      <p className={`text-[0.6rem] tracking-[0.24em] uppercase ${ink} mt-1`}>
        {NTB_REG_NUMBER ? `Reg. ${NTB_REG_NUMBER}` : 'Registered'}
      </p>
      <p className={`text-[0.55rem] tracking-[0.18em] uppercase ${soft} mt-3 max-w-[22ch]`}>
        Tour operator · Windhoek, Namibia
      </p>
    </div>
  );
}
