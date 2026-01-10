import AboutSection from "./AboutSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedProducts from "./FeaturedProducts";
import FeaturesBar from "./FeaturesBar";
import HeroSection from "./HeroSection";
import InstagramSection from "./InstagramSection";
import TestimonialsSection from "./Testimonial";

const Home: React.FC = () => {
  return (
    <main>
       <HeroSection />
       <FeaturesBar />
       <CategoriesSection />
       <FeaturedProducts />
       <AboutSection />
       <TestimonialsSection />
       <InstagramSection />
    </main>
  );
};

export default Home;