"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function CartButton({ className }: { className?: string }) {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className={
        className ??
        "relative inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
      }
      aria-label="Open cart"
      title="Cart"
    >
      Cart
      {itemCount > 0 ? (
        <span className="ml-2 inline-flex min-w-6 items-center justify-center rounded-full bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white">
          {itemCount}
        </span>
      ) : null}
    </Link>
  );
}

