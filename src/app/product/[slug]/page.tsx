import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, productsBySlug } from "@/lib/products";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { CartButton } from "@/components/cart/CartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsBySlug.get(slug);
  if (!product) return notFound();

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
            <Link className="transition hover:text-slate-900" href="/faq">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <CartButton />
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
            >
              Back to products
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-sm text-slate-500">
          Home / {product.category} /{" "}
          <span className="text-slate-700">{product.name}</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          <section className="lg:col-span-7">
            <div className="grid gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70">
                <Image
                  src={product.images[0]?.src ?? "/images/demo/shop/display-case.jpg"}
                  alt={product.images[0]?.alt ?? product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 720px, 100vw"
                  priority
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {product.images.slice(0, 3).map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-900/10 bg-white/60"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 220px, 33vw"
                    />
                  </div>
                ))}
              </div>

              {product.badge ? (
                <div className="inline-flex w-fit items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                  {product.badge}
                </div>
              ) : null}
            </div>
          </section>

          <section className="lg:col-span-5">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3 text-xl font-semibold text-slate-900">
              {product.price}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {product.summary}
            </p>

            {product.highlights?.length ? (
              <div className="mt-6 space-y-3">
                {product.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-slate-900/10 bg-white/70 p-4"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {h.title}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      {h.body}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {product.availabilityNote ? (
              <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white/60 p-4 text-sm text-slate-700">
                <span className="font-semibold">Availability:</span>{" "}
                {product.availabilityNote}
              </div>
            ) : null}

            <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white/70 p-5">
              <div className="text-sm font-semibold text-slate-900">
                Delivery Day / Pick-up Day
              </div>
              <select className="mt-2 w-full rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-700">
                <option>(optional)</option>
                <option>Wednesday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>

              <div className="mt-4 text-sm font-semibold text-slate-900">
                Delivery Time / Pick-up Time
              </div>
              <select className="mt-2 w-full rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-700">
                <option>(optional) Choose your preferred time</option>
                <option>11am - 1pm (Monday - Saturday)</option>
                <option>2pm - 4pm (Monday - Saturday)</option>
                <option>4pm - 6pm (Monday - Saturday)</option>
                <option>10am - 12:30pm (Sunday only)</option>
              </select>

              <div className="mt-4 text-sm font-semibold text-slate-900">
                Birthday Kit
              </div>
              <select className="mt-2 w-full rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-700">
                <option>(optional)</option>
                <option>Happy Birthday topper and one candle</option>
                <option>One candle only</option>
                <option>No, thanks</option>
              </select>

              <div className="mt-4 text-sm font-semibold text-slate-900">
                Greeting Card
              </div>
              <input
                className="mt-2 w-full rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-700"
                placeholder="(optional) Your message"
              />

              <div className="mt-5 flex items-center gap-3">
                <AddToCartButton
                  slug={product.slug}
                  name={product.name}
                  priceLabel={product.price}
                  unitPriceRm={Number.parseFloat(
                    product.price.replace("RM", "").replace(",", ""),
                  )}
                  imageSrc={product.images[0]?.src}
                />
                <button
                  className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
                  aria-label="Add to wishlist"
                  title="Add to wishlist"
                >
                  ♡
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {product.size?.length ? (
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
              <div className="text-sm font-semibold text-slate-900">Size</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {product.size.map((x) => (
                  <li key={x}>- {x}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {product.allergens?.length ? (
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
              <div className="text-sm font-semibold text-slate-900">
                Allergens
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {product.allergens.map((x) => (
                  <li key={x}>- {x}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {product.handling?.length ? (
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
              <div className="text-sm font-semibold text-slate-900">
                Handling
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {product.handling.map((x) => (
                  <li key={x}>- {x}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {product.storage?.length ? (
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6">
              <div className="text-sm font-semibold text-slate-900">
                Storage
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {product.storage.map((x) => (
                  <li key={x}>- {x}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

