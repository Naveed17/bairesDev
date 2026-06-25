import React from 'react';

const FullStackCoverage = () => {
    return (

        <section className="mx-4 md:mx-6 lg:mx-37 xl:mx-52 2xl:mx-auto 2xl:max-w-7xl mb-16">
            <header className="mb-12 flex w-full flex-col justify-between gap-4 mdL:flex-row mdL:items-end">
                <h2 className="site-display-l text-site-neutrals-900 [&_strong]:text-site-primary-600 font-medium [&>p:not(:last-child)]:pb-4">
                    Get full-stack coverage.<br />Unblock execution across the SDLC<strong>.</strong>
                </h2>
                <a
                    className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none border-b-2 pr-8 bg-transparent border-current active:shadow-none disabled:text-site-neutrals-200 transform duration-200 hover:px-4 text-site-neutrals-900 hover:text-site-neutrals-700 focus:shadow-site-primary-50 py-2.5 site-paragraph-m font-medium"
                    href="https://www.bairesdev.com/solutions/"
                >
                    <span className="">Everything we do</span>
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
            </header>

            <div className="mdS:grid-cols-2 mdL:grid-cols-3 grid grid-cols-1 gap-4">
                {/* Front-End Development */}
                <div className="bg-site-neutrals-25 lgS:p-12 rounded-xl p-6">
                    <div className="mb-4 flex flex-row items-center gap-4 mdS:flex-col mdS:mb-2 mdS:items-start">
                        <div className="bg-site-primary-700 flex h-16 w-16 items-center justify-center rounded-xl p-2">
                            <div
                                className="w-12 h-12 bg-site-neutrals-0"
                                style={{
                                    mask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/code-tv_1771454175.svg)",
                                    WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/code-tv_1771454175.svg)"
                                }}
                            />
                        </div>
                        <h3 className="site-display-s text-site-neutrals-900 font-normal">Front-End Development</h3>
                    </div>
                    <p className="text-site-neutrals-700 site-paragraph-m mb-6">
                        Build modern frontends designed for performance, accessibility, and scale.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/front-end/"
                            >
                                <span className="">Front-End</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/web-development/"
                            >
                                <span className="">Web Development</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/react/"
                            >
                                <span className="">React</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/angular/"
                            >
                                <span className="">Angular</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Back-End Development */}
                <div className="bg-site-neutrals-25 lgS:p-12 rounded-xl p-6">
                    <div className="mb-4 flex flex-row items-center gap-4 mdS:flex-col mdS:mb-2 mdS:items-start">
                        <div className="bg-site-neutrals-700 flex h-16 w-16 items-center justify-center rounded-xl p-2">
                            <div
                                className="w-12 h-12 bg-site-neutrals-0"
                                style={{
                                    mask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/database-code_1771510302.svg)",
                                    WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/database-code_1771510302.svg)"
                                }}
                            />
                        </div>
                        <h3 className="site-display-s text-site-neutrals-900 font-normal">Back-End Development</h3>
                    </div>
                    <p className="text-site-neutrals-700 site-paragraph-m mb-6">
                        Develop secure, scalable backends that perform reliably under load.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/back-end/"
                            >
                                <span className="">Back-End</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/database/"
                            >
                                <span className="">Database</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/go/"
                            >
                                <span className="">Go</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/net/"
                            >
                                <span className="">.NET</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/java/"
                            >
                                <span className="">Java</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/nodejs/"
                            >
                                <span className="">Node.js</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* AI and Machine Learning */}
                <div className="bg-site-neutrals-25 lgS:p-12 rounded-xl p-6">
                    <div className="mb-4 flex flex-row items-center gap-4 mdS:flex-col mdS:mb-2 mdS:items-start">
                        <div className="bg-site-accent-900 flex h-16 w-16 items-center justify-center rounded-xl p-2">
                            <div
                                className="w-12 h-12 bg-site-neutrals-0"
                                style={{
                                    mask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/ai-stars_1771510305.svg)",
                                    WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/ai-stars_1771510305.svg)"
                                }}
                            />
                        </div>
                        <h3 className="site-display-s text-site-neutrals-900 font-normal">AI and Machine Learning</h3>
                    </div>
                    <p className="text-site-neutrals-700 site-paragraph-m mb-6">
                        Deploy trustworthy AI solutions that create real business value.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/ai/"
                            >
                                <span className="">AI</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/machine-learning/"
                            >
                                <span className="">Machine Learning</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/data-science/"
                            >
                                <span className="">Data Science</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/llm/"
                            >
                                <span className="">LLMs</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/generative-ai/"
                            >
                                <span className="">Generative AI</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/technologies/python/"
                            >
                                <span className="">Python</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Development */}
                <div className="bg-site-neutrals-25 lgS:p-12 rounded-xl p-6">
                    <div className="mb-4 flex flex-row items-center gap-4 mdS:flex-col mdS:mb-2 mdS:items-start">
                        <div className="bg-site-accent-700 flex h-16 w-16 items-center justify-center rounded-xl p-2">
                            <div
                                className="w-12 h-12 bg-site-neutrals-0"
                                style={{
                                    mask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/MobileCode_1769172988.svg)",
                                    WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/MobileCode_1769172988.svg)"
                                }}
                            />
                        </div>
                        <h3 className="site-display-s text-site-neutrals-900 font-normal">Mobile Development</h3>
                    </div>
                    <p className="text-site-neutrals-700 site-paragraph-m mb-6">
                        Launch iOS and Android apps with smooth performance, stable sessions, and secure data handling.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/mobile-app/"
                            >
                                <span className="">Mobile Applications</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/ios/"
                            >
                                <span className="">iOS</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/android/"
                            >
                                <span className="">Android</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* UX/UI Design */}
                <div className="bg-site-neutrals-25 lgS:p-12 rounded-xl p-6">
                    <div className="mb-4 flex flex-row items-center gap-4 mdS:flex-col mdS:mb-2 mdS:items-start">
                        <div className="bg-[linear-gradient(--theme(--color-site-secondary-green-600/0.5)),linear-gradient(--theme(--color-site-accent-600/0.5)),linear-gradient(--theme(--color-site-neutrals-900/0.2))] flex h-16 w-16 items-center justify-center rounded-xl p-2">
                            <div
                                className="w-12 h-12 bg-site-neutrals-0"
                                style={{
                                    mask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/ViewQuilt48_1769172990.svg)",
                                    WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/ViewQuilt48_1769172990.svg)"
                                }}
                            />
                        </div>
                        <h3 className="site-display-s text-site-neutrals-900 font-normal">UX/UI Design</h3>
                    </div>
                    <p className="text-site-neutrals-700 site-paragraph-m mb-6">
                        Deliver product designs with clear user flows, reusable components, and accessible layouts.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/ux/"
                            >
                                <span className="">UX Design</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/ui/"
                            >
                                <span className="">UI Design</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* QA and Testing */}
                <div className="bg-site-neutrals-25 lgS:p-12 rounded-xl p-6">
                    <div className="mb-4 flex flex-row items-center gap-4 mdS:flex-col mdS:mb-2 mdS:items-start">
                        <div className="bg-site-secondary-green-700 flex h-16 w-16 items-center justify-center rounded-xl p-2">
                            <div
                                className="w-12 h-12 bg-site-neutrals-0"
                                style={{
                                    mask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/DoneAll_1769172986.svg)",
                                    WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/landings/DoneAll_1769172986.svg)"
                                }}
                            />
                        </div>
                        <h3 className="site-display-s text-site-neutrals-900 font-normal">QA and Testing</h3>
                    </div>
                    <p className="text-site-neutrals-700 site-paragraph-m mb-6">
                        Ship release-ready software with manual and automated testing that validate core flows end to end.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <a
                                className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none bg-transparent hover:border-current focus:border-transparent active:shadow-none active:border-current disabled:border-transparent disabled:text-site-neutrals-200 active:text-site-accent-800 focus:shadow-site-accent-50 site-paragraph-s font-medium text-site-accent-700 site-paragraph-s border-site-accent-700 whitespace-nowrap rounded-lg border px-2.5 py-1.5 transition-all hover:bg-site-accent-700 hover:text-site-neutrals-0 focus:bg-site-accent-700 focus:text-site-neutrals-0"
                                href="https://www.bairesdev.com/solutions/qa/"
                            >
                                <span className="">Quality Assurance</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
};

export default FullStackCoverage;