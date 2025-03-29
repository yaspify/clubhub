"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { clubs } from "@/lib/data"
import { getClubBySlug } from "@/lib/data"
import { buttonVariants } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()

  const routeContentMap: Record<string, string> = {
    "/": "ClubHub",
  }

  const headerContent = pathname.startsWith("/club/")
    ? getClubBySlug(pathname.split("/club/")[1])?.name || "ClubHub"
    : routeContentMap[pathname] || "ClubHub"

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between p-4">
      <Link href="/" className="text-2xl font-bold">{headerContent}</Link>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>View all</Link>

    </header>
  )
}