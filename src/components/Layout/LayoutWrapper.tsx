import { ReactElement, useCallback } from 'react'
import Navbar from 'components/Navbar'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'

interface LayoutWrapperProps {
  children: ReactElement
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const router = useRouter()

  const year = new Date().getFullYear()

  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }

  const handleExitCompleteAnimatePresence = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }, [])

  return (
    <main className="flex flex-col bg-[#dee4e7] dark:bg-[#37474f] transition-colors duration-300">
      <div className="flex min-h-[56px]">
        <Navbar />
      </div>
      <div className="flex w-full max-w-[600px] p-4 m-auto relative">
        {children}
        <Analytics />
      </div>
      <div className="flex mt-auto justify-center">
        <div className="flex w-full max-w-[1200px] p-4 self-center justify-center">
          © {year} Henry Nguyen. All Rights Reserved.
        </div>
      </div>
    </main>
  )
}
