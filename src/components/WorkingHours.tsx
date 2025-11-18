import { useState } from "react";
import { Clock, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GREEN = "#34c759";
const SKY_BLUE = "#24b8e7";

const WorkingHours = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    time: "",
    concern: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking confirmed!");
  };

  return (
    <section id="hours" className="py-12 md:py-20" style={{ background: "#f8fbfc" }}>
      <div className="container px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center" style={{ color: SKY_BLUE }}>
          Schedule an Appointment
        </h2>
        <p className="mb-8 md:mb-12 text-center text-base md:text-lg" style={{ color: "#222" }}>
          💻 Online Consultation: Connect comfortably from your home.  
          After booking, you'll receive a secure video link for your session.
        </p>

        {/* SIDE BY SIDE LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT: FORM */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 font-semibold text-sm md:text-base" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded text-sm md:text-base"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-sm md:text-base" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full p-3 border rounded text-sm md:text-base"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-semibold text-sm md:text-base" htmlFor="date">
                    Select Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="w-full p-3 border rounded text-sm md:text-base"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-sm md:text-base" htmlFor="time">
                    Select Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    className="w-full p-3 border rounded text-sm md:text-base"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-sm md:text-base" htmlFor="concern">
                  Describe Your Concern
                </label>
                <textarea
                  id="concern"
                  name="concern"
                  placeholder="Describe your health concern..."
                  className="w-full p-3 border rounded h-24 text-sm md:text-base"
                  value={formData.concern}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent-dark transition text-sm md:text-base"
              >
                Confirm Booking
              </button>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="p-6 md:p-8 bg-white rounded-lg shadow-lg border">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: SKY_BLUE }}>
              Get in Touch
            </h3>

            <p className="mb-4 md:mb-6 text-base md:text-lg" style={{ color: "#222" }}>
              <strong>About Me</strong><br />
              My goal is to support your recovery with care, clarity, and effective physiotherapy techniques that truly make a difference.
            </p>

            <h4 className="text-lg md:text-xl font-semibold mb-2" style={{ color: GREEN }}>
              Consultation Hours
            </h4>
            <ul className="mb-4 md:mb-6 list-disc list-inside text-muted-foreground text-sm md:text-base">
              <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
              <li>Saturday: 10:00 AM – 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>

            <div className="space-y-3 text-base md:text-lg">
              <p className="text-sm md:text-base"><strong>Phone:</strong> +91 95330 79819</p>

              <p className="text-sm md:text-base">
                <strong>Email:</strong>{" "}
                <a href="mailto:drramyakrishna.expert@gmail.com" className="text-accent underline break-all">
                  drramyakrishna.expert@gmail.com
                </a>
              </p>

              <p className="text-sm md:text-base"><strong>Follow Me:</strong></p>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-4 md:gap-5 mt-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mamiphysiocare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  <Instagram size={24} className="md:size-7" color={SKY_BLUE} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/mamiphysiocare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  <Facebook size={24} className="md:size-7" color={SKY_BLUE} />
                </a>

                {/* Email */}
                <a
                  href="mailto:drramyakrishna.expert@gmail.com"
                  className="hover:opacity-70 transition"
                >
                  <Mail size={24} className="md:size-7" color={SKY_BLUE} />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919533079819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
