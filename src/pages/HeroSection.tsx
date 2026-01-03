import { ArrowRight } from "lucide-react";
import heroBanner from "../assets/images/hero-banner.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Sitthidress Collection - Elegant Indian Ethnic Wear"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <p className="uppercase tracking-widest text-sm mb-4 animate-fade-up">
            New Collection 2026
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Elegance in Every Thread
          </h1>
          <p
            className="text-white/80 text-lg mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Discover our exquisite collection of handcrafted sarees, lehengas,
            and ethnic wear. Celebrate tradition with a touch of modern sophistication.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;