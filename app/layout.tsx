import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'
import { getProfile, getMetafieldValue } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A developer portfolio showcasing projects, skills, and experience.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = await getProfile()
  const name = getMetafieldValue(profile?.metadata?.name) || 'My Portfolio'
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>"
        />
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6a45b60abc97f04ea2187178"></script>
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Navigation name={name} />
        <main className="flex-1">{children}</main>
        <Footer profile={profile} />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}