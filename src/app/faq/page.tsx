import Link from "next/link";
import { CartButton } from "@/components/cart/CartButton";

type FaqItem = {
  q: string;
  a: string;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const sections: FaqSection[] = [
  {
    title: "General",
    items: [
      {
        q: "How does your delivery service work and what is the collection hours? Do you accept walk-ins?",
        a: "Yes — we accept walk-ins during our operating hours. For pre-orders, you can choose pickup/collection within our available time window. If you’re unsure what’s available for walk-in, feel free to contact us before coming over.",
      },
      {
        q: "What payment method do you accept?",
        a: "We accept online payments via our payment gateway. If you need online banking or alternative payment methods, please contact us for details.",
      },
      {
        q: "What if I want to cancel/change my order?",
        a: "Please inform us as early as possible (ideally at least 48 hours before your collection/delivery date). We’ll help you reschedule or advise on the available options.",
      },
      {
        q: "Can I request wordings on the cake?",
        a: "We can support simple message options depending on the cake. If you need a specific style, contact us before ordering so we can confirm what’s possible.",
      },
      {
        q: "Do you sell slice cake?",
        a: "Yes — we sell slice cakes (subject to daily availability).",
      },
      {
        q: "Can I order a cake and have same day / next day delivery?",
        a: "Yes. Selected items may be available for same-day / next-day delivery. For same-day orders, please place your order before 1PM (Mon–Sat).",
      },
    ],
  },
  {
    title: "Delivery / Pickup",
    items: [
      {
        q: "Do you have delivery service and which location do you cover?",
        a: "Yes, we offer delivery within selected coverage areas. Delivery charges depend on distance and driver availability.",
      },
      {
        q: "Who will be delivering my cake?",
        a: "We may use third-party delivery partners to ensure safe handling and reliable delivery.",
      },
      {
        q: "What time can I receive my cakes when using delivery service?",
        a: "Delivery is arranged by time slots. If you need a specific time, we’ll try our best to accommodate, but exact delivery time cannot be guaranteed due to traffic and driver routes.",
      },
      {
        q: "Am I able to change delivery time, address and recipient info after I placed my order?",
        a: "Yes — please contact us as early as possible. Late changes may be subject to driver availability and additional charges.",
      },
      {
        q: "What if the receiver is not present at the delivery time?",
        a: "You may request redelivery to a different address (subject to availability and extra charges). If the cake is returned, additional return fees may apply and product quality may be affected depending on temperature and time.",
      },
      {
        q: "What if the cake that I received turns up damaged?",
        a: "Please check upon receiving. If there is damage at delivery, inform the delivery person immediately and contact us so we can assist with next steps.",
      },
    ],
  },
  {
    title: "Handling & Storage",
    items: [
      {
        q: "How do I handle my cake if I do self-collection?",
        a: "Keep the cake box on a flat surface, away from direct sunlight, and avoid sudden braking/turns. For chilled cakes, keep them cool and limit time outside refrigeration.",
      },
      {
        q: "How long can cakes last at room temperature?",
        a: "Chilled cakes should be kept cool and are best served after returning to the refrigerator. For best quality, we recommend consuming within 1–2 days and avoiding freezing unless stated otherwise.",
      },
    ],
  },
  {
    title: "Dietary / Allergy",
    items: [
      {
        q: "Is your cake halal-certified?",
        a: "We use halal-friendly ingredients and follow careful handling practices. If you need confirmation for a specific item, please contact us and we’ll advise based on the current menu.",
      },
      {
        q: "Is your cake suitable for vegetarian, egg-free, gluten free, diabetes or keto diet?",
        a: "Most products may contain eggs, dairy, and sugar. We offer selected options for gluten-free or low-carb preferences. Please check individual product details.",
      },
      {
        q: "Is your cake sweet?",
        a: "Our cakes are designed to be balanced and generally on the less-sweet side.",
      },
      {
        q: "Do you have any nut-free/dairy-free options?",
        a: "Some items may be nut-free, but our kitchen may handle nuts and dairy. If you have allergies, please contact us before ordering so we can advise.",
      },
    ],
  },
];

function FaqCard({ q, a }: FaqItem) {
  return (
    <details className="group rounded-2xl border border-slate-900/10 bg-white/70 p-4 open:bg-white">
      <summary className="cursor-pointer list-none select-none">
        <div className="flex items-start justify-between gap-4">
          <div className="text-sm font-semibold text-slate-900">{q}</div>
          <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/5 text-slate-700 transition group-open:rotate-45">
            +
          </div>
        </div>
      </summary>
      <div className="mt-3 text-sm leading-6 text-slate-600">{a}</div>
    </details>
  );
}

export default function FaqPage() {
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
            <Link className="transition hover:text-slate-900" href="/">
              Home
            </Link>
            <Link className="transition hover:text-slate-900" href="/shop">
              Shop
            </Link>
            <Link className="transition hover:text-slate-900" href="/about">
              About
            </Link>
            <Link
              className="font-semibold text-slate-900"
              href="/faq"
              aria-current="page"
            >
              FAQ
            </Link>
            <Link className="transition hover:text-slate-900" href="/#contact">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <CartButton className="hidden sm:inline-flex relative items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white" />
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(98,166,255,0.22)] transition hover:brightness-110"
            >
              Order now
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            FAQ
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Quick answers about ordering, delivery, and caring for your cakes.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  {section.title}
                </h2>
              </div>
              <div className="mt-4 grid gap-3">
                {section.items.map((item) => (
                  <FaqCard key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-900/10 bg-white/60 p-6">
          <div className="text-sm font-semibold text-slate-900">
            Need assistance?
          </div>
          <div className="mt-2 text-sm text-slate-600">
            Message us and we’ll help you pick the right cake for the occasion.
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-slate-900/5 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-900/10"
            >
              Contact support
            </a>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
            >
              Browse the shop
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900/10 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} Moja Maison. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <a className="hover:text-slate-900" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-slate-900" href="#">
                Terms of Service
              </a>
              <a className="hover:text-slate-900" href="#">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

