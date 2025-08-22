"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-primary/80 border-b border-white/10 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/velocloud-icon.png" width={36} height={36} alt="VeloCloud AI"/>
          <span className="font-semibold tracking-wide">VeloCloud AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => <Link key={n.href} href={n.href} className="text-white/90 hover:text-white">{n.label}</Link>)}
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Menu">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-3 space-y-3">
            {nav.map(n => <Link key={n.href} href={n.href} className="block" onClick={()=>setOpen(false)}>{n.label}</Link>)}
          </div>
        </div>
      )}
    </header>
  )
}
