'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import TeamRoles from './teamRoles';

const TestimonialsAndStats = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    const toggleAccordion = (index: number | null) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const testimonials = [
        {
            id: 1,
            logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/clientlogos/rolls-royce-horizontal-black_ef0cq7.svg?_a=BAVAfVDW0",
            quote: "Repeat Business is the best testament to a team's ability to perform, and I have no hesitation in hiring them again. BairesDev's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives.",
            author: "Brad Mabry",
            role: "Product Manager at Rolls Royce",
            link: "/case-studies/rolls-royce/"
        },
        {
            id: 2,
            logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/clientlogos/iqvia_rp3op1.svg?_a=BAVAfVDW0",
            quote: "BairesDev provides amazing development and design resourcing, along with best in class account management support. We were able to speed up product and design and delivery while reducing our costs. BairesDev has been hands down the best vendor decision my team has made.",
            author: "Adam Isley",
            role: "Director of Digital Strategy",
            link: "/case-studies/iqvia/"
        },
        {
            id: 3,
            logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/clientlogos/instructure_uooigd.svg?_a=BAVAfVDW0",
            quote: "BairesDev is a trustworthy, knowledgeable, and adaptable development partner. They also know how to push back and ask questions when appropriate, which is a cornerstone of our corporate culture and really adds value.",
            author: "Matt Mecham",
            role: "Program Manager",
            link: "/case-studies/instructure/"
        },
        {
            id: 4,
            logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/clientlogos/next-roll_iddcqa.svg?_a=BAVAfVDW0",
            quote: "By seamlessly integrating with the internal team, BairesDev helped achieve key objectives by performing to the same expectations as full-time employees. Their strong onboarding methods, reliable deliverables, and responsiveness continue to strengthen the relationship.",
            author: "Patrick Mee",
            role: "VP of Engineering",
            link: "/case-studies/nextroll/"
        },
        {
            id: 5,
            logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/clientlogos/rga_krgqkr.svg?_a=BAVAfVDW0",
            quote: "Having access to such a vast talent pool, BairesDev has allowed us to staff our teams with solid engineers and execute our projects faster than ever. Their staffing process is way better than any other outsourcing company in the region, so we can always rely on them.",
            author: "Ropu Rovagnati",
            role: "SVP, Managing Director, LATAM",
            link: "/case-studies/rga/"
        },
        {
            id: 6,
            logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/clientlogos/univision_cc1dsv.svg?_a=BAVAfVDW0",
            quote: "BairesDev being in a similar timezone has helped us tremendously in our productivity, especially in an agile structure. They have high-quality resources who are willing to go that extra mile to provide value in development.",
            author: "Viiveek Sankar",
            role: "VP of Engineering",
            link: "/case-studies/univision/"
        },
        {
            id: 7,
            logo: "https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/clientlogos/associated-press_ki8ugn.svg?_a=BAVAfVDW0",
            quote: "We have been successfully working with BairesDev for the last 7 years. They have excellent resources available in multiple areas, but mostly, I was impressed by the flexibility and cooperation of the management. They will always go the extra mile to make customers happy.",
            author: "Lana Shaova",
            role: "Sr. Director, Business Technology",
            link: "/case-studies/associated-press/"
        }
    ];

    const awards = [
        {
            id: 1,
            name: "America's Fastest-Growing Companies 2025",
            logo: "https://assets.bairesdev.com//image/upload/c_limit,w_115/fl_sanitize/v1/www/static/awards/Financial_Times_l8p7s1.svg?_a=BAVAfVDW0"
        },
        {
            id: 2,
            name: "Top 100 U.S. IT Innovators 2025",
            logo: "https://assets.bairesdev.com//image/upload/c_limit,w_115/fl_sanitize/v1/www/static/awards/CIO_100_hs8o7h.svg?_a=BAVAfVDW0"
        },
        {
            id: 3,
            name: "Nearshore North America Top Software Developers 2025",
            logo: "https://assets.bairesdev.com//image/upload/c_limit,w_115/fl_sanitize/v1/www/static/awards/Clutch_2025_jbvjkn.svg?_a=BAVAfVDW0"
        },
        {
            id: 4,
            name: "Top 100 Global Outsourcing Providers 2024",
            logo: "https://assets.bairesdev.com//image/upload/c_limit,w_115/fl_sanitize/v1/www/static/awards/IAOP_2024_vapevb.svg?_a=BAVAfVDW0"
        },
        {
            id: 5,
            name: "America's fastest-growing companies 2024",
            logo: "https://assets.bairesdev.com//image/upload/c_limit,w_115/fl_sanitize/v1/www/static/awards/INC_5000_2024_zrzy5t.svg?_a=BAVAfVDW0"
        },
        {
            id: 6,
            name: "Company of the Year Artificial Intelligence 2024",
            logo: "https://assets.bairesdev.com//image/upload/c_limit,w_115/fl_sanitize/v1/www/static/awards/Globee_gfrgqe.svg?_a=BAVAfVDW0"
        }
    ];

    const engagementModels = [
        {
            id: 1,
            title: "Staff Augmentation",
            subtitle: "Need a couple of extra software engineers on your team?",
            description: "Get senior, production-ready developers who integrate directly into your internal team. They work your hours, join your standups, and follow your workflows—just like any full-time engineer.",
            icon: "https://assets.bairesdev.com/image/upload/www/static/engagement-01_1774535876.svg",
            link: "/staff-augmentation/"
        },
        {
            id: 2,
            title: "Dedicated Teams",
            subtitle: "Need a few teams to deliver several projects simultaneously?",
            description: "Spin up focused, delivery-ready pods to handle full builds or workstreams. Together we align on priorities. Then our tech PMs lead the team and drive delivery to maintain velocity and consistency.",
            icon: "https://assets.bairesdev.com/image/upload/www/static/engagement-02_1774535878.svg",
            link: "/software-development-services/software-dedicated-team/"
        },
        {
            id: 3,
            title: "Software Outsourcing",
            subtitle: "Want to offload everything to us, from start to finish?",
            description: "Hand off the full project lifecycle, from planning to deployment. You define the outcomes. We take full ownership of the execution and keep you looped in every step of the way.",
            icon: "https://assets.bairesdev.com/image/upload/www/static/engagement-03_1774535881.svg",
            link: "/software-development-services/software-outsourcing/"
        }
    ];

    return (
        <>
            {/* Main Section */}
            <section className="relative overflow-hidden">
                {/* Background circles */}

                <div className="clip-circle bg-site-neutrals-25 absolute left-[-10%] top-[45%] -z-10 hidden aspect-square w-[120%] translate-y-[-15%] lg:block 2xl:left-[50%] 2xl:w-[2500px] 2xl:translate-x-[-50%]"></div>
                <div className="clip-circle bg-site-neutrals-25 absolute left-[-10%] top-[53%] -z-10 hidden aspect-square w-[120%] translate-y-[-15%] lg:block 2xl:left-[50%] 2xl:w-[2500px] 2xl:translate-x-[-50%]"></div>
                <div className="relative grid h-[53rem] w-full grid-cols-1 sm:p-4 md:h-[70rem] md:grid-cols-3 md:p-0 md:pt-10 lg:h-[74rem] lg:max-w-full lg:p-0 xl:mx-auto xl:h-[72rem] 2xl:h-[78rem]">
                    <div className="bg-site-neutrals-25 invisible absolute left-0 top-0 -z-10 h-20 w-full lg:visible 2xl:h-24"></div>

                    {/* Background Image */}
                    <div className="relative -z-10 hidden min-h-[70rem] w-full md:block 2xl:min-h-[80rem]">
                        <Image
                            alt=""
                            fill
                            className="lg:object-[-45rem] xl:object-[-45rem] rounded-r-2xl object-cover md:object-right 3xl:object-right 2xl:rounded-2xl"
                            sizes="50vw"
                            src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/testimonials_ky4r6i?_a=BAVAfVDW0"
                        />
                    </div>

                    <div className="w-full p-6 px-6 md:col-span-2 md:pl-10 md:pt-24 lg:pl-24 lg:pr-40 lg:pt-36">
                        <h2 className="site-display-l font-medium text-neutral-700 lg:max-w-2xl">
                            We&apos;ve stopped counting. Over 500 brands count on us.
                        </h2>
                        <p className="site-paragraph-m mt-4 text-neutral-400">
                            1,200+ projects executed successfully and an average relationship of over 3 years.
                        </p>
                        <Link
                            className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none border-b-2 pr-8 bg-transparent border-current active:shadow-none disabled:text-site-neutrals-200 transform duration-200 hover:px-4 text-site-neutrals-900 hover:text-site-neutrals-700 focus:shadow-site-primary-50 py-2.5 site-paragraph-m font-medium mt-12"
                            href="/clients/"
                        >
                            <span className="">Our greatest hits</span>
                            <span className="">
                                <div
                                    className="w-6 h-6 transition-colors duration-300 [&:not(svg)]:bg-current"
                                    style={{
                                        mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)",
                                        WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)"
                                    }}
                                />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="absolute top-[23rem] w-full md:top-[28rem] lg:top-[30rem] 2xl:top-[33rem]">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView="auto"
                        spaceBetween={16}
                        loop={true}
                        speed={600}
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        className="w-full px-4 md:px-8"
                        breakpoints={{
                            768: { spaceBetween: 32 }
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} style={{ width: 'auto' }}>
                                <div className="inline-flex items-center justify-center overflow-hidden w-72 md:w-96 rounded-2xl bg-white text-black shadow-md transition-all hover:shadow-xl group [&_span]:hover:visible">
                                    <a href={testimonial.link}>
                                        <div className="h-[32rem] w-full p-6 md:p-8">
                                            <div className="mb-11 grid grid-cols-2">
                                                <div className="relative h-16 text-start">
                                                    <Image
                                                        alt="Client logo"
                                                        fill
                                                        className="!w-auto object-contain object-left"
                                                        src={testimonial.logo}
                                                    />
                                                </div>
                                                <div className="relative text-end">
                                                    <div className="text-site-neutrals-400 absolute right-0 top-5 flex flex-col-reverse items-end gap-0 md:flex-row md:items-center md:gap-2">
                                                        <span className="invisible text-sm">See case study</span>
                                                        <span>
                                                            <div
                                                                className="w-6 h-6 bg-site-neutrals-700 group-hover:bg-site-primary-600"
                                                                style={{
                                                                    mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)",
                                                                    WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)"
                                                                }}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-site-neutrals-700 site-paragraph-m md:site-paragraph-l whitespace-pre-wrap break-words">
                                                <span className="text-site-primary-600 text-2xl font-bold">&ldquo;</span>
                                                {testimonial.quote}
                                                <span>&rdquo;</span>
                                            </p>
                                            <div className="absolute bottom-8">
                                                <p className="font-bold">{testimonial.author}</p>
                                                <p>{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center [&_button]:m-2 pl-72 mt-4 invisible md:visible">
                        <button
                            type="button"
                            aria-label="Previous slide"
                            className="transition-transform text-site-primary-600 disabled:text-site-primary-50 hover:enabled:-translate-x-2"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <div className="border-site-neutrals-50 bg-site-neutrals-0 !h-12 !w-12 rounded-3xl border p-2.5">
                                <div
                                    className="w-6 h-6 bg-current"
                                    style={{
                                        mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowBack.svg)",
                                        WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowBack.svg)"
                                    }}
                                />
                            </div>
                        </button>
                        <button
                            type="button"
                            aria-label="Next slide"
                            className="transition-transform text-site-primary-600 disabled:text-site-primary-50 hover:enabled:translate-x-2"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <div className="border-site-neutrals-50 bg-site-neutrals-0 !h-12 !w-12 rounded-3xl border p-2.5">
                                <div
                                    className="w-6 h-6 bg-current"
                                    style={{
                                        mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)",
                                        WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)"
                                    }}
                                />
                            </div>
                        </button>
                    </div>
                </div>


                {/* Awards Section */}
                <section className="bg-site-neutrals-900 px-4 pb-8 pt-16 md:mx-6 md:rounded-2xl md:px-14 md:py-20 lgS:mx-auto lgS:flex lgS:px-[3.75rem] lgS:py-32 lgS:w-[86.5625rem]  xl:px-24 2xl:px-32 mt-16 md:-mt-16 mb-0">
                    <div className="lgS:w-[20.5rem] lgS:shrink-0 lgS:mr-16 mr-auto xl:w-[27.5rem]">
                        <div>
                            <h2 className="site-overline-m text-site-neutrals-200 font-medium">Our Awards</h2>
                            <p className="site-display-l text-site-neutrals-0 [&_strong]:text-site-primary-600 font-medium [&_strong]:font-medium [&>p:not(:last-child)]:pb-4">
                                <strong>Excellence.</strong><br />Our minimum bar for client delivery.
                            </p>
                            <p className="text-site-neutrals-100 site-paragraph-xl mt-6">
                                Over 130 awards, accolades, and achievements showcase our quality and commitment to client success.
                            </p>
                        </div>
                        <a
                            className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none border-b-2 pr-8 bg-transparent border-current active:shadow-none disabled:text-site-neutrals-500 transform duration-200 hover:px-4 text-site-primary-600 hover:text-site-primary-500 active:text-site-primary-800 focus:shadow-site-primary-200 py-3 site-paragraph-xl font-medium mt-9 lgS:mt-28"
                            href="https://www.bairesdev.com/awards-recognitions/"
                        >
                            <span className="">Our trophy cabinet</span>
                            <span className="">
                                <div
                                    className="w-6 h-6 transition-colors duration-300 [&:not(svg)]:bg-current"
                                    style={{
                                        mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)",
                                        WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)"
                                    }}
                                />
                            </span>
                        </a>
                    </div>

                    <div className="lgS:w-full md:flex">
                        <ul className="border-site-neutrals-100 mt-16 flex w-full flex-wrap items-center justify-around gap-4 overflow-hidden border-b-[1.5px] border-opacity-10 pb-12 md:mr-11 md:flex-col md:justify-around md:border-b-0 md:border-r-[1.5px] md:pb-0 mdL:w-[18rem] mdL:mr-auto mdL:shrink-0 mdL:grow-1 mdL:items-start lgS:w-auto lgS:pr-12 lgS:mt-0 lgS:items-start">
                            <li className="mdS:w-auto lgS:[&:nth-child(3)]:hidden flex w-[calc(50%-1rem)] justify-center">
                                <div className="text-site-neutrals-0 relative flex aspect-square w-40 flex-col items-center justify-center md:w-[12.5rem] lg:w-56">
                                    <span className="site-display-l font-medium">1,250+</span>
                                    <span className="site-paragraph-m md:site-paragraph-l text-center font-bold [&>p:not(:last-child)]:pb-4">
                                        projects<br />delivered
                                    </span>
                                    <svg viewBox="0 0 100 100" className="animate-spin-slow site-paragraph-s md:site-paragraph-m absolute box-border aspect-square overflow-visible p-[0.625em] tracking-[6px] md:font-medium">
                                        <path id="projects-path" fill="none" d="M0,50a50,50 0 1,1 100,0a50,50 0 1,1 -100,0"></path>
                                        <text className="origin-center">
                                            <textPath className="fill-site-neutrals-600 text-[0.75em]" textLength="292" href="#projects-path">
                                                projects executed successfully
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </li>
                            <li className="mdS:w-auto lgS:[&:nth-child(3)]:hidden flex w-[calc(50%-1rem)] justify-center">
                                <div className="text-site-neutrals-0 relative flex aspect-square w-40 flex-col items-center justify-center md:w-[12.5rem] lg:w-56">
                                    <span className="site-display-l font-medium">130+</span>
                                    <span className="site-paragraph-m md:site-paragraph-l text-center font-bold [&>p:not(:last-child)]:pb-4">
                                        industry<br />sectors
                                    </span>
                                    <svg viewBox="0 0 100 100" className="animate-spin-slow site-paragraph-s md:site-paragraph-m absolute box-border aspect-square overflow-visible p-[0.625em] tracking-[6px] md:font-medium">
                                        <path id="sectors-path" fill="none" d="M0,50a50,50 0 1,1 100,0a50,50 0 1,1 -100,0"></path>
                                        <text className="origin-center">
                                            <textPath className="fill-site-neutrals-600 text-[0.75em]" textLength="292" href="#sectors-path">
                                                industry sectors
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </li>
                            <li className="mdS:w-auto lgS:[&:nth-child(3)]:hidden flex w-[calc(50%-1rem)] justify-center">
                                <div className="text-site-neutrals-0 relative flex aspect-square w-40 flex-col items-center justify-center md:w-[12.5rem] lg:w-56">
                                    <svg width="76" height="22" viewBox="0 0 62 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.162 6.10352e-05H18.9828V17.4019H16.162V6.10352e-05Z" fill="white" />
                                        <path d="M28.7959 11.8872C28.7959 14.5833 26.5883 14.8284 25.8524 14.8284C24.1353 14.8284 23.8901 13.2353 23.8901 12.3774V5.63727H21.0692V12.2549C21.0692 13.848 21.5598 15.3186 22.541 16.1764C23.3995 17.0342 24.5033 17.4019 25.8524 17.4019C26.8336 17.4019 28.06 17.1568 28.7959 16.4215V17.4019H31.6167V5.63727H28.7959V11.8872Z" fill="white" />
                                        <path d="M37.1352 1.34808H34.3143V5.63727H32.2294V8.33333H34.3143V17.4019H37.1352V8.33333H39.2202V5.63727H37.1352V1.34808Z" fill="white" />
                                        <path d="M48.0507 13.848C47.4375 14.3382 46.579 14.7058 45.7204 14.7058C43.7581 14.7058 42.409 13.2352 42.409 11.2745C42.409 9.31369 43.7581 7.96566 45.7204 7.96566C46.579 7.96566 47.4375 8.21076 48.0507 8.8235L48.4186 9.19114L50.381 7.35292L49.8904 6.98527C48.7866 6.00489 47.3148 5.39215 45.7204 5.39215C42.2864 5.39215 39.7108 7.96566 39.7108 11.397C39.7108 14.8284 42.2864 17.4019 45.7204 17.4019C47.3148 17.4019 48.7866 16.7891 49.8904 15.8087L50.381 15.4411L48.4186 13.4803L48.0507 13.848Z" fill="white" />
                                        <path d="M60.3166 6.61766C59.4581 5.75983 58.5996 5.39218 57.2505 5.39218C56.2693 5.39218 55.2882 5.63728 54.5523 6.37256V6.10352e-05H51.7314V17.4019H54.5523V10.9068C54.5523 8.21079 56.392 7.96569 57.1278 7.96569C58.8449 7.96569 58.7222 9.55882 58.7222 10.4167V17.2794H61.5431V10.5392C61.5431 8.94608 61.1751 7.4755 60.3166 6.61766Z" fill="white" />
                                        <path d="M45.5987 13.3576C46.6824 13.3576 47.561 12.4797 47.561 11.3968C47.561 10.3139 46.6824 9.43604 45.5987 9.43604C44.5149 9.43604 43.6364 10.3139 43.6364 11.3968C43.6364 12.4797 44.5149 13.3576 45.5987 13.3576Z" fill="#EF4335" />
                                        <path d="M12.2389 13.1127C11.2577 14.0931 9.78595 14.7058 8.19156 14.7058C5.12542 14.7058 2.9178 12.2549 2.9178 8.94606C2.9178 5.63725 5.12542 3.18629 8.31421 3.18629C9.78595 3.18629 11.2577 3.79903 12.3615 4.90197L12.7294 5.26961L14.5691 3.43139L14.2012 3.06374C12.6068 1.47062 10.5218 0.612779 8.31421 0.612779C3.65368 0.49023 0.219604 4.16668 0.219604 8.94606C0.219604 13.7254 3.65368 17.4019 8.19156 17.4019C10.3992 17.4019 12.6068 16.544 14.0785 14.9509L14.4465 14.5833L12.6068 12.7451L12.2389 13.1127Z" fill="white" />
                                    </svg>
                                    <span className="site-display-l font-medium">4.9/5</span>
                                    <span className="site-paragraph-m md:site-paragraph-l text-center font-bold [&>p:not(:last-child)]:pb-4">
                                        client rating
                                    </span>
                                    <svg viewBox="0 0 100 100" className="animate-spin-slow site-paragraph-s md:site-paragraph-m absolute box-border aspect-square overflow-visible p-[0.625em] tracking-[6px] md:font-medium">
                                        <path id="rating-path" fill="none" d="M0,50a50,50 0 1,1 100,0a50,50 0 1,1 -100,0"></path>
                                        <text className="origin-center">
                                            <textPath className="fill-site-neutrals-600 text-[0.75em]" textLength="292" href="#rating-path">
                                                average client rating
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="lgS:mt-0 lgS:w-full lgS:pl-8 mdS:justify-center mdL:w-full mt-12 grid grid-cols-2 gap-4 mdS:gap-10 lg:h-fit">
                            {awards.map((award) => (
                                <li key={award.id} className="mdS:max-w-[11.25rem] mdS:justify-self-start mdS:odd:justify-self-end mdL:max-w-[11.25rem] mdL:justify-self-center mdL:odd:justify-self-center lg:h-fit">
                                    <figure className="flex h-full flex-col items-center lg:h-auto">
                                        <div className="flex h-32 w-40 items-center justify-center md:w-48">
                                            <Image
                                                alt={award.name}
                                                width={115}
                                                height={115}
                                                src={award.logo}
                                            />
                                        </div>
                                        <figcaption className="text-site-neutrals-0 site-paragraph-m mdS:site-paragraph-l my-4 text-center opacity-60 [&>p:not(:last-child)]:pb-4">
                                            {award.name}
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Why Work With Us Section */}
                <section className="pb-12 pt-20 lg:pt-40">

                    <div className="mx-4 flex flex-col md:mx-6 lg:mx-auto lg:w-[63rem] xl:w-[68rem] 2xl:w-[62rem]">
                        <div className="site-display-l text-center font-medium">
                            <h2>No need to wonder.</h2>
                            <h3>Working with us is wonderful<span className="text-site-primary-600">.</span></h3>
                        </div>
                        <div className="mt-14 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
                            <div className="flex gap-3">
                                <div className="pt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.375 0.375H2.625C1.3875 0.375 0.375 1.3875 0.375 2.625V18.375C0.375 19.6125 1.3875 20.625 2.625 20.625H18.375C19.6125 20.625 20.625 19.6125 20.625 18.375V2.625C20.625 1.3875 19.6125 0.375 18.375 0.375ZM15.6525 5.52752L17.2387 7.12502L8.23874 16.125L3.73874 11.6363L5.33624 10.05L8.23874 12.9413L15.6525 5.52752Z" fill="#F66135" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="site-display-xs text-site-neutrals-700">The right people</span>
                                    <p className="text-site-neutrals-700 site-paragraph-l">Our rigorous hiring process ensures only skilled, AI-fluent candidates make it through.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="pt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.375 0.375H2.625C1.3875 0.375 0.375 1.3875 0.375 2.625V18.375C0.375 19.6125 1.3875 20.625 2.625 20.625H18.375C19.6125 20.625 20.625 19.6125 20.625 18.375V2.625C20.625 1.3875 19.6125 0.375 18.375 0.375ZM15.6525 5.52752L17.2387 7.12502L8.23874 16.125L3.73874 11.6363L5.33624 10.05L8.23874 12.9413L15.6525 5.52752Z" fill="#F66135" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="site-display-xs text-site-neutrals-700">The right team</span>
                                    <p className="text-site-neutrals-700 site-paragraph-l">From solo engineers to multi-team engagements. Flexible project management options.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="pt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.375 0.375H2.625C1.3875 0.375 0.375 1.3875 0.375 2.625V18.375C0.375 19.6125 1.3875 20.625 2.625 20.625H18.375C19.6125 20.625 20.625 19.6125 20.625 18.375V2.625C20.625 1.3875 19.6125 0.375 18.375 0.375ZM15.6525 5.52752L17.2387 7.12502L8.23874 16.125L3.73874 11.6363L5.33624 10.05L8.23874 12.9413L15.6525 5.52752Z" fill="#F66135" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="site-display-xs text-site-neutrals-700">The right place</span>
                                    <p className="text-site-neutrals-700 site-paragraph-l">Our nearshore teams are online when you are. Clear communication in English.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="pt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.375 0.375H2.625C1.3875 0.375 0.375 1.3875 0.375 2.625V18.375C0.375 19.6125 1.3875 20.625 2.625 20.625H18.375C19.6125 20.625 20.625 19.6125 20.625 18.375V2.625C20.625 1.3875 19.6125 0.375 18.375 0.375ZM15.6525 5.52752L17.2387 7.12502L8.23874 16.125L3.73874 11.6363L5.33624 10.05L8.23874 12.9413L15.6525 5.52752Z" fill="#F66135" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="site-display-xs text-site-neutrals-700">The right time</span>
                                    <p className="text-site-neutrals-700 site-paragraph-l">Teams that start when you need them. Scale up or down with ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Assembly Section */}
                <TeamRoles />

                {/* Engagement Models Section */}
                <div className="mdS:mx-6 lgS:max-w-[76rem] lgS:mx-auto mx-4 xl:max-w-[82rem] 2xl:max-w-7xl">
                    <section className="lgS:py-32 py-16">
                        <div className="mb-16 flex flex-col gap-2.5">
                            <div className="lgS:flex-row lgS:items-end flex flex-col gap-8">
                                <p className="site-display-l text-site-neutrals-900 lgS:flex-1 whitespace-pre-wrap !font-medium">
                                    Keep full control. <br />Or hand everything off to us.
                                </p>
                                <div className="lgS:w-[400px] lgS:border-l lgS:border-site-neutrals-100 lgS:pl-4">
                                    <p className="site-paragraph-m text-site-neutrals-600">
                                        From embedded engineers to fully managed projects, we customize every engagement to fit your workflow, priorities, and delivery needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden gap-8 md:flex">
                            {engagementModels.map((model) => (
                                <a
                                    key={model.id}
                                    className="group relative flex min-h-[24.75rem] flex-1 flex-col overflow-hidden rounded-lg p-8 bg-site-neutrals-0"
                                    href={model.link}
                                >
                                    <div className="z-10 flex flex-col gap-3">
                                        <h3 className="site-overline-s text-site-neutrals-600 group-hover:text-site-primary-300 transition-colors duration-500">
                                            {model.title}
                                        </h3>
                                        <p className="site-display-xs text-site-neutrals-900 group-hover:text-site-neutrals-0 transition-colors duration-500">
                                            {model.subtitle}
                                        </p>
                                        <p className="site-paragraph-m text-site-neutrals-100 mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            {model.description}
                                        </p>
                                    </div>
                                    <Image
                                        alt={`${model.title} illustration`}
                                        width={96}
                                        height={96}
                                        className="group-hover:duration-900 absolute bottom-8 left-8 z-10 h-24 w-24 transition-opacity duration-500 group-hover:opacity-0"
                                        src={model.icon}
                                    />
                                    <span className="absolute bottom-8 right-8 z-10 h-10 w-10">
                                        <span className="duration-900 absolute inset-0 flex items-center justify-center rounded-full bg-white transition-opacity group-hover:opacity-0">
                                            <span className="">
                                                <div
                                                    className="w-6 h-6 bg-site-neutrals-600"
                                                    style={{
                                                        mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/Visibility.svg)",
                                                        WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/Visibility.svg)"
                                                    }}
                                                />
                                            </span>
                                        </span>
                                        <span className="duration-900 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                            <span className="">
                                                <div
                                                    className="w-10 h-10 bg-site-primary-300"
                                                    style={{
                                                        mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)",
                                                        WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)"
                                                    }}
                                                />
                                            </span>
                                        </span>
                                    </span>
                                    <div className="bg-site-neutrals-800 border-site-neutrals-0 absolute bottom-8 right-8 h-10 w-10 rounded-full border transition-all duration-500 ease-in-out group-hover:h-full group-hover:w-full group-hover:scale-[15] group-hover:rounded-none group-hover:duration-[1200ms]"></div>
                                </a>
                            ))}
                        </div>

                        {/* Mobile View - Accordion */}
                        <div className="flex flex-col gap-4 md:hidden">
                            {engagementModels.map((model, index) => (
                                <div
                                    key={model.id}
                                    className={`rounded border transition-colors duration-200 ${activeAccordion === index ? 'border-site-primary-600' : 'border-site-neutrals-50'} bg-site-neutrals-0`}
                                >
                                    <div
                                        className="flex w-full cursor-pointer items-center justify-between flex-row-reverse p-4 gap-2"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span>
                                            <span className="">
                                                <div
                                                    className="w-6 h-6 bg-site-neutrals-600"
                                                    style={{
                                                        mask: activeAccordion === index
                                                            ? "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ExpandLess.svg)"
                                                            : "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ExpandMore.svg)",
                                                        WebkitMask: activeAccordion === index
                                                            ? "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ExpandLess.svg)"
                                                            : "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ExpandMore.svg)"
                                                    }}
                                                />
                                            </span>
                                        </span>
                                        <span className="site-paragraph-l text-site-neutrals-600">{model.subtitle}</span>
                                    </div>
                                    <div
                                        className={`grid transform cursor-default overflow-hidden transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${activeAccordion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <a className="flex" href={model.link}>
                                                <div className="flex flex-col gap-4 px-4 pb-5">
                                                    <div className="flex flex-col gap-2">
                                                        <p className="site-overline-s text-site-primary-600">{model.title}</p>
                                                        <p className="site-paragraph-m text-site-neutrals-900">{model.description}</p>
                                                    </div>
                                                    <Image
                                                        alt={`${model.title} illustration`}
                                                        width={48}
                                                        height={48}
                                                        className="h-12 w-12"
                                                        src={model.icon}
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Process Section */}
                <section className="mx-5 mt-14 flex max-w-lg flex-col justify-between px-4 pb-20 sm:mx-auto md:mb-[6.25rem] md:max-w-lg md:pb-0 lg:mx-auto lg:mb-0 lg:w-[76rem] lg:max-w-full lg:flex-row lg:px-0 xl:w-[82rem] 2xl:w-7xl">
                    <div className="relative max-w-80 lg:min-h-[61rem] lg:w-[37rem]">
                        <h2 className="site-display-l text-site-neutrals-700 mb-[4.75rem] font-medium sm:w-auto">
                            Our process. Simple, seamless, streamlined<span className="text-site-primary-600">.</span>
                        </h2>
                        <div className="absolute right-0 -mt-12 hidden lg:block lg:w-[38vw] 2xl:w-[545px]">
                            <Image
                                alt="Our three-step process: discovery call, team assembly, and performance tracking"
                                width={1632}
                                height={1732}
                                className="w-full"
                                src="https://assets.bairesdev.com//image/upload/c_limit,w_1632/dpr_auto/f_auto/q_auto/v1/www/core/our_process_kfiyw2?_a=BAVAfVDW0"
                            />
                        </div>
                    </div>

                    <div className="relative lg:w-[54rem] md:w-[32rem]">
                        <div className="relative z-10">
                            <div className="-z-1 border-site-neutral-100 absolute left-[1.5rem] top-0 mt-3 h-[calc(100%+4.3rem)] border-r-2 border-dashed lg:left-[9rem] lg:h-[calc(100%+4.5rem)]"></div>

                            <div className="relative mb-14 flex lg:pl-[120px]">
                                <div className="relative mt-[10px] inline-block h-12 w-12 align-top">
                                    <Image
                                        alt=""
                                        fill
                                        src="https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/phone_owvxn3.svg?_a=BAVAfVDW0"
                                    />
                                </div>
                                <div className="ml-5 inline-block w-[calc(100%-68px)] align-top md:ml-6 lg:w-[520px] md:w-[440px]">
                                    <span className="text-site-neutrals-400 site-overline-m mb-2 uppercase">step 1</span>
                                    <h3 className="site-display-s text-site-neutrals-800 mb-2 font-medium">Join exploration call.</h3>
                                    <p className="site-paragraph-m text-site-neutrals-600 [&_a]:underline [&>p:not(:last-child)]:pb-4">
                                        Tell us more about your business on a discovery call. We&apos;ll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.
                                    </p>
                                </div>
                            </div>

                            <div className="relative mb-14 flex lg:pl-[120px]">
                                <div className="relative mt-[10px] inline-block h-12 w-12 align-top">
                                    <Image
                                        alt=""
                                        fill
                                        src="https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/person_kkflzw.svg?_a=BAVAfVDW0"
                                    />
                                </div>
                                <div className="ml-5 inline-block w-[calc(100%-68px)] align-top md:ml-6 lg:w-[520px] md:w-[440px]">
                                    <span className="text-site-neutrals-400 site-overline-m mb-2 uppercase">step 2</span>
                                    <h3 className="site-display-s text-site-neutrals-800 mb-2 font-medium">Discuss solution and team structure.</h3>
                                    <p className="site-paragraph-m text-site-neutrals-600 [&_a]:underline [&>p:not(:last-child)]:pb-4">
                                        In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.
                                    </p>
                                </div>
                            </div>

                            <div className="relative mb-14 flex lg:pl-[120px]">
                                <div className="relative mt-[10px] inline-block h-12 w-12 align-top">
                                    <Image
                                        alt=""
                                        fill
                                        src="https://assets.bairesdev.com//image/upload/fl_sanitize/v1/www/static/track_em3zly.svg?_a=BAVAfVDW0"
                                    />
                                </div>
                                <div className="ml-5 inline-block w-[calc(100%-68px)] align-top md:ml-6 lg:w-[520px] md:w-[440px]">
                                    <span className="text-site-neutrals-400 site-overline-m mb-2 uppercase">step 3</span>
                                    <h3 className="site-display-s text-site-neutrals-800 mb-2 font-medium">Get started and track performance.</h3>
                                    <p className="site-paragraph-m text-site-neutrals-600 [&_a]:underline [&>p:not(:last-child)]:pb-4">
                                        Once we&apos;ve agreed on milestones, we&apos;ll immediately get to work. We&apos;ll track progress, report updates, and continuously adapt to your needs.
                                    </p>
                                </div>
                            </div>

                            <div className="relative float-left">
                                <div className="-z-1 absolute ml-6 mt-6 w-16 border-t-2 border-dashed lg:ml-36 lg:mt-7"></div>
                                <div className="relative ml-[4.5rem] lg:ml-48">
                                    <a
                                        rel="noreferrer"
                                        className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none px-4 rounded-lg active:shadow-none disabled:bg-site-neutrals-200 disabled:text-site-neutrals-50 bg-site-primary-600 hover:bg-site-primary-700 hover:text-site-neutrals-0 active:bg-site-primary-800 active:text-site-neutrals-0 text-site-neutrals-0 focus:text-site-neutrals-0 focus:shadow-site-primary-50 py-3 site-paragraph-xl font-medium"
                                        href="https://www.bairesdev.com/start/basic-details/"
                                    >
                                        <span className="">Schedule a Call</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default TestimonialsAndStats;