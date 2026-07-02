import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'
import type { Skill } from '@/types'

export const metadata = {
  title: 'Skills | My Portfolio',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  // Group skills by category
  const grouped: Record<string, Skill[]> = {}
  for (const skill of skills) {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    const existing = grouped[category]
    if (existing) {
      existing.push(skill)
    } else {
      grouped[category] = [skill]
    }
  }

  const categories = Object.keys(grouped)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Skills</h1>
        <p className="mt-2 text-gray-500">Technologies and tools I work with.</p>
      </div>

      {skills.length === 0 ? (
        <p className="text-gray-500">No skills to show yet.</p>
      ) : (
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = grouped[category]
            if (!categorySkills || categorySkills.length === 0) {
              return null
            }
            return (
              <div key={category}>
                <h2 className="text-xl font-semibold text-gray-900 mb-5">{category}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}