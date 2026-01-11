import { Brain, Box, Rocket, Leaf, Clock, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: 1,
    icon: Brain,
    title: "AI for Fashion Design & Trend Forecasting",
    duration: "6–8 Weeks",
    description: "Master AI-powered design tools and predictive analytics for fashion trends.",
    learnings: [
      "AI-powered mood boards & design ideation",
      "Trend forecasting (colors, silhouettes, fabrics)",
      "Consumer behavior & fashion data",
      "Global fashion case studies"
    ],
    capstone: "AI-assisted seasonal fashion collection + trend forecast report",
    outcomes: [
      "AI-powered fashion designer",
      "Trend forecasting specialist",
      "Industry-ready with portfolio"
    ],
    gradient: "from-accent to-fashion-rose"
  },
  {
    id: 2,
    icon: Box,
    title: "Digital Fashion & 3D Virtual Garments",
    duration: "8–10 Weeks",
    description: "Create stunning 3D garments and virtual fashion experiences.",
    learnings: [
      "3D garment design & virtual sampling",
      "Digital fitting & prototyping",
      "Virtual fashion & metaverse basics",
      "Sustainable digital workflows"
    ],
    capstone: "Complete digital fashion collection in a virtual showroom",
    outcomes: [
      "Digital fashion designer",
      "3D garment specialist",
      "Sustainable fashion innovator"
    ],
    gradient: "from-fashion-rose to-tech-coral"
  },
  {
    id: 3,
    icon: Rocket,
    title: "Fashion Entrepreneurship & Tech-Enabled Brand Building",
    duration: "8 Weeks",
    description: "Build and launch your own digital-first fashion brand.",
    learnings: [
      "Build a digital-first fashion brand",
      "AI-based pricing & demand forecasting",
      "E-commerce & D2C business models",
      "Branding, marketing & funding"
    ],
    capstone: "Startup business plan + investor pitch deck",
    outcomes: [
      "Fashion entrepreneur",
      "Brand founder",
      "Startup-ready professional"
    ],
    gradient: "from-tech-coral to-accent"
  },
  {
    id: 4,
    icon: Leaf,
    title: "Sustainable Fashion & Smart Textiles",
    duration: "6 Weeks",
    description: "Lead the eco-fashion revolution with smart materials and ethical practices.",
    learnings: [
      "Ethical fashion principles",
      "Smart textiles & innovative fabrics",
      "AI for waste reduction & lifecycle analysis",
      "Global sustainability compliance"
    ],
    capstone: "Sustainable capsule collection + impact report",
    outcomes: [
      "Sustainable fashion expert",
      "Ethical fashion designer",
      "ESG & compliance-ready professional"
    ],
    gradient: "from-accent via-fashion-rose to-tech-coral"
  }
];

const ProgramsSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Future-Ready</span> Fashion Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-aligned curriculum designed to make you job-ready in the new fashion economy
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className="group bg-card rounded-3xl p-8 border border-border hover:border-accent/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{program.description}</p>

              {/* What you'll learn */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  What You&apos;ll Learn
                </h4>
                <ul className="space-y-2">
                  {program.learnings.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capstone */}
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-6">
                <h4 className="font-semibold text-sm text-accent mb-1">Capstone Project</h4>
                <p className="text-sm">{program.capstone}</p>
              </div>

              {/* Outcomes */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  You Will Become
                </h4>
                <div className="flex flex-wrap gap-2">
                  {program.outcomes.map((outcome, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                onClick={scrollToContact}
                className="w-full rounded-full group-hover:gradient-bg transition-all duration-300"
                variant="outline"
              >
                Enroll Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
