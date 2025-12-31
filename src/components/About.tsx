import { useState } from "react";
import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  data: GymContent;
}

function normalizeNumber(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("91")) return digits;
  if (digits.startsWith("0")) {
    const trimmed = digits.replace(/^0+/, "");
    return trimmed.length === 10 ? "91" + trimmed : trimmed;
  }
  return digits.length === 10 ? "91" + digits : digits;
}

function formatPlus91(raw: string) {
  const normalized = normalizeNumber(raw);
  const rest = normalized.startsWith("91") ? normalized.slice(2) : normalized;
  // format as 5/5 if 10 digits, else show as plain digits
  const formattedRest =
    rest.length === 10 ? rest.replace(/^(\d{5})(\d{5})$/, "$1 $2") : rest;
  return `+91 ${formattedRest}`;
}

export const About = ({ data }: AboutProps) => {
  // Prefer explicit Directions link from data.links, fallback to googleMapEmbedUrl or generated search URL
  const directions =
    (data.links ?? []).find(l => l.label.toLowerCase() === "directions")?.url ??
    data.googleMapEmbedUrl ??
    (data.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}` : undefined);

  // phones (keep both numbers if available)
  const phones = data.phones && data.phones.length > 0 ? data.phones : data.phone ? [data.phone] : [];

  // local state to show "Copied" feedback
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text.replace(/\s+/g, "")); // copy raw digits with +91
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative page-container py-16 md:py-24"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/change/2.jpg"
          alt="about background"
          fill
          className="object-cover opacity-15"
        />
      </div>

      <motion.h3
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left"
      >
        About Us
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 leading-relaxed text-sm md:text-base text-center md:text-left"
      >
        {data.about}
      </motion.p>

      {/* Contact numbers (plain display with Copy action) */}
      {phones.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col gap-3 items-center md:items-start"
        >
          {phones.map((p, i) => {
            const display = formatPlus91(p);
            return (
              <div key={p + i} className="flex items-center gap-3 bg-white/5 px-3 py-2 rounded-md">
                <div className="text-sm">
                  <div className="font-semibold">{display}</div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(display, i)}
                  className="ml-2 inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
                >
                  {copiedIndex === i ? "Copied" : "Copy"}
                </button>
              </div>
            );
          })}
        </motion.div>
      )}

      {/* Directions only (single link) */}
      {directions && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
        >
          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md border border-gray-700 text-xs md:text-sm text-gray-200 hover:bg-gray-800/60 hover:text-white transition-colors"
          >
            Directions
          </a>
        </motion.div>
      )}
    </motion.section>
  );
};
