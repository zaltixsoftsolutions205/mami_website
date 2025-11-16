import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const SKY_BLUE = "#24b8e7";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" style={{ backgroundColor: SKY_BLUE }}>
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Medical Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold" style={{ color: "#fff" }}>Dr. Ramyakrishna</h3>
                <p className="text-sm opacity-90" style={{ color: "#e6f0fa" }}>Physiatrist & Pain Management</p>
              </div>
            </div>
            <p className="opacity-80 mb-4" style={{ color: "#e0ebff" }}>
              Providing expert physiatry care and pain management services to help you live
              a pain-free, active life.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full transition-colors"
                  aria-label={Icon.name}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#e6f0fa"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#e0ebff";
                    e.currentTarget.style.color = SKY_BLUE;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#e6f0fa";
                  }}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#e0ebff" }}>Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity" style={{ color: "#c7d9ff" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity" style={{ color: "#c7d9ff" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:opacity-100 transition-opacity" style={{ color: "#c7d9ff" }}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:opacity-100 transition-opacity" style={{ color: "#c7d9ff" }}>
                  Working Hours
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#e0ebff" }}>Resources</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "#c7d9ff" }}>
                  Patient Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "#c7d9ff" }}>
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "#c7d9ff" }}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "#c7d9ff" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center opacity-80" style={{ borderColor: "#a0beff" }}>
          <p style={{ color: "#d6e3ff" }}>
            &copy; {new Date().getFullYear()} Dr.Ramyakrishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
