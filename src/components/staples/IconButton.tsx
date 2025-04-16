interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  showLabel?: boolean;
  classes?: string;
  onClick?: () => void;
}

export function IconButton({
  icon,
  label,
  classes,
  showLabel,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={
        "text-[1em] drop-shadow-neutral-950 drop-shadow-md transition-transform hover:-translate-y-4 flex gap-4 justify-center items-center" +
        classes
      }
    >
      {icon}
      {showLabel && <span>{label}</span>}
    </button>
  );
}
