import { Search, User, Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import CartSheet from "./CartSheet"; // make sure path is correct

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sarees", href: "/sarees" },
  { name: "Lehengas", href: "/lehengas" },
  { name: "Kurtis", href: "/kurtis" },
  { name: "Salwar Suits", href: "/salwar" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Sale", href: "/sale" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* Top Banner */}
      <div className="bg-pink-600 text-white text-center py-2 text-sm font-medium">
        Free Shipping on Orders Above ₹1999 | Use Code: SITTHI10 for 10% Off
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-900">
              Sitthi<span className="text-pink-600">dress</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 text-sm uppercase tracking-wide hover:text-pink-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:flex"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </button>

            {/* <CartSheet /> */}
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200 transition-all duration-300">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for sarees, lehengas, kurtis..."
                className="w-full px-4 py-3 pl-12 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 transition-all duration-300">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 text-gray-700 hover:text-pink-600 font-medium border-b border-gray-100"
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