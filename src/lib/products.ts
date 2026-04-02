export type ProductDetail = {
  slug: string;
  name: string;
  price: string;
  badge?: string;
  category: "Premium Cake" | "Collection Cake" | "Festive Cake" | "Box Edition";
  images: { src: string; alt: string }[];
  summary: string;
  highlights?: { title: string; body: string }[];
  availabilityNote?: string;
  size?: string[];
  allergens?: string[];
  handling?: string[];
  storage?: string[];
};

export const products: ProductDetail[] = [
  {
    slug: "duo-in-a-box-petits-gateaux",
    name: "Duo in a box – Petits Gateaux",
    price: "RM63.00",
    badge: "Limited Days only",
    category: "Box Edition",
    images: [
      { src: "/images/demo/shop/display-case.jpg", alt: "Duo in a box - Image 1" },
      { src: "/images/demo/shop/choco-slice-raspberry.jpg", alt: "Duo in a box - Image 2" },
      { src: "/images/demo/shop/choco-slice-berries.jpg", alt: "Duo in a box - Image 3" },
    ],
    summary:
      "Discover our Signature Duo in a Box (two petits gâteaux in a box), featuring petite versions of our premium cakes — Prestige Noir and L’amour.",
    highlights: [
      {
        title: "L’amour (1 piece)",
        body: "Yuzu Light Cheese Mousse, Pink Grapefruit Marmalade, Baked Vanilla Cheesecake, Matcha Cloud Cake, Almond Crunch.",
      },
      {
        title: "Prestige Noir (1 piece)",
        body: "66% Dark Chocolate Mousse, Sicilian Pistachio Praliné, Pistachio Génoise, Raspberry Confit, Pistachio-Hazelnut Crunch.",
      },
    ],
    availabilityNote: "Available on Wednesday, Friday, Saturday & Sunday only.",
    size: ["Diameter: 6–7cm ±", "Serving recommendation: 1–2 servings"],
    allergens: ["Dairy", "Eggs", "Gluten", "Nuts"],
    handling: [
      "Petit Gateaux can last in air-conditioned spaces for a maximum of 1 hour.",
      "This cake is fragile — always transport on a flat surface and by car.",
      "Upon receiving, please chill for at least 30 minutes before serving.",
      "For travelling, store in a cooler box / cooler bag with ice packs.",
    ],
    storage: [
      "Keep refrigerated (1°C–4°C). Do not freeze.",
      "Best consumed within 2 days.",
    ],
  },
  {
    slug: "pineapple-tart",
    name: "Pineapple Tart",
    price: "RM55.00",
    badge: "Same Day before 1pm",
    category: "Premium Cake",
    images: [
      { src: "/images/demo/shop/pineapple-upside-down.jpg", alt: "Pineapple Tart" },
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Pastry close-up" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Bakery display" },
    ],
    summary:
      "Handcrafted pineapple tarts made with buttery pastry and slow-cooked pineapple filling, finished in a refined less-sweet style and crafted for gifting and sharing.",
  },
  {
    slug: "seikhlas-raya-gift-box",
    name: "Seikhlas Raya Gift Box",
    price: "RM195.00",
    badge: "Same Day before 1pm",
    category: "Premium Cake",
    images: [
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Gift box treats" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Desserts in display" },
      { src: "/images/demo/shop/round-cake.jpg", alt: "Celebration cake" },
    ],
    summary:
      "A delightful selection of festive treats featuring Kek Medjool Kurma and signature cookies.",
  },
  {
    slug: "prestige-noir",
    name: "Prestige Noir",
    price: "RM235.00",
    badge: "Signature",
    category: "Premium Cake",
    images: [
      { src: "/images/demo/shop/choco-slice-raspberry.jpg", alt: "Chocolate & berry" },
      { src: "/images/demo/shop/choco-slice-berries.jpg", alt: "Chocolate slice" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Dessert counter" },
    ],
    summary:
      "A harmonious blend of dark chocolate, pistachio and bright raspberries.",
  },
  {
    slug: "lamour",
    name: "L’amour",
    price: "RM180.00",
    badge: "Same Day before 1pm",
    category: "Premium Cake",
    images: [
      { src: "/images/demo/shop/matcha-slice.jpg", alt: "Matcha-style cake slice" },
      { src: "/images/demo/shop/strawberry-cake-2.jpg", alt: "Light cake" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Desserts" },
    ],
    summary:
      "Zesty yuzu and tangy grapefruit, balanced with matcha and almond.",
  },
  {
    slug: "everytime",
    name: "Everytime",
    price: "RM180.00",
    badge: "Top Pick!",
    category: "Premium Cake",
    images: [
      { src: "/images/demo/shop/strawberry-cake.jpg", alt: "Everytime cake" },
      { src: "/images/demo/shop/strawberry-cake-2.jpg", alt: "Cake on stand" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Bakery case" },
    ],
    summary:
      "Premium vanilla bean with a tang from raspberries and toasted hazelnuts.",
  },
  {
    slug: "low-carb-pistachio-cake",
    name: "Low Carb Pistachio Cake",
    price: "RM150.00",
    badge: "Gluten-free",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/round-cake.jpg", alt: "Low Carb Pistachio Cake" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Cake display" },
      { src: "/images/demo/shop/matcha-slice.jpg", alt: "Slice detail" },
    ],
    summary:
      "A light and creamy pistachio cake that’s low-carb, gluten-free, and sugar-free.",
  },
  {
    slug: "labu-labu",
    name: "Labu-Labu",
    price: "RM118.00",
    badge: "Same Day before 1pm",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/strawberry-cake-2.jpg", alt: "Labu-Labu" },
      { src: "/images/demo/shop/round-cake.jpg", alt: "Cake" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Display case" },
    ],
    summary:
      "A light, creamy pumpkin-shaped creation that’s a little fun and a little refined.",
  },
  {
    slug: "watermelon-lychee",
    name: "Watermelon Lychee",
    price: "RM118.00 – RM150.00",
    badge: "Same Day before 1pm",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/display-case.jpg", alt: "Watermelon Lychee" },
      { src: "/images/demo/shop/strawberry-cake.jpg", alt: "Fruit cake" },
      { src: "/images/demo/shop/round-cake.jpg", alt: "Cake on stand" },
    ],
    summary:
      "Refreshing watermelon and lychee, a perfect combination of light and vibrant flavors.",
  },
  {
    slug: "mellow-taro",
    name: "Mellow Taro",
    price: "RM120.00 – RM150.00",
    badge: "Same Day before 1pm",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/round-cake.jpg", alt: "Mellow Taro" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Bakery case" },
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Dessert" },
    ],
    summary:
      "Robust with 100% fresh yam and Japanese purple sweet potatoes.",
  },
  {
    slug: "la-lune",
    name: "La Lune",
    price: "RM118.00",
    badge: "Top Pick!",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/choco-slice-berries.jpg", alt: "La Lune" },
      { src: "/images/demo/shop/matcha-slice.jpg", alt: "Slice" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Display" },
    ],
    summary:
      "Earthy, floral notes of oolong tea meets aromatic vanilla bean and velvety mascarpone.",
  },
  {
    slug: "avocado",
    name: "Avocado",
    price: "RM125.00",
    badge: "Top Pick!",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/round-cake.jpg", alt: "Avocado cake" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Desserts" },
      { src: "/images/demo/shop/strawberry-cake.jpg", alt: "Cake" },
    ],
    summary:
      "A fusion between the buttery goodness of avocados and the airy lightness of cake.",
  },
  {
    slug: "mango-yuzu",
    name: "Mango Yuzu",
    price: "RM120.00",
    badge: "Same Day before 1pm",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/pineapple-upside-down.jpg", alt: "Mango Yuzu" },
      { src: "/images/demo/shop/strawberry-cake-2.jpg", alt: "Light cake" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Desserts" },
    ],
    summary: "Refreshing and light with a balance of sweet and sour.",
  },
  {
    slug: "matcha-chacha",
    name: "Matcha-chacha",
    price: "RM125.00",
    badge: "Same Day before 1pm",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/matcha-slice.jpg", alt: "Matcha-chacha" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Bakery case" },
      { src: "/images/demo/shop/choco-slice-berries.jpg", alt: "Cake slice" },
    ],
    summary:
      "A rich and indulgent matcha experience with a chilled cheesecake base.",
  },
  {
    slug: "low-carb-chocolate-cake",
    name: "Low Carb Chocolate Cake",
    price: "RM135.00",
    badge: "Gluten-free",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/choco-slice-raspberry.jpg", alt: "Low Carb Chocolate Cake" },
      { src: "/images/demo/shop/choco-slice-berries.jpg", alt: "Chocolate slice" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Desserts" },
    ],
    summary:
      "Rich and intense chocolate flavours made without gluten, flour or white sugar.",
  },
  {
    slug: "strawberry",
    name: "Strawberry",
    price: "RM125.00",
    badge: "Kids' Choice",
    category: "Collection Cake",
    images: [
      { src: "/images/demo/shop/strawberry-cake.jpg", alt: "Strawberry cake" },
      { src: "/images/demo/shop/strawberry-cake-2.jpg", alt: "Strawberry cake (alt)" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Desserts" },
    ],
    summary:
      "Bursts of strawberries, fluffy sponge, and creamy vanilla notes – joy in every bite!",
  },
  {
    slug: "duo-in-a-box-cny-collection",
    name: "Duo in a box – CNY collection",
    price: "RM63.00",
    badge: "Same Day before 1pm",
    category: "Festive Cake",
    images: [
      { src: "/images/demo/shop/display-case.jpg", alt: "Festive duo box" },
      { src: "/images/demo/shop/round-cake.jpg", alt: "Cake" },
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Dessert" },
    ],
    summary: "Double the festive vibes with a limited edition Duo in a Box.",
  },
  {
    slug: "mothers-day",
    name: "Mother’s Day",
    price: "RM155.00",
    badge: "Festive Special",
    category: "Festive Cake",
    images: [
      { src: "/images/demo/shop/strawberry-cake-2.jpg", alt: "Mother’s Day cake" },
      { src: "/images/demo/shop/strawberry-cake.jpg", alt: "Cake" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Desserts" },
    ],
    summary:
      "Blueberry, blackcurrant, blackberry, and vanilla bean — crafted to celebrate with elegance and love.",
  },
  {
    slug: "chinese-new-year",
    name: "Chinese New Year",
    price: "RM168.00",
    badge: "Festive Special",
    category: "Festive Cake",
    images: [
      { src: "/images/demo/shop/round-cake.jpg", alt: "Chinese New Year cake" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Dessert display" },
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Dessert" },
    ],
    summary: "Bold flavours and festive textures — made to celebrate the season.",
  },
  {
    slug: "pineapple-tart-box-edition",
    name: "Pineapple Tart",
    price: "RM55.00",
    badge: "Same Day before 1pm",
    category: "Box Edition",
    images: [
      { src: "/images/demo/shop/pineapple-upside-down.jpg", alt: "Pineapple Tart (Box Edition)" },
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Pastry" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Display" },
    ],
    summary:
      "A gifting-ready box of handcrafted pineapple tarts with buttery pastry and slow-cooked filling.",
  },
  {
    slug: "duo-in-a-box-cny-collection-box",
    name: "Duo in a box – CNY collection",
    price: "RM63.00",
    badge: "Same Day before 1pm",
    category: "Box Edition",
    images: [
      { src: "/images/demo/shop/display-case.jpg", alt: "Duo in a box (Box Edition)" },
      { src: "/images/demo/shop/round-cake.jpg", alt: "Cake" },
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Dessert" },
    ],
    summary: "A seasonal Duo in a Box, thoughtfully curated based on availability.",
  },
  {
    slug: "seindah-raya-set",
    name: "Seindah Raya Set",
    price: "RM90.00",
    badge: "Sold out",
    category: "Box Edition",
    images: [
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Seindah Raya Set" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Dessert display" },
      { src: "/images/demo/shop/strawberry-cake.jpg", alt: "Cake" },
    ],
    summary: "A festive set produced in limited quantities (seasonal).",
  },
  {
    slug: "mid-autumn-baked-mooncake",
    name: "Mid-Autumn Collection – Baked Mooncake",
    price: "RM163.00",
    badge: "Sold out",
    category: "Box Edition",
    images: [
      { src: "/images/demo/shop/apple-tart.jpg", alt: "Baked Mooncake collection" },
      { src: "/images/demo/shop/display-case.jpg", alt: "Desserts" },
      { src: "/images/demo/shop/round-cake.jpg", alt: "Cake" },
    ],
    summary:
      "French-inspired baked mooncakes. 6 in a box, perfect for gifting (seasonal).",
  },
];

export const productsBySlug = new Map(products.map((p) => [p.slug, p]));

