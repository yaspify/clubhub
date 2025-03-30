import Link from "next/link";
import { Club } from "@/lib/data";

interface SearchResultsProps {
  results: Club[];
  onResultClick?: () => void;
  showHeader?: boolean;
  isDropdown?: boolean;
}

export default function SearchResults({ 
  results, 
  onResultClick = () => {}, 
  showHeader = false,
  isDropdown = true
}: SearchResultsProps) {
  if (results.length === 0) {
    if (!isDropdown) {
      return <div className="text-center py-8 text-gray-500">No results found</div>;
    }
    return null;
  }

  const ResultsList = () => (
    <ul className={isDropdown ? "py-2" : "py-4 space-y-2"}>
      {results.map((club) => (
        <li key={club.slug} className={isDropdown ? "hover:bg-gray-100" : "border-b border-gray-100 last:border-0 pb-4"}>
          <Link 
            href={`/club/${club.slug}`} 
            className={isDropdown ? "block px-4 py-2" : "block p-4 rounded-lg hover:bg-gray-50"}
            onClick={onResultClick}
          >
            <div className="font-medium">{club.name}</div>
            <div className="text-sm text-gray-500 truncate">{club.description}</div>
          </Link>
        </li>
      ))}
    </ul>
  );

  if (isDropdown) {
    return (
      <div className="absolute z-10 w-full bg-white rounded-md shadow-lg mt-1 border border-gray-200 max-h-80 overflow-y-auto">
        {showHeader && <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200">Search Results</div>}
        <ResultsList />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md w-full">
      {showHeader && <h2 className="text-xl font-semibold mb-4">Search Results ({results.length})</h2>}
      <ResultsList />
    </div>
  );
}
