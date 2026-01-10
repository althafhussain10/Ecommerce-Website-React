import { Link } from "react-router-dom";
import type { Product } from "../../data/products";

interface SearchResultsProps {
  results: Product[];
  query: string;
  onClose: () => void;
}

const SearchResults = ({ results, query, onClose }: SearchResultsProps) => {
  if (!query.trim()) return null;

  return (
    <div className="absolute inset-x-0 top-full mt-2 z-[50] max-h-[20rem] overflow-y-auto rounded-lg border border-border bg-background shadow-lg">
      {results.length === 0 ? (
        <div className="p-4 text-center text-sm text-muted-foreground">
          No products found for "{query}"
        </div>
      ) : (
        <div className="p-2">
          <p className="px-2 pb-2 text-xs text-muted-foreground">
            {results.length} result{results.length !== 1 ? "s" : ""} found
          </p>

          {results.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary focus:bg-secondary focus:outline-none"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-12 w-12 rounded-md object-cover"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {product.name}
                </p>
                <p className="text-xs capitalize text-muted-foreground">
                  {product.category}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-primary">
                  ₹{product.price.toLocaleString()}
                </p>
                {product.originalPrice > product.price && (
                  <p className="text-xs text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;