"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";

export type NavigationItem = {
  /** Текст пункту меню. */
  label: string;
  /** Куди веде пункт. */
  href: string;
};

export type NavigationProps = {
  /** Імʼя для логотипу. Пишеться великими літерами, кожне слово з нового рядка. */
  logo: string;
  /** Пункти меню. */
  items: NavigationItem[];
  /** `href` активного пункту (поточна сторінка). Такий пункт підкреслюється й отримує `aria-current`. */
  activeHref?: string;
  /** Текст кнопки дії справа. */
  ctaLabel: string;
  /** Куди веде кнопка дії. */
  ctaHref: string;
};

const linkClass =
  "text-body text-ink outline-offset-2 hover:text-ink-muted " +
  "focus-visible:outline-2 focus-visible:outline-ink";

/**
 * Верхня навігація сайту: логотип, пункти меню й кнопка дії.
 * На широкому екрані все в один рядок. На вузькому лишається логотип і кнопка «Menu»:
 * меню відкривається поверх контенту й закривається клавішею Escape.
 */
export function Navigation({ logo, items, activeHref, ctaLabel, ctaHref }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = items.map((item) => {
    const active = item.href === activeHref;
    return (
      <a
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={`${linkClass} ${active ? "underline decoration-accent underline-offset-4" : ""}`}
      >
        {item.label}
      </a>
    );
  });

  return (
    <nav aria-label="Main" className="relative flex items-center justify-between py-8">
      <Link href="/" className={`${linkClass} text-title`}>
        {logo
          .toUpperCase()
          .split(" ")
          .map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {links}
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>

      <div ref={toggleRef} className="md:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-control border border-ink-muted px-6 py-3 text-button text-ink outline-offset-2 hover:bg-surface focus-visible:outline-2 focus-visible:outline-ink"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute top-full z-10 w-full flex flex-col items-start gap-6 rounded-card border border-line bg-canvas p-6 md:hidden"
        >
          {links}
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
      )}
    </nav>
  );
}
