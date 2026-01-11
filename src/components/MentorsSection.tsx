import { useState } from "react";
import { Briefcase, Sparkles, Globe, Rocket, X } from "lucide-react";

const mentorExpertise = [
  { icon: Globe, text: "Global fashion brands" },
  { icon: Rocket, text: "Fashion-tech startups" },
  { icon: Sparkles, text: "Sustainability & textile innovation labs" },
  { icon: Briefcase, text: "Digital fashion & AI design studios" },
];

const mentors = [
  {
    name: "Sarah Chen",
    role: "AI Fashion Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
    bio: "Sarah is a pioneer in AI-driven fashion design, having worked with top luxury brands to integrate generative AI into their creative workflows. She specializes in neural style transfer and pattern generation."
  },
  {
    name: "Marcus Rodriguez",
    role: "3D Garment Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    bio: "With over 10 years of experience in CLO3D and Marvelous Designer, Marcus helps brands transition from physical sampling to hyper-realistic digital twins, reducing waste and time-to-market."
  },
  {
    name: "Elena K.",
    role: "Sustainable Tech Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
    bio: "Elena combines material science with data analytics to track supply chain sustainability. She mentors students on implementing circular economy principles using blockchain and IoT."
  },
  {
    name: "David Park",
    role: "Fashion Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
    bio: "Founder of two successful D2C fashion-tech startups, David guides students through the journey of building a digital-first brand, from ideation to funding and launch."
  }
];

const MentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="mentors">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-primary font-medium mb-4">Expert Guidance</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Meet Your <span className="gradient-text">Mentors</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Fashion + Tech Industry Experts who have worked with leading names in the industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {mentorExpertise.map((item) => (
                <div key={item.text} className="glass-card rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-6 border-primary/30">
              <p className="text-lg font-display font-semibold mb-2">
                Our mentors don&apos;t just teach —
              </p>
              <p className="gradient-text text-xl font-bold">
                they prepare you for the real industry.
              </p>
            </div>
          </div>

          {/* Right visual - mentor grid */}
          <div className="grid grid-cols-2 gap-4">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                onClick={() => setSelectedMentor(mentor)}
                className="glass-card rounded-2xl aspect-square flex items-center justify-center group hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">{mentor.name}</p>
                  <p className="text-xs text-muted-foreground">{mentor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mentor Details Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedMentor(null)}>
          <div 
            className="bg-background border border-border/50 rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMentor(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-primary">
                <img 
                  src={selectedMentor.image} 
                  alt={selectedMentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">{selectedMentor.name}</h3>
              <p className="text-primary font-medium mb-6">{selectedMentor.role}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {selectedMentor.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MentorsSection;
