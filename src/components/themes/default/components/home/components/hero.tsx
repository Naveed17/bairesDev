"use client";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const HERO_IMAGE =
  "https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/hero_tjaova?_a=BAVAfVDW0";

const HERO_SRCSET = [375, 384, 640, 834, 1024, 1280, 1512, 1728, 1920]
  .map(
    (w) =>
      `https://assets.bairesdev.com//image/upload/c_limit,w_${w}/dpr_auto/f_auto/q_auto/v1/www/core/hero_tjaova?_a=BAVAfVDW0 ${w}w`,
  )
  .join(", ");

const AI_STAR_ICON = "https://assets.bairesdev.com/image/upload/v1/www/icons/AiStar.svg";

const ROTATING_WORDS = [
  { label: "Full-Stack Engineers", hasIcon: false },
  { label: "AI Engineers", hasIcon: true, iconLeft: "left-[3.25rem] -top-[0.125rem] lg:left-[3.75rem] lg:top-0" },
  { label: "Data Engineers", hasIcon: false },
  { label: "Cloud Engineers", hasIcon: false },
  { label: "Tech Talent", hasIcon: false },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const word = ROTATING_WORDS[index];
  return (
    <section className="bg-site-neutrals-25 relative -mb-24 -mt-14 flex overflow-hidden pb-24 md:-mb-52 md:pb-48 lg:pb-60">
      {/* Background image */}
      <div className="absolute inset-0 z-0 mt-50 md:mt-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="BairesDev software engineers collaborating on projects"
          fetchPriority="high"
          decoding="async"
          className="lgS:block lgS:-top-24! hidden object-cover object-[45%_bottom] md:object-center"
          style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
          sizes="100vw"
          srcSet={HERO_SRCSET}
          src={HERO_IMAGE}
        />
        <div className="lgS:block absolute hidden h-12 w-full bg-linear-to-b from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-8xl px-4 py-16 sm:px-6 lg:px-20">
        <div className="lgS:max-w-200 pb-12">
          <h1 className="site-display-l mb-4 text-center md:site-display-xl mdS:mx-auto md:max-w-3xl md:font-medium mdL:site-display-2xl mdL:font-medium mdL:px-12 lgS:text-left lgS:px-0 lgS:mx-0 lg:max-w-2xl font-medium!">
            Accelerate Your Roadmap With Our Vetted Nearshore
            <div className="relative -mt-1.5 overflow-clip pb-1 pt-2 md:-mt-2 md:pt-2">
              <AnimatePresence mode="wait">
                <motion.strong
                  key={word.label}
                  className="text-site-primary-600 block font-medium"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 200, damping: 15, mass: 1.2 }
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: { duration: 0.5, ease: 'easeOut' }
                  }}
                >
                  <span className="relative">
                    {word.label}
                    {word.hasIcon && (
                      <span
                        className={`w-6 h-6 bg-site-primary-600 absolute scale-110 ${word.iconLeft}`}
                        style={{ mask: `url("${AI_STAR_ICON}")` }}
                      />
                    )}
                  </span>
                </motion.strong>
              </AnimatePresence>
            </div>
          </h1>

          <p className="site-display-xs text-site-neutrals-500 mb-12 max-w-xl text-center font-normal lgS:text-left lgS:mx-0 mdS:mx-auto">
            Access 4,000+ timezone-aligned, AI-augmented software engineers across 100+ technologies.
          </p>

          <a
            rel="noreferrer"
            className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none px-4 rounded-lg active:shadow-none disabled:bg-site-neutrals-200 disabled:text-site-neutrals-50 bg-site-primary-600 hover:bg-site-primary-700 hover:text-site-neutrals-0 active:bg-site-primary-800 active:text-site-neutrals-0 text-site-neutrals-0 focus:text-site-neutrals-0 focus:shadow-site-primary-50 py-3 site-paragraph-xl font-medium mx-auto lgS:mx-0"
            href="https://www.bairesdev.com/start/basic-details/"
          >
            <span>Schedule a Call</span>
          </a>
        </div>
      </div>

      {/* Bottom wave clip */}
      <section className="clip-top-large-circle absolute -bottom-36 left-[-10%] h-72 w-[120%] bg-white md:h-96 lg:-bottom-125 lg:h-200" />
    </section>
  );
}
