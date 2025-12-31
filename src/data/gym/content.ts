export interface GymTrainer {
  name: string;
  speciality: string;
  image: string;
}
export interface GymFacility {
  title: string;
  description: string;
}
export interface GymPricing {
  plan: string;
  amount: string;
}
export interface GymReview {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}
export interface GymContent {
  name: string;
  tagline: string;
  address: string;
  phone: string; // keep original single-phone for compatibility
  phones?: string[]; // new: multiple contact numbers
  logo?: string; // new: path to logo image
  openingHours: string;
  googleMapEmbedUrl: string;
  about: string;
  facilities: GymFacility[];
  pricing: GymPricing[];
  trainers: GymTrainer[];
  gallery: string[];
  reviews: GymReview[];
  links?: { label: string; url: string }[];
}

export const gymContent: GymContent = {
  name: "Scult Fit",
  tagline: "Scult Fit",
  address:
    "Chitra complex, In front of Kingdom of chess, above Natural beauty parlour, cross roads school road, New Navratan, Bhuwana, Udaipur, Rajasthan 313004",
  phone: "083023 72719",
  // Update phones array with both numbers
  phones: ["+91 99286 07314", "+91 80004 98021"],
  logo: "/assets/change/5.jpg",
  openingHours: "Opens 6:00 am · Closes 10:00 pm · Closed on Sunday",
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29017.300804222552!2d73.6586990743164!3d24.618080100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5006c8d9587%3A0xb6ed25de4da1f729!2sScult%20Fit%20Gym!5e0!3m2!1sen!2sin!4v1767102215965!5m2!1sen!2sin",
  about:
    "Welcome to Scult Fit, your premier fitness destination in Bhuwana, Udaipur. We pride ourselves on creating an motivating environment where every member from complete beginners to seasoned athletes can achieve their fitness goals. Join our growing community and experience the difference that professional guidance, quality equipment, and genuine support can make in your fitness journey.",
  facilities: [
    { title: "On-site services", description: "In-person classes and personal training." },
    { title: "Restroom", description: "Clean, well-maintained restrooms." },
    { title: "LGBTQ+ friendly", description: "Welcoming and inclusive environment." },
    { title: "Membership required", description: "Membership required to access the facility." },
    { title: "Parking", description: "Free street parking available." }
  ],
  pricing: [
    { plan: "Monthly", amount: "INR 1,500" },
    { plan: "Quarterly", amount: "INR 4,200" },
    { plan: "Yearly", amount: "INR 15,000" }
  ],
  trainers: [
    { name: "Head Coach", speciality: "Strength & Conditioning · Personal Training", image: "" },
    { name: "Senior Coach", speciality: "Cardio & Functional Training", image: "" }
  ],
  gallery: [
    "/assets/change/1.jpg",
    "/assets/change/2.jpg",
    "/assets/change/3.jpg"
  ],
  reviews: [],
  links: [
    {
      label: "Directions",
      url: "https://maps.app.goo.gl/AKarnLRNJqscK3cZ8",
    }
  ]
};
