import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I never imagined AI could help me design. Now I forecast trends and create collections digitally!",
    name: "Aarushi",
    role: "Fashion Design Graduate",
  },
  {
    quote: "I built my own digital fashion brand while studying. The entrepreneurship course changed everything.",
    name: "Rohit",
    role: "Fashion Entrepreneur",
  },
  {
    quote: "The 3D garment training helped me get hired by a fashion-tech startup.",
    name: "Neha",
    role: "Digital Fashion Designer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Success Stories</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Student <span className="text-gradient">Transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from graduates who are now shaping the future of fashion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
              
              <div className="relative z-10">
                <p className="text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-lg font-display font-bold text-primary-foreground">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
