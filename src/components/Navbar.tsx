'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative lg:px-0 flex justify-between items-center py-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="https://i.ibb.co/wF69LPkx/Property-1-Default.png"
          alt="Logo+brand"
          width={200}
          height={500}
        />
      </div>

      {/* Desktop (UNCHANGED VIEW) */}
      <div className="hidden lg:flex gap-12 items-center">
        <ul className="flex gap-12">
          <li className="cursor-pointer text-black hover:text-lime-300">
            <Link href="/">About us</Link>
          </li>
          <li className="cursor-pointer hover:text-lime-300 text-black">
            <Link href="/">Services</Link>
          </li>
          <li className="cursor-pointer hover:text-lime-300 text-black">
            <Link href="/">Use Cases</Link>
          </li>
          <li className="cursor-pointer hover:text-lime-300 text-black">
            <Link href="/">Pricing</Link>
          </li>
          <li className="cursor-pointer hover:text-lime-300 text-black">
            <Link href="/">Blog</Link>
          </li>
        </ul>

        <button className="border border-black text-black hover:text-lime-300 hover:bg-gray-900 px-8 py-3.5 rounded-lg cursor-pointer ">
          <Link href="/quote">Request a quote</Link>
        </button>
      </div>

      {/* Mobile + Tablet Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden"
        aria-label="Toggle Menu"
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile + Tablet Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col items-center gap-6 px-6 py-8">
            <li className="cursor-pointer hover:text-lime-300">
              <Link href="/">About us</Link>
            </li>
            <li className="cursor-pointer hover:text-lime-300">
              <Link href="/">Services</Link>
            </li>
            <li className="cursor-pointer hover:text-lime-300">
              <Link href="/">Use Cases</Link>
            </li>
            <li className="cursor-pointer hover:text-lime-300">
              <Link href="/">Pricing</Link>
            </li>
            <li className="cursor-pointer hover:text-lime-300">
              <Link href="/">Blog</Link>
            </li>

            <button className="border border-black text-black hover:text-lime-300 hover:bg-gray-900 px-8 py-3.5 rounded-lg">
              <Link href="/quote">Request a quote</Link>
            </button>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
