import { Camera, Palette, Wand2 } from "lucide-react";

const features = [
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Scan Your Space",
    description: "Use AR technology to scan and measure your room accurately",
  },
  {
    icon: <Wand2 className="h-8 w-8" />,
    title: "AI Design Magic",
    description: "Get instant design suggestions powered by advanced AI",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Style Matching",
    description: "Find furniture and decor that matches your preferred style",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Redesign with Confidence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-primary/30 hover:bg-primary/50 transition-colors duration-300"
            >
              <div className="text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;