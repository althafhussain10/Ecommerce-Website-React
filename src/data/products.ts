import saree1 from "../assets/images/products/saree-1.jpg";
import saree2 from "../assets/images/products/saree-2.jpg";
import saree3 from "../assets/images/products/saree-3.jpg";
import saree4 from "../assets/images/products/saree-4.jpg";
import saree5 from "../assets/images/products/saree-5.jpg";
import kurti1 from "../assets/images/products/kurti-1.jpg";
import kurti2 from "../assets/images/products/kurti-2.jpg";
import kurti3 from "../assets/images/products/kurti-3.jpg";
import kurti4 from "../assets/images/products/kurti-4.jpg";
import kurti5 from "../assets/images/products/kurti-5.jpg";
import lehenga1 from "../assets/images/products/lehenga-1.jpg";
import lehenga2 from "../assets/images/products/lehenga-2.jpg";
import lehenga3 from "../assets/images/products/lehenga-3.jpg";
import lehenga4 from "../assets/images/products/lehenga-4.jpg";
import lehenga5 from "../assets/images/products/lehenga-5.jpg";
import salwar1 from "../assets/images/products/salwar-1.jpg";
import salwar2 from "../assets/images/products/salwar-2.jpg";
import salwar3 from "../assets/images/products/salwar-3.jpg";
import salwar4 from "../assets/images/products/salwar-4.jpg";
import salwar5 from "../assets/images/products/salwar-5.jpg";

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
  isNewArrival?: boolean;
  isOnSale?: boolean;
}

export const products: Product[] = [
  // Sarees (5 products)
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 4999,
    originalPrice: 7999,
    image: saree1,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    category: "sarees",
    description: "Exquisite Banarasi silk saree with intricate zari work and traditional motifs. Perfect for weddings and festive occasions.",
    sizes: ["Free Size"],
    colors: ["Maroon", "Navy Blue", "Green", "Pink"],
    material: "Pure Banarasi Silk",
    careInstructions: ["Dry clean only", "Store in muslin cloth", "Avoid direct sunlight"],
    isOnSale: true,
  },
  {
    id: 2,
    name: "Kanjivaram Silk Saree",
    price: 8999,
    originalPrice: 12999,
    image: saree2,
    rating: 4.9,
    reviews: 98,
    badge: "Premium",
    category: "sarees",
    description: "Authentic Kanjivaram silk saree with traditional temple border and rich golden zari. A timeless piece for grand celebrations.",
    sizes: ["Free Size"],
    colors: ["Purple", "Green", "Red", "Blue"],
    material: "Pure Kanjivaram Silk",
    careInstructions: ["Dry clean only", "Store carefully", "Avoid moisture"],
    isOnSale: true,
  },
  {
    id: 3,
    name: "Paithani Silk Saree",
    price: 6499,
    originalPrice: 8999,
    image: saree3,
    rating: 4.7,
    reviews: 76,
    badge: null,
    category: "sarees",
    description: "Traditional Paithani saree with peacock motifs and golden border. Handwoven masterpiece from Maharashtra.",
    sizes: ["Free Size"],
    colors: ["Green", "Purple", "Maroon"],
    material: "Pure Paithani Silk",
    careInstructions: ["Dry clean only", "Store flat", "Avoid direct sunlight"],
    isNewArrival: true,
  },
  {
    id: 4,
    name: "Chanderi Silk Saree",
    price: 3999,
    originalPrice: 5499,
    image: saree4,
    rating: 4.6,
    reviews: 112,
    badge: "New",
    category: "sarees",
    description: "Elegant Chanderi silk saree with silver zari work. Lightweight and perfect for formal occasions.",
    sizes: ["Free Size"],
    colors: ["Navy Blue", "Beige", "Grey"],
    material: "Chanderi Silk",
    careInstructions: ["Dry clean recommended", "Iron on low heat"],
    isNewArrival: true,
  },
  {
    id: 5,
    name: "Georgette Party Saree",
    price: 2999,
    originalPrice: 4499,
    image: saree5,
    rating: 4.5,
    reviews: 89,
    badge: "Sale",
    category: "sarees",
    description: "Flowing georgette saree with delicate embroidery and sequin border. Perfect for parties and receptions.",
    sizes: ["Free Size"],
    colors: ["Pink", "Peach", "Lavender"],
    material: "Georgette",
    careInstructions: ["Dry clean only", "Handle with care"],
    isOnSale: true,
  },

  // Kurtis (5 products)
  {
    id: 6,
    name: "Embroidered Anarkali Kurti",
    price: 2499,
    originalPrice: 3999,
    image: kurti1,
    rating: 4.6,
    reviews: 89,
    badge: "Bestseller",
    category: "kurtis",
    description: "Elegant Anarkali kurti with beautiful thread embroidery and flared silhouette. Perfect for daily wear and casual outings.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Peach", "Lavender", "Mint Green"],
    material: "Cotton Blend",
    careInstructions: ["Machine wash cold", "Iron on medium heat", "Do not bleach"],
    isOnSale: true,
  },
  {
    id: 7,
    name: "Designer Palazzo Kurti Set",
    price: 1999,
    originalPrice: 2999,
    image: kurti2,
    rating: 4.5,
    reviews: 145,
    badge: "Sale",
    category: "kurtis",
    description: "Trendy palazzo kurti set with modern prints and comfortable fit. Perfect for casual outings and college wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Teal", "Coral", "Navy"],
    material: "Rayon",
    careInstructions: ["Machine wash", "Do not wring", "Dry in shade"],
    isOnSale: true,
  },
  {
    id: 8,
    name: "Mirror Work Straight Kurti",
    price: 1799,
    originalPrice: 2499,
    image: kurti3,
    rating: 4.4,
    reviews: 67,
    badge: "New",
    category: "kurtis",
    description: "Stunning straight cut kurti with traditional mirror work and embroidery. Perfect for festive occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Turquoise", "Red", "Black"],
    material: "Cotton",
    careInstructions: ["Hand wash recommended", "Iron inside out"],
    isNewArrival: true,
  },
  {
    id: 9,
    name: "Festive A-Line Kurti",
    price: 2199,
    originalPrice: 3299,
    image: kurti4,
    rating: 4.7,
    reviews: 92,
    badge: null,
    category: "kurtis",
    description: "Beautiful A-line kurti with golden thread embroidery. Ideal for festive celebrations and pujas.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon", "Navy", "Green"],
    material: "Art Silk",
    careInstructions: ["Dry clean recommended", "Iron on medium heat"],
    isNewArrival: true,
  },
  {
    id: 10,
    name: "Block Print Cotton Kurti",
    price: 1299,
    originalPrice: 1799,
    image: kurti5,
    rating: 4.3,
    reviews: 156,
    badge: "Budget Pick",
    category: "kurtis",
    description: "Comfortable cotton kurti with traditional block print design. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Lavender", "Blue", "Pink"],
    material: "Pure Cotton",
    careInstructions: ["Machine wash", "Iron on medium heat"],
    isOnSale: true,
  },

  // Lehengas (5 products)
  {
    id: 11,
    name: "Bridal Lehenga Set",
    price: 12999,
    originalPrice: 18999,
    image: lehenga1,
    rating: 4.9,
    reviews: 56,
    badge: "Trending",
    category: "lehengas",
    description: "Stunning bridal lehenga set with heavy embroidery, sequin work, and beautiful dupatta. Designed for the modern bride.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Maroon", "Pink", "Golden"],
    material: "Art Silk with Net Dupatta",
    careInstructions: ["Dry clean only", "Handle with care", "Store flat"],
    isOnSale: true,
  },
  {
    id: 12,
    name: "Party Wear Lehenga",
    price: 6999,
    originalPrice: 9999,
    image: lehenga2,
    rating: 4.7,
    reviews: 67,
    badge: null,
    category: "lehengas",
    description: "Glamorous party wear lehenga with mirror work and sequin detailing. Perfect for sangeet and cocktail parties.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Wine", "Emerald", "Black"],
    material: "Georgette",
    careInstructions: ["Dry clean only", "Handle embellishments carefully"],
    isNewArrival: true,
  },
  {
    id: 13,
    name: "Pink Pearl Lehenga",
    price: 9999,
    originalPrice: 14999,
    image: lehenga3,
    rating: 4.8,
    reviews: 43,
    badge: "Premium",
    category: "lehengas",
    description: "Exquisite pink lehenga with intricate pearl and gold embroidery. Perfect for engagement and reception.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "Peach", "Blush"],
    material: "Raw Silk with Net Dupatta",
    careInstructions: ["Dry clean only", "Store carefully"],
    isNewArrival: true,
  },
  {
    id: 14,
    name: "Emerald Festive Lehenga",
    price: 7499,
    originalPrice: 10999,
    image: lehenga4,
    rating: 4.6,
    reviews: 58,
    badge: "New",
    category: "lehengas",
    description: "Stunning emerald green lehenga with kundan and sequin work. Ideal for festive celebrations.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Emerald", "Teal", "Forest Green"],
    material: "Velvet with Net Dupatta",
    careInstructions: ["Dry clean only", "Handle with care"],
    isNewArrival: true,
  },
  {
    id: 15,
    name: "Yellow Gota Patti Lehenga",
    price: 5999,
    originalPrice: 8499,
    image: lehenga5,
    rating: 4.5,
    reviews: 72,
    badge: "Sale",
    category: "lehengas",
    description: "Vibrant yellow lehenga with traditional Rajasthani gota patti work. Perfect for haldi and mehendi ceremonies.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Mustard", "Orange"],
    material: "Art Silk",
    careInstructions: ["Dry clean only", "Store flat"],
    isOnSale: true,
  },

  // Salwar Suits (5 products)
  {
    id: 16,
    name: "Chikankari Salwar Suit",
    price: 3499,
    originalPrice: 5499,
    image: salwar1,
    rating: 4.7,
    reviews: 72,
    badge: "Bestseller",
    category: "salwar",
    description: "Beautiful Lucknowi Chikankari salwar suit with delicate hand embroidery. Light and comfortable for all occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Peach", "Lemon Yellow"],
    material: "Pure Cotton",
    careInstructions: ["Hand wash recommended", "Iron inside out", "Avoid harsh detergents"],
    isOnSale: true,
  },
  {
    id: 17,
    name: "Printed Cotton Salwar",
    price: 1499,
    originalPrice: 2499,
    image: salwar2,
    rating: 4.4,
    reviews: 203,
    badge: "Budget Pick",
    category: "salwar",
    description: "Comfortable printed cotton salwar suit perfect for everyday wear. Breathable fabric ideal for Indian summers.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Multi Print", "Blue Print", "Pink Print"],
    material: "Pure Cotton",
    careInstructions: ["Machine wash", "Iron on medium", "Colours may fade slightly"],
    isOnSale: true,
  },
  {
    id: 18,
    name: "Peach Anarkali Suit",
    price: 3999,
    originalPrice: 5999,
    image: salwar3,
    rating: 4.8,
    reviews: 64,
    badge: "New",
    category: "salwar",
    description: "Elegant peach Anarkali suit with intricate thread embroidery. Perfect for festive occasions and weddings.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Peach", "Coral", "Blush Pink"],
    material: "Georgette",
    careInstructions: ["Dry clean only", "Handle with care"],
    isNewArrival: true,
  },
  {
    id: 19,
    name: "Royal Blue Palazzo Suit",
    price: 2999,
    originalPrice: 4499,
    image: salwar4,
    rating: 4.6,
    reviews: 87,
    badge: null,
    category: "salwar",
    description: "Stunning royal blue palazzo suit with golden embroidery. Perfect for formal events and parties.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Royal Blue", "Navy", "Teal"],
    material: "Silk Blend",
    careInstructions: ["Dry clean recommended", "Iron on low heat"],
    isNewArrival: true,
  },
  {
    id: 20,
    name: "Phulkari Patiala Suit",
    price: 2499,
    originalPrice: 3499,
    image: salwar5,
    rating: 4.5,
    reviews: 95,
    badge: "Trending",
    category: "salwar",
    description: "Traditional Punjabi Patiala suit with beautiful Phulkari embroidery. Colorful and vibrant design.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Mint Green", "Pink", "Yellow"],
    material: "Cotton Silk",
    careInstructions: ["Hand wash", "Iron inside out", "Dry in shade"],
    isOnSale: true,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.isNewArrival);
};

export const getSaleProducts = (): Product[] => {
  return products.filter((p) => p.isOnSale);
};
