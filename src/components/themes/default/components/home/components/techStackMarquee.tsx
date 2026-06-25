'use client'
import React from 'react';

const TechStackMarquee = () => {
    const firstRowTechnologies = [
        { name: 'Node.js', href: 'https://www.bairesdev.com/technologies/nodejs/' },
        { name: 'Java', href: 'https://www.bairesdev.com/technologies/java/' },
        { name: 'React', href: 'https://www.bairesdev.com/technologies/react/' },
        { name: '.NET', href: 'https://www.bairesdev.com/technologies/net/' },
        { name: 'Python', href: 'https://www.bairesdev.com/technologies/python/' },
        { name: 'C#', href: 'https://www.bairesdev.com/technologies/c-sharp/' },
        { name: 'Rails', href: 'https://www.bairesdev.com/technologies/ruby/' },
    ];

    const secondRowTechnologies = [
        { name: 'Angular', href: 'https://www.bairesdev.com/technologies/angular/' },
        { name: 'PHP', href: 'https://www.bairesdev.com/technologies/php/' },
        { name: 'Android', href: 'https://www.bairesdev.com/solutions/android/' },
        { name: 'iOS', href: 'https://www.bairesdev.com/solutions/ios/' },
        { name: 'Golang', href: 'https://www.bairesdev.com/technologies/go/' },
        { name: 'Vue.js', href: 'https://www.bairesdev.com/technologies/vue/' },
        { name: 'C++', href: 'https://www.bairesdev.com/technologies/c-plus-plus/' },
        { name: 'JavaScript', href: 'https://www.bairesdev.com/technologies/javascript/' },
        { name: 'Swift', href: 'https://www.bairesdev.com/technologies/swift/' },
    ];

    const firstRowItems = [...firstRowTechnologies, ...firstRowTechnologies];
    const secondRowItems = [...secondRowTechnologies, ...secondRowTechnologies];

    return (
        <div className="bg-site-neutrals-25 flex flex-col items-center pb-12 md:pb-24 mb-0">
            <div className="mx-4 pt-20 md:pt-24">
                <h2 className="site-display-l text-site-neutrals-700 [&_strong]:text-site-primary-600 text-center font-medium [&_strong]:font-medium mb-4">
                    Yes, we cover the tech stack and AI coding tools you rely on<span className="text-site-primary-600">.</span>
                </h2>
                <p className="site-paragraph-xl text-site-neutrals-400 mb-14 text-center md:mb-10 lg:mb-7 2xl:mb-12 [&_br]:hidden md:[&_br]:inline [&>p:not(:last-child)]:pb-4">
                    Our team has expertise in 100+ technologies and programming languages, <br /> including the AI coding tools rewriting how software gets built.
                </p>
            </div>

            <div className="mb-14 flex w-full flex-col gap-8 md:gap-3 xl:mb-11">
                {/* First Row - slides left */}
                <div className="marquee-wrapper">
                    <div className="marquee-inner marquee-left">
                        {firstRowItems.map((tech, index) => (
                            <a key={`first-${index}`} href={tech.href} className="marquee-item">
                                {tech.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Second Row - slides right */}
                <div className="marquee-wrapper">
                    <div className="marquee-inner marquee-right">
                        {secondRowItems.map((tech, index) => (
                            <a key={`second-${index}`} href={tech.href} className="marquee-item">
                                {tech.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <a
                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none border-b-2 pr-8 bg-transparent border-current active:shadow-none disabled:text-site-neutrals-200 transform duration-200 hover:px-4 text-site-neutrals-900 hover:text-site-neutrals-700 focus:shadow-site-primary-50 py-2.5 site-paragraph-m font-medium"
                href="https://www.bairesdev.com/technologies/"
            >
                <span>Our full repertoire</span>
                <span>
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
    );
};

export default TechStackMarquee;
