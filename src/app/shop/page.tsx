import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

type Product = {
  slug?: string;
  name: string;
  description?: string;
  badge?: string;
  price: string;
  imageSrc: string;
  soldOut?: boolean;
  hasVariants?: boolean;
};

type Section = {
  id: string;
  title: string;
  description: string;
  products: Product[];
};

const sections: Section[] = [
  {
    id: "premium-cake",
    title: "Premium Cake",
    description:
      "French-inspired cakes with an Asian twist. Multi-layer indulgence with contrasting textures and complementary flavours.",
    products: [
      {
        slug: "pineapple-tart",
        name: "Pineapple Tart",
        description:
          "Handcrafted pineapple tarts with buttery pastry and slow-cooked pineapple filling, finished in a refined less-sweet style.",
        badge: "Same Day before 1pm",
        price: "RM55.00",
        imageSrc: "/images/demo/shop/pineapple-upside-down.jpg",
      },
      {
        slug: "duo-in-a-box-petits-gateaux",
        name: "Duo in a box – Petits Gateaux",
        description:
          "A petit gateau collection featuring miniature versions of our premium cakes.",
        badge: "Limited Days only",
        price: "RM63.00",
        imageSrc: "/images/demo/shop/display-case.jpg",
      },
      {
        slug: "seikhlas-raya-gift-box",
        name: "Seikhlas Raya Gift Box",
        description:
          "A delightful selection of festive treats featuring Kek Medjool Kurma and signature cookies.",
        badge: "Same Day before 1pm",
        price: "RM195.00",
        imageSrc: "/images/demo/shop/apple-tart.jpg",
      },
      {
        slug: "prestige-noir",
        name: "Prestige Noir",
        description:
          "French dark chocolate, Sicilian pistachio and bright raspberries.",
        badge: "Signature",
        price: "RM235.00",
        imageSrc: "/images/demo/shop/choco-slice-raspberry.jpg",
      },
      {
        slug: "lamour",
        name: "L’amour",
        description:
          "Zesty yuzu and tangy grapefruit, balanced with matcha and almond.",
        badge: "Same Day before 1pm",
        price: "RM180.00",
        imageSrc: "/images/demo/shop/matcha-slice.jpg",
      },
      {
        slug: "everytime",
        name: "Everytime",
        description:
          "Premium vanilla bean with a tang from raspberries and toasted hazelnuts.",
        badge: "Top Pick!",
        price: "RM180.00",
        imageSrc: "/images/demo/shop/strawberry-cake.jpg",
      },
    ],
  },
  {
    id: "collection-cake",
    title: "Collection Cake",
    description:
      "Classic delights with timeless flavours to mark just about every occasion.",
    products: [
      {
        slug: "low-carb-pistachio-cake",
        name: "Low Carb Pistachio Cake",
        description:
          "Low-carb, gluten-free, and sugar-free. Made with real pistachio goodness.",
        badge: "Gluten-free",
        price: "RM150.00",
        imageSrc: "/images/demo/shop/round-cake.jpg",
      },
      {
        slug: "labu-labu",
        name: "Labu-Labu",
        description:
          "A light, creamy pumpkin-shaped creation that’s a little fun and a little refined.",
        badge: "Same Day before 1pm",
        price: "RM118.00",
        imageSrc: "/images/demo/shop/strawberry-cake-2.jpg",
      },
      {
        slug: "watermelon-lychee",
        name: "Watermelon Lychee",
        description:
          "Refreshing watermelon and lychee, a perfect combination of light and vibrant flavors.",
        badge: "Same Day before 1pm",
        price: "RM118.00 – RM150.00",
        imageSrc: "/images/demo/shop/display-case.jpg",
        hasVariants: true,
      },
      {
        slug: "mellow-taro",
        name: "Mellow Taro",
        description:
          "Robust with fresh yam and Japanese purple sweet potatoes.",
        badge: "Same Day before 1pm",
        price: "RM120.00 – RM150.00",
        imageSrc: "/images/demo/shop/round-cake.jpg",
        hasVariants: true,
      },
      {
        slug: "la-lune",
        name: "La Lune",
        description:
          "Earthy, floral notes of oolong tea meets aromatic vanilla bean and velvety mascarpone.",
        badge: "Top Pick!",
        price: "RM118.00",
        imageSrc: "/images/demo/shop/choco-slice-berries.jpg",
      },
      {
        slug: "avocado",
        name: "Avocado",
        description:
          "A fusion between the buttery goodness of avocados and the airy lightness of cake.",
        badge: "Top Pick!",
        price: "RM125.00",
        imageSrc: "/images/demo/shop/round-cake.jpg",
      },
      {
        slug: "mango-yuzu",
        name: "Mango Yuzu",
        description: "Refreshing and light with a balance of sweet and sour.",
        badge: "Same Day before 1pm",
        price: "RM120.00",
        imageSrc: "/images/demo/shop/pineapple-upside-down.jpg",
      },
      {
        slug: "matcha-chacha",
        name: "Matcha-chacha",
        description:
          "A rich and indulgent matcha experience with a chilled cheesecake base.",
        badge: "Same Day before 1pm",
        price: "RM125.00",
        imageSrc: "/images/demo/shop/matcha-slice.jpg",
      },
      {
        slug: "low-carb-chocolate-cake",
        name: "Low Carb Chocolate Cake",
        description:
          "Rich and intense chocolate flavours made without gluten, flour or white sugar.",
        badge: "Gluten-free",
        price: "RM135.00",
        imageSrc: "/images/demo/shop/choco-slice-raspberry.jpg",
      },
      {
        slug: "strawberry",
        name: "Strawberry",
        description:
          "Bursts of strawberries, fluffy sponge, and creamy vanilla notes – joy in every bite!",
        badge: "Kids' Choice",
        price: "RM125.00",
        imageSrc: "/images/demo/shop/strawberry-cake.jpg",
      },
    ],
  },
  {
    id: "festive-cake",
    title: "Festive Cake",
    description:
      "Charming centrepieces for celebrations. Produced in limited quantities and seasonal availability.",
    products: [
      {
        slug: "duo-in-a-box-cny-collection",
        name: "Duo in a box – CNY collection",
        description:
          "Double the festive vibes with a limited-edition duo in a box.",
        badge: "Same Day before 1pm",
        price: "RM63.00",
        imageSrc: "/images/demo/shop/display-case.jpg",
        soldOut: true,
      },
      {
        slug: "mothers-day",
        name: "Mother’s Day",
        description:
          "Blueberry, blackcurrant, blackberry, and vanilla bean — crafted to celebrate Mum.",
        badge: "Festive Special",
        price: "RM155.00",
        imageSrc: "/images/demo/shop/strawberry-cake-2.jpg",
        soldOut: true,
      },
      {
        slug: "chinese-new-year",
        name: "Chinese New Year",
        description:
          "A joyful gallop of bold flavours and festive textures — made for celebration.",
        badge: "Festive Special",
        price: "RM168.00",
        imageSrc: "/images/demo/shop/round-cake.jpg",
        soldOut: true,
      },
    ],
  },
  {
    id: "box-edition",
    title: "Box Edition",
    description:
      "Thoughtfully curated boxes featuring a medley of flavours from our collection (based on availability).",
    products: [
      {
        slug: "pineapple-tart-box-edition",
        name: "Pineapple Tart",
        description:
          "Buttery pastry and slow-cooked pineapple filling — gifting-ready.",
        badge: "Same Day before 1pm",
        price: "RM55.00",
        imageSrc: "/images/demo/shop/pineapple-upside-down.jpg",
      },
      {
        slug: "duo-in-a-box-cny-collection-box",
        name: "Duo in a box – CNY collection",
        description: "A festive duo box (seasonal).",
        badge: "Same Day before 1pm",
        price: "RM63.00",
        imageSrc: "/images/demo/shop/display-case.jpg",
        soldOut: true,
      },
      {
        slug: "seindah-raya-set",
        name: "Seindah Raya Set",
        description: "A festive set produced in limited quantity.",
        badge: "Sold out",
        price: "RM90.00",
        imageSrc: "/images/demo/shop/apple-tart.jpg",
        soldOut: true,
      },
      {
        slug: "mid-autumn-baked-mooncake",
        name: "Mid-Autumn Collection – Baked Mooncake",
        description:
          "French-inspired baked mooncakes. 6 in a box, perfect for gifting.",
        badge: "Sold out",
        price: "RM163.00",
        imageSrc: "/images/demo/shop/apple-tart.jpg",
        soldOut: true,
      },
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  const href = product.slug ? `/product/${product.slug}` : "/shop";

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70 transition hover:bg-white">
      <div className="relative h-48">
        <Image
          src={product.imageSrc}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/0 to-white/0" />

        {product.badge ? (
          <div className="absolute left-4 top-4 rounded-full border border-slate-900/10 bg-white/75 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            {product.badge}
          </div>
        ) : null}

        {product.soldOut ? (
          <div className="absolute right-4 top-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
            Sold out
          </div>
        ) : null}
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-slate-900">
          {product.name}
        </h3>
        {product.description ? (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        ) : null}

        <div className="mt-3 text-sm font-semibold text-slate-900">
          {product.price}
        </div>

        <div className="mt-4 flex items-center gap-2">
          {product.soldOut ? (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-full bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-400">
              Unavailable
            </span>
          ) : (
            <Link
              href={href}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-900/10"
            >
              Select options
            </Link>
          )}
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white"
            aria-label="Add to wishlist"
            title="Add to wishlist"
          >
            ♡
          </a>
        </div>

        {product.hasVariants ? (
          <div className="mt-2 text-xs text-slate-500">
            This product has multiple variants.
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ShopPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-slate-900/10 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-xs tracking-wide text-slate-700 sm:text-sm">
          ORDER BEFORE 1PM FOR SAME DAY / NEXT DAY PICK UP & DELIVERY{" "}
          <span className="text-slate-400">•</span>{" "}
          <span className="font-semibold text-slate-800">EXCEPT SUNDAY</span>
        </div>
      </div>

      <SiteHeader ctaHref="#premium-cake" ctaLabel="Browse" />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Shop
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              A category-based shop page inspired by the layout strategy from
              the reference. Prices and product list follow the reference page.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.products.map((p) => (
                  <ProductCard key={p.name} product={p} />
                ))}
              </div>
            </section>
          ))}
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

