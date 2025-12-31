import Image from "next/image";
import { motion } from "framer-motion";
import { gymContent } from "@/data/gym/content";

export const Hero = () => {
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
	];

	return (
		<section id="hero" className="relative min-h-[90vh] flex items-center justify-center text-white overflow-visible pt-4 md:pt-6 pb-8 md:pb-12">
			{/* Background image with overlay */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/change/1.jpg"
					alt="gym background"
					fill
					className="object-cover opacity-25"
					priority
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-black/50" />
			</div>
			
			{/* Content layer */}
			<div className="relative z-10 w-full">
				<div className="page-container flex flex-col items-center justify-center text-center gap-6 md:gap-8">
					{/* Gym Name */}
					<motion.h1
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						whileHover={{ scale: 1.03 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						className="text-5xl md:text-7xl font-extrabold tracking-tight"
					>
						{gymContent.name}
					</motion.h1>

					{/* Motivational Quote */}
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.5 }}
						className="text-xl md:text-2xl font-light italic text-gray-300"
					>
						"Progress is built, one focused rep at a time."
					</motion.p>

					{/* Opening Announcement */}
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="px-6 py-3 bg-orange-500/15 border border-orange-500/40 rounded-lg"
					>
						<p className="text-orange-300 font-bold text-xl md:text-2xl">
							Opening 1st January 2026
						</p>
					</motion.div>

					{/* About Preview */}
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="space-y-4 max-w-2xl"
					>
						<p className="text-xl md:text-2xl font-semibold text-white/95 leading-relaxed">
							Modern fitness studio in Chitra Complex, Bhuwana
						</p>
						<div className="space-y-3 text-base md:text-lg text-white/85">
							<p>
								<span className="font-bold text-orange-300">Hours:</span> 6:00 AM — 10:00 PM
							</p>
							<p className="text-white/75">Closed on Sundays</p>
						</div>
						<p className="text-base md:text-lg text-white/85 pt-2">
							Certified trainers · Premium equipment · Flexible memberships
						</p>
					</motion.div>

					{/* Join Now Button */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.5 }}
						className="flex justify-center w-full"
					>
						<a
							href="#contact"
							className="inline-block px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg transition-all hover:scale-105 active:scale-95"
						>
							Join Now
						</a>
					</motion.div>

					{/* Highlight Badges */}
					<motion.ul
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.5 }}
						className="flex flex-wrap justify-center gap-3 max-w-3xl"
					>
						{highlightBadges.map(b => (
							<li key={b} className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-sm md:text-base text-orange-300 font-medium">
								{b}
							</li>
						))}
					</motion.ul>

					{/* Feature Cards */}
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.6 }}
						className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl"
					>
						{featureCards.map(card => (
							<div
								key={card.t}
								className="p-4 rounded-lg bg-white/5 border border-gray-700/50 backdrop-blur hover:border-orange-400/50 hover:bg-white/10 transition-all group"
							>
								<h5 className="text-sm font-bold text-orange-300 group-hover:text-orange-200 transition-colors">
									{card.t}
								</h5>
								<p className="text-xs text-gray-300 mt-2 leading-relaxed">
									{card.d}
								</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
