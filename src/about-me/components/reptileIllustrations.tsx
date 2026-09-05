import { olive, mustard, cream } from '../../theme/palette';

interface IllustrationProps {
  size?: number;
}

// Small, hand-drawn flat-style cartoon illustrations for the reptile & amphibian
// quiz. Deliberately simple shapes (no external images) so they stay crisp at
// any size and match the site's olive/mustard palette regardless of theme.

export function SalamanderIllustration({ size = 96 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path
        d="M20 92c-8-4-10-14-4-20 10-10 26-6 34-14 8-8 6-22 20-26 10-3 18 4 16 14-3 14-16 18-24 26-8 8-4 22-16 28-8 4-18 0-26-8Z"
        fill={olive[400]}
      />
      <ellipse cx="34" cy="82" rx="16" ry="12" fill={olive[500]} />
      <circle cx="27" cy="79" r="3.5" fill={cream.default} />
      <circle cx="27" cy="79" r="1.6" fill={olive[900]} />
      <circle cx="40" cy="66" r="2.5" fill={mustard[400]} />
      <circle cx="52" cy="54" r="2.5" fill={mustard[400]} />
      <circle cx="64" cy="42" r="2.5" fill={mustard[400]} />
      <path
        d="M22 88c-3 2-5 5-4 8"
        stroke={olive[600]}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TadpoleIllustration({ size = 96 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path
        d="M92 60c10 6 14 16 8 20-8 5-20-3-28-10-6-5-8-8-8-8s2 3 8 8"
        fill="none"
      />
      <path d="M78 66c10 8 16 20 8 24-9 5-22-4-28-13-3-5-2-9 2-11 6-3 12 0 18 0Z" fill={olive[300]} />
      <circle cx="46" cy="60" r="26" fill={olive[400]} />
      <circle cx="37" cy="52" r="4" fill={cream.default} />
      <circle cx="37" cy="52" r="1.8" fill={olive[900]} />
      <circle cx="55" cy="52" r="4" fill={cream.default} />
      <circle cx="55" cy="52" r="1.8" fill={olive[900]} />
      <path d="M40 68q6 5 12 0" stroke={olive[700]} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function GeckoIllustration({ size = 96 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path
        d="M30 78c-10 8-18 10-22 6-4-4 0-12 8-16 6-3 10-2 10-2s-10-10-6-20c3-8 12-10 18-4 4 4 4 10 4 10s12-8 22-4c8 4 10 14 4 20-8 8-22 6-30 14-6 6-4 12-8 16-4 4-10 2-10-2 0-6 6-10 10-18Z"
        fill={olive[500]}
      />
      <circle cx="70" cy="42" r="12" fill={olive[400]} />
      <circle cx="66" cy="38" r="5" fill={cream.default} />
      <circle cx="66" cy="38" r="2.2" fill={olive[900]} />
      <circle cx="76" cy="38" r="5" fill={cream.default} />
      <circle cx="76" cy="38" r="2.2" fill={olive[900]} />
      <path d="M60 50q10 6 20 0" stroke={olive[800]} strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="80" r="3" fill={mustard[400]} />
      <circle cx="40" cy="70" r="2.4" fill={mustard[400]} />
    </svg>
  );
}

export function AxolotlIllustration({ size = 96 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path
        d="M46 96c-14 0-26-12-26-28 0-18 14-30 34-30 8 0 14 4 14 4s16-14 26-6c6 5 2 12-4 14-6 2-10-2-10-2s6 8 2 14c-3 5-9 4-9 4s10 8 4 14c-4 4-10 2-10 2s2 10-6 14c-5 2.5-10 0-15 0Z"
        fill={mustard[200]}
      />
      <ellipse cx="46" cy="66" rx="24" ry="20" fill={mustard[300]} />
      {[
        [26, 46],
        [34, 40],
        [42, 38],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y}q-8 -4 -10 4q8 -2 10 4`}
          fill={olive[400]}
        />
      ))}
      {[
        [26, 46],
        [34, 40],
        [42, 38],
      ].map(([x, y], i) => (
        <path
          key={`r${i}`}
          d={`M${x + 40} ${y}q8 -4 10 4q-8 -2 -10 4`}
          fill={olive[400]}
        />
      ))}
      <circle cx="38" cy="62" r="3.5" fill={olive[900]} />
      <circle cx="54" cy="62" r="3.5" fill={olive[900]} />
      <path d="M40 74q6 5 12 0" stroke={olive[700]} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CobraIllustration({ size = 96 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path
        d="M60 100c-12 0-22-8-22-18 0-8 6-12 6-12s-16-4-16-20c0-14 14-20 14-20"
        stroke={olive[500]}
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 30c-16 4-20 20-8 30 10 8 26 6 34 0 10-8 8-24-6-32-6-3-14-1-20 2Z"
        fill={olive[400]}
      />
      <circle cx="24" cy="34" r="3.6" fill={cream.default} />
      <circle cx="24" cy="34" r="1.6" fill={olive[900]} />
      <path d="M14 42l-6 4M14 46l-7 1" stroke={olive[900]} strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="26" r="2.6" fill={mustard[400]} />
      <circle cx="34" cy="46" r="2.6" fill={mustard[400]} />
    </svg>
  );
}
