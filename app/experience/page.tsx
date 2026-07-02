import { getWorkExperience } from '@/lib/cosmic'
import ExperienceItem from '@/components/ExperienceItem'

export const metadata = {
  title: 'Experience | My Portfolio',
}

export default async function ExperiencePage() {
  const experience = await getWorkExperience()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Work Experience</h1>
        <p className="mt-2 text-gray-500">My professional journey.</p>
      </div>

      {experience.length === 0 ? (
        <p className="text-gray-500">No work experience to show yet.</p>
      ) : (
        <div>
          {experience.map((item) => (
            <ExperienceItem key={item.id} experience={item} />
          ))}
        </div>
      )}
    </div>
  )
}