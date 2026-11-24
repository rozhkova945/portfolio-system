import { useId, type ReactNode } from "react";

export type ButtonProps = {
  /** Вигляд кнопки: `primary` — темна заливка (`ink`), `secondary` — контур `ink-muted` без заливки. */
  variant?: "primary" | "secondary";
  /** Розмір: `md` — звичайний, `lg` — великий (для кнопок першого екрана). */
  size?: "md" | "lg";
  /** Вимкнена кнопка. Робиться через `aria-disabled`, а не `disabled`: кнопка лишається у фокусі, і скрінрідер читає пояснення. */
  disabled?: boolean;
  /** Пояснення, чому кнопка вимкнена. Читається скрінрідером через `aria-describedby`. Обовʼязкове, коли `disabled`. */
  disabledReason?: string;
  /** Якщо передано, кнопка рендериться як посилання `<a>`. */
  href?: string;
  /** Обробник натискання кнопки (ігнорується, поки кнопка вимкнена). */
  onClick?: () => void;
  /** Текст кнопки. */
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-control text-button transition-colors " +
  "outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink " +
  "aria-disabled:cursor-not-allowed aria-disabled:text-ink-muted";

const variants = {
  primary:
    "bg-ink text-canvas hover:bg-ink-muted " +
    "aria-disabled:bg-line aria-disabled:hover:bg-line",
  secondary:
    "border border-ink-muted text-ink hover:bg-surface " +
    "aria-disabled:border-line aria-disabled:bg-transparent aria-disabled:hover:bg-transparent",
} as const;

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
} as const;

/**
 * Кнопка сайту. Одна на весь проєкт: головна дія — `primary`, друга за важливістю — `secondary`.
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  href,
  onClick,
  children,
}: ButtonProps) {
  const uid = useId();
  const reasonId = disabled && disabledReason ? `${uid}-reason` : undefined;
  const className = `${base} ${variants[variant]} ${sizes[size]}`;
  const guard = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  const reason = reasonId ? (
    <span id={reasonId} className="sr-only">
      {disabledReason}
    </span>
  ) : null;

  if (href) {
    return (
      <>
        <a
          className={className}
          href={disabled ? undefined : href}
          role={disabled ? "link" : undefined}
          aria-disabled={disabled || undefined}
          aria-describedby={reasonId}
          onClick={guard}
        >
          {children}
        </a>
        {reason}
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        aria-disabled={disabled || undefined}
        aria-describedby={reasonId}
        onClick={guard}
      >
        {children}
      </button>
      {reason}
    </>
  );
}
