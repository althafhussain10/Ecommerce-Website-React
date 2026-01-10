import categorySaree from "../assets/images/category-saree.jpg";
import categoryKurti from "../assets/images/category-kurti.jpg";
import categoryLehenga from "../assets/images/category-lehenga.jpg";
import categorySalwar from "../assets/images/category-salwar.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  material: string;
  careInstructions: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 4999,
    originalPrice: 7999,
    image: categorySaree,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    category: "sarees",
    description: "Exquisite Banarasi silk saree with intricate zari work and traditional motifs. Perfect for weddings and festive occasions. Features a rich pallu with detailed craftsmanship.",
    sizes: ["Free Size"],
    colors: ["Maroon", "Navy Blue", "Green", "Pink"],
    material: "Pure Banarasi Silk",
    careInstructions: ["Dry clean only", "Store in muslin cloth", "Avoid direct sunlight"],
  },
  {
    id: 2,
    name: "Embroidered Anarkali Kurti",
    price: 2499,
    originalPrice: 3999,
    image: categoryKurti,
    rating: 4.6,
    reviews: 89,
    badge: "New",
    category: "kurtis",
    description: "Elegant Anarkali kurti with beautiful thread embroidery and flared silhouette. Comfortable cotton blend fabric perfect for daily wear and casual outings.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Peach", "Lavender", "Mint Green"],
    material: "Cotton Blend",
    careInstructions: ["Machine wash cold", "Iron on medium heat", "Do not bleach"],
  },
  {
    id: 3,
    name: "Bridal Lehenga Set",
    price: 12999,
    originalPrice: 18999,
    image: categoryLehenga,
    rating: 4.9,
    reviews: 56,
    badge: "Trending",
    category: "lehengas",
    description: "Stunning bridal lehenga set with heavy embroidery, sequin work, and a beautiful dupatta. This showstopper piece is designed for the modern bride who wants traditional elegance.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Maroon", "Pink", "Golden"],
    material: "Art Silk with Net Dupatta",
    careInstructions: ["Dry clean only", "Handle with care", "Store flat"],
  },
  {
    id: 4,
    name: "Chikankari Salwar Suit",
    price: 3499,
    originalPrice: 5499,
    image: categorySalwar,
    rating: 4.7,
    reviews: 72,
    badge: null,
    category: "salwar",
    description: "Beautiful Lucknowi Chikankari salwar suit with delicate hand embroidery. Light and comfortable, perfect for summer occasions and office wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Peach", "Lemon Yellow"],
    material: "Pure Cotton",
    careInstructions: ["Hand wash recommended", "Iron inside out", "Avoid harsh detergents"],
  },
  {
    id: 5,
    name: "Kanjivaram Silk Saree",
    price: 8999,
    originalPrice: 12999,
    image: categorySaree,
    rating: 4.9,
    reviews: 98,
    badge: "Premium",
    category: "sarees",
    description: "Authentic Kanjivaram silk saree with traditional temple border and rich golden zari. A timeless piece for grand celebrations.",
    sizes: ["Free Size"],
    colors: ["Purple", "Green", "Red", "Blue"],
    material: "Pure Kanjivaram Silk",
    careInstructions: ["Dry clean only", "Store carefully", "Avoid moisture"],
  },
  {
    id: 6,
    name: "Designer Palazzo Kurti Set",
    price: 1999,
    originalPrice: 2999,
    image: categoryKurti,
    rating: 4.5,
    reviews: 145,
    badge: "Sale",
    category: "kurtis",
    description: "Trendy palazzo kurti set with modern prints and comfortable fit. Perfect for casual outings and college wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Teal", "Coral", "Navy"],
    material: "Rayon",
    careInstructions: ["Machine wash", "Do not wring", "Dry in shade"],
  },
  {
    id: 7,
    name: "Party Wear Lehenga",
    price: 6999,
    originalPrice: 9999,
    image: categoryLehenga,
    rating: 4.7,
    reviews: 67,
    badge: null,
    category: "lehengas",
    description: "Glamorous party wear lehenga with mirror work and sequin detailing. Perfect for sangeet and cocktail parties.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Wine", "Emerald", "Black"],
    material: "Georgette",
    careInstructions: ["Dry clean only", "Handle embellishments carefully"],
  },
  {
    id: 8,
    name: "Printed Cotton Salwar",
    price: 1499,
    originalPrice: 2499,
    image: categorySalwar,
    rating: 4.4,
    reviews: 203,
    badge: "Budget Pick",
    category: "salwar",
    description: "Comfortable printed cotton salwar suit perfect for everyday wear. Breathable fabric ideal for Indian summers.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Multi Print", "Blue Print", "Pink Print"],
    material: "Pure Cotton",
    careInstructions: ["Machine wash", "Iron on medium", "Colours may fade slightly"],
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};