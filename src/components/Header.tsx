import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// Change this to match your actual logo file
import drRamyaLogo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Working Hours", href: "#hours" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Logo (removed all rounding and backgrounds) */}
          <img
            src={drRamyaLogo}
            alt="Medical Logo"
            style={{
              height: "48px",
              width: "auto",
              background: "none",
              border: "none",
              borderRadius: 0,
              boxShadow: "none",
              padding: 0,
              margin: 0
            }}
          />
          <div>
            {/* Doctor name: purple and teal */}
            <h1 className="text-2xl font-bold">
              <span style={{ color: "#25C5DA" }}>DR. RAMYA</span>{" "}
              <span style={{ color: "#19ae57ff" }}>KRISHNA</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Physiatrist & Pain Management
            </p>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            size="lg"
            className="ml-4 rounded-none bg-transparent hover:bg-primary/10"
            style={{ borderRadius: 0, background: "transparent", boxShadow: "none" }}
          >
            Book Appointment
          </Button>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{ borderRadius: 0, background: "none", boxShadow: "none" }}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container flex flex-col gap-4 py-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              size="lg"
              className="mt-2 rounded-none bg-transparent hover:bg-primary/10"
              style={{ borderRadius: 0, background: "transparent", boxShadow: "none" }}
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
