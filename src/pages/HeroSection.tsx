import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import heroLehenga from "../assets/images/hero-lehenga.jpg";
import heroBanner from "../assets/images/hero-banner.jpg";
import heroSaree from "../assets/images/hero-saree.jpg";

// Slides with content
const heroSlides = [
  {
    image: heroLehenga,
    subtitle: "Bridal Collection",
    title: "Your Dream Lehenga Awaits",
    description:
      "Find the perfect ensemble for your special day with our stunning collection of bridal and festive lehengas.",
  },
  {
    image: heroBanner,
    subtitle: "New Collection 2026",
    title: "Elegance in Every Thread",
    description:
      "Discover our exquisite collection of handcrafted sarees, lehengas, and ethnic wear. Celebrate tradition with a touch of modern sophistication.",
  },
  {
    image: heroSaree,
    subtitle: "Premium Sarees",
    title: "Timeless Beauty Woven",
    description:
      "Explore our curated selection of silk, cotton, and designer sarees that blend heritage with contemporary style.",
  },
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slideItem, index) => (
          <img
            key={index}
            src={slideItem.image}
            alt={slideItem.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <p className="uppercase tracking-widest text-gold text-sm mb-4 animate-fade-up">
            {slide.subtitle}
          </p>

          <h1 className="text-[48px] md:text-[48px] font-semibold leading-tight mb-6 animate-fade-up">
            {slide.title}
          </h1>

          <p className="text-white/80 text-lg mb-8 leading-relaxed animate-fade-up">
            {slide.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
            <button className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 group">
              Shop Collection
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
              New Arrivals
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              current === index
                ? "bg-yellow-500 w-8 h-3"
                : "bg-white/40 w-3 h-3 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;