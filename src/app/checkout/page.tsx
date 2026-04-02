"use client";

import Link from "next/link";
import { CartButton } from "@/components/cart/CartButton";
import { useCart } from "@/components/cart/CartProvider";

function formatRm(value: number) {
  return `RM${value.toFixed(2)}`;
}

export default function CheckoutPage() {
  const { items, subtotalRm } = useCart();

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
              Checkout
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Confirm your details, then complete payment.
            </p>
          </div>
          <Link
            href="/cart"
            className="rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
          >
            Back to cart
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-slate-900/10 bg-white/70 p-8 text-center">
            <div className="text-sm font-semibold text-slate-900">
              Your cart is empty
            </div>
            <div className="mt-2 text-sm text-slate-600">
              Add items before checkout.
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
            <section className="lg:col-span-7 space-y-4">
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
                <div className="text-sm font-semibold text-slate-900">
                  Member benefits
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Before you pay, consider signing up as a{" "}
                  <span className="font-semibold text-slate-900">
                    Moja Maison member
                  </span>{" "}
                  to unlock extra discounts and perks.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>- Member-only discounts & promo codes</li>
                  <li>- Faster checkout for repeat orders</li>
                  <li>- Order tracking and saved delivery details</li>
                </ul>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(98,166,255,0.22)] transition hover:brightness-110"
                  >
                    Sign up & get benefits
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
                  >
                    Log in
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
                    onClick={() => {
                      // placeholder: continue as guest
                      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                    }}
                  >
                    Continue as guest
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
                <div className="text-sm font-semibold text-slate-900">
                  Delivery / Pickup
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <select className="w-full rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-700">
                    <option>Delivery</option>
                    <option>Pickup</option>
                  </select>
                  <select className="w-full rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-700">
                    <option>(optional) Preferred time</option>
                    <option>11am - 1pm (Mon - Sat)</option>
                    <option>2pm - 4pm (Mon - Sat)</option>
                    <option>4pm - 6pm (Mon - Sat)</option>
                    <option>10am - 12:30pm (Sun)</option>
                  </select>
                </div>
                <div className="mt-3 text-xs text-slate-500">
                  This is a UI preview; payment + real delivery pricing can be
                  connected later.
                </div>
              </div>
            </section>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
                <div className="text-sm font-semibold text-slate-900">
                  Payment summary
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    {formatRm(subtotalRm)}
                  </span>
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Delivery and discounts are applied at payment in a real
                  integration.
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900/90"
                  onClick={() => {
                    alert(
                      "Payment is not connected yet. Next step: integrate Stripe/FPX/etc.",
                    );
                  }}
                >
                  Pay now
                </button>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

