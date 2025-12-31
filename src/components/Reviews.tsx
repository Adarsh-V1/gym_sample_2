import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface ReviewsProps {
  data: GymContent;
}

export const Reviews = ({ data }: ReviewsProps) => {
  const reviews = data.reviews || [];
  if (!reviews.length) return null;

  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="page-container py-16 md:py-24"
    >
      <motion.h3
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left"
      >
        Member Reviews
      </motion.h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.author + i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="p-5 rounded-xl border border-gray-700 bg-black/30 backdrop-blur-sm flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-sm md:text-base">{r.author}</div>
              <div className="text-orange-400 text-sm">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-5">
              {r.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
