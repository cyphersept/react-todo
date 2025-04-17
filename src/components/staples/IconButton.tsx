interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  showLabel?: boolean;
  classes?: string;
  onClick?: () => void;
}

interface IconProps {
  icon: React.ReactNode;
}

export function IconButton({
  icon,
  label,
  classes,
  onClick,
}: ButtonProps & IconProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={
        "text-[1em] drop-shadow-neutral-900/50 bg-transparent size-[1em] drop-shadow-xs hover:scale-125 transition-transform " +
        classes
      }
    >
      {icon}
    </button>
  );
}

export function WideButton({
  icon,
  label,
  classes,
  showLabel,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={
        "text-[1em] drop-shadow-neutral-950 bg-neutral-900 px-[1.2em] py-[0.6em] rounded-lg drop-shadow-md hover:-translate-y-2 transition-all flex gap-4 hover:border-neutral-300 border border-transparent justify-center items-center " +
        classes
      }
    >
      {icon}
      {showLabel && <span>{label}</span>}
    </button>
  );
}
