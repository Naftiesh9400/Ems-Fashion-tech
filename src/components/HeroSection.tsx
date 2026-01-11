import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-fashion-tech.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-fashion-rose/10 blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">The Future of Fashion Education</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
              Where Fashion Meets{" "}
              <span className="gradient-text">AI, 3D</span>
              <br />
              <span className="gradient-text">& Sustainability</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Build the future of fashion with industry-ready skills in
              <strong className="text-foreground"> AI Design, Digital Fashion, Entrepreneurship </strong> 
              & <strong className="text-foreground">Sustainable Textiles</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                className="group gradient-bg text-accent-foreground hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg rounded-full animate-pulse-glow"
                onClick={() => scrollToSection("programs")}
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Book Free Counselling
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Graduates</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">95%</div>
                <div className="text-sm text-muted-foreground">Placement</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">4</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:h-[600px] animate-slide-in-right">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Fashion designer using AI and 3D technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -left-8 top-1/4 glass-card p-4 rounded-2xl animate-float stagger-1 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-accent-foreground text-lg">🎨</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Design</div>
                  <div className="text-xs text-muted-foreground">Trend Forecasting</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 top-1/2 glass-card p-4 rounded-2xl animate-float stagger-2 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-accent-foreground text-lg">👗</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">3D Fashion</div>
                  <div className="text-xs text-muted-foreground">Virtual Garments</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -left-4 bottom-1/4 glass-card p-4 rounded-2xl animate-float stagger-3 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-accent-foreground text-lg">🌿</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Sustainable</div>
                  <div className="text-xs text-muted-foreground">Eco-Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
