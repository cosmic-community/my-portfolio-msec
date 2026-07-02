import Link from 'next/link'
import type { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProjectCard({ project }: { project: Project }) {
  const title = getMetafieldValue(project.metadata?.title) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const techStack = getMetafieldValue(project.metadata?.tech_stack)
  const featured = project.metadata?.featured
  const screenshots = project.metadata?.screenshots
  const firstImage = screenshots && screenshots.length > 0 ? screenshots[0] : undefined

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        {firstImage ? (
          <img
            src={`${firstImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 8h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
          </div>
        )}
        {featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-brand-600 text-white rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>
        )}
        {techStack && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techStack.split(',').slice(0, 4).map((tech, i) => (
              <span key={i} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}