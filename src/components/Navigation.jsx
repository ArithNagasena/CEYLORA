import { useState } from 'react'
import { Globe, List, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-50 mx-3 my-3 flex w-[calc(100%-1.5rem)] items-center justify-between rounded-full bg-[#171717]/95 px-4 py-2.5 text-white shadow-sm backdrop-blur-md sm:px-5">
      <div className="flex items-center gap-4 md:gap-6">
        <a href="/" className="text-[1.65rem] font-bold leading-none tracking-[-0.07em]">
          Horizone
        </a>
        <div className="hidden items-center md:flex">
          <a href="/" className="text-sm font-medium transition-colors hover:text-slate-300">
            Home
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <Button variant="ghost" size="sm" className="hidden h-9 rounded-full px-3 text-[0.7rem] md:inline-flex">
          <Globe className="mr-2 h-4 w-4" />
          EN
        </Button>

        <Button variant="ghost" size="sm" className="hidden h-9 rounded-full px-3 text-[0.7rem] md:inline-flex">
          <a href="/sign-in">Log In</a>
        </Button>

        <Button size="sm" className="hidden h-9 rounded-full bg-white px-4 text-[0.7rem] font-medium text-black hover:bg-gray-200 md:inline-flex">
          <a href="/sign-up">Sign Up</a>
        </Button>

        <div className="relative md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="relative z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </Button>

          {isMenuOpen && (
            <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-gray-800 bg-black px-3 py-2 shadow-lg">
              <div className="flex flex-col space-y-3 py-2">
                <a href="/" className="text-sm font-medium transition-colors hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <div className="my-1 h-px bg-white/20" />
                <Button variant="ghost" size="sm" className="h-8 justify-start rounded-full px-2">
                  <Globe className="mr-2 h-4 w-4" />
                  EN
                </Button>
                <a href="/sign-in" className="text-sm font-medium transition-colors hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </a>
                <Button size="sm" className="mt-2 w-full rounded-full bg-white text-black hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>
                  <a href="/sign-up">Sign Up</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation