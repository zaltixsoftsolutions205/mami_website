import { Activity, Brain, Heart, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Color palette
const SKY_BLUE = "#24b8e7";
const GREEN = "#34c759";

const services = [
  {
    icon: Stethoscope,
    accentColor: SKY_BLUE,
    title: "Personalized One-on-One Treatment",
    description:
      "Individualized sessions tailored to your unique needs. We carefully assess your condition and develop a customized rehabilitation plan focused on your recovery without distractions or time constraints.",
    features: [
      "Dedicated personal attention",
      "Flexible scheduling",
      "Tailored treatment plans"
    ],
    note: "Typical session: 45-60 minutes. Ideal for patients seeking focused, individualized care."
  },
  {
    icon: Heart,
    accentColor: GREEN,
    title: "Effective Pain Relief Therapy",
    description:
      "Utilizing gentle and evidence-based techniques to alleviate pain. Whether addressing neck, back, knee, or shoulder discomfort, our methods are designed for safe and lasting relief.",
    features: [
      "Rapid pain reduction",
      "Non-invasive approaches",
      "Minimized reliance on medication"
    ],
    note: "Sessions combine interventional procedures, manual therapy, and guided exercises to reduce pain and restore function."
  },
  {
    icon: Activity,
    accentColor: SKY_BLUE,
    title: "Convenient Video Consultations",
    description:
      "Access professional physiatry care remotely through secure video sessions. Receive expert guidance from the comfort and safety of your home, saving travel time without compromising quality.",
    features: [
      "Remote access from anywhere",
      "Flexible and time-saving",
      "Easy appointment booking"
    ],
    note: "Remote follow-ups and exercise progressions provided. Great for busy or remote patients."
  },
  {
    icon: Brain,
    accentColor: GREEN,
    title: "Neurological Rehabilitation",
    description:
      "Specialized treatment for stroke, spinal cord injuries, and other neurological conditions. Our comprehensive programs help restore function, improve mobility, and enhance quality of life.",
    features: [
      "Stroke recovery programs",
      "Spinal cord injury management",
      "Movement disorder treatment"
    ],
    note: "Evidence-based neurological rehabilitation with focus on functional independence and quality of life."
  },
  {
    icon: Stethoscope,
    accentColor: SKY_BLUE,
    title: "Specialized Back & Neck Pain Relief",
    description:
      "Focused treatment for common spinal issues using clinically proven protocols that deliver noticeable improvement, enhancing your comfort and mobility.",
    features: [
      "Targeted therapies",
      "Fast functional recovery",
      "Clinically validated methods"
    ],
    note: "Personalized spinal programs that focus on restoring mobility and reducing flare-ups."
  },
  {
    icon: Activity,
    accentColor: GREEN,
    title: "Sports Injury & Performance Rehabilitation",
    description:
      "Supporting athletes and active individuals through safe, progressive rehabilitation. Our programs help you recover fully and return stronger to your sport or fitness routine.",
    features: [
      "Athlete-centric care",
      "Evidence-guided recovery",
      "Strength and safety focus"
    ],
    note: "Performance-focused rehab with return-to-sport planning and strength progression."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20" style={{background: "#f8fbfc"}}>
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{color: GREEN}}>
            💼 Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: SKY_BLUE}}>
            How We Support Your Recovery
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: "#222"}}>
            Evidence-based physiatry treatments designed to improve your health, mobility, and quality of life—delivered with personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 border-2"
              style={{borderColor: service.accentColor}}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    {/* Removed colored shadow/blur */}
                    <div
                      className="relative p-4 rounded-lg transition-colors"
                      style={{
                        background: service.accentColor + "22",
                        color: service.accentColor
                      }}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold" style={{color: service.accentColor, opacity: 0.2}}>{index + 1}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{color: service.accentColor}}>
                  {service.title}
                </h3>
                <p className="leading-relaxed mb-6" style={{color: "#222"}}>
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{color: "#444"}}>
                      <span style={{color: service.accentColor}}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-xs italic bg-muted/50 p-3 rounded" style={{color: "#444", background: "#eefbfd"}}>
                  {service.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
