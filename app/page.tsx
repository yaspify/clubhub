"use client"

import { clubs } from "@/lib/data"
import ClubCard from "@/components/club-card"
import SearchBar from "@/components/search-bar"

export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-xl mb-4">Discover Your Next Favorite Club</h1>
        <p className="text-gray-700 mb-6">
          Explore a variety of clubs and communities tailored to your interests. Whether you&apos;re into adventure, books, technology, fitness, or art, there&apos;s something here for everyone!
        </p>
        <SearchBar />
        {clubs.map((club) => (
          <div key={club.slug}>
            <ClubCard {...club} />
          </div>
        ))}
      </div>
    </>
  )
}