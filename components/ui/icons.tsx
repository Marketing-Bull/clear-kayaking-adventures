type IconProps = { className?: string };
const base = (className?: string) => ({
  className,
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const KayakIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M2 12c4 3 16 3 20 0-4-3-16-3-20 0Z" />
    <path d="M12 9v6" />
    <path d="M5 7l3 3M19 7l-3 3" />
  </svg>
);

export const GuideIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20a7 7 0 0 1 14 0" />
    <path d="M12 11v3" />
  </svg>
);

export const FamilyIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="8" cy="7" r="2.4" />
    <circle cx="16.5" cy="8" r="2" />
    <path d="M3 20a5 5 0 0 1 10 0" />
    <path d="M13.5 20a4 4 0 0 1 7 0" />
  </svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg className={className} width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const MapPinIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ClockIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const GiftIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3" y="8" width="18" height="13" rx="1.5" />
    <path d="M3 12h18M12 8v13" />
    <path d="M12 8S10 3 7.5 4.5 9.5 8 12 8Zm0 0s2-5 4.5-3.5S14.5 8 12 8Z" />
  </svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const FacebookIcon = ({ className }: IconProps) => (
  <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h2.5l.5-3H13v-2c0-.6.4-1 1-1Z" />
  </svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
