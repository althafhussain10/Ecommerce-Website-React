import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">
              Handpicked For You
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Featured Products
            </h2>
          </div>
          <Link to="/new-arrivals" className="font-body text-sm text-primary hover:text-primary/80 underline-animation pb-1">
            View All Products
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              {/* Image Container */}
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-cream">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                      {product.badge}
                    </span>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-background rounded-full shadow-soft hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Add to wishlist">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-full font-medium hover:bg-primary transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>

              {/* Product Info */}
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="font-body text-sm text-foreground">{product.rating}</span>
                  <span className="font-body text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Name */}
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-body text-lg font-semibold text-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="font-body text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="font-body text-xs text-green-600 font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;