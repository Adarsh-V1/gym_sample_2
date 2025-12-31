import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";
import Image from "next/image";

interface ContactProps {
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
  const formattedRest =
    rest.length === 10 ? rest.replace(/^(\d{5})(\d{5})$/, "$1 $2") : rest;
  return `+91 ${formattedRest}`;
}

export const Contact = ({ data }: ContactProps) => {
  const phones =
    data.phones && data.phones.length > 0
      ? data.phones
      : data.phone
      ? [data.phone]
      : [];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="relative page-container py-16 md:py-24"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/change/1.jpg"
          alt="contact background"
          fill
          className="object-cover opacity-15"
        />
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
      >
        Contact & Location
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 items-center md:items-start text-center md:text-left"
        >
          <p className="text-sm md:text-base">
            <span className="font-semibold">Address:</span> {data.address}
          </p>

          <div className="flex flex-col gap-3">
            {phones.map((p, i) => {
              const normalized = normalizeNumber(p);
              const tel = `tel:+${normalized}`;
              const wa = `https://wa.me/${normalized}`;
              const display = formatPlus91(p);
              return (
                <div key={p + i} className="flex items-center gap-3">
                  <div className="text-sm">
                    <div className="font-semibold">{display}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={tel}
                      className="inline-block px-4 py-2 rounded bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      Call
                    </a>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-sm md:text-base">
            <span className="font-semibold">Opening Hours:</span> {data.openingHours}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden border border-gray-700 h-64 md:h-80"
        >
          <iframe
            title="Gym Location"
            src={data.googleMapEmbedUrl || "about:blank"}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
