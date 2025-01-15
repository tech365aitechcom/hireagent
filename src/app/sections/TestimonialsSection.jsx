import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "This technology has completely transformed our customer service operations. The setup was simple and enjoyable, and the results speak for themselves",
      author: "Samantha Will",
      role: "Contact Center Owner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 5,
      text: "HireAgent has redefined how we manage customer interactions and significantly improved our team's efficiency. Streamlined my operations with HireAgent",
      author: "Robert Stark",
      role: "Contact Center Exec.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 5,
      text: "HireAgent has empowered us to deliver exceptional customer service consistently. We've never felt more confident in our ability to meet customer needs",
      author: "William J.",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} className="w-5 h-5 fill-blue-500 text-blue-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-blue-50 py-16 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12">
          What Our Clients Say About{" "}
          <span className="text-blue-600">HireAgent</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
            >
              <StarRating rating={testimonial.rating} />

              <p className="text-indigo-900 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 object-cover rounded-full mr-4 border-2 border-blue-200"
                />
                <div>
                  <div className="font-semibold text-blue-700">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-indigo-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
