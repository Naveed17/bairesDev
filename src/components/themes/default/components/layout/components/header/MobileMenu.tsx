"use client";

import { useState } from "react";
import cn from "@src/utils/classNames";
import MaskedIcon from "./MaskedIcon";
import { NavTextLink } from "./NavLinks";
import { BAIRESDEV_ASSETS, BAIRESDEV_URLS } from "./constants";
import { NAV_ITEMS } from "./nav-data";
import type { NavMenuItem } from "./types";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavMenuItem;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.hasDropdown || !item.sections) {
    return (
      <a
        href={item.href}
        onClick={onClose}
        className="block py-3 text-base font-bold text-site-neutrals-800 border-b border-site-neutrals-100"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="border-b border-site-neutrals-100">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-base font-bold text-site-neutrals-800"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        {item.label}
        <MaskedIcon
          src={BAIRESDEV_ASSETS.icons.expandMore}
          className={cn(
            "w-5 h-5 bg-site-neutrals-800 transition duration-200",
            expanded && "rotate-180 bg-site-primary-600",
          )}
        />
      </button>
      {expanded && (
        <div className="pb-4 pl-4 space-y-4">
          {item.sections.map((section, index) => (
            <div key={`${item.label}-${index}`}>
              {section.title && (
                <p className="text-site-neutrals-900 site-paragraph-m font-medium mb-2">
                  {section.title}
                </p>
              )}
              {section.overline && (
                <p className="text-site-neutrals-400 site-overline-m font-bold mb-2">
                  {section.overline}
                </p>
              )}
              {section.quickLinks?.map((link) => (
                <NavTextLink
                  key={link.href}
                  link={link}
                  className="block py-1"
                />
              ))}
              {section.links?.map((link) => (
                <NavTextLink
                  key={link.href}
                  link={link}
                  className="block py-1"
                />
              ))}
            </div>
          ))}
          <a
            href={item.href}
            onClick={onClose}
            className="text-site-neutrals-900 site-paragraph-m font-medium underline"
          >
            View all {item.label}
          </a>
        </div>
      )}
    </div>
  );
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 top-20 z-30 bg-site-neutrals-900/40 backdrop-blur-[1px] mdL:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto bg-site-neutrals-0 px-8 py-4 shadow-lg mdL:hidden">
        <nav aria-label="BairesDev mobile navigation">
          {NAV_ITEMS.map((item) => (
            <MobileNavItem key={item.label} item={item} onClose={onClose} />
          ))}
          <a
            href={BAIRESDEV_URLS.scheduleCall}
            onClick={onClose}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-site-neutrals-900 px-4 py-2.5 site-paragraph-m font-medium text-site-neutrals-0 hover:bg-site-neutrals-700"
          >
            Schedule a Call
          </a>
        </nav>
      </div>
    </>
  );
}
