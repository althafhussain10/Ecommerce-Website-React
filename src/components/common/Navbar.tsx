import { Search, User, Menu, X, Heart } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchResults from "../ui/SearchResults";
import { products } from "../../data/products";
import CartSheet from "../../pages/CartSheet";
import { Button } from "../ui/button";
import { useWishlist } from "../../context/WishListContext";
import AccountDropdown from "./AccountDropdown";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sarees", href: "/sarees" },
  { name: "Lehengas", href: "/lehengas" },
  { name: "Kurtis", href: "/kurtis" },
  { name: "Salwar Suits", href: "/salwar" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Sale", href: "/sale" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems: wishlistCount } = useWishlist();


  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query) ||
        product.colors.some((color) =>
          color.toLowerCase().includes(query)
        )
    );
  }, [searchQuery]);

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-[50] border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      {/* Top Banner */}
      <div className="bg-pink-600 py-2 text-center text-sm font-medium text-white">
        Free Shipping on Orders Above ₹1999 | Use Code: SITTHI10 for 10% Off
      </div>

      {/* Main Header */}
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold tracking-wide text-gray-900 md:text-4xl">
              Sitthi<span className="text-pink-600">dress</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm uppercase tracking-wide text-gray-700 transition-colors hover:text-pink-600"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-0 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen((v) => !v)}
              aria-label="Search"
              className="w-5 h-5"
            >
              <Search />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex w-5 h-5"
              aria-label="Wishlist"
            >
              <Link to="/wishlist" className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:flex relative" aria-label="Wishlist">
              <Heart />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </Link>
            </Button>

            <AccountDropdown />
            <CartSheet/>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 py-4">
            <div className="relative mx-auto max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for sarees, lehengas, kurtis..."
                className="w-full rounded-full bg-gray-100 py-3 pl-12 pr-4 text-sm outline-none ring-pink-500 transition focus:ring-2"
                autoFocus
              />

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <SearchResults
                results={searchResults}
                query={searchQuery}
                onClose={handleCloseSearch}
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="space-y-2 px-4 py-6 w-full box-border">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block border-b border-gray-100 py-3 font-medium text-gray-700 transition-colors hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;