"use client"

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/search-bar";
import ClubCard from "@/components/club-card";
import { clubs, Club } from "@/lib/data";

// Separate component that uses useSearchParams
function SearchContent() {
  const searchParams = useSearchParams();
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

  return (
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
  );
}

// Main page component with Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}