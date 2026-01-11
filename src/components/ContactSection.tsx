import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const courses = [
  "AI for Fashion Design & Trend Forecasting",
  "Digital Fashion & 3D Virtual Garments",
  "Fashion Entrepreneurship & Tech-Enabled Brand Building",
  "Sustainable Fashion & Smart Textiles"
];

const statuses = [
  "Student",
  "Designer",
  "Working Professional",
  "Career Changer",
  "Other"
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    course: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.status || !formData.course) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book your consultation.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Consultation Booked!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-3xl p-12 border border-border">
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Thank You!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Your consultation request has been received. Our team will guide you on the best career path in fashion & technology.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="rounded-full"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Book a Free <span className="gradient-text">Fashion Tech</span> Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team will guide you on the best career path in fashion & technology.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 border border-border space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label>Current Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger className="rounded-xl h-12">
                  <SelectValue placeholder="Select your current status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Interested Course</Label>
              <Select
                value={formData.course}
                onValueChange={(value) => setFormData({ ...formData, course: value })}
              >
                <SelectTrigger className="rounded-xl h-12">
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="w-full rounded-full h-14 text-lg gradient-bg hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Get Free Counselling
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
