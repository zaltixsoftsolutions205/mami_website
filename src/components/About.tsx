import { Award, GraduationCap, Users, Clock } from "lucide-react";

const SKY_BLUE = "#24b8e7";
const GREEN = "#34c759";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience", color: SKY_BLUE },
  { icon: Users, value: "5000+", label: "Patients Treated", color: GREEN },
  { icon: GraduationCap, value: "Board", label: "Certified", color: SKY_BLUE },
  { icon: Clock, value: "98%", label: "Success Rate", color: GREEN },
];

const About = () => {
  return (
    <section id="about" className="py-20" style={{ background: "#f8fbfc" }}>
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-sm font-semibold mb-3 uppercase tracking-wider"
              style={{ color: GREEN }}
            >
              👨‍⚕️ About Me
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: SKY_BLUE }}
            >
              Dr. Ramyakrishna
            </h2>
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: GREEN }}
            >
              Physiatrist & Pain Management Specialist
            </h3>
            <div className="space-y-4" style={{ color: "#222" }}>
              <p className="text-lg leading-relaxed">
                I am a committed physiatrist with over 15 years of international experience 
                in rehabilitation, pain management, and patient care. My mission is to support 
                individuals in recovery, manage pain effectively, and empower them to resume 
                active, fulfilling lifestyles.
              </p>
              <blockquote
                className="text-lg italic border-l-4 pl-4 my-6"
                style={{ borderColor: GREEN }}
              >
                "A physiatrist has the brain of a scientist, the heart of a humanist, 
                and the hands of an artist."
              </blockquote>

              <h4
                className="text-xl font-bold mt-8 mb-4"
                style={{ color: SKY_BLUE }}
              >
                Professional Journey
              </h4>
              <p className="text-lg leading-relaxed">
                During my professional journey across the United States and internationally, 
                I have developed advanced skills across various healthcare settings. My primary 
                areas of expertise encompass neurological and orthopedic rehabilitation, along 
                with comprehensive pain management and sports medicine. This extensive experience 
                has equipped me with a unique, evidence-based approach to patient care, allowing 
                me to effectively tailor rehabilitation programs to diverse populations and complex 
                conditions.
              </p>

              <h4
                className="text-xl font-bold mt-8 mb-4"
                style={{ color: SKY_BLUE }}
              >
                Clinical Excellence
              </h4>
              <p className="text-lg leading-relaxed">
                I integrate scientific knowledge, empathetic care, and meticulous technique to 
                achieve optimal rehabilitation results. My practice focuses on enhancing mobility, 
                alleviating pain, and promoting functional independence through evidence-based 
                physiatric techniques including interventional pain procedures, electrodiagnostic 
                medicine, and therapeutic exercise prescription.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg text-center border-2 hover:shadow transition-colors"
                  style={{
                    borderColor: stat.color,
                    background: `${stat.color}11`
                  }}
                >
                  <stat.icon
                    className="h-10 w-10 mx-auto mb-3"
                    style={{ color: stat.color }}
                  />
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#222" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="p-6 rounded-lg border-2"
              style={{ borderColor: GREEN, background: "#eafbf4" }}
            >
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: SKY_BLUE }}
              >
                Global Credentials
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN, marginTop: "4px" }}>✓</span>
                  <span style={{ color: "#444" }}>
                    Board Certified in Physical Medicine and Rehabilitation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN, marginTop: "4px" }}>✓</span>
                  <span style={{ color: "#444" }}>
                    Master of Science in Healthcare Management, Johns Hopkins University
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN, marginTop: "4px" }}>✓</span>
                  <span style={{ color: "#444" }}>
                    Active member, American Academy of Physical Medicine and Rehabilitation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN, marginTop: "4px" }}>✓</span>
                  <span style={{ color: "#444" }}>
                    Fellowship trained in Interventional Pain Management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
