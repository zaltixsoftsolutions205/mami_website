import { useState } from "react";
import { Clock, Phone, Mail, MapPin } from "lucide-react";
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
    <section id="hours" className="py-20" style={{ background: "#f8fbfc" }}>
      <div className="container px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6" style={{ color: SKY_BLUE }}>
          Schedule an Appointment
        </h2>
        <p className="mb-6" style={{ color: "#222" }}>
          Online Consultation: Connect from anywhere
        </p>
        <p className="mb-12" style={{ color: "#222" }}>
          💻 Meet your healthcare provider online from the comfort of your home. Once you book, you’ll receive a secure video link via email for your scheduled consultation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-3 border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="date">Select Date</label>
              <input
                id="date"
                name="date"
                type="date"
                className="w-full p-3 border rounded"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="time">Select Time</label>
              <input
                id="time"
                name="time"
                type="time"
                className="w-full p-3 border rounded"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="concern">Describe Your Concern</label>
            <textarea
              id="concern"
              name="concern"
              placeholder="Describe your health concern..."
              className="w-full p-3 border rounded h-24"
              value={formData.concern}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent-dark transition">
            Confirm Booking
          </button>
        </form>

        <div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: SKY_BLUE }}>
            Get in Touch
          </h3>
          <p className="mb-4" style={{ color: "#222" }}>
            <strong>About Our Clinic</strong><br />
            Our dedicated healthcare professionals have supported hundreds of patients on their journey to better health. We strive to provide personalized care with compassion, expertise, and attention to detail.
          </p>
          <h4 className="text-xl font-semibold mb-2" style={{ color: GREEN }}>
            Consultation Hours
          </h4>
          <ul className="mb-4 list-disc list-inside text-muted-foreground">
            <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
            <li>Saturday: 10:00 AM – 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <p><strong>Phone:</strong> +91 95330 79819</p>
          <p><strong>Email:</strong> <a href="mailto:drramyakrishna.expert@gmail.com" className="text-accent underline">drramyakrishna.expert@gmail.com</a></p>
          <p><strong>Follow Us:</strong> @mamiphysiocare (Twitter, Instagram, Facebook)</p>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
