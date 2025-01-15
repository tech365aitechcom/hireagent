import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "This AI assistant has transformed how we handle property inquiries. Our response time is now instant, and our conversion rates have significantly improved.",
      author: "Sarah Johnson",
      role: "Luxury Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 5,
      text: "The automated scheduling and follow-up system has saved us countless hours. It's like having an extra team member working 24/7.",
      author: "Michael Chen",
      role: "Real Estate Broker",
      image:
        "https://images.unsplash.com/photo-1542327821-87a5f0fb3c9f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
