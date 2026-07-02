import type { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

function formatDate(date: string): string {
  if (!date) return ''
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function ExperienceItem({ experience }: { experience: WorkExperience }) {
  const company = getMetafieldValue(experience.metadata?.company) || experience.title
  const role = getMetafieldValue(experience.metadata?.role)
  const description = getMetafieldValue(experience.metadata?.description)
  const logo = experience.metadata?.company_logo
  const current = experience.metadata?.current_position
  const start = formatDate(getMetafieldValue(experience.metadata?.start_date))
  const end = current ? 'Present' : formatDate(getMetafieldValue(experience.metadata?.end_date))

  return (
    <div className="relative pl-8 pb-10 border-l-2 border-gray-100 last:pb-0">
      <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-500 ring-4 ring-white" />
      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <div className="flex items-start gap-4">
          {logo && (
            <img
              src={`${logo.imgix_url}?w=112&h=112&fit=crop&auto=format,compress`}
              alt={company}
              width={56}
              height={56}
              className="w-14 h-14 rounded-lg object-cover border border-gray-100 flex-shrink-0"
            />
          )}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900">{role}</h3>
              {current && (
                <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                  Current
                </span>
              )}
            </div>
            <p className="text-brand-600 font-medium">{company}</p>
            {(start || end) && (
              <p className="text-sm text-gray-400 mt-0.5">
                {start} {end && `— ${end}`}
              </p>
            )}
          </div>
        </div>
        {description && <p className="mt-4 text-sm text-gray-600 leading-relaxed">{description}</p>}
      </div>
    </div>
  )
}