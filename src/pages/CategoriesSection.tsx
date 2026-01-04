import { ArrowRight } from "lucide-react";
import categorySaree from "../assets/images/category-saree.jpg";
import categoryKurti from "../assets/images/category-kurti.jpg";
import categoryLehenga from "../assets/images/category-lehenga.jpg";
import categorySalwar from "../assets/images/category-salwar.jpg";

const categories = [
  {
    name: "Sarees",
    image: categorySaree,
    description: "Timeless elegance",
    count: "200+ Designs",
  },
  {
    name: "Lehengas",
    image: categoryLehenga,
    description: "Bridal & festive",
    count: "150+ Designs",
  },
  {
    name: "Kurtis",
    image: categoryKurti,
    description: "Everyday grace",
    count: "300+ Designs",
  },
  {
    name: "Salwar Suits",
    image: categorySalwar,
    description: "Classic comfort",
    count: "180+ Designs",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-[var(--gradient-cream)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">
            Explore
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Discover our curated collection of traditional Indian ethnic wear,
            crafted with love and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer
                         transition-all duration-500 hover:-translate-y-2
                         hover:shadow-[0_20px_40px_hsl(var(--foreground)/0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                <p className="font-body text-gold text-sm mb-1">
                  {category.count}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-1">
                  {category.name}
                </h3>
                <p className="font-body text-background/70 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-gold font-medium text-sm transition-all group-hover:gap-3">
                  <span>Shop Now</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;