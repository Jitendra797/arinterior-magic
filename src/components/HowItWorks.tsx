import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Scan Your Room",
    description: "Use your camera to capture and measure your space",
  },
  {
    number: "02",
    title: "Choose Your Style",
    description: "Select from curated design styles or create your own",
  },
  {
    number: "03",
    title: "Get AI Suggestions",
    description: "Receive personalized design recommendations instantly",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <span className="absolute -top-6 left-6 text-5xl font-bold text-accent/30">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-2 mt-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Start Your Design Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;