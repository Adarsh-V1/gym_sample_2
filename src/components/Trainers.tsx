import Image from "next/image";
import { type GymContent } from "@/data/gym/content";

interface TrainersProps {
  data: GymContent;
}

export const Trainers = ({ data }: TrainersProps) => {
  return (
    <section id="trainers" className="page-container">
      <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
        Our Trainers
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.trainers.map(t => (
          <div key={t.name} className="flex flex-col items-center gap-3 p-4 border border-gray-700 rounded-lg">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-800">
              {t.image ? (
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">No image</div>
              )}
            </div>
            <h4 className="font-semibold text-lg">{t.name}</h4>
            <p className="text-xs text-gray-400">{t.speciality}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
