import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden flex justify-center bg-site-neutrals-0 mdS:bg-site-neutrals-50">
      <div className="w-full grid mdS:grid-cols-[140px_1fr] mdS:pt-[3.75rem] lgS:grid-cols-[142px_752px_1fr] lgS:pt-0 lgS:max-w-7xl lgS:after:absolute lgS:after:inset-0 lgS:after:left-[calc(50%+630px)] lgS:after:bg-[#d9dcdf] lgS:after:content-['']">

        {/* Logo */}
        <div className="px-10 py-6 mdS:py-0 md:row-[1] md:float-left lgS:pt-16 lgS:row-span-3 lgS:col-start-1 lgS:row-start-1 mdS:bg-site-neutrals-0">
          <img
            alt="BairesDev Logo"
            loading="lazy"
            width="60"
            height="40"
            decoding="async"
            style={{ color: 'transparent' }}
            src="https://assets.bairesdev.com//image/upload/c_limit,w_60/fl_sanitize/v1/www/static/bairesdev-logo-footer_wbvcp2.svg?_a=BAVAfVDW0"
          />
        </div>

        {/* Navigation Links */}
        <section className="grid w-full grid-cols-1 px-10 mdS:grid-cols-3 mdS:pl-0 md:px-0 md:gap-4 md:grid-cols-[1fr_1fr_0.8fr] md:row-[1] md:col-span-2 mdL:col-span-3 lgS:row-span-3 lgS:pt-16 lgS:row-start-1 lgS:col-start-2 lgS:col-span-1 mdS:bg-site-neutrals-0">

          {/* Discover BairesDev */}
          <div className="mb-8 mdS:max-w-[12.25rem]">
            <ul>
              <li className="site-paragraph-xl font-bold mb-4 lg:mb-6">
                <strong>Discover BairesDev<span className="text-site-primary-600">.</span></strong>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/about/">About Us</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/methodologies/">Methodologies</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/technologies/">Technologies</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/about/certifications-and-partnerships/">Certifications</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/software-development-services/">Software Development Services</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/solutions/">Software Development Solutions</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/software-development-services/software-dedicated-team/">Dedicated Software Development Teams</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/staff-augmentation/">Staff Augmentation</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/software-development-services/software-outsourcing/">Software Development Outsourcing</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/diversity-inclusion/">Diversity</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/csr/">Social Responsibility</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://applicants.bairesdev.com/files/bairesdev-advisory-program.pdf?lang=pt" rel="nofollow">Senior Advisor Program</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-8 mdS:max-w-[12.25rem]">
            <ul>
              <li className="site-paragraph-xl font-bold mb-4 lg:mb-6">
                <strong>Resources<span className="text-site-primary-600">.</span></strong>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/clients/">Case Studies</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/resources/artificial-intelligence/">AI Learning Hub</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/blog/">Blog</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/press/">Press</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/industries/">Industries Insights</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/tech-resource-center/">Technology Resource Center</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/referral-partners/">Client Referral Program</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/fellows/">Fellows Program</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/partners/aws">Partners Program</a>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div className="mb-8 mdS:max-w-[12.25rem]">
            <ul>
              <li className="site-paragraph-xl font-bold mb-4 lg:mb-6">
                <a href="https://www.bairesdev.com/join-us/">Careers<span className="text-site-primary-600">.</span></a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://talent.bairesdev.com/">Job Opportunities</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/referrals-program/">Talent Referrals</a>
              </li>
              <li className="site-paragraph-s mb-3 text-site-neutrals-900 hover:underline">
                <a href="https://www.bairesdev.com/careers/associate-program/">Associate Program</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="w-full bg-site-neutrals-50 px-10 row-[5] mdS:row-start-4 mdS:col-span-2 mdL:p-10 mdL:col-span-3 lgS:row-start-1 lgS:pb-0 lgS:pt-16 lgS:pl-7 lg:pl-10 lgS:pr-0 lgS:col-span-1">
          <p className="site-paragraph-xl font-bold mb-6">
            Get in touch<span className="text-site-primary-600">.</span>
          </p>

          <div className="float-left grid grid-cols-[auto,auto] gap-x-2 gap-y-5 mdS:[&_a:first-child]:col-start-2 [&_a:last-of-type]:col-start-1 [&_a:last-of-type]:row-start-1">
            <a
              rel="noreferrer"
              target="_blank"
              className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none px-4 rounded-lg active:shadow-none disabled:bg-site-neutrals-200 disabled:text-site-neutrals-50 bg-site-primary-600 hover:bg-site-primary-700 hover:text-site-neutrals-0 active:bg-site-primary-800 active:text-site-neutrals-0 text-site-neutrals-0 focus:text-site-neutrals-0 focus:shadow-site-primary-50 py-3 site-paragraph-xl font-medium col-span-2 mdS:col-span-1 h-11"
              href="https://www.bairesdev.com/start/basic-details/"
            >
              <span className="">Schedule a Call</span>
              <span className="">
                <svg className="transition-colors duration-300 [&:not(svg)]:bg-current" width="20" height="20" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4819 0.159394C10.4256 0.211163 10.3805 0.272915 10.3495 0.341121C10.3184 0.409326 10.3018 0.482647 10.3008 0.556893C10.2997 0.631137 10.3142 0.70485 10.3433 0.773819C10.3724 0.842788 10.4157 0.90566 10.4706 0.95884L13.4723 3.79243L1.11405 3.79243C1.03411 3.79065 0.954588 3.80398 0.880176 3.83163C0.805763 3.85928 0.737958 3.9007 0.680747 3.95345C0.623536 4.0062 0.578075 4.06922 0.547036 4.1388C0.515997 4.20838 0.500008 4.28312 0.500008 4.35861C0.500008 4.43411 0.515997 4.50885 0.547036 4.57843C0.578075 4.64801 0.623536 4.71103 0.680747 4.76378C0.737958 4.81653 0.805763 4.85795 0.880175 4.8856C0.954588 4.91325 1.03411 4.92658 1.11405 4.9248L13.4947 4.9248L10.4669 7.77955L10.4555 7.79029C10.4006 7.84349 10.3573 7.90638 10.3281 7.97537C10.299 8.04436 10.2845 8.1181 10.2855 8.19238C10.2865 8.26666 10.303 8.34002 10.334 8.40828C10.3651 8.47654 10.41 8.53836 10.4664 8.59021C10.5227 8.64206 10.5894 8.68292 10.6624 8.71047C10.7355 8.73801 10.8136 8.7517 10.8923 8.75075C10.971 8.74979 11.0487 8.73422 11.121 8.70491C11.1933 8.67561 11.2588 8.63314 11.3137 8.57995L15.3382 4.7795C15.4505 4.67347 15.5138 4.52986 15.5145 4.37994L15.5145 4.35498C15.5139 4.20495 15.4506 4.06121 15.3382 3.9551L11.3174 0.162553C11.206 0.0589544 11.0562 0.000616199 10.8998 2.58732e-05C10.7435 -0.000564453 10.5932 0.0566388 10.4809 0.159394L10.4819 0.159394Z"></path>
                </svg>
              </span>
            </a>

            <a
              rel="noreferrer"
              className="w-fit flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none px-4 border-2 rounded-lg box-border bg-transparent text-site-neutrals-900 active:shadow-none hover:text-site-neutrals-0 disabled:bg-site-neutrals-200 disabled:border-site-neutrals-200 disabled:text-site-neutrals-50 border-current hover:bg-site-neutrals-900 hover:border-site-neutrals-900 focus:shadow-site-primary-50 py-3 site-paragraph-xl font-medium col-span-2 mdS:col-span-1 h-11"
              href="https://www.bairesdev.com/contact-us/"
            >
              <span className="">Contact Us</span>
            </a>

            <div className="flex items-center text-base col-span-2 transition-all hover:text-primary-600">
              <span className="">
                <div className="w-4 h-4 mr-2 bg-site-neutrals-900" style={{
                  mask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/Call.svg)",
                  WebkitMask: "url(https://assets.bairesdev.com/image/upload/v1/www/icons/Call.svg)"
                }}></div>
              </span>
              <a href="tel:+14084782739">+1 (408) 478-2739</a>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-site-neutrals-50 p-10 pb-8 w-full mdS:row-start-3 mdS:col-span-2 mdL:col-span-1 mdL:row-start-4 mdL:w-[50vw] lgS:row-start-2 lgS:col-span-1 lgS:py-14 lgS:pl-7 lgS:w-full lg:py-11 lg:pl-10 lg:pr-0">
          <p className="font-bold max-w-sm site-paragraph-m mb-4">
            Get insights from the experts on building and scaling technology teams.
          </p>

          <div className="max-w-xl items-center justify-center">
            <div className="mx-auto mt-6 flex-col items-center justify-center text-center text-base hidden">
              <div className="items-center justify-center text-center">
                <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <br />
              <span className="text-white">Sending information...</span>
            </div>

            <div className="">
              <div></div>
              <form id="footer-subscription-form" className="grid float-left gap-y-3 mdS:gap-x-3 mdS:gap-y-2 mdS:grid-cols-2 md:float-none md:grid-cols-2 md:gap-x-4">
                <div>
                  <div className="flex flex-col flex-wrap gap-1 relative 2xl:!flex-row [&>label]:w-full">
                    <label htmlFor="email-input" className="flex flex-col gap-1">
                      <div id="label-top-email" className="label text-site-neutrals-600 site-paragraph-m">
                        Your e-mail address
                      </div>
                      <div className="[&_input]:w-full group relative flex outline outline-1 items-center rounded-[4px] flex-nowrap outline-offset-[-1px] cursor-default outline-site-neutrals-100 hover:outline-site-neutrals-400 focus-within:outline-site-neutrals-600 focus-within:hover:outline-site-neutrals-600 focus-within:!shadow-site-primary-50 [&:not(:focus-within)]:outline-site-neutrals-100 [&:not(:focus-within)]:outline-1 focus-within:outline-1 focus-within:-outline-offset-1 focus-within:shadow-ring gap-2 px-2 py-2 [&_input]:site-paragraph-m [&_textarea]:site-paragraph-m text-site-neutrals-900 bg-white [&_input]:bg-white [&_input]:placeholder:text-site-neutrals-400 [&_textarea]:bg-white [&_textarea]:placeholder:text-site-neutrals-400">
                        <div className="flex flex-1 flex-col flex-wrap leading-5">
                          <input
                            className="border-none focus:outline-none"
                            type="email"
                            aria-label="email"
                            id="email-input"
                            maxLength={140}
                            placeholder="name@email.com"
                            name="email"
                            value=""
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="relative row-[3] md:col-span-full md:row-[2]">
                  <fieldset className="flex flex-wrap">
                    <legend className="hidden">Accept</legend>
                    <input
                      id="terms-checkbox"
                      type="checkbox"
                      className="opacity-0 w-0 h-0 [&:checked~label>div_svg]:visible [&:checked~label>div]:bg-site-neutrals-900 [&:checked~label>div]:border-site-neutrals-900"
                      name="understoodTerms"
                      value=""
                    />
                    <label htmlFor="terms-checkbox" className="flex items-center gap-3 cursor-pointer">
                      <div className="flex items-center justify-center w-[1.125rem] h-[1.125rem] rounded-sm border-2 border-solid border-site-neutrals-700 hover:ring hover:ring-offset-2 hover:ring-site-primary-50 hover:ring-offset-site-primary-50">
                        <span className="">
                          <svg className="fill-white stroke-white invisible stroke-[0.438rem] p-[0.125rem] w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" xmlSpace="preserve">
                            <path transform="scale(0.26) translate(1, 4.5)" d="M34.4,72c-1.2,0-2.3-0.4-3.2-1.3L11.3,50.8c-1.8-1.8-1.8-4.6,0-6.4c1.8-1.8,4.6-1.8,6.4,0l16.8,16.7 l39.9-39.8c1.8-1.8,4.6-1.8,6.4,0c1.8,1.8,1.8,4.6,0,6.4l-43.1,43C36.7,71.6,35.6,72,34.4,72z"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-site-neutrals-700 text-[1.05rem] leading-6 font-medium">
                        <span className="site-paragraph-xs">
                          By subscribing I accept the <a href="https://www.bairesdev.com/privacy-policy/" target="_blank" className="terms-link underline" rel="noreferrer noopener">Privacy Policy</a>.
                        </span>
                      </span>
                    </label>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 disabled:pointer-events-none [&_svg]:fill-current outline-none px-4 border-2 rounded-lg box-border bg-transparent text-site-neutrals-900 active:shadow-none hover:text-site-neutrals-0 disabled:bg-site-neutrals-200 disabled:border-site-neutrals-200 disabled:text-site-neutrals-50 border-current hover:bg-site-neutrals-900 hover:border-site-neutrals-900 focus:shadow-site-primary-50 py-2.5 site-paragraph-m font-medium h-11 w-[140px] xl:ml-2 site-paragraph-s mdS:mt-6"
                >
                  <span className="">Subscribe</span>
                  <span className="">
                    <svg className="transition-colors duration-300 [&:not(svg)]:bg-current" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.71429 0C1.26035 0.00232382 0.825659 0.183682 0.50467 0.50467C0.183682 0.825659 0.00232382 1.26035 0 1.71429L0 9.33333C0.00241234 9.78724 0.183799 10.2219 0.504768 10.5428C0.825738 10.8638 1.26037 11.0452 1.71429 11.0476H14.2857C14.7396 11.0452 15.1743 10.8638 15.4952 10.5428C15.8162 10.2219 15.9976 9.78724 16 9.33333V1.71429C15.9976 1.26037 15.8162 0.825738 15.4952 0.504768C15.1743 0.183799 14.7396 0.00241234 14.2857 0L1.71429 0ZM1.83912 1.14286H14.1667L8.35034 6.33333C8.12857 6.53129 7.88231 6.53163 7.65986 6.33333L1.83912 1.14252V1.14286ZM1.14286 2.05374L5.05952 5.54762L1.14286 9.30952V2.05374ZM14.8571 2.05374V9.30374L10.9524 5.54184L14.8571 2.05374ZM10.0952 6.30952L13.8276 9.90442H2.17279L5.91837 6.31564L6.90034 7.19047C7.20627 7.4598 7.59989 7.60838 8.00748 7.60838C8.41508 7.60838 8.80869 7.4598 9.11463 7.19047L10.0969 6.30952H10.0952Z"></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-site-neutrals-50 p-10 w-full mdS:row-start-5 mdS:col-span-2 md:px-10 md:pb-10 md:pt-0 mdL:col-span-4 lgS:row-start-3 lgS:row-span-2 lgS:col-span-1 lgS:pl-7 lg:pl-10">
          <p className="site-paragraph-xl mb-4 font-bold">
            Follow us<span className="text-site-primary-600">.</span>
          </p>
          <ul className="flex gap-4">
            <li className="text-white">
              <a
                aria-label="Linkedin"
                href="https://www.linkedin.com/company/bairesdev/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center transition-all duration-500 [&_svg]:fill-site-neutrals-700 [&:hover_svg]:fill-site-primary-600"
              >
                <svg className="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4506 20.4496H16.8944V14.8805C16.8944 13.5525 16.8707 11.8429 15.0448 11.8429C13.1926 11.8429 12.9093 13.2899 12.9093 14.7838V20.4492H9.35307V8.99689H12.767V10.562H12.8148C13.1564 9.97782 13.6501 9.49726 14.2433 9.17149C14.8365 8.84572 15.5069 8.68693 16.1832 8.71203C19.7875 8.71203 20.452 11.0828 20.452 14.167L20.4506 20.4496ZM5.34054 7.43144C4.93238 7.43151 4.53335 7.31055 4.19394 7.08385C3.85453 6.85715 3.58998 6.53489 3.43372 6.15783C3.27745 5.78077 3.2365 5.36584 3.31606 4.96551C3.39561 4.56517 3.5921 4.19743 3.88066 3.90876C4.16922 3.6201 4.5369 3.42348 4.93721 3.34378C5.33751 3.26408 5.75245 3.30488 6.12956 3.46101C6.50668 3.61713 6.82903 3.88158 7.05585 4.22091C7.28268 4.56025 7.40379 4.95922 7.40386 5.36738C7.40391 5.63839 7.35057 5.90675 7.2469 6.15715C7.14324 6.40754 6.99128 6.63507 6.79969 6.82674C6.60809 7.0184 6.3806 7.17045 6.13024 7.27421C5.87988 7.37796 5.61154 7.43139 5.34054 7.43144ZM7.11862 20.4496H3.55875V8.99689H7.11862V20.4496ZM22.2235 0.00163516H1.77178C1.30759 -0.00360329 0.860279 0.175663 0.52819 0.500042C0.196101 0.824421 0.00639767 1.26737 0.000732422 1.73156V22.2681C0.00620377 22.7325 0.195796 23.1758 0.527874 23.5005C0.859951 23.8252 1.30736 24.0048 1.77178 23.9999H22.2235C22.6888 24.0057 23.1375 23.8266 23.4708 23.5019C23.8042 23.1772 23.9951 22.7334 24.0015 22.2681V1.73008C23.9949 1.26497 23.8039 0.821515 23.4705 0.497144C23.1371 0.172773 22.6886 -0.00598143 22.2235 0.000152822"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/bairesdev/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center transition-all duration-500 [&_svg]:fill-site-neutrals-700 [&:hover_svg]:fill-site-primary-600"
              >
                <svg className="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.74906V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9897 24 12Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label="X"
                href="https://x.com/bairesdev/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center transition-all duration-500 [&_svg]:fill-site-neutrals-700 [&:hover_svg]:fill-site-primary-600"
              >
                <svg className="h-4 w-4 lg:h-6 lg:w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1125_12246)">
                    <path d="M22.6643 0H1.33574C0.598033 0 0 0.598033 0 1.33574V22.6643C0 23.402 0.598033 24 1.33574 24H22.6643C23.402 24 24 23.402 24 22.6643V1.33574C24 0.598033 23.402 0 22.6643 0Z"></path>
                    <path d="M18.7018 5.10938H16.4284L4.78125 18.8901H7.05473L18.7018 5.10938Z" fill="white"></path>
                    <path d="M9.14023 5.10938H4.4375L14.8703 18.8901H19.5727L9.14023 5.10938Z" fill="white"></path>
                    <path d="M8.44705 6.34375H7.22399C7.16187 6.34375 7.12629 6.41492 7.16374 6.46456L15.4791 17.5042C15.4935 17.5232 15.5157 17.5342 15.5394 17.5342H16.7624C16.8246 17.5342 16.8601 17.463 16.8227 17.4133L8.50729 6.37372C8.49293 6.35468 8.47077 6.34375 8.44705 6.34375Z" strokeWidth="0.0312163" strokeMiterlimit="10"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1125_12246">
                      <rect width="24" height="24"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/bairesdev/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center transition-all duration-500 [&_svg]:fill-site-neutrals-700 [&:hover_svg]:fill-site-primary-600"
              >
                <svg className="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.02984 0.083057C5.75304 0.143297 4.88088 0.347777 4.11888 0.646337C3.33 0.953777 2.66136 1.3661 1.99608 2.03402C1.33008 2.70242 0.921121 3.37226 0.615841 4.16186C0.320401 4.92578 0.120001 5.79842 0.0638414 7.07594C0.00768144 8.3561 -0.00503856 8.76434 0.00120144 12.0231C0.00744144 15.2813 0.0218414 15.6903 0.0828014 16.9707C0.143761 18.2472 0.347521 19.1189 0.646081 19.8814C0.954001 20.6703 1.36584 21.3387 2.034 22.0042C2.70192 22.6697 3.37224 23.0784 4.16232 23.3839C4.92552 23.6791 5.7984 23.88 7.07568 23.9359C8.3556 23.9923 8.76432 24.0048 12.0221 23.9986C15.2813 23.9923 15.69 23.9779 16.9699 23.9172C18.2467 23.8563 19.1179 23.6518 19.8809 23.3539C20.6698 23.0453 21.3384 22.6342 22.0037 21.966C22.669 21.2981 23.0779 20.6278 23.3832 19.8377C23.6786 19.0745 23.8798 18.2016 23.9352 16.9251C23.9911 15.6444 24.0043 15.2352 23.9981 11.9772C23.9918 8.71874 23.9772 8.3105 23.9165 7.03082C23.8558 5.7533 23.6513 4.88186 23.3532 4.11914C23.0448 3.33026 22.6334 2.66234 21.9655 1.99634C21.2976 1.33106 20.6273 0.921377 19.8372 0.616817C19.0735 0.321377 18.2011 0.120017 16.9238 0.064817C15.6442 0.00769698 15.2357 -0.00478302 11.9767 0.00145698C8.71848 0.00769698 8.31 0.021617 7.03008 0.083057M7.17 21.7762C6 21.7253 5.36472 21.5309 4.94136 21.3679C4.38072 21.151 3.98064 20.8908 3.55944 20.473C3.1392 20.0535 2.87832 19.6546 2.65944 19.0951C2.49504 18.6718 2.29704 18.0372 2.24232 16.8672C2.1828 15.6024 2.16912 15.223 2.16336 12.0187C2.15712 8.81546 2.16888 8.43578 2.22408 7.17002C2.27424 6.00098 2.46984 5.36474 2.63232 4.94186C2.84928 4.3805 3.10848 3.98114 3.52728 3.55994C3.9468 3.13898 4.34568 2.87882 4.9056 2.65994C5.32872 2.49458 5.96304 2.29826 7.13256 2.24282C8.39808 2.18282 8.77728 2.1701 11.9806 2.16386C15.1846 2.15762 15.5642 2.1689 16.83 2.22458C17.999 2.27546 18.6353 2.46914 19.0579 2.63282C19.619 2.84978 20.0191 3.10826 20.4398 3.52778C20.8606 3.9473 21.1214 4.34546 21.3403 4.90658C21.5054 5.3285 21.702 5.96378 21.7572 7.13282C21.8174 8.39834 21.8311 8.77778 21.8369 11.9813C21.8431 15.1855 21.8314 15.565 21.7759 16.83C21.725 18 21.5309 18.6355 21.3677 19.0594C21.1507 19.6195 20.8913 20.0196 20.4722 20.4408C20.0532 20.8603 19.6543 21.1219 19.0939 21.3408C18.6718 21.5057 18.0365 21.7025 16.8677 21.7579C15.6022 21.8175 15.223 21.8311 12.0185 21.8369C8.8152 21.8431 8.436 21.8311 7.17024 21.7762M16.9524 5.58554C16.9538 6.38018 17.6002 7.02362 18.3948 7.02218C19.1899 7.02074 19.8334 6.3749 19.8322 5.58002C19.8305 4.78538 19.1844 4.14146 18.3893 4.1429C17.5942 4.14434 16.9507 4.79066 16.9522 5.5853M5.83824 12.0118C5.84472 15.415 8.6088 18.1678 12.0113 18.1611C15.414 18.1543 18.1682 15.3912 18.1618 11.988C18.155 8.58602 15.3907 5.83178 11.9875 5.83826C8.58504 5.84498 5.83152 8.6093 5.83824 12.0118ZM7.99968 12.0075C7.99584 9.79874 9.7836 8.00426 11.9918 8.00042C14.2006 7.9961 15.9953 9.78314 15.9996 11.9923C16.0039 14.2015 14.2162 15.9955 12.007 15.9999C9.79848 16.0042 8.00376 14.2169 7.99968 12.0077"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label="Youtube"
                href="https://www.youtube.com/BairesDevSolutions/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center transition-all duration-500 [&_svg]:fill-site-neutrals-700 [&:hover_svg]:fill-site-primary-600"
              >
                <svg className="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5002 6.62364C23.2236 5.59039 22.4116 4.7784 21.3783 4.50181C19.5054 4 12 4 12 4C12 4 4.49457 4 2.62364 4.50181C1.59039 4.7784 0.7784 5.59039 0.501811 6.62364C0 8.49457 0 12.4004 0 12.4004C0 12.4004 0 16.3062 0.501811 18.1771C0.7784 19.2104 1.59039 20.0224 2.62364 20.299C4.49457 20.8008 12 20.8008 12 20.8008C12 20.8008 19.5054 20.8008 21.3764 20.299C22.4096 20.0224 23.2216 19.2104 23.4982 18.1771C24 16.3062 24 12.4004 24 12.4004C24 12.4004 24 8.49457 23.4982 6.62364H23.5002ZM9.5996 16V8.80079L15.8347 12.4004L9.5996 16Z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </section>

        <div className="hidden"></div>

        {/* Footer Bottom */}
        <section className="flex flex-col row-start-3 p-10 pt-2 mdS:row-start-2 mdS:col-start-2 mdS:p-0 md:px-0 md:row-start-2 md:col-start-2 md:col-span-2 mdL:row-start-2 mdL:col-start-2 mdL:col-span-2 lgS:row-start-4 lgS:col-start-2 lgS:col-span-1 mdS:bg-site-neutrals-0">
          <div className="text-xs mb-6">
            <a href="https://www.bairesdev.com/privacy-policy/" target="_blank" rel="noreferrer" className="hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="https://www.bairesdev.com/terms-conditions/" target="_blank" rel="noreferrer" className="hover:underline">Terms of Service</a>
            <span className="mx-2">|</span>
            <a href="https://www.bairesdev.com/do-not-sell-my-personal-information/" target="_blank" rel="noreferrer" className="hover:underline">Do Not Sell My Personal Information</a>
            <span className="mx-2 hidden">|</span>
          </div>
          <div className="mb-8 md:mb-6 lgS:mb-16 site-paragraph-xs">
            <p>BairesDev 2009 - 2026. All rights reserved.</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;