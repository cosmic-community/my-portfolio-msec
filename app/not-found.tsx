import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-32 text-center">
      <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">This page could not be found.</p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
      >
        Back home
      </Link>
    </div>
  )
}