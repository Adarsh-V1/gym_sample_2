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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Hero = ({ data }: HeroProps) => {
  const highlightBadges = [
    "Brand‑New Facility",
    "Top Equipment",
    "Friendly Trainers",
    "Clean & Maintained",
    "Motivating Atmosphere",
  ];

  return (
    <header id="hero" className="relative flex items-center justify-center min-h-[75vh] md:min-h-[85vh] pt-10 md:pt-16 pb-8 md:pb-12 overflow-hidden">
      {/* Animated background gradient circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [50, 0, 50] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="page-container flex flex-col items-center text-center gap-6 md:gap-8">
        {/* Main content */}
        <motion.div custom={0} initial="hidden" animate="show" variants={variants} className="max-w-3xl">
          <motion.h1
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
          >
            {data.name}
          </motion.h1>
        </motion.div>

        {/* Tagline */}
        <motion.div custom={1} initial="hidden" animate="show" variants={variants} className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
            {data.tagline}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={variants}
          className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
        >
          {data.about}
        </motion.p>

        {/* Hours info */}
        <motion.div custom={2.5} initial="hidden" animate="show" variants={variants} className="px-4 py-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
          <p className="text-sm md:text-base text-orange-200 font-medium">{data.openingHours}</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div custom={3} initial="hidden" animate="show" variants={variants} className="flex flex-col sm:flex-row gap-4 mt-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm md:text-base font-semibold shadow-lg shadow-orange-500/30 transition-all"
          >
            Join Now
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 text-sm md:text-base font-semibold transition-all"
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Highlight badges */}
        <motion.motion.ul
          custom={3.5}
          initial="hidden"
          animate="show"
          variants={variants}
          className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl"
        >
          {highlightBadges.map((badge, i) => (
            <motion.li
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-orange-500/20 text-xs md:text-sm text-gray-100 font-medium hover:border-orange-500/50 transition-colors"
            >
              ✓ {badge}
            </motion.li>
          ))}
        </motion.motion.ul>

        {/* Facilities grid */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={variants}
          className="mt-12 w-full max-w-4xl"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {data.facilities.slice(0, 5).map((facility) => (
              <motion.div
                key={facility.title}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: "rgb(249, 115, 22)" }}
                className="p-4 rounded-xl bg-black/40 border border-gray-700 backdrop-blur-sm hover:bg-black/50 transition-all"
              >
                <h5 className="text-sm font-bold text-orange-400 mb-2">{facility.title}</h5>
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">{facility.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};
