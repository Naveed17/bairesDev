'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const FeaturedIn = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const slides = [
        {
            id: 1,
            logo: "https://assets.bairesdev.com/image/upload/c_limit,w_280/fl_sanitize/v1/www/core/AFI_Financial_Times_599e4b4d2e.svg?_a=BAVAfVDW0",
            description: "We were recognized by Financial Times in the America's Fastest-growing Companies list of 2024, showcasing significant revenue growth between 2019 and 2022.",
            link: null,
            linkText: null
        },
        {
            id: 2,
            logo: "https://assets.bairesdev.com/image/upload/c_limit,w_280/fl_sanitize/v1/www/core/AF_Tech_Crunch_05005d31f3.svg?_a=BAVAfVDW0",
            description: "In 2022, BairesDev added 227 clients in the U.S. alone and currently has 445 clients worldwide across over 100 industries, from Fortune 500 companies to startups.",
            link: "https://www.bairesdev.com/press/bootstrapped-their-way-to-big-businesses/",
            linkText: "Read more"
        },
        {
            id: 3,
            logo: "https://assets.bairesdev.com/image/upload/c_limit,w_280/fl_sanitize/v1/www/core/AFI_Newsweek_e6e77a3be2.svg?_a=BAVAfVDW0",
            description: "BairesDev was recognized in the Newsweek Excellence 1000 Index, highlighting companies which are great examples of corporate success and responsibility.",
            link: null,
            linkText: null
        },
        {
            id: 4,
            logo: "https://assets.bairesdev.com/image/upload/c_limit,w_280/fl_sanitize/v1/www/core/AFI_SXSW_92f4490185.svg?_a=BAVAfVDW0",
            description: "Nacho De Marco, our CEO, was selected as a panelist to discuss 'The Great E-Migration: Tech and the Future of LATAM' during SXSW 2024.",
            link: null,
            linkText: null
        },
        {
            id: 5,
            logo: "https://assets.bairesdev.com/image/upload/c_limit,w_280/fl_sanitize/v1/www/core/AFI_Stanford_b2759889c8.svg?_a=BAVAfVDW0",
            description: "Our CEO, Nacho De Marco, was invited to Stanford University to share his entrepreneurial journey with its MBA students.",
            link: null,
            linkText: null
        },
        {
            id: 6,
            logo: "https://assets.bairesdev.com/image/upload/c_limit,w_280/fl_sanitize/v1/www/core/HBS_logo_ef9d36009f.svg?_a=BAVAfVDW0",
            description: "Harvard Business School wrote a case about us as a leading example of culture-driven growth within the global tech industry.",
            link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=67675",
            linkText: "Read more"
        }
    ];

    const featuredLogos = [
        { alt: "CNBC", src: "https://assets.bairesdev.com/image/upload/c_limit,w_100/fl_sanitize/v1/www/landings/cnbc_wehbcz.svg?_a=BAVAfVDW0" },
        { alt: "Forbes", src: "https://assets.bairesdev.com/image/upload/c_limit,w_100/fl_sanitize/v1/www/landings/forbes_qttlct.svg?_a=BAVAfVDW0" },
        { alt: "Insider", src: "https://assets.bairesdev.com/image/upload/c_limit,w_100/fl_sanitize/v1/www/landings/insider_dgm7os.svg?_a=BAVAfVDW0" },
        { alt: "Bloomberg", src: "https://assets.bairesdev.com/image/upload/c_limit,w_100/fl_sanitize/v1/www/landings/bloomberg_ru2hos.svg?_a=BAVAfVDW0" }
    ];

    const slideVariants = {
        enter: (slideDirection: number) => ({
            x: slideDirection > 0 ? '100%' : '-100%',
            opacity: 1,
        }),
        center: {
            x: '0%',
            opacity: 1,
        },
        exit: (slideDirection: number) => ({
            x: slideDirection > 0 ? '-100%' : '100%',
            opacity: 1,
        }),
    };

    const goToSlide = (nextIndex: number, slideDirection: number) => {
        setDirection(slideDirection);
        setActiveIndex((nextIndex + slides.length) % slides.length);
    };

    const handlePrev = () => {
        goToSlide(activeIndex - 1, -1);
    };

    const handleNext = () => {
        goToSlide(activeIndex + 1, 1);
    };

    const handleDotClick = (index: number) => {
        if (index === activeIndex) {
            return;
        }

        goToSlide(index, index > activeIndex ? 1 : -1);
    };

    const activeSlide = slides[activeIndex];

    return (
        <section id="featured-in" className="bg-site-neutrals-25 -mb-16 lg:-mb-24">
            <section className="mdL:max-w-252 mdL:mx-auto mx-4 md:mx-6 2xl:max-w-276 -translate-y-24 lg:-translate-y-44.5">
                {/* Featured In Header */}
                <div className="bg-site-neutrals-500 mdL:flex-row mdL:px-8 mdL:py-6 mdL:justify-between mdL:gap-0 flex flex-col items-center gap-3 rounded-t-2xl px-3 py-4 md:px-7">
                    <span className="site-paragraph-xl md:site-paragraph-xl mdL:site-display-xs text-site-neutrals-0 mdL:font-medium font-normal">
                        As featured in...
                    </span>
                    <div className="mdL:flex-1 mdL:gap-16 mdL:justify-end mdL:w-auto flex w-full flex-wrap justify-center gap-6 md:justify-between md:gap-0">
                        {featuredLogos.map((logo, index) => (
                            <Image
                                key={index}
                                alt={logo.alt}
                                width={100}
                                height={16}
                                className="h-4 w-auto md:h-5 2xl:h-6"
                                src={logo.src}
                            />
                        ))}
                    </div>
                </div>

                {/* Slider */}
                <div className="overflow-hidden h-fit relative">
                    <div className="grid overflow-hidden bg-site-neutrals-600 w-full">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={activeSlide.id}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                                className="col-start-1 row-start-1 w-full"
                            >
                                <div className="inline-flex overflow-hidden bg-site-neutrals-600 w-full justify-start items-start">
                                    <div className="text-site-neutrals-50 flex flex-col gap-3 md:my-7 md:flex-row md:items-center md:gap-8 p-6 md:p-0">
                                        <div className="flex items-center justify-center md:pl-6">
                                            <Image
                                                alt=""
                                                width={280}
                                                height={150}
                                                className="h-37.5 object-contain"
                                                src={activeSlide.logo}
                                            />
                                        </div>
                                        <div className="site-paragraph-xl mdL:max-w-148 mx-3 mb-6 flex flex-col gap-3 md:mb-0 md:ml-0 md:mr-6 md:flex-1 2xl:mr-8 2xl:max-w-none">
                                            <p className="whitespace-pre-wrap">{activeSlide.description}</p>
                                            {activeSlide.link && (
                                                <a className="font-medium underline" target="self" href={activeSlide.link}>
                                                    {activeSlide.linkText}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Custom Pagination Controls */}
                    <div className="flex bg-site-neutrals-600 rounded-b-2xl z-10 w-full justify-between items-center [&_button]:m-0 gap-3 p-4 border-t-2 border-site-neutrals-500">
                        <button
                            type="button"
                            aria-label="Previous slide"
                            onClick={handlePrev}
                            className="transition-transform disabled:text-site-primary-50 hover:enabled:-translate-x-2 [&_path]:fill-site-neutrals-25 text-site-neutrals-25 !mr-auto"
                        >
                            <div className="flex items-center gap-2">
                                <span className="">
                                    <svg className="rotate-180 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.14999 21.1C6.89999 20.85 6.77499 20.5542 6.77499 20.2125C6.77499 19.8708 6.89999 19.575 7.14999 19.325L14.475 12L7.12499 4.65C6.89166 4.41667 6.77499 4.125 6.77499 3.775C6.77499 3.425 6.89999 3.125 7.14999 2.875C7.39999 2.625 7.69583 2.5 8.03749 2.5C8.37916 2.5 8.67499 2.625 8.92499 2.875L17.325 11.3C17.425 11.4 17.4958 11.5083 17.5375 11.625C17.5792 11.7417 17.6 11.8667 17.6 12C17.6 12.1333 17.5792 12.2583 17.5375 12.375C17.4958 12.4917 17.425 12.6 17.325 12.7L8.89999 21.125C8.66666 21.3583 8.37916 21.475 8.03749 21.475C7.69583 21.475 7.39999 21.35 7.14999 21.1Z"></path>
                                    </svg>
                                </span>
                                <span className="site-paragraph-l hidden font-normal md:block">Previous</span>
                            </div>
                        </button>

                        {/* Pagination Dots */}
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`go to slide ${index + 1}`}
                                aria-pressed={activeIndex === index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 rounded-full overflow-hidden transition-colors ${activeIndex === index ? 'bg-site-neutrals-0' : 'bg-site-neutrals-300'
                                    }`}
                            />
                        ))}

                        <button
                            type="button"
                            aria-label="Next slide"
                            onClick={handleNext}
                            className="transition-transform disabled:text-site-primary-50 hover:enabled:translate-x-2 [&_path]:fill-site-neutrals-25 text-site-neutrals-25 !ml-auto"
                        >
                            <div className="flex items-center gap-2 flex-row-reverse">
                                <span className="">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.14999 21.1C6.89999 20.85 6.77499 20.5542 6.77499 20.2125C6.77499 19.8708 6.89999 19.575 7.14999 19.325L14.475 12L7.12499 4.65C6.89166 4.41667 6.77499 4.125 6.77499 3.775C6.77499 3.425 6.89999 3.125 7.14999 2.875C7.39999 2.625 7.69583 2.5 8.03749 2.5C8.37916 2.5 8.67499 2.625 8.92499 2.875L17.325 11.3C17.425 11.4 17.4958 11.5083 17.5375 11.625C17.5792 11.7417 17.6 11.8667 17.6 12C17.6 12.1333 17.5792 12.2583 17.5375 12.375C17.4958 12.4917 17.425 12.6 17.325 12.7L8.89999 21.125C8.66666 21.3583 8.37916 21.475 8.03749 21.475C7.69583 21.475 7.39999 21.35 7.14999 21.1Z"></path>
                                    </svg>
                                </span>
                                <span className="site-paragraph-l hidden font-normal md:block">Next</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default FeaturedIn;
