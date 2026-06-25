import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const TeamRoles = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageErrors, setImageErrors] = useState({});
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleImageError = (id) => {
        setImageErrors(prev => ({ ...prev, [id]: true }));
    };

    const roles = [
        {
            id: 1,
            title: 'Software \n developers',
            clipPathId: 'F66135',
            svgTransform: 'translateX(-10px)',
            textTransform: 'translate: 10px',
            zIndex: 0,
            image: 'https://assets.bairesdev.com/image/upload/q_auto,f_auto,w_320/www/static/core_software-developer_eoozp3',
            path: 'M211.443 0.185981C239.062 58.4197 214.258 128.024 156.016 155.658C97.7841 183.303 28.1737 158.506 0.554106 100.273L211.443 0.185981Z',
            pathTransform: 'translateX(20px) scale(0.7)',
            initialColor: '#F66135',
            finalColor: 'rgba(194, 199, 204, 1)',
            emoji: '👨‍💻'
        },
        {
            id: 2,
            title: 'QA \n engineers',
            clipPathId: '73AAF1',
            svgTransform: 'translateX(20px) translateY(-10px) scale(0.95)',
            textTransform: 'translate: 20px',
            zIndex: 1,
            image: 'https://assets.bairesdev.com/image/upload/q_auto,f_auto,w_320/www/static/core_qa-engineer_dma6iy',
            path: 'M184.586 13.3233L13.9131 0L0.82349 167.678L171.496 181.002L184.586 13.3233Z',
            pathTransform: 'translateX(20px) scale(0.7)',
            initialColor: '#73AAF1',
            finalColor: 'rgba(194, 199, 204, 1)',
            emoji: '🧪'
        },
        {
            id: 3,
            title: 'UX \n designers',
            clipPathId: 'FA9F84',
            svgTransform: 'translateX(20px)',
            textTransform: 'translate: 10px',
            zIndex: 2,
            image: 'https://assets.bairesdev.com/image/upload/q_auto,f_auto,w_320/www/static/core_ux-designer_mtzvvy',
            path: 'M170.824 84.7246C170.824 131.42 132.774 169.262 85.8237 169.262C38.8732 169.262 0.82373 131.42 0.82373 84.7246C0.82373 38.0296 38.8732 0.186951 85.8237 0.186951C132.774 0.186951 170.824 38.0296 170.824 84.7246Z',
            pathTransform: 'translateX(20px) scale(0.7)',
            initialColor: '#FA9F84',
            finalColor: 'rgba(194, 199, 204, 1)',
            emoji: '🎨'
        },
        {
            id: 4,
            title: 'Data \n scientists',
            clipPathId: 'FFAC00',
            svgTransform: 'translateX(-25px)',
            textTransform: 'translate: -15px',
            zIndex: 3,
            image: 'https://assets.bairesdev.com/image/upload/q_auto,f_auto,w_320/www/static/core_data-scientist_vvtozp',
            path: 'M101.172 0.687866H202.318L151.755 89.7602L101.172 178.832L50.589 89.7602L0.00561523 0.687866H101.172Z',
            pathTransform: 'translateX(20px) scale(0.8, 0.7)',
            initialColor: '#FFAC00',
            finalColor: 'rgba(194, 199, 204, 1)',
            emoji: '📊'
        },
        {
            id: 5,
            title: 'Project \n managers',
            clipPathId: '8FD5BF',
            svgTransform: 'translateX(-35px)',
            textTransform: 'translate: -35px',
            zIndex: 4,
            image: 'https://assets.bairesdev.com/image/upload/q_auto,f_auto,w_320/www/static/core_project-manager_un3dyy',
            path: 'M0.82373 94.9458C0.82373 147.07 43.55 189.321 96.2607 189.321V169.515C118.508 186.557 148.147 193.741 177.599 186.544H177.582L131.818 3.73351C118.463 6.99807 106.468 12.8987 96.2607 20.7361V0.570587C43.55 0.570587 0.82373 42.8215 0.82373 94.9458Z',
            pathTransform: 'translateX(20px) scale(0.7)',
            initialColor: '#8FD5BF',
            finalColor: 'rgba(194, 199, 204, 1)',
            emoji: '📋'
        }
    ];

    const imageOverflowRects: Record<number, { x: number; y: number; width: number; height: number }> = {
        1: { x: 42, y: -8, width: 62, height: 42 },
        2: { x: 42, y: -8, width: 92, height: 52 },
        3: { x: 50, y: -8, width: 82, height: 58 },
        4: { x: 58, y: -8, width: 80, height: 52 },
        5: { x: 58, y: -8, width: 92, height: 46 },
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                delay: 0.4
            }
        }
    };

    return (
        <div
            ref={sectionRef}
            className="px-15 lgS:my-40 lgS:gap-16 my-12 flex flex-col items-center justify-center md:my-20"
        >
            <motion.div
                className="lgS:gap-20 lgS:justify-around my-0 flex flex-wrap items-center justify-center gap-8"
                style={{ width: '1000px', maxWidth: '100%' }}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {roles.map((role) => (
                    <motion.div
                        key={role.id}
                        className="lgS:w-px -mr-px flex justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="mdL:min-w-[280px] mdS:min-w-[180px] lgS:min-w-[350px] flex min-w-[140px] flex-col justify-center self-end md:min-w-[230px] lg:min-w-[400px]"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                overflow: 'visible'
                            }}>
                                <svg
                                    viewBox="0.8 0.18 222 166"
                                    style={{
                                        zIndex: role.zIndex,
                                        transform: role.svgTransform,
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: '400px',
                                        overflow: 'visible'
                                    }}
                                >
                                    <defs>
                                        {/* Shape clip path for the colored background */}
                                        <clipPath id={`shape-${role.clipPathId}`}>
                                            <path
                                                d={role.path}
                                                style={{
                                                    transformOrigin: role.id === 1 ? '111.642px 83.5748px' :
                                                        role.id === 2 ? '92.7047px 90.501px' :
                                                            role.id === 3 ? '85.8239px 84.7245px' :
                                                                role.id === 4 ? '101.162px 89.7599px' :
                                                                    '89.2114px 94.9458px',
                                                    transform: role.pathTransform
                                                }}
                                            />
                                        </clipPath>
                                        {/* Top overflow window for the portrait. Rendered behind the shape to avoid white patches. */}
                                        <clipPath id={`overflow-${role.clipPathId}`}>
                                            <rect {...imageOverflowRects[role.id]} />
                                        </clipPath>
                                    </defs>

                                    {!imageErrors[role.id] && (
                                        <g clipPath={`url(#overflow-${role.clipPathId})`}>
                                            <image
                                                x="0"
                                                y="0"
                                                width="100%"
                                                height="120%"
                                                href={role.image}
                                                preserveAspectRatio="xMidYMin meet"
                                                onError={() => handleImageError(role.id)}
                                                style={{
                                                    opacity: isLoaded ? 1 : 0,
                                                    transition: `opacity 0.8s ease ${0.8 + (role.id * 0.1)}s`
                                                }}
                                            />
                                        </g>
                                    )}
                                    {/* Colored path background - full shape */}
                                    <motion.path
                                        d={role.path}
                                        fill={role.initialColor}
                                        style={{
                                            transformOrigin: role.id === 1 ? '111.642px 83.5748px' :
                                                role.id === 2 ? '92.7047px 90.501px' :
                                                    role.id === 3 ? '85.8239px 84.7245px' :
                                                        role.id === 4 ? '101.162px 89.7599px' :
                                                            '89.2114px 94.9458px',
                                            transform: role.pathTransform
                                        }}
                                        animate={{ fill: role.finalColor }}
                                        transition={{
                                            duration: 2.5,
                                            delay: 0.5 + (role.id * 0.15),
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Main image stays clipped inside the grey shape */}
                                    {!imageErrors[role.id] ? (
                                        <g clipPath={`url(#shape-${role.clipPathId})`}>
                                            <image
                                                x="0"
                                                y="0"
                                                width="100%"
                                                height="120%"
                                                href={role.image}
                                                preserveAspectRatio="xMidYMin meet"
                                                onError={() => handleImageError(role.id)}
                                                style={{
                                                    opacity: isLoaded ? 1 : 0,
                                                    transition: `opacity 0.8s ease ${0.8 + (role.id * 0.1)}s`
                                                }}
                                            />
                                        </g>
                                    ) : (
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="central"
                                            fontSize="80"
                                            fill="#ffffff"
                                            clipPath={`url(#shape-${role.clipPathId})`}
                                            style={{
                                                opacity: isLoaded ? 1 : 0,
                                                transition: `opacity 0.8s ease ${0.8 + (role.id * 0.1)}s`
                                            }}
                                        >
                                            {role.emoji}
                                        </text>
                                    )}
                                </svg>
                            </div>

                            <motion.p
                                className="site-paragraph-xl text-site-neutrals-300 max-w-52 self-center whitespace-pre-line text-center font-bold"
                                style={{
                                    opacity: 1,
                                    translate: role.textTransform,
                                    color: 'rgb(127, 137, 147)'
                                }}
                                variants={textVariants}
                            >
                                {role.title}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="lgS:mt-0 my-10 flex w-full flex-col items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            >
                <motion.h3
                    className="site-display-l my-5 mr-6 text-center font-medium text-neutral-500 md:text-start lg:mt-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    Let&apos;s assemble your team.
                </motion.h3>

                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a
                        className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none px-4 rounded-lg active:shadow-none disabled:bg-site-neutrals-200 disabled:text-site-neutrals-50 text-site-neutrals-0 active:bg-site-secondary-green-800 bg-site-secondary-green-600 hover:bg-site-secondary-green-700 focus:shadow-site-secondary-green-50 py-3 site-paragraph-xl font-medium"
                        href="https://www.bairesdev.com/start/basic-details/"
                    >
                        <span className="">Schedule a Call</span>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TeamRoles;








