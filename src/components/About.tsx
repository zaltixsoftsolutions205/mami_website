import { Award, GraduationCap, Users, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SKY_BLUE = "#24b8e7";
const GREEN = "#34c759";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience", color: SKY_BLUE },
  { icon: Users, value: "500+", label: "Patients Supported", color: GREEN },
  { icon: GraduationCap, value: "3", label: "Countries Practiced In", color: SKY_BLUE },
  { icon: Clock, value: "100%", label: "Commitment to Care", color: GREEN },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 overflow-hidden" 
      style={{ background: "#f8fbfc" }}
      ref={sectionRef}
    >
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            {/* Header with Slide-in Animation */}
            <div 
              ref={addToRefs}
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <p
                className="text-sm font-semibold mb-3 uppercase tracking-wider"
                style={{ color: GREEN }}
              >
                👨‍⚕️ About Me
              </p>
            </div>

            <div 
              ref={addToRefs}
              className={`transform transition-all duration-700 ease-out delay-100 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: SKY_BLUE }}
              >
                Dr. Ramyakrishna Mamidala
              </h2>
            </div>

            <div 
              ref={addToRefs}
              className={`transform transition-all duration-700 ease-out delay-200 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: GREEN }}
              >
                Physiotherapist & MIAP(India),HCPC (UK),DHA(Dubai)
              </h3>
            </div>

            {/* Profile Image for Mobile */}
            <div 
              ref={addToRefs}
              className={`block md:hidden mb-6 flex justify-center transform transition-all duration-700 ease-out delay-300 ${
                isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-green-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/src/assets/about.png"
                  alt="Dr. Ramyakrishna Mamidala - Professional Physiotherapist"
                  className="relative w-80 h-80 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-4" style={{ color: "#222" }}>
              {/* First Paragraph */}
              <div 
                ref={addToRefs}
                className={`transform transition-all duration-700 ease-out delay-400 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <p className="text-lg leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  I am a dedicated physiotherapist with over a decade of global experience in rehabilitation, patient care, and healthcare management. I specialize in developing personalized recovery programs that effectively manage pain and restore function, empowering patients to regain active and fulfilling lives. My international practice across diverse healthcare systems has honed my cultural competence and clinical expertise, enabling me to deliver evidence-based treatments tailored to individual needs. Committed to lifelong learning and innovation, I strive to optimize patient outcomes through compassionate and scientifically grounded care.
                </p>
              </div>

              {/* Professional Journey */}
              <div 
                ref={addToRefs}
                className={`transform transition-all duration-700 ease-out delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <h4
                  className="text-xl font-bold mt-8 mb-4 group cursor-pointer"
                  style={{ color: SKY_BLUE }}
                >
                  <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                    Professional Journey
                  </span>
                </h4>
                <p className="text-lg leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  Over the course of my career in India, Saudi Arabia, and the United Kingdom, I have gained extensive expertise in neurological and orthopedic rehabilitation, alongside strategic healthcare management and leadership. This diverse international experience has cultivated my culturally sensitive approach to patient care and enabled me to customize rehabilitation programs effectively for varied populations. I am skilled in utilizing advanced technologies and evidence-based methods to enhance patient outcomes. Additionally, my healthcare management background allows me to lead multidisciplinary teams, streamline clinical operations, and contribute to the growth and quality of rehabilitation services.
                </p>
              </div>

              {/* Professional Philosophy */}
              <div 
                ref={addToRefs}
                className={`transform transition-all duration-700 ease-out delay-600 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <h4
                  className="text-xl font-bold mt-8 mb-4 group cursor-pointer"
                  style={{ color: SKY_BLUE }}
                >
                  <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                    Professional Philosophy
                  </span>
                </h4>
                <p className="text-lg leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  As a physiotherapist, I integrate scientific knowledge, empathetic care, and meticulous technique to achieve the best rehabilitation results. I am committed to offering thorough patient care and efficient healthcare management. My professional journey extends beyond ten years and encompasses significant experience in India, Saudi Arabia, and the United Kingdom, with specialized skills in neurological, orthopedic, and post-surgical rehabilitation.
                </p>
              </div>

              {/* Clinical Expertise */}
              <div 
                ref={addToRefs}
                className={`transform transition-all duration-700 ease-out delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <h4
                  className="text-xl font-bold mt-8 mb-4 group cursor-pointer"
                  style={{ color: SKY_BLUE }}
                >
                  <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                    Clinical Expertise
                  </span>
                </h4>
                <p className="text-lg leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  My practice focuses on enhancing mobility, alleviating pain, and promoting functional independence through evidence-based physiotherapy techniques. I specialize in manual therapy, electrotherapy, dry needling, and the prescription of therapeutic exercises, which empower patients to recover their quality of life and autonomy.
                </p>
              </div>

              {/* Leadership in Healthcare */}
              <div 
                ref={addToRefs}
                className={`transform transition-all duration-700 ease-out delay-800 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <h4
                  className="text-xl font-bold mt-8 mb-4 group cursor-pointer"
                  style={{ color: SKY_BLUE }}
                >
                  <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                    Leadership in Healthcare
                  </span>
                </h4>
                <p className="text-lg leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  In addition to my clinical responsibilities, I have founded and overseen prominent healthcare facilities. As the Manager and Head of Department at BM Rehabilitation Center, I was responsible for facility planning, team development, and ensuring adherence to international quality standards. My leadership has encouraged innovation in treatment protocols and facilitated ongoing operational enhancements.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 mt-8">
            {/* Profile Image for Desktop */}
            <div 
              ref={addToRefs}
              className={`hidden md:flex justify-center transform transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "translate-y-0 opacity-100 scale-100 rotate-0" : "translate-y-20 opacity-0 scale-90 -rotate-3"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-green-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/src/assets/about.png"
                  alt="Dr. Ramyakrishna Mamidala - Professional Physiotherapist"
                  className="relative w-[32rem] h-[28rem] object-cover rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl group-hover:rotate-1"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className={`p-6 rounded-lg text-center border-2 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl cursor-pointer group ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    borderColor: stat.color,
                    background: `${stat.color}11`,
                    transitionDelay: `${900 + index * 100}ms`
                  }}
                >
                  <stat.icon
                    className="h-10 w-10 mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{ color: stat.color }}
                  />
                  <div
                    className="text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-110"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium transition-colors duration-300 group-hover:text-gray-800" style={{ color: "#222" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Global Credentials */}
            <div
              ref={addToRefs}
              className={`p-6 rounded-lg border-2 transition-all duration-700 ease-out delay-1100 hover:shadow-xl ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
              style={{ borderColor: GREEN, background: "#eafbf4" }}
            >
              <h4
                className="text-lg font-bold mb-4 group cursor-pointer"
                style={{ color: SKY_BLUE }}
              >
                <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                  Global Credentials
                </span>
              </h4>
              <ul className="space-y-2">
                {[
                  "Board Certified with Health and Care Professions Council (UK)",
                  "Registered with Dubai Health Authority",
                  "Master of Science, Coventry University"
                ].map((credential, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2 group"
                  >
                    <span 
                      className="transition-all duration-300 group-hover:scale-125 mt-1"
                      style={{ color: GREEN }}
                    >
                      ✓
                    </span>
                    <span className="transition-colors duration-300 group-hover:text-gray-800" style={{ color: "#444" }}>
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default About;