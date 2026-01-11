import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Heart, ShoppingBag, Star, Minus, Plus, ArrowLeft, Truck, Shield, RotateCcw } from "lucide-react";
import { getProductById, products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <img
            src="404.png"
            alt="Page Not Found"
            className="mx-auto mb-6 w-64 sm:w-80"
          />
          <h1 className="font-display text-3xl mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    }, quantity);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link to={`/${product.category}`} className="text-muted-foreground hover:text-primary capitalize">
            {product.category}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm px-4 py-2 rounded-full font-medium">
                {product.badge}
              </span>
            )}
            <button className="absolute top-4 right-4 p-3 bg-background rounded-full shadow-soft hover:bg-primary hover:text-primary-foreground transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <span className="font-body font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-primary">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="font-body text-xl text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-body font-medium mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-body transition-colors ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-body font-medium mb-3">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg font-body transition-colors ${
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-body font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="font-body text-xl font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-6 text-lg"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="px-6 py-6">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
              <div className="flex flex-col items-center text-center">
                <Truck className="h-6 w-6 text-primary mb-2" />
                <span className="font-body text-sm">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-6 w-6 text-primary mb-2" />
                <span className="font-body text-sm">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="h-6 w-6 text-primary mb-2" />
                <span className="font-body text-sm">Easy Returns</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold mb-4">Product Details</h3>
              <dl className="space-y-3">
                <div className="flex">
                  <dt className="font-body text-muted-foreground w-32">Material</dt>
                  <dd className="font-body">{product.material}</dd>
                </div>
                <div className="flex">
                  <dt className="font-body text-muted-foreground w-32">Category</dt>
                  <dd className="font-body capitalize">{product.category}</dd>
                </div>
              </dl>
            </div>

            {/* Care Instructions */}
            <div className="mt-6">
              <h3 className="font-display text-xl font-semibold mb-4">Care Instructions</h3>
              <ul className="list-disc list-inside space-y-2">
                {product.careInstructions.map((instruction, i) => (
                  <li key={i} className="font-body text-muted-foreground">{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-semibold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-body font-medium group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="font-body text-primary">₹{p.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductDetail;