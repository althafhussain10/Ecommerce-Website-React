import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, Filter } from "lucide-react";
import { useState } from "react";
import { products, getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";

const categoryInfo: Record<string, { title: string; description: string }> = {
  sarees: {
    title: "Sarees",
    description: "Explore our exquisite collection of traditional and contemporary sarees",
  },
  lehengas: {
    title: "Lehengas",
    description: "Discover stunning lehengas for weddings and special occasions",
  },
  kurtis: {
    title: "Kurtis",
    description: "Stylish and comfortable kurtis for every occasion",
  },
  salwar: {
    title: "Salwar Suits",
    description: "Elegant salwar suits crafted with love and tradition",
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "Check out the latest additions to our collection",
  },
  sale: {
    title: "Sale",
    description: "Great deals on beautiful ethnic wear",
  },
};

const CategoryPage = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState("featured");

  const info = categoryInfo[category || ""] || {
    title: "Products",
    description: "Browse our collection",
  };

  let categoryProducts = category === "new-arrivals"
    ? products.filter((p) => p.badge === "New")
    : category === "sale"
    ? products.filter((p) => p.badge === "Sale" || (p.originalPrice - p.price) / p.originalPrice > 0.3)
    : getProductsByCategory(category || "");

  // If no specific products, show all
  if (categoryProducts.length === 0) {
    categoryProducts = products;
  }

  // Sort products
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="bg-cream py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              {info.title}
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              {info.description}
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filters Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <p className="font-body text-muted-foreground">
                Showing {sortedProducts.length} products
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="font-body bg-transparent border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-cream">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="absolute top-4 right-4 p-2 bg-background rounded-full shadow-soft hover:bg-primary hover:text-primary-foreground transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  </Link>

                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-gold text-gold" />
                    <span className="font-body text-sm">{product.rating}</span>
                    <span className="font-body text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-body font-semibold text-primary">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="font-body text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-2 rounded-full font-medium hover:bg-primary transition-colors text-sm"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CategoryPage;