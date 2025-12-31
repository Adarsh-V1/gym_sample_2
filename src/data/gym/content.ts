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
  name: "Shree Pahlwan Body Care",
  tagline: "Progress is built, one focused rep at a time.",
  address:
    "Vidhyuth Nagar, Khandwa Taraf Kumbhi, Khandwa, Madhya Pradesh 450001",
  phone: "084638 46846",
  phones: ["+91 84638 46846"],
  logo: "/assets/change/5.jpg",
  openingHours: "Opens 6:00 AM · Closes 11:40 PM",
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5!2d75.4!3d21.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ4JzAwLjAiTiA3NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  about:
    "Modern fitness studio in Khandwa. We provide certified trainers, premium equipment, and flexible memberships. Join our community and achieve your fitness goals with us.",
  facilities: [
    { title: "Certified Trainers", description: "Proactive, professional trainers for form and progression." },
    { title: "Premium Machines", description: "Well‑maintained equipment for strength & cardio." },
    { title: "Clean Routine", description: "Sanitized spaces and organized layout." },
    { title: "Solid Service", description: "Supportive staff and quick assistance." },
    { title: "Motivating Atmosphere", description: "Friendly members fostering motivation." }
  ],
  pricing: [],
  trainers: [],
  gallery: [
    "/assets/change/1.jpg",
    "/assets/change/2.jpg",
    "/assets/change/3.jpg"
  ],
  reviews: [
    { author: "Shivam Gour", rating: 5, text: "Nice training centre" },
    { author: "Sandeep", rating: 5, text: "Best gym in Khandwa" },
    { author: "Vijit Verma", rating: 5, text: "Nice gym, great amenities" }
  ],
  links: [
    {
      label: "Directions",
      url: "https://maps.app.goo.gl/khandwa-shree-pahlwan",
    }
  ]
};
