import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/footerlogo.png";

const SKY_BLUE = "#24b8e7";

const Footer = () => {
  return (
    <footer
      className="bg-primary text-primary-foreground"
      style={{ backgroundColor: SKY_BLUE }}
    >
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* LOGO + ABOUT */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">

              {/* Bigger Logo */}
              <img
                src={logo}
                alt="Medical Logo"
                className="h-28 w-28 object-contain"
                style={{
                  border: "none",
                  borderRadius: "0px",
                  boxShadow: "none",
                }}
              />

              <div>
                <h3 className="text-xl font-bold" style={{ color: "#fff" }}>
                  Dr. Ramyakrishna Mamidala
                </h3>
                <p className="text-sm opacity-90" style={{ color: "#e6f0fa" }}>
                  Senior Physiotherapist & MIAP(India), HCPC (UK), DHA (Dubai)
                </p>
              </div>
            </div>

            <p className="opacity-80 mb-4" style={{ color: "#e0ebff" }}>
              Offering personalized physiotherapy care to help you reduce pain,
              restore mobility, and return to a healthier, active lifestyle.
            </p>

            {/* SOCIAL ICONS WITH LINKS */}
            <div className="flex gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/mamiphysiocare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                aria-label="Facebook"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#e6f0fa",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e0ebff";
                  e.currentTarget.style.color = SKY_BLUE;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#e6f0fa";
                }}
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Email (Replaced Twitter) */}
              <a
                href="mailto:drramyakrishna.expert@gmail.com"
                className="p-2 rounded-full transition-colors"
                aria-label="Email"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#e6f0fa",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e0ebff";
                  e.currentTarget.style.color = SKY_BLUE;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#e6f0fa";
                }}
              >
                <Mail className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mamiphysiocare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                aria-label="Instagram"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#e6f0fa",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e0ebff";
                  e.currentTarget.style.color = SKY_BLUE;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#e6f0fa";
                }}
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dr-ramyakrishna-mamidala-653996138/?originalSubdomain=ae"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#e6f0fa",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e0ebff";
                  e.currentTarget.style.color = SKY_BLUE;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#e6f0fa";
                }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#e0ebff" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#about" style={{ color: "#c7d9ff" }}>About Me</a></li>
              <li><a href="#services" style={{ color: "#c7d9ff" }}>Services</a></li>
              <li><a href="#testimonials" style={{ color: "#c7d9ff" }}>Testimonials</a></li>
              <li><a href="#hours" style={{ color: "#c7d9ff" }}>Working Hours</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#e0ebff" }}>
              Resources
            </h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" style={{ color: "#c7d9ff" }}>Patient Portal</a></li>
              <li><a href="#" style={{ color: "#c7d9ff" }}>Insurance</a></li>
              <li><a href="#" style={{ color: "#c7d9ff" }}>FAQs</a></li>
              <li><a href="#" style={{ color: "#c7d9ff" }}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 text-center opacity-80"
          style={{ borderColor: "#a0beff" }}
        >
          <p style={{ color: "#d6e3ff" }}>
            &copy; {new Date().getFullYear()} Dr. Ramyakrishna Mamidala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
