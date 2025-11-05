import { ShoppingBag, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-white/10 bg-white/60 dark:bg-neutral-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/30" />
          <span className="font-semibold tracking-tight text-lg">NovaCommerce</span>
        </div>
        <div className="hidden md:flex items-center gap-2 p-2 rounded-xl bg-white/70 dark:bg-neutral-800/70 border border-black/5 dark:border-white/10 shadow-sm w-80">
          <Search className="w-4 h-4 opacity-70" />
          <input
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl bg-white/70 dark:bg-neutral-800/70 border border-black/5 dark:border-white/10 hover:shadow-md transition-shadow">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-xl bg-white/70 dark:bg-neutral-800/70 border border-black/5 dark:border-white/10 hover:shadow-md transition-shadow relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 bg-fuchsia-600 text-white rounded-full">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
