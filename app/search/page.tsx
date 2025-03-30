"use client"

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchBar from "@/components/search-bar";
import ClubCard from "@/components/club-card";
import { clubs, Club } from "@/lib/data";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<Club[]>([]);

  useEffect(() => {
    if (query) {
      const results = clubs.filter(
        (club) =>
          club.name.toLowerCase().includes(query.toLowerCase()) ||
          club.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const clearQuery = () => {
    router.push("/search");
  };

  return (
    <>
      <div>
        <h1 className="text-xl mb-4">Search Clubs</h1>
        <SearchBar initialQuery={query} />
        
        {query ? (
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-4">
              {searchResults.length > 0 
                ? `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'} for "${query}"`
                : `No results found for "${query}"`}
            </h2>
            <div>
              {searchResults.map((club) => (
                <ClubCard key={club.slug} {...club} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            Enter a search term to find clubs
          </div>
        )}
      </div>
    </>
  );
}