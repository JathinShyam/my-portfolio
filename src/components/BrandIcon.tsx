import { brandIcons } from '@/lib/brandIcons';

export default function BrandIcon({ name, size = 16 }: { name: string; size?: number }) {
  const icon = brandIcons[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
