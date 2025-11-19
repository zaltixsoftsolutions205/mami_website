import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Animation */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "right center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
        <a
          href="https://wa.me/919533079819"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          Chat on WhatsApp
        </a>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-2xl">
          <div className="bg-background/95 backdrop-blur-sm p-6 md:p-12 rounded-lg shadow-2xl border-l-4 border-accent transform transition-all duration-700 hover:shadow-3xl">
            
            {/* Expert Physiotherapy Badge */}
            <div className="animate-fade-in-up">
              <p
                className="text-xs md:text-sm font-semibold mb-3 uppercase tracking-wider"
                style={{ color: "#000" }}
              >
                Expert Physiotherapy
              </p>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2 mb-4">
              <h2
                className="text-3xl md:text-6xl font-bold animate-fade-in-up"
                style={{ color: "#24b8e7", animationDelay: "0.1s" }}
              >
                Restore Movement,
              </h2>
              <h2
                className="text-3xl md:text-6xl font-bold animate-fade-in-up"
                style={{ color: "#34c759", animationDelay: "0.2s" }}
              >
                Relieve Pain,
              </h2>
              <h2
                className="text-3xl md:text-6xl font-bold animate-fade-in-up"
                style={{ color: "#24b8e7", animationDelay: "0.3s" }}
              >
                Reclaim Your Life
              </h2>
            </div>

            {/* Tagline Section */}
            <div className="mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p
                className="text-lg md:text-xl italic text-center leading-relaxed font-medium transform hover:scale-105 transition-transform duration-300"
                style={{ color: "#666" }}
              >
                "A physiotherapist has the brain of a scientist, 
                <br className="hidden sm:block" />
                the heart of a humanist, and the hands of an Artist"
              </p>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p
                className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
                style={{ color: "#000" }}
              >
                Personalized physiotherapy designed to help you recover, strengthen, and move with confidence. 
                Experience dedicated rehabilitation and effective pain relief — whether through hands-on care 
                or convenient video consultations.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Button
                size="lg"
                className="text-white bg-blue-400 hover:bg-blue-500 group w-full sm:w-auto transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Video Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl md:text-2xl font-bold mb-1" style={{ color: "#34c759" }}>5.0</div>
                <div className="text-xs md:text-sm" style={{ color: "#000" }}>Rating</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl md:text-2xl font-bold mb-1" style={{ color: "#34c759" }}>500+</div>
                <div className="text-xs md:text-sm" style={{ color: "#000" }}>Patients Treated</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl md:text-2xl font-bold mb-1" style={{ color: "#34c759" }}>Fast</div>
                <div className="text-xs md:text-sm" style={{ color: "#000" }}>Response Time</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Hero;