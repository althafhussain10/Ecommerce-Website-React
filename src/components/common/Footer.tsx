import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-[hsl(338_65%_45%)] py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join Our Family
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto font-sans">
            Subscribe to receive updates on new arrivals, exclusive offers, and styling tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl mb-4">
              Sitthi<span className="text-yellow-400">dress</span>
            </h2>
            <p className="text-white/70 font-sans mb-6 leading-relaxed">
              Bringing you the finest collection of traditional Indian ethnic wear with a modern touch. Quality fabrics, exquisite craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 font-sans">
              {["About Us", "Contact Us", "FAQs", "Size Guide", "Track Order"].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Categories</h4>
            <ul className="space-y-3 font-sans">
              {["Sarees", "Lehengas", "Kurtis", "Salwar Suits", "Gowns", "Accessories"].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-white/70">Mannady, Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400 shrink-0" />
                <a href="tel:+919876543210" className="text-white/70 hover:text-yellow-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400 shrink-0" />
                <a href="mailto:admin@sitthidress.com" className="text-white/70 hover:text-yellow-400 transition-colors">
                  admin@sitthidress.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 font-sans">
            <p>© 2026 Sitthidress. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-yellow-400 transition-colors">Shipping Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;