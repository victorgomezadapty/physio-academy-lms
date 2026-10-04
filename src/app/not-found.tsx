import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center p-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#4F46E5]/20 border border-[#4F46E5]/30 mb-6">
          <span className="text-[#4F46E5] font-bold text-2xl">A</span>
        </div>
        <p className="text-[#4F46E5] text-6xl font-bold mb-4">404</p>
        <p className="text-white text-xl font-semibold mb-2">Page not found</p>
        <p className="text-white/40 text-sm mb-8">This page doesn&apos;t exist or you don&apos;t have access.</p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 bg-[#4F46E5] hover:bg-[#818CF8] text-[#1A1A2E] font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
