export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Ian",
  brand: "Code-With-Ian",
  role: "Software Developer | IoT & Robotics Enthusiast  | DX Evangelist",
  location: "Okinawa,Japan",
  email: "engrianbautista100496@gmail.com",
  github: "https://github.com/Code-with-Ian",
  linkedin: "https://www.linkedin.com/in/joshua-ian-bautista/",
  intro:
    "I’m a developer based in Okinawa, Japan, I would like to share my dev experiences and documenting my travels along the way. Hoping it will be helpful for other developers and travelers who are interested in Japan. Feel free to reach out if you want to connect or collaborate on projects!    ",
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
