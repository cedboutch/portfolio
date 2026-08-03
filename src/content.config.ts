import { defineCollection } from 'astro:content'
import { file } from 'astro/loaders'
// Imported directly rather than via the deprecated `astro:content` re-export.
import { z } from 'zod'

/** A technology chip rendered next to a job or project. */
const techBadge = z.object({
  name: z.string(),
  /** devicon slug, resolved against src/assets/icons by src/lib/icons.ts */
  icon: z.string(),
  variant: z.string().default('original'),
})

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z.object({
    title: z.string(),
    language: z.string(),
    description: z.string(),
    techBadges: z.array(techBadge).default([]),
    /** Hex color driving the card's top border and language label. */
    accentColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    link: z.url().optional(),
    inProgress: z.boolean().default(false),
    /** Display order, ascending. */
    order: z.number(),
  }),
})

const experience = defineCollection({
  loader: file('src/content/experience.json'),
  schema: ({ image }) =>
    z.object({
      type: z.enum(['work', 'education']),
      /** Job title, or program name for education entries. */
      role: z.string(),
      /** Employer, or school for education entries. */
      place: z.string(),
      date: z.string(),
      details: z.array(z.string()).default([]),
      techBadges: z.array(techBadge).default([]),
      /** image() validates the path at build time and enables optimization. */
      logo: image(),
      /** Extra inset for logos with no built-in whitespace. */
      logoPadding: z.string().optional(),
      color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
      order: z.number(),
    }),
})

const tech = defineCollection({
  loader: file('src/content/tech.json'),
  schema: z.object({
    title: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
        variant: z.string().default('original'),
      })
    ),
    order: z.number(),
  }),
})

export const collections = { projects, experience, tech }
