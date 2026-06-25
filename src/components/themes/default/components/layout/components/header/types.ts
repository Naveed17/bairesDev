import type { ReactNode } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type CaseStudySpotlight = {
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  content: ReactNode;
};

export type MegaMenuSection = {
  variant: "intro" | "links";
  title?: string;
  overline?: string;
  description?: ReactNode;
  quickLinks?: NavLink[];
  links?: NavLink[];
  gridCols?: 2 | 3;
  footerLink?: NavLink;
  caseStudy?: CaseStudySpotlight;
  wrapperClassName?: string;
  contentClassName?: string;
};

export type NavMenuItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  sections?: MegaMenuSection[];
};
