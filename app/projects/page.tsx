import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Projects | My Portfolio',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Projects</h1>
        <p className="mt-2 text-gray-500">A collection of things I've built.</p>
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects to show yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}