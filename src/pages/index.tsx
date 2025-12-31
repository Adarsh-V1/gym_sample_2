import Head from "next/head";
import { gymContent } from "@/data/gym/content";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Facilities } from "@/components/Facilities";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";

const GymHome = () => {
  return (
    <>
      <Head>
        <title>{gymContent.name} – {gymContent.tagline}</title>
        <meta name="description" content={gymContent.about} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${gymContent.name} – ${gymContent.tagline}`} />
        <meta property="og:description" content={gymContent.about} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Head>
      {/* Animated starfield background */}
      <div aria-hidden="true" className="starfield-bg fixed inset-0 -z-50 pointer-events-none" />
      <main className="text-gray-100 flex flex-col gap-28">
        <Navbar name={gymContent.name} />
        <Hero />
        <About data={gymContent} />
        <Gallery />
        <Facilities data={gymContent} />
        <Pricing data={gymContent} />
        <Reviews data={gymContent} />
        <Contact data={gymContent} />
      </main>
    </>
  );
};

export default GymHome;
