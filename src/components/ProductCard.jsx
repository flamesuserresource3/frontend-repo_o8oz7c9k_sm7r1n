import { motion } from "framer-motion";
import { Star, Eye } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Product3DViewer from "./Product3DViewer";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur rounded-2xl border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/0 via-fuchsia-500/0 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="p-4">
        <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center">
          <div className="w-28 h-28 rounded-xl" style={{ background: `linear-gradient(135deg, ${product.color} 0%, #ffffff 100%)` }} />
        </div>
        <div className="mt-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight">{product.name}</h3>
            <div className="flex items-center gap-1 text-amber-500 text-sm mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < product.rating ? "fill-amber-500" : "opacity-30"}`} />
              ))}
              <span className="ml-1 text-xs opacity-70">({product.reviews})</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
            <div className="text-xs opacity-70">{product.category}</div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button className="flex-1 py-2 px-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium shadow hover:opacity-90 transition">
            Add to cart
          </button>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="py-2 px-3 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 text-sm font-medium hover:shadow-md transition flex items-center gap-2">
                <Eye className="w-4 h-4" /> 3D
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
              <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-3xl rounded-2xl overflow-hidden border border-white/10 bg-white dark:bg-neutral-900 shadow-2xl">
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <Dialog.Title className="font-semibold">{product.name} — 3D View</Dialog.Title>
                  <Dialog.Close className="px-3 py-1.5 rounded-lg text-sm bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">Close</Dialog.Close>
                </div>
                <div className="p-4">
                  <Product3DViewer color={product.color} shape={product.shape} />
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </motion.div>
  );
}
