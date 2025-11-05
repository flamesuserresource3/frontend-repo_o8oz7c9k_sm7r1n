import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute -top-24 right-1/2 translate-x-1/2 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <Navbar />

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-neutral-800/70 border border-black/5 dark:border-white/10 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Secure payments coming soon
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-[700] tracking-tight">
              Elevate your setup with immersive 3D shopping
            </h1>
            <p className="mt-3 text-base sm:text-lg opacity-80 max-w-2xl mx-auto">
              Discover beautifully crafted tech and preview products in real‑time 3D before you buy.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow hover:opacity-90 transition">
                Shop now
              </button>
              <button className="px-5 py-2.5 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 font-medium hover:shadow-md transition">
                Browse categories
              </button>
            </div>
          </motion.div>
        </section>

        <ProductGrid />
      </main>

      <footer className="mt-10 py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} NovaCommerce. Built for modern commerce.
      </footer>
    </div>
  );
}
