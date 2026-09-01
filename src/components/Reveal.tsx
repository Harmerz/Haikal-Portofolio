interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
}

/**
 * Progressive CSS reveal. Content is visible by default; browsers that support
 * scroll-driven animations enhance it without client-side observers or state.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
