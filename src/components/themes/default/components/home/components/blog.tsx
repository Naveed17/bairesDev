'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BlogCarousel = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Software Outsourcing Explained: Costs, Risks, and Models",
            slug: "software-outsourcing",
            image: "https://bairesdev.mo.cloudinary.net/blog/2026/04/Software-Outsourcing-Explained_-Costs-Risks-and-Models.png?tx=w_640,q_auto",
            author: "Facundo Molina",
            authorImage: "https://assets.bairesdev.com/image/upload/c_limit,w_36/dpr_auto/f_auto/q_auto/v1/www/blog/authors/Facundo-Molina-300x300_1776782703?_a=BAVAfVDW0"
        },
        {
            id: 2,
            title: "Software Development Services: A Buyer's Guide",
            slug: "software-development-services",
            image: "https://bairesdev.mo.cloudinary.net/blog/2026/04/Software-Development-Services_-A-Buyers-Guide.png?tx=w_640,q_auto",
            author: "Alessandro Baggio",
            authorImage: "https://assets.bairesdev.com/image/upload/c_limit,w_36/dpr_auto/f_auto/q_auto/v1/www/blog/authors/AlessandroBaggio_1760447156?_a=BAVAfVDW0"
        },
        {
            id: 3,
            title: "Staff Augmentation: How Engineering Teams Scale Capacity Without Hiring",
            slug: "staff-augmentation",
            image: "https://bairesdev.mo.cloudinary.net/blog/2026/04/Staff-Augmentation.png?tx=w_640,q_auto",
            author: "Natalia Rodriguez",
            authorImage: "https://assets.bairesdev.com/image/upload/c_limit,w_36/dpr_auto/f_auto/q_auto/v1/www/blog/authors/Natalia-Rodriguez-FN_1776782701?_a=BAVAfVDW0"
        }
    ];

    return (
        <section className="mx-4 md:mx-6 lg:mx-[9.25rem] xl:mx-52 2xl:mx-auto 2xl:max-w-7xl">
            <div className="mb-10 justify-between md:flex lg:mb-20">
                <div className="flex-1">
                    <h2 className="text-site-neutrals-800 site-display-l [&>strong]:text-site-primary-600 font-medium md:flex-1 [&>strong]:font-medium [&>p:not(:last-child)]:pb-4">
                        Our latest insights.
                    </h2>
                    <p className="text-site-neutrals-500 site-paragraph-xl my-4 max-w-lg font-normal md:flex-1"></p>
                </div>
                <div className="md:flex md:flex-1 md:items-end md:justify-end lg:items-start">
                    <a
                        className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none border-b-2 pr-8 bg-transparent border-current active:shadow-none disabled:text-site-neutrals-200 transform duration-200 hover:px-4 text-site-neutrals-900 hover:text-site-neutrals-700 focus:shadow-site-primary-50 py-2 site-paragraph-s font-medium"
                        href="https://www.bairesdev.com/blog/"
                    >
                        <span className="">Over 1,100 articles on technology and talent</span>
                        <span className="">
                            <div
                                className="w-4 h-4 transition-colors duration-300 [&:not(svg)]:bg-current"
                                style={{
                                    mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)",
                                    WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)"
                                }}
                            />
                        </span>
                    </a>
                </div>
            </div>

            <div className="relative max-w-5xl md:mx-auto lg:mx-20 lg:max-w-7xl 2xl:mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 16
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 24
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 24
                        }
                    }}
                    navigation={{
                        prevEl: '.blog-prev',
                        nextEl: '.blog-next',
                    }}
                    className="blog-carousel"
                >
                    {blogPosts.map((post) => (
                        <SwiperSlide key={post.id}>
                            <div className="inline-flex items-center justify-center overflow-hidden m-0 w-80 mr-4 md:w-96 lg:w-80 lg:mx-4 xl:w-[21.875rem] 2xl:w-96 2xl:mr-6 2xl:ml-4">
                                <div className="z-0 bg-white flex flex-col h-full !bg-transparent w-full">
                                    <div className="relative rounded-[1.25rem] overflow-hidden peer">
                                        <a
                                            aria-label={post.title}
                                            className="relative block aspect-video"
                                            href={`https://www.bairesdev.com/blog/${post.slug}/`}
                                        >
                                            <img
                                                alt={post.title}
                                                title={post.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="object-cover w-full h-full"
                                                style={{ color: 'transparent' }}
                                                src={post.image}
                                            />
                                        </a>
                                    </div>
                                    <div className="flex flex-col items-start py-6 pb-0 pt-3 flex-1 peer-hover:[&_h3]:underline">
                                        <div className="mb-6">
                                            <h3 className="site-paragraph-xl text-site-neutrals-700 font-bold">
                                                <a
                                                    className="whitespace-normal text-wrap hover:underline"
                                                    href={`https://www.bairesdev.com/blog/${post.slug}/`}
                                                >
                                                    {post.title}
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="mt-auto flex w-full items-center justify-between justify-self-end">
                                            <div className="flex items-center gap-1">
                                                <div className="flex shrink-0 grow-0 items-center rounded-full m-0 mr-1">
                                                    <img
                                                        alt={`${post.author} profile photo`}
                                                        loading="lazy"
                                                        width="36"
                                                        height="36"
                                                        decoding="async"
                                                        className="rounded-full"
                                                        style={{ color: 'transparent' }}
                                                        src={post.authorImage}
                                                    />
                                                </div>
                                                <p className="text-[1.05rem] leading-6 site-paragraph-s text-site-neutrals-500">
                                                    By <span>{post.author}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex [&_button]:m-2 absolute top-[20%] left-[-8%] w-[116%] justify-between invisible lgS:visible">
                    <button
                        type="button"
                        aria-label="Previous slide"
                        className="blog-prev transition-transform text-site-primary-600 disabled:text-site-primary-50 hover:enabled:-translate-x-2"
                    >
                        <div className="border-site-neutrals-50 bg-site-neutrals-0 !h-12 !w-12 rounded-3xl border p-2.5">
                            <span className="">
                                <div
                                    className="w-6 h-6 bg-current"
                                    style={{
                                        mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowBack.svg)",
                                        WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowBack.svg)"
                                    }}
                                />
                            </span>
                        </div>
                    </button>
                    <button
                        type="button"
                        aria-label="Next slide"
                        className="blog-next transition-transform text-site-primary-600 disabled:text-site-primary-50 hover:enabled:translate-x-2"
                    >
                        <div className="border-site-neutrals-50 bg-site-neutrals-0 !h-12 !w-12 rounded-3xl border p-2.5">
                            <span className="">
                                <div
                                    className="w-6 h-6 bg-current"
                                    style={{
                                        mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)",
                                        WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/ArrowForward.svg)"
                                    }}
                                />
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogCarousel;