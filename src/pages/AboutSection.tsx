import heroBanner from "../assets/images/hero-banner.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={heroBanner}
                alt="Sitthidress - Traditional Indian Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-200/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-pink-300/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-sans text-pink-500 uppercase tracking-widest text-sm mb-4">
              Our Story
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Celebrating the Art of Traditional Weaving
            </h2>

            <div className="space-y-4 font-sans text-gray-600 leading-relaxed">
              <p>
                At Sitthidress, we believe every woman deserves to feel like royalty. Our journey began in the heart of Chennai, Mannady, with a passion for preserving India's rich textile heritage while embracing modern aesthetics.
              </p>
              <p>
                Each piece in our collection is a testament to the skill of our master artisans who have perfected their craft over generations. From the intricate zari work of Banarasi sarees to the delicate embroidery of Lucknowi kurtas, we bring you the finest ethnic wear.
              </p>
              <p>
                We are committed to sustainable practices and fair wages for our artisans, ensuring that every purchase supports the livelihoods of these talented craftspeople.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-gray-200">
              <div>
                <p className="font-serif text-4xl font-semibold text-pink-500">5K+</p>
                <p className="font-sans text-sm text-gray-500 mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold text-pink-500">500+</p>
                <p className="font-sans text-sm text-gray-500 mt-1">Unique Designs</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold text-pink-500">50+</p>
                <p className="font-sans text-sm text-gray-500 mt-1">Artisan Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;