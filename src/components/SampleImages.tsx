import { useMemo } from "react";
import Image from "next/image";

const DEFAULT_IMAGES = [
  "/assets/default/girl1.jpg",
  "/assets/default/girl2.jpg",
  "/assets/default/boy1.jpg",
  "/assets/default/boy2.jpg",
  "/assets/default/trainer.jpg",
];

export const SampleImages = () => {
  const images = useMemo(() => {
    // simple shuffle
    return [...DEFAULT_IMAGES]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
  }, []);

  return (
    <section id="samples" className="w-full max-w-screen-2xl mx-auto px-6 md:px-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center md:text-left">
        Sample Images
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map(src => (
          <figure
            key={src}
            className="relative h-44 md:h-52 rounded-xl overflow-hidden group bg-gray-800"
          >
            <Image
              src={src}
              alt="sample"
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
          </figure>
        ))}
      </div>
    </section>
  );
};
