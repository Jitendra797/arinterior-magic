import { Camera, Palette, Wand2, Ruler, House } from "lucide-react";

const features = [
  {
    icon: <Camera className="h-8 w-8" />,
    title: "AR Room Scanning",
    description: "Scan your space in real-time with advanced AR technology for precise measurements",
  },
  {
    icon: <Wand2 className="h-8 w-8" />,
    title: "AI Design Magic",
    description: "Get instant, personalized design suggestions powered by advanced AI",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Style Matching",
    description: "Find furniture and decor that perfectly matches your preferred style",
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: "Smart Measurements",
    description: "Get accurate room dimensions and furniture placement suggestions",
  },
  {
    icon: <House className="h-8 w-8" />,
    title: "Virtual Staging",
    description: "Preview different furniture arrangements in your space before making changes",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Powerful Design Features
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Transform your space with our cutting-edge AR and AI technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card hover:bg-accent transition-colors duration-300 group"
            >
              <div className="text-primary group-hover:text-primary/80 transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;