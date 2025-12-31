import { motion } from "framer-motion";
import { type GymContent } from "@/data/gym/content";

interface HeroProps {
  data: GymContent;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const Hero = ({ data }: HeroProps) => {
  const highlightBadges = [
    "Brand‑New Facility",
    "Top Equipment",
    "Friendly Trainers",
    "Clean & Maintained",
    "Motivating Atmosphere",
  ];
  const featureCards = [
    { t: "Pro Guidance", d: "Proactive, professional trainers for form and progression." },
    { t: "Premium Machines", d: "Well‑maintained equipment for strength & cardio." },
    { t: "Clean Routine", d: "Sanitized spaces and organized layout." },
    { t: "Solid Service", d: "Supportive staff and quick assistance." },
    { t: "Community Vibe", d: "Friendly members fostering motivation." },
  ];

  return (
    <header id="hero" className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] pt-6 md:pt-10">
      <div className="page-container flex flex-col items-center text-center gap-4">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="show"
          variants={variants}
          whileHover={{ scale: 1.02, rotate: -0.5 }}
          transition={{ duration: 0.35 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          {data.name}
        </motion.h1>
        <motion.h2 custom={1} initial="hidden" animate="show" variants={variants} className="text-xl md:text-2xl text-orange-400 font-semibold">
          {data.tagline}
        </motion.h2>
        <motion.p
          custom={1.5}
          initial="hidden"
          animate="show"
          variants={variants}
          className="text-2xl md:text-4xl font-light italic text-gray-200"
        >
          “Progress is built, one focused rep at a time.”
        </motion.p>
        <motion.p custom={2} initial="hidden" animate="show" variants={variants} className="text-sm md:text-base text-gray-300 max-w-[65ch]">
          {data.about.slice(0, 220)}...
        </motion.p>
        <motion.div custom={3} initial="hidden" animate="show" variants={variants} className="flex gap-4 mt-4">
          <a href="#contact" className="px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-black text-sm font-medium transition-colors">
            View Plans
          </a>
          <a href="#contact" className="px-5 py-3 rounded-md border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black text-sm font-medium transition-colors">
            Join Now
          </a>
        </motion.div>

        {/* Highlight badges */}
        <motion.ul custom={3.5} initial="hidden" animate="show" variants={variants} className="flex flex-wrap justify-center gap-2 mt-6">
          {highlightBadges.map(b => (
            <li key={b} className="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-[11px] md:text-xs text-gray-200">
              {b}
            </li>
          ))}
        </motion.ul>

        {/* Feature cards */}
        <motion.div custom={4} initial="hidden" animate="show" variants={variants} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 w-full max-w-3xl">
          {featureCards.map(card => (
            <div key={card.t} className="p-3 rounded-lg bg-black/30 border border-gray-700 text-left hover:border-orange-500/50 hover:bg-black/40 transition-colors">
              <h5 className="text-xs font-semibold text-orange-400">{card.t}</h5>
              <p className="text-[11px] text-gray-300 mt-1 leading-relaxed">{card.d}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};
