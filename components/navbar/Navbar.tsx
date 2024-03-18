import Link from "next/link";
import React from 'react'


export default function Nav() {
  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-l-0 boder-b-gray-600" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="/" className="-m1.5 p-1.5">
          Next Js Auth
        </a>
      </div>
      <Link href="/dashboard">Dashboard</Link>


      </nav>
    </header>
  )
}