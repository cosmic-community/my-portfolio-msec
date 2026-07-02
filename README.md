# My Portfolio

![App Preview](https://imgix.cosmicjs.com/632a3380-75b0-11f1-af5d-39f47753a5ca-autopilot-photo-1500648767791-00dcc994a43e-1782953586296.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive developer portfolio built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcase your projects, skills, work experience, and connect with visitors — all managed dynamically through your Cosmic bucket.

## Features

- 🎨 **Stunning modern design** with smooth animations and gradient accents
- 📱 **Fully responsive** — looks great on mobile, tablet, and desktop
- 💻 **Projects showcase** with screenshots, tech stack, live demos, and GitHub links
- 🛠️ **Skills section** grouped by category with proficiency indicators
- 💼 **Work experience timeline** with company logos and roles
- 👤 **Dynamic profile** with bio, contact info, and social links
- ⚡ **Server Components** for fast, SEO-friendly rendering
- 🖼️ **Optimized images** via imgix
- 🌙 Clean typography with the Inter font

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a45b60bbc97f04ea218717a&clone_repository=6a45b722bc97f04ea21871c8)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: skills, projects, work-experience, profile. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing the `skills`, `projects`, `work-experience`, and `profile` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables (see below)
4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables

Create a `.env.local` file with the following variables (these are provided automatically when cloning through Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all projects with nested data
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single project by slug
const { object: project } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .depth(1)
```

## Cosmic CMS Integration

This application reads from four Cosmic object types:

- **skills** — `name`, `category`, `proficiency`, `icon`
- **projects** — `title`, `description`, `screenshots`, `tech_stack`, `live_url`, `github_url`, `featured`, `completion_date`
- **work-experience** — `company`, `role`, `company_logo`, `start_date`, `current_position`, `end_date`, `description`
- **profile** — `name`, `tagline`, `bio`, `profile_photo`, `email`, `location`, `github`, `linkedin`, `twitter`, `website`

All content is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) with the `depth` parameter to resolve connected objects. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (recommended)

1. Push your code to a Git repository
2. Import the project into [Vercel](https://vercel.com)
3. Add the environment variables in the Vercel dashboard
4. Deploy

### Netlify

1. Connect your repository to [Netlify](https://netlify.com)
2. Set the build command to `bun run build`
3. Add environment variables in the Netlify dashboard
4. Deploy

<!-- README_END -->