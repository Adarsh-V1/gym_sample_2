import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { gymContent } from "@/data/gym/content";

interface NavbarProps {
  name?: string;
}

export const Navbar = ({ name }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>("hero");
  const items = ["hero", "about", "facilities", "contact"];

  // refs for focus management
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Trap Tab focus inside the panel when open
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open || !panelRef.current) return;
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    [open]
  );

  useEffect(() => {
    if (open) {
      // focus first link for keyboard users
      firstLinkRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
      // NOTE: removed scroll locking so page can scroll while menu is open
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open, handleKeyDown]);

  // smooth scrolling for the document
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  // IntersectionObserver — update activeId as sections come into view
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    items.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  // scroll to section while keeping the menu open
  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navEl = document.querySelector("nav");
    const navHeight = navEl ? navEl.getBoundingClientRect().height : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    // smaller mobile height (h-16), desktop unchanged
    <nav className="relative h-16 md:h-24 flex flex-col sticky top-0 bg-black/70 backdrop-blur border-b border-gray-800 shadow-sm z-[9999]">
      <article className="page-container flex items-center justify-between h-full">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-white uppercase tracking-wide text-sm md:text-base"
        >
          {name ?? gymContent.name}
        </motion.span>

        {/* Desktop menu: increased gap and active underline */}
        <ul className="hidden md:flex gap-8 text-xs md:text-sm text-white">
          {items.map(id => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={`px-2 py-1 border-b-2 ${
                  activeId === id ? "border-orange-400" : "border-transparent"
                } hover:border-orange-400 transition-all`}
              >
                {id
                  .split("-")
                  .map(p => p.charAt(0).toUpperCase() + p.slice(1))
                  .join(" ")}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle - animated burger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-white/20 text-white relative z-[9999]"
        >
          <span className="sr-only">Open menu</span>
          <svg width="22" height="22" viewBox="0 0 22 22" className="block">
            <motion.path
              strokeWidth="2"
              stroke="white"
              strokeLinecap="round"
              initial={false}
              animate={open ? { d: "M 4 4 L 18 18", rotate: 0 } : { d: "M 2 4.5 L 20 4.5" }}
            />
            <motion.path
              strokeWidth="2"
              stroke="white"
              strokeLinecap="round"
              initial={false}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              d="M 2 11.5 L 20 11.5"
            />
            <motion.path
              strokeWidth="2"
              stroke="white"
              strokeLinecap="round"
              initial={false}
              animate={open ? { d: "M 4 18 L 18 4", rotate: 0 } : { d: "M 2 18 L 20 18" }}
            />
          </svg>
        </button>
      </article>

      {/* Mobile dropdown (fixed overlay under taller nav) */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed left-0 right-0 top-16 md:top-24 md:hidden overflow-hidden bg-black/95 z-[10001] max-h-[calc(100vh-4rem)]"
          >
            <div
              id="mobile-navigation"
              ref={panelRef}
              className="w-full p-4 pb-6 overflow-y-auto"
              aria-hidden={!open}
              role="menu"
            >
              <ul className="w-full flex flex-col items-stretch gap-2 text-left">
                {items.map((id, idx) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    role="none"
                  >
                    <a
                      href={`#${id}`}
                      ref={idx === 0 ? firstLinkRef : undefined}
                      onClick={e => {
                        e.preventDefault();
                        handleNavigate(id);
                      }}
                      role="menuitem"
                      className={`block w-full text-white text-lg font-semibold py-3 px-2 rounded transition-colors ${
                        activeId === id ? "text-orange-400" : ""
                      }`}
                    >
                      {id
                        .split("-")
                        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
                        .join(" ")}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
