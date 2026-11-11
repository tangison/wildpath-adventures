import Image from 'next/image';
import { NTB_REG_NUMBER, NTB_DIRECTORY_URL } from '@/lib/site';
import { withBP } from '@/lib/base-path';

/**
 * NtbBadge — Namibia Tourism Board registration mark.
 *
 * Uses the official "Namibia · Endless Horizons" tourism mark served from the
 * NTB's own site (visitnamibia.com.na) and links every badge to the NTB
 * Business Directory, where the registration can be verified by number.
 *
 * - When NTB_REG_NUMBER is set (src/lib/site.ts or NEXT_PUBLIC_NTB_REG_NUMBER),
 *   every badge renders "NTB Reg. <number>" and links to the directory.
 * - While it is empty the badge renders the mark with the generic statement;
 *   the statutory line stays honest ("Registration number available on
 *   request" on /terms carries that detail).
 *
 * Variant `dark` is for the footer band (#1A1A1A) — the emblem sits on a small
 * ivory plate so the full-colour mark reads like an accreditation seal.
 * Variant `light` is for ivory pages and carries the full mark with wordmark.
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

  const label = NTB_REG_NUMBER
    ? `Registered with the Namibia Tourism Board — Reg. ${NTB_REG_NUMBER}. Verify on the NTB Business Directory.`
    : 'Registered with the Namibia Tourism Board. Verify on the NTB Business Directory.';

  const linkProps = {
    href: NTB_DIRECTORY_URL,
    target: '_blank' as const,
    rel: 'noopener noreferrer',
    'aria-label': label,
    title: label,
  };

  if (compact) {
    return (
      <a
        {...linkProps}
        className={`inline-flex items-center gap-2.5 border ${line} pl-2 pr-3 py-1.5 hover:border-[#C5511A] transition-colors ${className}`}
        data-testid="ntb-badge"
      >
        {/* Official NTB emblem on an ivory plate — accreditation-seal treatment */}
        <span className="w-8 h-8 bg-[#F2EDE3] flex items-center justify-center shrink-0">
          <Image
            src={withBP('/images/brand/ntb-emblem.webp')}
            alt=""
            width={30}
            height={20}
            className="w-[30px] h-auto"
          />
        </span>
        <span className={`text-[0.6rem] tracking-[0.22em] uppercase ${muted}`}>
          {NTB_REG_NUMBER ? (
            <>NTB Reg. <span className={ink}>{NTB_REG_NUMBER}</span></>
          ) : (
            <>Registered · Namibia Tourism Board</>
          )}
        </span>
      </a>
    );
  }

  return (
    <a
      {...linkProps}
      className={`inline-flex flex-col items-center border ${line} px-6 py-5 text-center hover:border-[#C5511A] transition-colors ${className}`}
      data-testid="ntb-badge"
    >
      {/* Official "Namibia · Endless Horizons" tourism mark */}
      <Image
        src={withBP('/images/brand/ntb-full.webp')}
        alt="Namibia Tourism Board — Namibia, Endless Horizons"
        width={104}
        height={103}
        className="w-[104px] h-auto mb-3"
      />
      <span className={`block w-10 h-px ${rule} mb-2`} aria-hidden="true" />
      <p className={`text-[0.6rem] tracking-[0.24em] uppercase ${muted}`}>
        Namibia Tourism Board
      </p>
      <p className={`text-[0.6rem] tracking-[0.24em] uppercase ${ink} mt-1`}>
        {NTB_REG_NUMBER ? `Reg. ${NTB_REG_NUMBER}` : 'Registered'}
      </p>
      <p className={`text-[0.55rem] tracking-[0.18em] uppercase ${soft} mt-3 max-w-[24ch]`}>
        Verify on the NTB Business Directory ↗
      </p>
    </a>
  );
}
