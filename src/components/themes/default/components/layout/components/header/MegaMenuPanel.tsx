import cn from "@src/utils/classNames";
import MaskedIcon from "./MaskedIcon";
import { BAIRESDEV_ASSETS } from "./constants";
import { FooterLink, NavTextLink } from "./NavLinks";
import type { MegaMenuSection } from "./types";

const introWrapperClassName =
  "mdL:px-6 lgS:px-8 py-8 lg:pr-16 bg-site-neutrals-25 lgS:pl-8 lgS:pr-16 lg:pl-8 xl:pl-8 mega-menu-intro";

const linksWrapperClassName = "mdL:px-6 lgS:px-8 py-8 lg:px-16";

function IntroSection({ section }: { section: MegaMenuSection }) {
  return (
    <div className={cn(introWrapperClassName, section.wrapperClassName)}>
      <div className="lgS:mx-auto flex h-full flex-col lgS:w-62.5 mdL:w-56">
        {section.title && (
          <span className="text-site-neutrals-900 site-display-xs after:text-site-primary-600 font-medium after:content-['.']">
            {section.title}
          </span>
        )}
        {section.description && (
          <div className="text-site-neutrals-600 site-paragraph-m mt-2 [&_a]:underline [&>p:not(:last-child)]:pb-4">
            {section.description}
          </div>
        )}
        {section.quickLinks && section.quickLinks.length > 0 && (
          <div className="gap-y-3 mt-4 flex flex-col grid-cols-2">
            {section.quickLinks.map((link) => (
              <NavTextLink key={link.href} link={link} />
            ))}
          </div>
        )}
        {section.caseStudy && (
          <div className="bg-site-neutrals-25 mx-8 mt-auto flex gap-4 rounded-lg p-4 shadow-md mdS:hidden mdL:flex mdL:bg-transparent mdL:border-t-site-neutrals-100 mdL:mx-0 mdL:shadow-none mdL:rounded-none mdL:p-0 mdL:pt-6 mdL:border-t flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={section.caseStudy.imageAlt}
              loading="lazy"
              width={120}
              height={120}
              decoding="async"
              className={section.caseStudy.imageClassName ?? "h-11 w-28 object-cover"}
              src={section.caseStudy.imageSrc}
            />
            <div className="text-site-neutrals-900 site-paragraph-s [&_a]:underline [&>p:not(:last-child)]:pb-4">
              {section.caseStudy.content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function LinksSection({ section }: { section: MegaMenuSection }) {
  const gridClassName =
    section.gridCols === 3
      ? "gap-y-3 mdL:gap-x-6 lgS:gap-x-16 grid lg:gap-x-28 grid-cols-3"
      : section.gridCols === 2
        ? "gap-y-3 mt-4 mdL:gap-x-6 lgS:gap-x-16 grid lg:gap-x-28 grid-cols-2"
        : "gap-y-3 mt-4 flex flex-col grid-cols-2";

  return (
    <div className={cn(linksWrapperClassName, section.wrapperClassName)}>
      <div className={cn("lgS:mx-auto flex h-full flex-col", section.contentClassName)}>
        {section.overline ? (
          <span className="text-site-neutrals-400 site-overline-m before:bg-site-primary-600 font-bold before:mb-px before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-sm before:content-['']">
            {section.overline}
          </span>
        ) : (
          <span />
        )}
        {section.links && (
          <div className={gridClassName}>
            {section.links.map((link) => (
              <NavTextLink key={link.href} link={link} />
            ))}
          </div>
        )}
        {section.footerLink && <FooterLink link={section.footerLink} />}
      </div>
    </div>
  );
}

type MegaMenuPanelProps = {
  sections: MegaMenuSection[];
};

export default function MegaMenuPanel({ sections }: MegaMenuPanelProps) {
  return (
    <div className="absolute left-0 top-0 z-40 mt-20 w-full bg-white drop-shadow-lg pointer-events-none invisible grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:pointer-events-auto group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
      <div className="flex w-full overflow-hidden">
        {sections.map((section, index) =>
          section.variant === "intro" ? (
            <IntroSection key={`intro-${index}`} section={section} />
          ) : (
            <LinksSection key={`links-${section.overline ?? index}`} section={section} />
          ),
        )}
      </div>
    </div>
  );
}

export function MegaMenuOverlay() {
  return (
    <div className="bg-site-neutrals-900/40 pointer-events-none invisible absolute inset-0 top-20 z-20 h-screen w-full backdrop-blur-[1px] group-hover:visible group-hover:pointer-events-auto group-focus-within:visible group-focus-within:pointer-events-auto" />
  );
}

export function NavTriggerIcon() {
  return (
    <span>
      <MaskedIcon
        src={BAIRESDEV_ASSETS.icons.expandMore}
        className="w-6 h-6 ml-1 translate-y-0.5 transition duration-200 bg-site-neutrals-800 group-hover:bg-site-primary-600 group-hover:rotate-180"
      />
    </span>
  );
}
