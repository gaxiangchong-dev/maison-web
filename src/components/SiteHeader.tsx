"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { CartButton } from "@/components/cart/CartButton";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({
  ctaHref = "/shop",
  ctaLabel = "Order now",
}: {
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () =>
      navItems.map((i) => ({
        ...i,
        active: isActive(pathname, i.href),
      })),
    [pathname],
  );

  return (
    <header className="sticky top-0 z-20 border-b border-slate-900/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white ring-1 ring-slate-900/10">
            <span className="h-4 w-4 rounded-sm bg-gradient-to-br from-[#62a6ff] to-[#57f0ff]" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-slate-900">
            Moja Maison
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={
                i.active
                  ? "font-semibold text-slate-900"
                  : "transition hover:text-slate-900"
              }
            >
              {i.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className={
              isActive(pathname, "/cart")
                ? "font-semibold text-slate-900"
                : "transition hover:text-slate-900"
            }
          >
            Cart
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <CartButton className="hidden sm:inline-flex relative items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white" />
          <Link
            href={ctaHref}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(98,166,255,0.22)] transition hover:brightness-110"
          >
            {ctaLabel}
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-white md:hidden"
            aria-label="Open menu"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="block h-0.5 w-5 bg-slate-900" />
            <span className="ml-2 block h-0.5 w-5 bg-slate-900" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-900/10 bg-white/85 backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid gap-2">
              {items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className={
                    i.active
                      ? "rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
                      : "rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
                  }
                >
                  {i.label}
                </Link>
              ))}

              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className={
                  isActive(pathname, "/cart")
                    ? "rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
                    : "rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
                }
              >
                Cart
              </Link>

              <div className="mt-2 grid gap-2 sm:hidden">
                <Link
                  href={ctaHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-4 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(98,166,255,0.22)] transition hover:brightness-110"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

