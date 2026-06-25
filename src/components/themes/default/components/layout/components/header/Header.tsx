"use client";

import { useState } from "react";
import cn from "@src/utils/classNames";
import MaskedIcon from "./MaskedIcon";
import MegaMenuPanel, { MegaMenuOverlay, NavTriggerIcon } from "./MegaMenuPanel";
import MobileMenu from "./MobileMenu";
import { BAIRESDEV_ASSETS, BAIRESDEV_URLS } from "./constants";
import { NAV_ITEMS } from "./nav-data";

const navLinkClassName =
  "flex h-10 w-full translate-y-1 items-center justify-center text-nowrap focus:outline-none [&_svg]:ml-2 lgS:px-4 after:bg-site-primary-200 after:absolute after:-bottom-5 after:left-0 after:h-0 after:w-full after:transition-all after:content-[''] px-4";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="mb-10 h-20 z-40 text-sm sticky top-0 transform duration-300 bg-site-neutrals-0 shadow-lg">
      <div className="box-content flex h-full items-center justify-between px-8 xl:mx-auto">
        <div className="flex">
          <a
            href={BAIRESDEV_URLS.home}
            aria-label="BairesDev home"
            className="block h-5.5"
          >
            <div className="h-7 w-8 overflow-hidden mdS:w-auto mdL:w-8 lgS:w-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BAIRESDEV_ASSETS.logo}
                alt="BairesDev"
                width={188}
                height={28}
                className="h-7 w-48 cursor-pointer object-cover object-left"
              />
            </div>
          </a>
        </div>

        <div className="mdL:h-full mdL:flex hidden h-auto">
          <nav
            aria-label="BairesDev main navigation"
            className="flex h-full items-center"
          >
            <ul className="z-40 flex h-full items-center space-x-2">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="group static flex h-full py-4 text-base font-bold text-site-neutrals-800"
                >
                  <a href={item.href} className={navLinkClassName}>
                    {item.label}
                    {item.hasDropdown && <NavTriggerIcon />}
                  </a>
                  {item.hasDropdown && item.sections && (
                    <>
                      <MegaMenuOverlay />
                      <MegaMenuPanel sections={item.sections} />
                    </>
                  )}
                </li>
              ))}
            </ul>
            <a
              className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none px-4 rounded-lg active:shadow-none disabled:bg-site-neutrals-200 disabled:text-site-neutrals-50 bg-site-neutrals-900 text-site-neutrals-0 hover:bg-site-neutrals-700 focus:shadow-site-primary-50 py-2.5 site-paragraph-m font-medium ml-8 mdL:ml-2"
              href={BAIRESDEV_URLS.scheduleCall}
            >
              <span>Schedule a Call</span>
            </a>
          </nav>
        </div>

        <button
          type="button"
          className="mdL:hidden block"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span>
            <MaskedIcon
              src={
                mobileOpen
                  ? BAIRESDEV_ASSETS.icons.close
                  : BAIRESDEV_ASSETS.icons.menu
              }
              className="w-6 h-6 bg-site-neutrals-900"
            />
          </span>
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
