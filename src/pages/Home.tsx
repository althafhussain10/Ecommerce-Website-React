import AboutSection from "./AboutSection";
import CategoriesSection from "./CategoriesSection";
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
       <AboutSection />
       <TestimonialsSection />
       <InstagramSection />
    </main>
  );
};

export default Home;