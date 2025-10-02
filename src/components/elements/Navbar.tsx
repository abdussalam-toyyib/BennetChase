"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"

import { Container } from "../shared/Container"
import logo from "../../assets/Bennett-Chase-Blue.png"
import { NavItem } from "../shared/NavItem"
import { Logo } from "../common/Logo"
import { BottonLink } from "../shared/BottonLink"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  // { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <header className="bg-[#FFFFFF] sticky z-[100] top-0 shadow-xl 
                   py-3 sm:py-3 md:py-4 lg:py-5">
      <Container>
        <nav className="w-full relative" ref={menuRef}>
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Logo src={logo} altText="logo" />

            {/* Desktop links */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <ul className="flex gap-x-6 text-base md:text-lg lg:text-xl text-heading-2">
                {navItems.map((item, key) => (
                  <NavItem href={item.href} text={item.name} key={key} />
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:min-w-max items-center">
              <BottonLink text="Book a Consultation" href="#cta" />
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          <div
            id="mobile-nav"
            className={`lg:hidden absolute left-0 top-full w-full bg-white border-t border-box-border 
                        transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
                        ${open ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <ul className="px-6 pt-6 pb-4 flex flex-col gap-y-4 text-base sm:text-lg text-heading-2">
              {navItems.map((item, key) => (
                <li key={key} onClick={() => setOpen(false)}>
                  <NavItem href={item.href} text={item.name} />
                </li>
              ))}
            </ul>
            <div className="px-4 pb-6" onClick={() => setOpen(false)}>
              <BottonLink text="Book a Consultation" href="#cta" />
            </div>
          </div>
        </nav>
      </Container>
    </header>

  )
}
