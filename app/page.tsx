"use client"

import { clubs } from "@/lib/data"
import ClubCard from "@/components/club-card"

export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-xl mb-4">Discover Your Next Favorite Club</h1>
        <p className="text-gray-700 mb-6">
          Explore a variety of clubs and communities tailored to your interests. Whether you're into adventure, books, technology, fitness, or art, there's something here for everyone!
        </p>
        {clubs.map((club) => (
          <div key={club.slug}>
            <ClubCard {...club} />
          </div>
        ))}
      </div>
    </>
  )
}