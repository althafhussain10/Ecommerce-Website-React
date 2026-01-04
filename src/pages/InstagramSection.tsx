import categorySaree from "../assets/images/category-saree.jpg";
import categoryKurti from "../assets/images/category-kurti.jpg";
import categoryLehenga from "../assets/images/category-lehenga.jpg";
import categorySalwar from "../assets/images/category-salwar.jpg";

const images = [
  { src: categorySaree, alt: "Sitthidress Saree Collection" },
  { src: categoryKurti, alt: "Sitthidress Kurti Collection" },
  { src: categoryLehenga, alt: "Sitthidress Lehenga Collection" },
  { src: categorySalwar, alt: "Sitthidress Salwar Collection" },
];

const InstagramSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-pink-500 uppercase tracking-widest text-sm mb-3">
            @sitthidress
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Follow Us on Instagram
          </h2>
          <p className="font-sans text-gray-600 max-w-xl mx-auto">
            Get inspired by our latest collections and styling ideas. Tag us @sitthidress to be featured!
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/sitthidress"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans font-medium">
                  View Post
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;