import type { Profile } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function Footer({ profile }: { profile: Profile | null }) {
  const name = getMetafieldValue(profile?.metadata?.name) || 'My Portfolio'
  const github = getMetafieldValue(profile?.metadata?.github)
  const linkedin = getMetafieldValue(profile?.metadata?.linkedin)
  const twitter = getMetafieldValue(profile?.metadata?.twitter)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {year} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">
              LinkedIn
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">
              Twitter
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}