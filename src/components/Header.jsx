'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-4">
              <a
                href="https://www.producthunt.com/posts/quakesense?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-quakesense"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=485460&theme=neutral"
                />
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
