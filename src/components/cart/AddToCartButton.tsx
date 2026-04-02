"use client";

import { useMemo, useState } from "react";
import { useCart } from "./CartProvider";

type Props = {
  slug: string;
  name: string;
  priceLabel: string;
  unitPriceRm: number;
  imageSrc?: string;
  className?: string;
};

export function AddToCartButton({
  slug,
  name,
  priceLabel,
  unitPriceRm,
  imageSrc,
  className,
}: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const label = useMemo(() => (added ? "Added" : "Add to cart"), [added]);

  return (
    <button
      type="button"
      onClick={() => {
        addItem({ slug, name, priceLabel, unitPriceRm, imageSrc }, 1);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 900);
      }}
      className={
        className ??
        "inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(98,166,255,0.22)] transition hover:brightness-110"
      }
    >
      {label}
    </button>
  );
}

