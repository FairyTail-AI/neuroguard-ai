'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import {cn} from "@/lib/utils";

const links = [
  // { href: '/pricing', label: 'Pricing' },
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  // { href: '/login', label: 'Login' },
]

function DesktopNav({
  color = 'black',
}: {
  color?: 'white' | 'black'
}) {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex" color={color}>
          <Link
            href={href}
            className={cn(
              "flex items-center px-4 py-3 text-base font-medium bg-blend-multiply data-hover:bg-black/[2.5%]",
              color === 'white' && 'text-white',
              color === 'black' && 'text-black',
            )}
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6 text-white" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-white">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({
  banner,
  color = 'black',
}: {
  banner?: React.ReactNode,
  color?: 'white' | 'black'
}) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between" color={color}>
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3" color={color}>
              <Link href="/" title="Home" className="flex items-center gap-2">
                <Logo
                  className={cn(
                    "h-9",
                    color === 'white' && 'fill-white',
                    color === 'black' && 'fill-black',
                  )}
                />
                <p
                  className={cn(
                    'font-display font-medium text-xl',
                    color === 'white' && 'text-white',
                    color === 'black' && 'text-black',
                  )}
                >
                  NeuroGuard AI
                </p>
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav color={color} />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
