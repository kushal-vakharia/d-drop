export const NavItems = [
  { title: "Features", link: "/features" },
  { title: "About", link: "/about" },
  // { title: 'Pricing', link: '/pricing' },
  // { title: 'Reviews', link: '/reviews' },
  { title: "FAQ", link: "/", isScrollToSectionId: "faq-section" },
];

export const NavMenuPracticeAreasItems = [
  { title: "Immigration Law", link: "/immigration-law" },
  { title: "Real State Law", link: "/real-state-law" },
  { title: "IP Law", link: "/ip-law" },
];

export const IconPrimaryColor = (theme) => ({
  color: theme.typography.landingBody1.color,
});
