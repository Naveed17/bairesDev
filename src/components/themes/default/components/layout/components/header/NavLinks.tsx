import cn from "@src/utils/classNames";
import MaskedIcon from "./MaskedIcon";
import { BAIRESDEV_ASSETS } from "./constants";
import type { NavLink } from "./types";

const linkClassName =
  "text-site-neutrals-600 w-fit font-medium transition duration-300 hover:underline hover:brightness-75";

type FooterLinkProps = {
  link: NavLink;
};

export function FooterLink({ link }: FooterLinkProps) {
  return (
    <a
      className="w-fit flex items-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none border-b-2 pr-8 bg-transparent border-current active:shadow-none disabled:text-site-neutrals-200 transform duration-200 hover:px-4 text-site-neutrals-900 hover:text-site-neutrals-700 focus:shadow-site-primary-50 py-2.5 site-paragraph-m font-medium border-none mt-12 text-left justify-start!"
      href={link.href}
    >
      <span>{link.label}</span>
      <span>
        <MaskedIcon
          src={BAIRESDEV_ASSETS.icons.arrowForward}
          className="w-4 h-4 transition-colors duration-300 [&:not(svg)]:bg-current bg-current"
        />
      </span>
    </a>
  );
}

export function NavTextLink({
  link,
  className,
}: {
  link: NavLink;
  className?: string;
}) {
  return (
    <a href={link.href} className={cn(linkClassName, className)}>
      {link.label}
    </a>
  );
}

export { linkClassName };
