"use client"

import { clubs, Club, clubCategories, ClubCategory } from "@/lib/data"
import ClubCard from "@/components/club-card"
import { useParams } from "next/navigation"
import Image from "next/image"

export default function Page() {
  const params = useParams()
  const { slug } = params
  // Find the current club by slug
  const club: Club | undefined = clubs.find((club) => club.slug === slug)

  // Filter out the current club to get recommended clubs
  const recommendedClubs = clubs.filter((club) => club.slug !== slug).slice(0, 2)

  // Handle case where the club is not found
  if (!club) {
    return (
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-2">Oops! Club not found</h1>
        <p className="text-gray-700 mb-8">
          We couldn't find the club you're looking for. Please try another one.
        </p>
        <h2 className="text-xl font-bold mb-2">Other Clubs</h2>
        {recommendedClubs.map((club) => (
          <div key={club.slug}>
            <ClubCard {...club} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div>
        {club.image ? (
          <Image
            src={club.image}
            alt={`${club.name} image`}
            width={0}
            height={0}
            className="mb-4 rounded-xl w-full h-[200px] object-cover"
          />
        ) : (
          <div className="mb-4 w-full h-[200px] bg-gray-200 flex items-center justify-center rounded-xl">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
        <h1 className="text-2xl font-bold mb-4">{club.name}</h1>
        <p className="text-gray-700 mb-4">{club.description}</p>
        {club.lastUpdated && (
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date(club.lastUpdated).toLocaleDateString()}
          </p>
        )}
        <h2 className="text-xl font-bold mb-4">Similar Clubs</h2>
        <div>
          {recommendedClubs.map((club) => (
            <div key={club.slug}>
              <ClubCard {...club} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}