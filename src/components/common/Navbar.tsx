import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, Stethoscope } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { ThemeToggle } from '@/components/common/ThemeToggle'

const SECTIONS = ['services', 'about', 'contact'] as const

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const links = SECTIONS.map((id) => ({ id, label: t(`nav.${id}`) }))

  return (
    <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <Stethoscope className="text-primary size-5" />
          <span>{t('nav.brand')}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Button key={link.id} variant="ghost" size="sm" asChild>
              <a href={`#${link.id}`}>{link.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button className="hidden md:inline-flex" size="sm" asChild>
            <a href="#contact">{t('nav.book')}</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{t('nav.brand')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="hover:bg-accent rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button className="mt-2" asChild>
                    <a href="#contact">{t('nav.book')}</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
