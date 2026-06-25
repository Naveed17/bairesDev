import React from 'react';
import Image from 'next/image';

const BottomCTA = () => {
    return (
        <section className="flex justify-center bg-black mt-40">
            <div className="mx-5 flex w-full max-w-lg flex-col justify-between gap-12 pb-12 md:max-w-xl lg:m-0 lg:w-[82rem] lg:max-w-none lg:flex-row-reverse lg:gap-14 lg:pb-14 lg:pt-16 xl:gap-3 2xl:w-7xl">
                {/* Image Section */}
                <div className="relative -mt-14 aspect-[1200/752] w-full md:-mt-16 lg:-mt-32 lg:w-[33.75rem] xl:-mt-[9rem] xl:w-[37.75rem] 3xl:w-[43.25rem]">
                    <Image
                        alt="Schedule a call with BairesDev"
                        fill
                        className="object-contain"
                        sizes="(min-width: 1920px) 38rem, (min-width: 1728px) 34rem, (min-width: 1512px) 36rem, (min-width: 834px) 100vw, 44rem"
                        src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/bottom_cta_1_rnejgz?_a=BAVAfVDW0"
                    />
                </div>

                {/* Content Section */}
                <div className="site-display-m lg:w-[39rem] xl:w-[34rem]">
                    <div className="text-site-neutrals-0 [&_strong]:text-site-primary-600 font-normal 3xl:pt-10 [&_strong]:font-normal">
                        <p className="">
                            <span>Want to accelerate software development at your company?<br /></span>
                            <strong className="overflow-hidden">See how we can help.</strong>
                            <span></span>
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center md:flex-row md:gap-4 lg:justify-start">
                        <a
                            className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none px-4 rounded-lg active:shadow-none disabled:bg-site-neutrals-200 disabled:text-site-neutrals-50 text-site-neutrals-0 active:bg-site-secondary-green-800 bg-site-secondary-green-700 hover:bg-site-secondary-green-800 focus:shadow-site-secondary-green-50 py-2.5 site-paragraph-m font-medium mt-10"
                            href="https://www.bairesdev.com/start/basic-details/"
                        >
                            <span className="">Schedule a Call</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BottomCTA;