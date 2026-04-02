import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-slate-900/10 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-xs tracking-wide text-slate-700 sm:text-sm">
          ORDER BEFORE 1PM FOR SAME DAY / NEXT DAY PICK UP & DELIVERY{" "}
          <span className="text-slate-400">•</span>{" "}
          <span className="font-semibold text-slate-800">EXCEPT SUNDAY</span>
        </div>
      </div>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7 rounded-3xl border border-slate-900/10 bg-white/70 p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[#57f0ff]" />
              Our story • Our craft • Your celebrations
            </div>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Craft nice cake for every happiness moment.
            </h1>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-7 text-slate-600 sm:text-base">
              Moja Maison is built on a simple belief: the best cakes don’t just
              taste good — they help people celebrate. Whether it’s a birthday,
              a small win, a reunion, or a “just because” gift, we want every
              box to carry a little more joy.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-64 overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70">
              <Image
                src="/images/demo/about/bakery-counter.jpg"
                alt="Bakery counter"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/0 to-white/0" />
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              src: "/images/demo/about/cake-display.jpg",
              alt: "Cake display",
            },
            {
              src: "/images/demo/about/hands-cake-slices.jpg",
              alt: "Hands holding cake slices",
            },
            {
              src: "/images/demo/about/cake-display.jpg",
              alt: "Bakery cakes",
            },
          ].map((img) => (
            <div
              key={img.alt}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Vision
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                To be the go-to cake maison for everyday celebrations — where
                thoughtful flavors and beautiful presentation make moments feel
                special.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Mission
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Craft nice cakes for every happiness moment — by baking with
                care, balancing flavors, and delivering an experience that feels
                effortless from ordering to the last bite.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Balanced sweetness",
                    desc: "Flavors designed to be light, modern, and satisfying.",
                  },
                  {
                    title: "Crafted textures",
                    desc: "Creamy, airy, crunchy — built to be memorable.",
                  },
                  {
                    title: "Freshness first",
                    desc: "Baked and prepared with care for quality you can taste.",
                  },
                  {
                    title: "Celebration-ready",
                    desc: "Packaging and finishing touches made for gifting.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-slate-900/10 bg-white/60 p-4"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {x.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{x.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-900/10 bg-gradient-to-br from-white/80 to-white/60 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Ready to celebrate?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Browse our collection and pick the cake that fits your moment.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(98,166,255,0.22)] transition hover:brightness-110"
              >
                Go to shop
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
              >
                Read FAQ
              </Link>
            </div>
          </div>
        </section>
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

