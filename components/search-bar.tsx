"use client"

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { clubs, Club } from "@/lib/data";
import SearchResults from "@/components/search-results";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<Club[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Update search results when query changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = clubs
        .filter(
          (club) =>
            club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              club.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5); // Limit to 5 results

      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
    setShowSearchResults(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Remove focus to dismiss keyboard on mobile
      e.currentTarget.blur();
    }
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="flex items-center space-x-2 mb-4 w-full">
        <div className="relative flex-grow">
          <Input 
            type="text" 
            className="px-3 py-2 pr-10" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (searchQuery.trim().length > 0) {
                setShowSearchResults(true);
              }
            }}
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              onClick={clearSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Instant Search Results */}
      {showSearchResults && searchResults.length > 0 && (
        <SearchResults results={searchResults} onResultClick={() => setShowSearchResults(false)} />
      )}
    </div>
  );
}
