import { Activity, Brain, Heart, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Color palette
const SKY_BLUE = "#24b8e7";
const GREEN = "#34c759";

const services = [
  {
    icon: Stethoscope,
    accentColor: SKY_BLUE,
    title: "Comprehensive Physiotherapy Assessment",
    description:
      "A complete one-on-one evaluation to understand your condition, movement patterns, pain points, and functional needs. Every session is designed to identify the root cause and create a personalized plan that supports long-term recovery.",
    features: [
      "Detailed physical assessment",
      "Clear diagnosis and guidance",
      "Personalized care approach"
    ],
    note: "Typical session: 45–60 minutes. Ideal for anyone seeking dedicated attention and a fully customized recovery plan."
  },
  {
    icon: Heart,
    accentColor: GREEN,
    title: "Pain Relief & Mobility Restoration",
    description:
      "Gentle and effective physiotherapy techniques that help reduce pain, improve mobility, and restore comfort in your daily activities. Suitable for neck, back, knee, shoulder, and joint-related conditions.",
    features: [
      "Drug-free pain reduction",
      "Improves flexibility and movement",
      "Safe and calming techniques"
    ],
    note: "Sessions blend manual therapy and guided exercises to help restore function and ease discomfort naturally."
  },
  {
    icon: Activity,
    accentColor: SKY_BLUE,
    title: "Video Consultation & Guided Care",
    description:
      "Expert physiotherapy guidance from the comfort of your home. Our video consultations include assessment, exercise demonstration, and progress tracking—convenient for busy patients or those who prefer remote care.",
    features: [
      "Secure HD video sessions",
      "Easy scheduling and follow-ups",
      "Comfortable home-based care"
    ],
    note: "Ideal for follow-ups, exercise progression, and ongoing pain management support."
  },
  {
    icon: Brain,
    accentColor: GREEN,
    title: "Neurological Physiotherapy",
    description:
      "Supportive rehabilitation designed for patients recovering from stroke, spinal cord injuries, Parkinson’s disease, and other neurological conditions. The focus is on improving balance, coordination, mobility, and confidence.",
    features: [
      "Balance and gait training",
      "Motor control improvement",
      "Strength and coordination support"
    ],
    note: "Helps enhance independence and daily functioning through structured and compassionate rehabilitation."
  },
  {
    icon: Stethoscope,
    accentColor: SKY_BLUE,
    title: "Back & Neck Pain Treatment",
    description:
      "Targeted physiotherapy to relieve chronic and acute spinal discomfort, including posture-related pain, disc issues, and muscle tightness. Each session is tailored to improve alignment, strength, and spinal health.",
    features: [
      "Posture correction guidance",
      "Relief from stiffness and tension",
      "Improves core and spinal stability"
    ],
    note: "Customized programs that help restore movement, reduce flare-ups, and support long-term back and neck health."
  },
  {
    icon: Activity,
    accentColor: GREEN,
    title: "Sports Injury & Performance Rehab",
    description:
      "Focused rehabilitation for athletes and active individuals recovering from sprains, strains, and sports-related injuries. Programs are designed to restore strength, flexibility, and performance safely.",
    features: [
      "Sport-specific strengthening",
      "Injury prevention training",
      "Enhanced mobility and power"
    ],
    note: "Perfect for athletes aiming to return stronger with improved performance and reduced risk of reinjury."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20" style={{ background: "#f8fbfc" }}>
      <div className="container px-4">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold mb-3 uppercase tracking-wider"
            style={{ color: GREEN }}
          >
            💼 Our Services
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: SKY_BLUE }}
          >
            Supporting Your Recovery, Step by Step
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#222" }}>
            We offer compassionate, patient-focused physiotherapy treatments
            designed to relieve pain, improve movement, and help you return to
            the activities you love—with confidence and comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 border-2"
              style={{ borderColor: service.accentColor }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
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
                  <div
                    className="text-4xl font-bold"
                    style={{ color: service.accentColor, opacity: 0.2 }}
                  >
                    {index + 1}
                  </div>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: service.accentColor }}
                >
                  {service.title}
                </h3>

                <p className="leading-relaxed mb-6" style={{ color: "#222" }}>
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "#444" }}
                    >
                      <span style={{ color: service.accentColor }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className="text-xs italic bg-muted/50 p-3 rounded"
                  style={{ color: "#444", background: "#eefbfd" }}
                >
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
