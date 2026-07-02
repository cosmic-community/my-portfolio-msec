import Link from 'next/link'
import { getProfile, getProjects, getSkills, getMetafieldValue } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'

export default async function HomePage() {
  const [profile, projects, skills] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills(),
  ])

  const name = getMetafieldValue(profile?.metadata?.name) || 'Developer'
  const tagline = getMetafieldValue(profile?.metadata?.tagline)
  const bio = getMetafieldValue(profile?.metadata?.bio)
  const location = getMetafieldValue(profile?.metadata?.location)
  const photo = profile?.metadata?.profile_photo

  const featuredProjects = projects.filter((p) => p.metadata?.featured)
  const displayProjects = (featuredProjects.length > 0 ? featuredProjects : projects).slice(0, 3)
  const topSkills = skills.slice(0, 6)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="flex flex-col md:flex-row items-center gap-10 animate-fade-in">
            {photo && (
              <img
                src={`${photo.imgix_url}?w=320&h=320&fit=crop&auto=format,compress`}
                alt={name}
                width={160}
                height={160}
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl flex-shrink-0"
              />
            )}
            <div className="text-center md:text-left">
              <p className="text-brand-600 font-medium mb-2">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text mb-4">
                {name}
              </h1>
              {tagline && <p className="text-xl text-gray-600 mb-4">{tagline}</p>}
              {location && (
                <p className="text-sm text-gray-400 mb-6 flex items-center justify-center md:justify-start gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location}
                </p>
              )}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg font-medium hover:border-brand-300 hover:text-brand-600 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          {bio && (
            <p className="mt-12 max-w-2xl mx-auto md:mx-0 text-gray-600 leading-relaxed animate-slide-up">
              {bio}
            </p>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      {displayProjects.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Projects</h2>
            <Link href="/projects" className="text-brand-600 font-medium hover:underline text-sm">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Top Skills */}
      {topSkills.length > 0 && (
        <section className="bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Skills</h2>
              <Link href="/skills" className="text-brand-600 font-medium hover:underline text-sm">
                View all →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}