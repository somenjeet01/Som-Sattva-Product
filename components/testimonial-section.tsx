"use client";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Wellness Coach",
      text: "Som Sattva honey has become an essential part of my daily wellness routine. The quality is unmatched!",
      rating: 5,
      image: "/per1.png",
    },
    {
      name: "Rajesh Kumar",
      role: "Health Enthusiast",
      text: "After using it for 3 months, I noticed a significant improvement in my energy levels. Highly recommend!",
      rating: 5,
      image: "/per2.png",
    },
    {
      name: "Anjali Desai",
      role: "Nutritionist",
      text: "I recommend Som Sattva to all my clients. The purity and nutrients are exceptional.",
      rating: 5,
      image: "/per3.png",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Our Customers
          </h2>
          <p className="text-lg text-foreground/60">
            Real stories from real people
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-card border border-accent/10 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="font-bold text-foreground">{testimonial.name}</p>
              </div>
              <p className="text-sm text-foreground/60 mb-4">
                {testimonial.role}
              </p>
              <p className="text-foreground/80 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
