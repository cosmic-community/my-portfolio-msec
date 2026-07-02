import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SkillCard({ skill }: { skill: Skill }) {
  const name = getMetafieldValue(skill.metadata?.name) || skill.title
  const icon = getMetafieldValue(skill.metadata?.icon)
  const proficiency = typeof skill.metadata?.proficiency === 'number' ? skill.metadata.proficiency : 0
  const clamped = Math.max(0, Math.min(100, proficiency))

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        {icon ? (
          <span className="text-2xl">{icon}</span>
        ) : (
          <span className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 font-semibold">
            {name.charAt(0)}
          </span>
        )}
        <span className="font-medium text-gray-900">{name}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-purple-500 rounded-full transition-all"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <p className="mt-1.5 text-right text-xs text-gray-400">{clamped}%</p>
    </div>
  )
}