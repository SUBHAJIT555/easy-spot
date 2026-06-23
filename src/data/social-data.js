import { siteInfo } from "./contact-info";

const siteUrl = siteInfo.websiteUrl;

/** Update links when Easy Spot social profiles are live. */
const social_data = [
  {
    id: 1,
    link: siteUrl,
    icon: "fa-brands fa-facebook-f",
    title: `${siteInfo.companyName} on Facebook`,
  },
  {
    id: 2,
    link: siteUrl,
    icon: "fa-brands fa-twitter",
    title: `${siteInfo.companyName} on X`,
  },
  {
    id: 3,
    link: siteUrl,
    icon: "fa-brands fa-linkedin-in",
    title: `${siteInfo.companyName} on LinkedIn`,
  },
  {
    id: 4,
    link: siteUrl,
    icon: "fa-brands fa-instagram",
    title: `${siteInfo.companyName} on Instagram`,
  },
];

export default social_data;
