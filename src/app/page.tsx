export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="border-b border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-xs tracking-wide text-white/70 sm:text-sm">
          ORDER BEFORE 1PM FOR SAME DAY / NEXT DAY PICK UP & DELIVERY{" "}
          <span className="text-white/40">•</span>{" "}
          <span className="font-medium text-white/80">EXCEPT SUNDAY</span>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070b1a]/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <a href="#" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <span className="h-4 w-4 rounded-sm bg-gradient-to-br from-[#62a6ff] to-[#57f0ff]" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">
              Maison
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="transition hover:text-white" href="#">
              Home
            </a>
            <a className="transition hover:text-white" href="#shop">
              Shop
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 sm:inline-flex"
            >
              Login
            </a>
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-4 py-2 text-sm font-semibold text-[#070b1a] shadow-[0_10px_30px_rgba(98,166,255,0.18)] transition hover:brightness-110"
            >
              Order now
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#57f0ff]" />
                Est. 2016 • Handcrafted • Halal-friendly ingredients
              </div>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Celebrate every moment with cakes that create memories.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
                Freshly made upon order, with a modern, less-sweet profile and a
                focus on texture. Same / next-day delivery available in selected
                areas.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#shop"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#62a6ff] to-[#57f0ff] px-5 py-3 text-sm font-semibold text-[#070b1a] transition hover:brightness-110"
                >
                  Browse best-sellers
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
                >
                  Learn more
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Baked fresh daily",
                    desc: "Preorder required — crafted in small batches.",
                  },
                  {
                    title: "Same / Next-day delivery",
                    desc: "Order before 1PM (Mon–Sat).",
                  },
                  {
                    title: "Halal-friendly",
                    desc: "Ingredients selected with care.",
                  },
                  {
                    title: "Delivery coverage",
                    desc: "Within selected city zones.",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-sm font-semibold text-white">
                      {f.title}
                    </div>
                    <div className="mt-1 text-sm text-white/65">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#62a6ff]/25 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#57f0ff]/20 blur-3xl" />

                <div className="relative">
                  <div className="text-xs font-medium tracking-wide text-white/60">
                    Top pick
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    Signature Collection
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/70">
                    A curated lineup of crowd favorites — balanced sweetness,
                    modern flavor pairings, and a clean finish.
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { name: "Avocado", price: "RM125.00" },
                      { name: "Prestige Noir", price: "RM235.00" },
                      { name: "Everytime", price: "RM180.00" },
                      { name: "Mango Yuzu", price: "RM120.00" },
                    ].map((p) => (
                      <div
                        key={p.name}
                        className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-4"
                      >
                        <div className="text-sm font-semibold text-white">
                          {p.name}
                        </div>
                        <div className="mt-1 text-xs text-white/60">
                          {p.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Same-day delivery
                      </div>
                      <div className="text-xs text-white/60">
                        Order before 1PM (Mon–Sat)
                      </div>
                    </div>
                    <a
                      href="#shop"
                      className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/15"
                    >
                      See menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Best-selling cakes of the month
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                A modern, blueish theme storefront with a familiar ecommerce
                layout — swap content/images later with your real products.
              </p>
            </div>
            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10"
            >
              View more
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Avocado",
                tag: "Same Day before 1pm",
                price: "RM125.00",
              },
              {
                name: "Prestige Noir",
                tag: "Signature",
                price: "RM235.00",
              },
              {
                name: "Everytime",
                tag: "Top Pick!",
                price: "RM180.00",
              },
              {
                name: "Low Carb Pistachio Cake",
                tag: "Gluten-free",
                price: "RM150.00",
              },
              {
                name: "Labu-Labu",
                tag: "Limited Days only",
                price: "RM118.00",
              },
              {
                name: "Duo in a box – Petits Gateaux",
                tag: "Box Edition",
                price: "RM63.00",
              },
            ].map((p, idx) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/8"
              >
                <div className="relative h-40 bg-gradient-to-br from-white/10 to-white/0">
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background:
                        idx % 2 === 0
                          ? "radial-gradient(380px 220px at 20% 20%, rgba(98,166,255,0.35), transparent 55%)"
                          : "radial-gradient(380px 220px at 80% 20%, rgba(87,240,255,0.25), transparent 55%)",
                    }}
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#070b1a]/60 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                    {p.tag}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-base font-semibold text-white">
                    {p.name}
                  </div>
                  <div className="mt-1 text-sm text-white/60">{p.price}</div>

                  <div className="mt-4 flex gap-2">
                    <a
                      href="#"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                    >
                      Select options
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                      aria-label="Add to wishlist"
                      title="Add to wishlist"
                    >
                      ♡
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Premium cakes
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                A union of flavors and textures — built for gifting, sharing,
                and those “just because” days.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Pineapple Tart",
                    note: "Buttery pastry, slow-cooked filling.",
                  },
                  {
                    title: "La Lune",
                    note: "Oolong, vanilla, mascarpone.",
                  },
                  {
                    title: "Low Carb Chocolate Cake",
                    note: "Rich, intense, lighter finish.",
                  },
                  {
                    title: "L’amour",
                    note: "Yuzu, grapefruit, matcha, almond.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="text-sm font-semibold text-white">
                      {x.title}
                    </div>
                    <div className="mt-1 text-sm text-white/65">{x.note}</div>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                      Crafted in small batches
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Cake lovers say the nicest things
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Testimonials section styled like modern ecommerce reviews.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
              >
                Read more reviews
              </a>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {[
                {
                  name: "Rain Prince",
                  text: "Sweet and light, with surprising layers. Would order again — would love more small-size options.",
                  meta: "10 Mar 26",
                },
                {
                  name: "Jaslene K",
                  text: "Fresh, moist, full of texture. Customer service was prompt and delivery was on time.",
                  meta: "03 Mar 26",
                },
                {
                  name: "Norhayati",
                  text: "Fast delivery and great balance of sweet/sour. Perfect size — no leftovers.",
                  meta: "04 Feb 26",
                },
              ].map((r) => (
                <div
                  key={r.name}
                  className="rounded-3xl border border-white/10 bg-[#070b1a]/40 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-white">{r.name}</div>
                    <div className="text-xs text-white/45">{r.meta}</div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 pb-14">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">
                  Follow us on Instagram
                </div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Stay updated with the latest news and behind-the-scenes.
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                  @maisoncakes
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Operation hours
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-white/70">
                      <div>Mon - Sat: 11:00 AM - 6:00 PM</div>
                      <div>Sun: 10:00 AM - 12:30 PM</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Connect
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-white/70">
                      <div>
                        Email:{" "}
                        <a className="text-white/85 hover:text-white" href="#">
                          hello@maison.example
                        </a>
                      </div>
                      <div>
                        Phone:{" "}
                        <a className="text-white/85 hover:text-white" href="#">
                          +60 12-000 0000
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="faq" className="mt-6 border-t border-white/10 pt-6">
                  <div className="text-sm font-semibold text-white">FAQ</div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        q: "Can I get same-day delivery?",
                        a: "Selected items only. Order before 1PM (Mon–Sat).",
                      },
                      {
                        q: "Do you bake upon order?",
                        a: "Yes — preorder required for freshness and quality.",
                      },
                    ].map((x) => (
                      <div
                        key={x.q}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="text-sm font-semibold text-white">
                          {x.q}
                        </div>
                        <div className="mt-1 text-sm text-white/65">{x.a}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Maison. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <a className="hover:text-white" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-white" href="#">
                Terms of Service
              </a>
              <a className="hover:text-white" href="#">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
