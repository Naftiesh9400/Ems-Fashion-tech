import { Check } from "lucide-react";

const differentiators = [
  "Industry-aligned curriculum",
  "Portfolio-driven learning",
  "AI + Fashion integration",
  "Global sustainability focus",
  "Startup & job readiness"
];

const DifferentiatorsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover-lift transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="font-medium text-lg text-left">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
