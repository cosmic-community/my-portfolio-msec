import { getProfile, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Contact | My Portfolio',
}

export default async function ContactPage() {
  const profile = await getProfile()

  const name = getMetafieldValue(profile?.metadata?.name) || 'Me'
  const email = getMetafieldValue(profile?.metadata?.email)
  const location = getMetafieldValue(profile?.metadata?.location)
  const github = getMetafieldValue(profile?.metadata?.github)
  const linkedin = getMetafieldValue(profile?.metadata?.linkedin)
  const twitter = getMetafieldValue(profile?.metadata?.twitter)
  const website = getMetafieldValue(profile?.metadata?.website)

  const socials = [
    { label: 'GitHub', url: github },
    { label: 'LinkedIn', url: linkedin },
    { label: 'Twitter', url: twitter },
    { label: 'Website', url: website },
  ].filter((s) => s.url)

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">Get in Touch</h1>
        <p className="text-gray-500">
          I'd love to hear from you. Reach out through any of the channels below.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-brand-50 transition-colors group"
          >
            <span className="w-11 h-11 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">{email}</p>
            </div>
          </a>
        )}

        {location && (
          <div className="flex items-center gap-4 p-4">
            <span className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p className="text-xs text-gray-400">Location</p>
              <p className="font-medium text-gray-900">{location}</p>
            </div>
          </div>
        )}

        {socials.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3">Find me online</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="mt-8 text-center text-sm text-gray-400">
        Thanks for visiting, from {name}.
      </p>
    </div>
  )
}