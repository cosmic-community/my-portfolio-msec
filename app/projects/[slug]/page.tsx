// app/projects/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, getMetafieldValue } from '@/lib/cosmic'

function formatDate(date: string): string {
  if (!date) return ''
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const title = getMetafieldValue(project.metadata?.title) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const techStack = getMetafieldValue(project.metadata?.tech_stack)
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)
  const completionDate = formatDate(getMetafieldValue(project.metadata?.completion_date))
  const screenshots = project.metadata?.screenshots ?? []

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/projects" className="text-brand-600 text-sm font-medium hover:underline inline-flex items-center gap-1 mb-8">
        ← Back to projects
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h1>
          {completionDate && <p className="mt-2 text-sm text-gray-400">Completed {completionDate}</p>}
        </div>
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {techStack && (
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.split(',').map((tech, i) => (
            <span key={i} className="px-3 py-1 text-sm bg-brand-50 text-brand-700 rounded-full">
              {tech.trim()}
            </span>
          ))}
        </div>
      )}

      {description && (
        <p className="text-gray-600 leading-relaxed text-lg mb-10">{description}</p>
      )}

      {screenshots.length > 0 && (
        <div className="space-y-6">
          {screenshots.map((shot, i) => (
            <img
              key={i}
              src={`${shot.imgix_url}?w=1600&h=900&fit=max&auto=format,compress`}
              alt={`${title} screenshot ${i + 1}`}
              width={800}
              height={450}
              className="w-full rounded-2xl border border-gray-100 shadow-sm"
            />
          ))}
        </div>
      )}
    </div>
  )
}