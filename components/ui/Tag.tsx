interface TagProps {
  label: string;
  variant?: 'default' | 'accent' | 'outline';
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  const variants = {
    default: 'bg-white/5 text-text-secondary border-white/10',
    accent: 'bg-accent/10 text-accent border-accent/20',
    outline: 'bg-transparent text-text-secondary border-white/15',
  };

  return (
    <span className={`inline-block px-2.5 py-1 text-xs rounded-md border font-mono tracking-wide ${variants[variant]}`}>
      {label}
    </span>
  );
}
