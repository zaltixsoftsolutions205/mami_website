import { Award, GraduationCap, Users, Clock } from "lucide-react";

const SKY_BLUE = "#24b8e7";
const GREEN = "#34c759";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience", color: SKY_BLUE },
  { icon: Users, value: "500+", label: "Patients Supported", color: GREEN },
  { icon: GraduationCap, value: "3", label: "Countries Practiced In", color: SKY_BLUE },
  { icon: Clock, value: "100%", label: "Commitment to Care", color: GREEN },
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
              Dr. Ramyakrishna Mamidala
            </h2>
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: GREEN }}
            >
              Physiotherapist & Healthcare Manager
            </h3>
            <div className="space-y-4" style={{ color: "#222" }}>
              <p className="text-lg leading-relaxed">
                I am a dedicated physiotherapist with over a decade of global experience in rehabilitation, patient care, and healthcare management. I specialize in developing personalized recovery programs that effectively manage pain and restore function, empowering patients to regain active and fulfilling lives. My international practice across diverse healthcare systems has honed my cultural competence and clinical expertise, enabling me to deliver evidence-based treatments tailored to individual needs. Committed to lifelong learning and innovation, I strive to optimize patient outcomes through compassionate and scientifically grounded care.
              </p>
              <blockquote
                className="text-lg italic border-l-4 pl-4 my-6"
                style={{ borderColor: GREEN }}
              >
                "A physiotherapist has the brain of scientist the heart of a humanist and the hands of an Artist.."
              </blockquote>

              <h4
                className="text-xl font-bold mt-8 mb-4"
                style={{ color: SKY_BLUE }}
              >
                Professional Journey
              </h4>
              <p className="text-lg leading-relaxed">
                Over the course of my career in India, Saudi Arabia, and the United Kingdom, I have gained extensive expertise in neurological and orthopedic rehabilitation, alongside strategic healthcare management and leadership. This diverse international experience has cultivated my culturally sensitive approach to patient care and enabled me to customize rehabilitation programs effectively for varied populations. I am skilled in utilizing advanced technologies and evidence-based methods to enhance patient outcomes. Additionally, my healthcare management background allows me to lead multidisciplinary teams, streamline clinical operations, and contribute to the growth and quality of rehabilitation services.
              </p>

              <h4
                className="text-xl font-bold mt-8 mb-4"
                style={{ color: SKY_BLUE }}
              >
                Professional Philosophy
              </h4>
              <p className="text-lg leading-relaxed">
                As a physiotherapist, I integrate scientific knowledge, empathetic care, and meticulous technique to achieve the best rehabilitation results. I am committed to offering thorough patient care and efficient healthcare management. My professional journey extends beyond ten years and encompasses significant experience in India, Saudi Arabia, and the United Kingdom, with specialized skills in neurological, orthopedic, and post-surgical rehabilitation.
              </p>

              <h4
                className="text-xl font-bold mt-8 mb-4"
                style={{ color: SKY_BLUE }}
              >
                Clinical Expertise
              </h4>
              <p className="text-lg leading-relaxed">
                My practice focuses on enhancing mobility, alleviating pain, and promoting functional independence through evidence-based physiotherapy techniques. I specialize in manual therapy, electrotherapy, dry needling, and the prescription of therapeutic exercises, which empower patients to recover their quality of life and autonomy.
              </p>

              <h4
                className="text-xl font-bold mt-8 mb-4"
                style={{ color: SKY_BLUE }}
              >
                Leadership in Healthcare
              </h4>
              <p className="text-lg leading-relaxed">
                In addition to my clinical responsibilities, I have founded and overseen prominent healthcare facilities. As the Manager and Head of Department at BM Rehabilitation Center, I was responsible for facility planning, team development, and ensuring adherence to international quality standards. My leadership has encouraged innovation in treatment protocols and facilitated ongoing operational enhancements.
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
                    background: `${stat.color}11`,
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
                    Board Certified with Health and Care Professions Council (UK)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN, marginTop: "4px" }}>✓</span>
                  <span style={{ color: "#444" }}>
                    Registered with Dubai Health Authority
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN, marginTop: "4px" }}>✓</span>
                  <span style={{ color: "#444" }}>
                    Master of Science, Coventry University
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
