import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/20 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center animate-fade-up">
          <div className="flex justify-center mb-8">
            <Camera className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Design Your Space with AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your living space using AR technology and AI-powered design recommendations. Visualize your dream home instantly.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 group"
            >
              Start Designing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;