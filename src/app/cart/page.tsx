"use client";

import Image from "next/image";
import Link from "next/link";
import { CartButton } from "@/components/cart/CartButton";
import { useCart } from "@/components/cart/CartProvider";

function formatRm(value: number) {
  return `RM${value.toFixed(2)}`;
}

export default function CartPage() {
  const { items, subtotalRm, setQty, removeItem, clear } = useCart();

  return (
    <div className="min-h-full">
      <div className="border-b border-slate-900/10 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-xs tracking-wide text-slate-700 sm:text-sm">
          ORDER BEFORE 1PM FOR SAME DAY / NEXT DAY PICK UP & DELIVERY{" "}
          <span className="text-slate-400">•</span>{" "}
          <span className="font-semibold text-slate-800">EXCEPT SUNDAY</span>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-900/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white ring-1 ring-slate-900/10">
              <span className="h-4 w-4 rounded-sm bg-gradient-to-br from-[#62a6ff] to-[#57f0ff]" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-900">
              Moja Maison
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link className="transition hover:text-slate-900" href="/shop">
              Shop
            </Link>
            <Link className="transition hover:text-slate-900" href="/about">
              About
            </Link>
            <Link className="transition hover:text-slate-900" href="/faq">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <CartButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Shopping cart
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Review your items, adjust quantities, then proceed to checkout.
            </p>
          </div>
          {items.length ? (
            <button
              onClick={() => clear()}
              className="rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
            >
              Clear cart
            </button>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-slate-900/10 bg-white/70 p-8 text-center">
            <div className="text-sm font-semibold text-slate-900">
              Your cart is empty
            </div>
            <div className="mt-2 text-sm text-slate-600">
              Head to the shop and pick something sweet.
            </div>
            <div className="mt-6">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(98,166,255,0.22)] transition hover:brightness-110"
              >
                Go to shop
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <section className="lg:col-span-8 space-y-3">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-900/10 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-900/10 bg-white/60">
                      {item.imageSrc ? (
                        <Image
                          src={item.imageSrc}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : null}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        {item.priceLabel}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <label className="text-sm text-slate-600">
                      Qty{" "}
                      <input
                        type="number"
                        min={1}
                        max={99}
                        value={item.qty}
                        onChange={(e) => setQty(item.slug, Number(e.target.value))}
                        className="ml-2 w-20 rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-700"
                      />
                    </label>

                    <div className="text-sm font-semibold text-slate-900">
                      {formatRm(item.unitPriceRm * item.qty)}
                    </div>

                    <button
                      onClick={() => removeItem(item.slug)}
                      className="rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </section>

            <aside className="lg:col-span-4">
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
                <div className="text-sm font-semibold text-slate-900">
                  Order summary
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    {formatRm(subtotalRm)}
                  </span>
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Delivery fees and final totals will be confirmed at checkout.
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/checkout"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(98,166,255,0.22)] transition hover:brightness-110"
                  >
                    Proceed to checkout
                  </Link>
                  <Link
                    href="/shop"
                    className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
                  >
                    Continue shopping
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

