import type { NavMenuItem } from "./types";

export const NAV_ITEMS: NavMenuItem[] = [
  {
    label: "Services",
    href: "https://www.bairesdev.com/solutions/",
    hasDropdown: true,
    sections: [
      {
        variant: "intro",
        title: "Services",
        description: (
          <p>
            Get{" "}
            <a href="https://www.bairesdev.com/software-development-services/">
              software development services
            </a>
            , built around your needs:
          </p>
        ),
        quickLinks: [
          {
            label: "Staff Augmentation",
            href: "https://www.bairesdev.com/staff-augmentation/",
          },
          {
            label: "Dedicated Teams",
            href: "https://www.bairesdev.com/software-development-services/software-dedicated-team/",
          },
          {
            label: "Software Outsourcing",
            href: "https://www.bairesdev.com/software-development-services/software-outsourcing/",
          },
          {
            label: "AI Transformation",
            href: "https://www.bairesdev.com/ai-transformation/",
          },
        ],
        caseStudy: {
          imageSrc:
            "https://assets.bairesdev.com/image/upload/c_limit,w_120/fl_sanitize/v1/www/core/rolls_royce_default_6583f2d285.svg?_a=BAVAfVDW0",
          imageAlt: "Rolls Royce",
          imageClassName: "h-11 w-28 object-cover",
          content: (
            <p>
              We built an app for real-time nuclear plant monitoring.{" "}
              <a href="https://www.bairesdev.com/case-studies/rolls-royce/">
                Read case study.
              </a>
            </p>
          ),
        },
      },
      {
        variant: "links",
        overline: "Top Services",
        links: [
          { label: "AI Development", href: "https://www.bairesdev.com/technologies/ai/" },
          { label: "Android App Development", href: "https://www.bairesdev.com/solutions/android/" },
          { label: "Back-end Development", href: "https://www.bairesdev.com/solutions/back-end/" },
          { label: "Business Intelligence", href: "https://www.bairesdev.com/solutions/bi/" },
          { label: "CMS Development", href: "https://www.bairesdev.com/solutions/cms/" },
          { label: "Data Engineering", href: "https://www.bairesdev.com/solutions/database/" },
          { label: "Cryptocurrency & Blockchain", href: "https://www.bairesdev.com/technologies/cryptocurrency/" },
          { label: "eCommerce Development", href: "https://www.bairesdev.com/solutions/ecommerce/" },
          { label: "Front-end Development", href: "https://www.bairesdev.com/solutions/front-end/" },
          { label: "iOS App Development", href: "https://www.bairesdev.com/solutions/ios/" },
          { label: "Machine Learning", href: "https://www.bairesdev.com/solutions/machine-learning/" },
          { label: "Mobile App Development", href: "https://www.bairesdev.com/solutions/mobile-app/" },
          { label: "QA Testing & Automation", href: "https://www.bairesdev.com/solutions/qa/" },
          { label: "SaaS Development", href: "https://www.bairesdev.com/solutions/saas/" },
          { label: "UX/UI Design", href: "https://www.bairesdev.com/solutions/ui-ux/" },
          { label: "Web Development", href: "https://www.bairesdev.com/solutions/web-development/" },
        ],
        gridCols: 2,
        footerLink: { label: "All Services", href: "https://www.bairesdev.com/solutions/" },
        wrapperClassName: "lgS:pl-16 mdL:pr-0",
      },
      {
        variant: "links",
        overline: "Enterprise Focused",
        links: [
          { label: "Backup Solutions", href: "https://www.bairesdev.com/solutions/backup/" },
          { label: "Big Data", href: "https://www.bairesdev.com/solutions/big-data/" },
          { label: "Cloud Applications", href: "https://www.bairesdev.com/solutions/cloud-application/" },
          { label: "CRM Systems", href: "https://www.bairesdev.com/solutions/crm/" },
          { label: "Cybersecurity", href: "https://www.bairesdev.com/solutions/cybersecurity/" },
          { label: "DevOps", href: "https://www.bairesdev.com/solutions/devops/" },
          { label: "Digital Transformation", href: "https://www.bairesdev.com/solutions/digital-transformation/" },
          { label: "ERP Development", href: "https://www.bairesdev.com/solutions/erp/" },
        ],
      },
    ],
  },
  {
    label: "Technologies",
    href: "https://www.bairesdev.com/technologies/",
    hasDropdown: true,
    sections: [
      {
        variant: "intro",
        title: "Technologies",
        description: <p>Get experts in 100+ technologies. Cover any tech stack.</p>,
        quickLinks: [
          { label: "Hire Software Developers", href: "https://www.bairesdev.com/hire-software-developers/" },
          { label: "Top 1% Talent", href: "https://www.bairesdev.com/top-1-percent/" },
        ],
        caseStudy: {
          imageSrc:
            "https://assets.bairesdev.com/image/upload/c_limit,w_120/fl_sanitize/v1/www/static/clientlogos/urban-outfitters_fjfyfq.svg?_a=BAVAfVDW0",
          imageAlt: "Urban Outfitters",
          imageClassName: "h-11 w-28 object-cover",
          content: (
            <p>
              We optimized website performance, leading to 38% increase in net profits.{" "}
              <a href="https://www.bairesdev.com/case-studies/urban-outfitters/">
                Read case study.
              </a>
            </p>
          ),
        },
      },
      {
        variant: "links",
        links: [
          { label: ".NET", href: "https://www.bairesdev.com/technologies/net/" },
          { label: "AI", href: "https://www.bairesdev.com/technologies/ai/" },
          { label: "Angular", href: "https://www.bairesdev.com/technologies/angular/" },
          { label: "AWS", href: "https://www.bairesdev.com/technologies/aws/" },
          { label: "C#", href: "https://www.bairesdev.com/technologies/c-sharp/" },
          { label: "C++", href: "https://www.bairesdev.com/technologies/c-plus-plus/" },
          { label: "Django", href: "https://www.bairesdev.com/technologies/django/" },
          { label: "Golang", href: "https://www.bairesdev.com/technologies/go/" },
          { label: "Google Cloud", href: "https://www.bairesdev.com/technologies/google-cloud/" },
          { label: "Java", href: "https://www.bairesdev.com/technologies/java/" },
          { label: "JavaScript", href: "https://www.bairesdev.com/technologies/javascript/" },
          { label: "Kotlin", href: "https://www.bairesdev.com/technologies/kotlin/" },
          { label: "Machine Learning", href: "https://www.bairesdev.com/solutions/machine-learning/" },
          { label: "Microsoft Azure", href: "https://www.bairesdev.com/technologies/azure/" },
          { label: "Node.js", href: "https://www.bairesdev.com/technologies/nodejs/" },
          { label: "PHP", href: "https://www.bairesdev.com/technologies/php/" },
          { label: "Power BI", href: "https://www.bairesdev.com/technologies/power-bi/" },
          { label: "Python", href: "https://www.bairesdev.com/technologies/python/" },
          { label: "React", href: "https://www.bairesdev.com/technologies/react/" },
          { label: "Ruby", href: "https://www.bairesdev.com/technologies/ruby/" },
          { label: "Salesforce", href: "https://www.bairesdev.com/technologies/salesforce/" },
          { label: "TypeScript", href: "https://www.bairesdev.com/technologies/typescript/" },
          { label: "Vue.js", href: "https://www.bairesdev.com/technologies/vue/" },
          { label: "Xamarin", href: "https://www.bairesdev.com/technologies/xamarin/" },
        ],
        gridCols: 3,
        footerLink: { label: "All Technologies", href: "https://www.bairesdev.com/technologies/" },
        wrapperClassName: "lgS:pl-16 mdL:w-full lg:w-3/5 2xl:w-2/5",
      },
    ],
  },
  {
    label: "Industries",
    href: "https://www.bairesdev.com/industries/",
    hasDropdown: true,
    sections: [
      {
        variant: "intro",
        title: "Industries",
        description: (
          <p>
            We&apos;ve delivered 1250+ projects across 130+ sectors. Experience in your industry? We have it.
          </p>
        ),
        caseStudy: {
          imageSrc:
            "https://assets.bairesdev.com/image/upload/c_limit,w_120/fl_sanitize/v1/www/core/iqvia_default_6fe9d143af.svg?_a=BAVAfVDW0",
          imageAlt: "IQVIA",
          imageClassName: "h-11 w-28 object-cover",
          content: (
            <p>
              We scaled IQVIA&apos;s clinical research platforms with React.{" "}
              <a href="https://www.bairesdev.com/case-studies/iqvia/">Read case study.</a>
            </p>
          ),
        },
      },
      {
        variant: "links",
        links: [
          { label: "Agriculture", href: "https://www.bairesdev.com/industries/agriculture/" },
          { label: "Automotive", href: "https://www.bairesdev.com/industries/automotive/" },
          { label: "Aviation", href: "https://www.bairesdev.com/industries/aviation/" },
          { label: "Banking", href: "https://www.bairesdev.com/industries/banking/" },
          { label: "Construction", href: "https://www.bairesdev.com/industries/construction/" },
          { label: "Entertainment", href: "https://www.bairesdev.com/industries/entertainment/" },
          { label: "Finance", href: "https://www.bairesdev.com/industries/finance/" },
          { label: "Startups", href: "https://www.bairesdev.com/industries/startups/" },
          { label: "Healthcare", href: "https://www.bairesdev.com/industries/healthcare/" },
          { label: "Insurance", href: "https://www.bairesdev.com/industries/insurance/" },
          { label: "Martech", href: "https://www.bairesdev.com/industries/martech/" },
          { label: "Oil and Gas", href: "https://www.bairesdev.com/industries/oil-gas/" },
          { label: "Real Estate", href: "https://www.bairesdev.com/industries/real-estate/" },
          { label: "Retail", href: "https://www.bairesdev.com/industries/retail/" },
          { label: "Supply Chain", href: "https://www.bairesdev.com/industries/supply-chain/" },
          { label: "Telecommunications", href: "https://www.bairesdev.com/industries/telecom/" },
          { label: "Transportation and Logistics", href: "https://www.bairesdev.com/industries/transportation-logistics/" },
          { label: "Travel and Hospitality", href: "https://www.bairesdev.com/industries/travel-hospitality/" },
        ],
        gridCols: 3,
        footerLink: { label: "All Industries", href: "https://www.bairesdev.com/industries/" },
        wrapperClassName: "lgS:pl-16 mdL:w-full lg:w-3/5 2xl:w-2/5",
      },
    ],
  },
  {
    label: "About",
    href: "https://www.bairesdev.com/about/",
    hasDropdown: true,
    sections: [
      {
        variant: "intro",
        title: "About",
        description: (
          <p>
            Since 2009, we&apos;ve built software for companies of all types, from startups to Fortune 500 giants.
          </p>
        ),
        caseStudy: {
          imageSrc:
            "https://assets.bairesdev.com/image/upload/c_limit,w_100/dpr_auto/f_auto/q_auto/v1/www/staging/nacho_816ff45aee?_a=BAVAfVDW0",
          imageAlt: "Nacho De Marco",
          imageClassName: "h-16 w-16 rounded object-cover",
          content: (
            <p>
              Our CEO, speaking at the World Economic Forum at Davos 2025.{" "}
              <a href="https://press.bairesdev.com/bairesdev-joins-world-economic-forum/">Read more</a>
            </p>
          ),
        },
      },
      {
        variant: "links",
        overline: "Inside BairesDev",
        links: [
          { label: "Our Leadership Team", href: "https://www.bairesdev.com/about/leadership-team/" },
          { label: "Our Tech Talent", href: "https://www.bairesdev.com/top-1-percent/" },
          { label: "Press Releases", href: "https://www.bairesdev.com/press/" },
          { label: "Contact Us", href: "https://www.bairesdev.com/contact-us/" },
          { label: "FAQs", href: "https://www.bairesdev.com/faq/" },
        ],
        footerLink: { label: "Our Story", href: "https://www.bairesdev.com/about/" },
        wrapperClassName: "lgS:pl-16",
      },
      {
        variant: "links",
        overline: "Recognitions",
        links: [
          { label: "Awards", href: "https://www.bairesdev.com/awards-recognitions/" },
          { label: "Certifications", href: "https://www.bairesdev.com/about/certifications-and-partnerships/" },
        ],
      },
      {
        variant: "links",
        overline: "Careers",
        links: [
          { label: "Working at BairesDev", href: "https://www.bairesdev.com/join-us/" },
          { label: "Job Opportunities", href: "https://talent.bairesdev.com/" },
          { label: "Talent Referrals", href: "https://www.bairesdev.com/referrals-program/" },
          { label: "Our Circles Program", href: "https://circles.bairesdev.com/" },
          { label: "Company Culture", href: "https://www.bairesdev.com/company-culture/" },
        ],
      },
    ],
  },
  {
    label: "Our Work",
    href: "https://www.bairesdev.com/clients/",
  },
  {
    label: "Blog",
    href: "https://www.bairesdev.com/blog/",
  },
];
