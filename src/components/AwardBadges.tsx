import React from 'react';
import { AwardGroup } from '../types';

const LaurelBranch = ({ className }: { className: string }) => (
  <svg viewBox="0 0 48 180" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M42 174C13 150 6 111 12 73C15 50 23 30 35 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="31" cy="17" rx="4" ry="10" transform="rotate(26 31 17)" />
    <ellipse cx="20" cy="42" rx="5" ry="11" transform="rotate(-32 20 42)" />
    <ellipse cx="32" cy="47" rx="5" ry="10" transform="rotate(54 32 47)" />
    <ellipse cx="10" cy="64" rx="5" ry="11" transform="rotate(-30 10 64)" />
    <ellipse cx="27" cy="69" rx="5" ry="11" transform="rotate(56 27 69)" />
    <ellipse cx="7" cy="91" rx="5" ry="11" transform="rotate(-14 7 91)" />
    <ellipse cx="26" cy="94" rx="5" ry="11" transform="rotate(72 26 94)" />
    <ellipse cx="10" cy="119" rx="5" ry="11" transform="rotate(-34 10 119)" />
    <ellipse cx="30" cy="119" rx="5" ry="11" transform="rotate(76 30 119)" />
    <ellipse cx="21" cy="146" rx="5" ry="11" transform="rotate(-47 21 146)" />
    <ellipse cx="38" cy="140" rx="5" ry="10" transform="rotate(57 38 140)" />
  </svg>
);

export const AwardBadges = ({ groups }: { groups: AwardGroup[] }) => (
  <div className={`grid justify-items-center gap-6 ${groups.length > 1 ? 'sm:grid-cols-2' : ''}`}>
    {groups.map((group) => (
      <div key={`${group.organizer}-${group.awards.join('-')}`} className="relative flex min-h-52 w-full max-w-sm items-center justify-center px-12 py-7 text-center text-zinc-950">
        <LaurelBranch className="pointer-events-none absolute left-0 top-1/2 h-44 w-12 -translate-y-1/2" />
        <LaurelBranch className="pointer-events-none absolute right-0 top-1/2 h-44 w-12 -translate-y-1/2 -scale-x-100" />
        <div>
          <ul className="space-y-2.5 font-display text-base font-semibold leading-relaxed">
            {group.awards.map((award) => (
              <li key={award} aria-label={award}>
                {award === 'SELECTED INDIE 80' ? (
                  <>
                    <span className="block font-mono-code text-[11px] tracking-[0.2em]">SELECTED </span>
                    <span className="mt-2 block text-2xl font-bold tracking-wide">INDIE 80</span>
                  </>
                ) : award}
              </li>
            ))}
          </ul>
          {group.organizer && (
            <p className="mt-5 text-xs leading-relaxed text-zinc-600">
              {group.organizer}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);
