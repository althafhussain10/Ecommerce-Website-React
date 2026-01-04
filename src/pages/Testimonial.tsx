import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Absolutely stunning sarees! The quality exceeded my expectations. The Banarasi silk I ordered for my wedding was simply breathtaking. Will definitely order again!",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Ananya Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Sitthidress has become my go-to for ethnic wear. The designs are unique, the fabric quality is premium, and their customer service is exceptional.",
    avatar: "AR",
  },
  {
    id: 3,
    name: "Meera Iyer",
    location: "Chennai",
    rating: 5,
    text: "I ordered a lehenga for my sister's wedding and it was perfect! The intricate embroidery work was beyond beautiful. Received so many compliments!",
    avatar: "MI",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-pink-500 uppercase tracking-widest text-sm mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="font-sans text-gray-600 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their Sitthidress experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 relative shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-pink-200" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-serif font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-serif font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;