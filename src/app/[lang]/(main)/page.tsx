import { Hero, TrustedCompanies, FullStackCoverage, FeaturedIn, TechStackMarquee, TestimonialsAndStats, Blogs, BottomCta } from "@components/themes";
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <FullStackCoverage />
      <div className="relative flex h-14 w-full overflow-hidden md:h-40 lg:h-60 bg-site-neutrals-25 -mt-20 mb-0">
        <div className="absolute left-1/2 h-192 w-[250%] -translate-x-2/4 md:h-258.75 md:w-[200%] lg:h-258.75 lg:w-[200%] xl:h-[1936px] xl:w-[200%] clip-bottom-large-circle bg-neutrals-0 bottom-0">
        </div>
      </div>
      <FeaturedIn />
      <TechStackMarquee />
      <TestimonialsAndStats />
      <Blogs />
      <BottomCta />
    </>
  );
}