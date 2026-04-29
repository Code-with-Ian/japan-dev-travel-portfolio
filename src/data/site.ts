export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Ian",
  brand: "Code-With-Ian",
  email: "engrianbautista100496@gmail.com",
  github: "https://github.com/Code-with-Ian",
  linkedin: "https://www.linkedin.com/in/joshua-ian-bautista/",
  seoTitle: "Code-With-Ian | Portfolio & Travel Stories",
  seoDescription:
    "A personal portfolio showcasing developer experience in Japan, selected projects, and travel stories.",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/Code-with-Ian",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joshua-ian-bautista/",
    },
  ] satisfies SocialLink[],
};
