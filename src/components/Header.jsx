'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-4">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-base font-semibold">QuakeSense App</p>
          </div>
        </Container>
      </nav>
    </header>
  )
}
