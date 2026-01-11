import { Brain, Palette, Globe2, Leaf } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI for trend forecasting",
    description: "Predict upcoming styles with machine learning"
  },
  {
    icon: Palette,
    title: "3D garments to reduce waste",
    description: "Virtual prototyping eliminates physical samples"
  },
  {
    icon: Globe2,
    title: "Digital fashion for virtual worlds",
    description: "Design for metaverse and gaming platforms"
  },
  {
    icon: Leaf,
    title: "Smart fabrics for sustainability",
    description: "Innovative materials for eco-conscious fashion"
  }
];

const brands = ["Nike", "Zara", "Gucci", "H&M", "Adidas", "Burberry"];

const WhyFashionTech = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Inline styles for marquee animation */}
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Fashion Needs <span className="text-accent">Technology</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            The global fashion industry is being transformed by
            <span className="text-accent font-semibold"> AI, 3D design, virtual sampling, and sustainable technology</span>.
          </p>
        </div>

        {/* Brand logos */}
        <div className="mb-16 opacity-70 overflow-hidden w-full">
          <p className="text-sm uppercase tracking-wider text-center mb-8">Brands already using these technologies:</p>
          <div className="flex w-max animate-marquee-right">
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <span key={`${brand}-${index}`} className="text-4xl md:text-5xl font-display font-bold mx-8 md:mx-12">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-300 hover-lift"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-display font-semibold">
            We train you for <span className="text-accent">THIS</span> new fashion industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyFashionTech;
