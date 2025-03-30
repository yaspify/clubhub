import Link from "next/link";
import { Club } from "@/lib/data";

interface SearchResultsProps {
  results: Club[];
  onResultClick: () => void;
}

export default function SearchResults({ results, onResultClick }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="absolute z-10 w-full bg-white rounded-md shadow-lg mt-1 border border-gray-200 max-h-80 overflow-y-auto">
      <ul className="py-2">
        {results.map((club) => (
          <li key={club.slug} className="hover:bg-gray-100">
            <Link 
              href={`/club/${club.slug}`} 
              className="block px-4 py-2"
              onClick={onResultClick}
            >
              <div className="font-medium">{club.name}</div>
              <div className="text-sm text-gray-500 truncate">{club.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
