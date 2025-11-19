import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import drRamyaLogo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#hours" },
  ];

  const handleBookAppointment = () => {
    // Scroll to contact section
    const contactSection = document.getElementById("hours");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Logo */}
          <img
            src={drRamyaLogo}
            alt="Dr. Ramya Krishna Mamidala - Senior Physiotherapist"
            style={{
              height: "60px",
              width: "auto",
              background: "none",
              border: "none",
              borderRadius: 0,
              boxShadow: "none",
              padding: 0,
              margin: 0
            }}
            className="md:h-12"
          />

          {/* Doctor Info */}
          <div className="max-w-[160px] sm:max-w-[220px] md:max-w-none">
            <h1 className="text-xs sm:text-sm md:text-2xl font-bold leading-tight">
              <span style={{ color: "#25C5DA" }} className="whitespace-nowrap">DR. RAMYA KRISHNA</span>{" "}
              <span style={{ color: "#19ae57ff" }} className="whitespace-nowrap">MAMIDALA</span>
            </h1>

            {/* Updated Professional Details */}
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
              Senior Physiotherapist
            </p>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight">
              MIAP • HCPC • DHA
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              style={{ color: "#24b8e7" }} // Sky blue color
            >
              {item.label}
            </a>
          ))}
          <Button
            size="lg"
            className="ml-4 rounded-none hover:bg-green-600 transition-colors"
            style={{ 
              borderRadius: 0, 
              background: "#34c759", // Green color
              color: "white",
              boxShadow: "none",
              border: "none"
            }}
            onClick={handleBookAppointment}
          >
            Book Appointment
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-none p-2 hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{ borderRadius: 0, background: "none", boxShadow: "none" }}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm animate-in slide-in-from-top duration-300">
          <nav className="container flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium hover:text-primary transition-colors py-3 px-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 rounded-lg"
                style={{ color: "#24b8e7" }} // Sky blue color
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              size="lg"
              className="mt-4 rounded-none hover:bg-green-600 transition-colors w-full"
              style={{ 
                borderRadius: 0, 
                background: "#34c759", // Green color
                color: "white",
                boxShadow: "none",
                border: "none"
              }}
              onClick={handleBookAppointment}
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;