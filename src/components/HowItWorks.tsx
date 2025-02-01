import { Button } from "@/components/ui/button";
import { Camera, Palette, Wand2 } from "lucide-react";

const steps = [
  {
    icon: <Camera className="h-12 w-12" />,
    number: "01",
    title: "Scan Your Space",
    description: "Use your device's camera to capture and measure your room in real-time",
  },
  {
    icon: <Palette className="h-12 w-12" />,
    number: "02",
    title: "Choose Your Style",
    description: "Browse through curated design styles or create your own unique look",
  },
  {
    icon: <Wand2 className="h-12 w-12" />,
    number: "03",
    title: "Get AI Suggestions",
    description: "Receive personalized design recommendations and visualize them instantly",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Transform your space in three simple steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-card hover:bg-card/80 transition-colors duration-300 group"
            >
              <div className="absolute -top-6 left-8 text-primary/20 text-6xl font-bold">
                {step.number}
              </div>
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            Try It Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;