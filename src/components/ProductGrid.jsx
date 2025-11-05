import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Aurora Wireless Headphones",
    price: 199.99,
    rating: 5,
    reviews: 128,
    category: "Audio",
    color: "#8b5cf6",
    shape: "cylinder",
  },
  {
    id: 2,
    name: "Pulse Smartwatch Series 3",
    price: 299.0,
    rating: 4,
    reviews: 86,
    category: "Wearables",
    color: "#06b6d4",
    shape: "sphere",
  },
  {
    id: 3,
    name: "Nebula Bluetooth Speaker",
    price: 149.5,
    rating: 4,
    reviews: 212,
    category: "Audio",
    color: "#f43f5e",
    shape: "box",
  },
  {
    id: 4,
    name: "Lumen Portable Projector",
    price: 449.99,
    rating: 5,
    reviews: 64,
    category: "Home Theater",
    color: "#10b981",
    shape: "box",
  },
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Featured Products</h2>
          <p className="text-sm opacity-70 mt-1">Explore our latest arrivals with interactive 3D previews.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm">
          <button className="px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 hover:bg-white/80 dark:hover:bg-neutral-700 transition">All</button>
          <button className="px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 hover:bg-white/80 dark:hover:bg-neutral-700 transition">Audio</button>
          <button className="px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 hover:bg-white/80 dark:hover:bg-neutral-700 transition">Wearables</button>
          <button className="px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 hover:bg-white/80 dark:hover:bg-neutral-700 transition">Home</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
