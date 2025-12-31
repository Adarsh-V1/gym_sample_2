import Image from "next/image";
import { motion } from "framer-motion";
import { gymContent } from "@/data/gym/content";

export const Gallery = () => {
  const images = gymContent.gallery || [];
  if (!images.length) return null;

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="page-container py-16 md:py-24"
    >
      <motion.h3
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
      >
        Gallery
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((src, i) => (
          <motion.figure
            key={src + i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="relative h-36 sm:h-44 md:h-52 rounded-xl overflow-hidden border border-gray-700 bg-black/30"
          >
            <Image
              src={src}
              alt="gallery"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/25 transition-colors" />
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
};
