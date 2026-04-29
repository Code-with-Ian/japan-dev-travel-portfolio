import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type ProjectEntry = CollectionEntry<"projects">;
type TravelEntry = CollectionEntry<"travel">;

export async function GET() {
  const projects = (await getCollection("projects")) as ProjectEntry[];
  const travelEntries = (await getCollection("travel")) as TravelEntry[];

  const projectResults = projects.map((project: ProjectEntry) => ({
    titleKey: `content.projects.${project.id}.title`,
    descriptionKey: `content.projects.${project.id}.description`,
    typeKey: "search.types.project",
    href: `/projects/${project.id}`,
    tagsKeys: project.data.tags.map(
      (_: string, index: number) =>
        `content.projects.${project.id}.tags.${index}`
    ),
    fallbackTitle: project.data.title,
    fallbackDescription: project.data.description,
    fallbackType: "Project",
    fallbackTags: project.data.tags,
  }));

  const travelResults = travelEntries.map((entry: TravelEntry) => ({
    titleKey: `content.travel.${entry.id}.title`,
    descriptionKey: `content.travel.${entry.id}.description`,
    typeKey: "search.types.travel",
    href: `/travel/${entry.id}`,
    tagsKeys: (entry.data.tags ?? []).map(
      (_: string, index: number) => `content.travel.${entry.id}.tags.${index}`
    ),
    fallbackTitle: entry.data.title,
    fallbackDescription: entry.data.description,
    fallbackType: "Travel",
    fallbackTags: entry.data.tags ?? [],
  }));

  const staticPages = [
    {
      titleKey: "nav.home",
      descriptionKey: "home.hero.description",
      typeKey: "search.types.page",
      href: "/",
      tagsKeys: [],
      fallbackTitle: "Home",
      fallbackDescription: "Developer portfolio and travel stories from Japan.",
      fallbackType: "Page",
      fallbackTags: [],
    },
    {
      titleKey: "nav.experience",
      descriptionKey: "experience.description",
      typeKey: "search.types.page",
      href: "/experience",
      tagsKeys: [],
      fallbackTitle: "Experience",
      fallbackDescription:
        "Developer experience, skills, and professional journey in Japan.",
      fallbackType: "Page",
      fallbackTags: [],
    },
    {
      titleKey: "nav.contact",
      descriptionKey: "contact.description",
      typeKey: "search.types.page",
      href: "/contact",
      tagsKeys: [],
      fallbackTitle: "Contact",
      fallbackDescription: "Contact page for collaboration and opportunities.",
      fallbackType: "Page",
      fallbackTags: [],
    },
  ];

  return new Response(
    JSON.stringify([...staticPages, ...projectResults, ...travelResults]),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
