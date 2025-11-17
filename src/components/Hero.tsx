import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-2xl">
          <div className="bg-background/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl border-l-4 border-accent">
            <p className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{color: "#000"}}>
              Expert Physiotherapy
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-2" style={{color: "#24b8e7"}}>
              Restore Movement,
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold mb-2" style={{color: "#34c759"}}>
              Relieve Pain,
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{color: "#24b8e7"}}>
              Reclaim Your Life
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{color: "#000"}}>
              Personalized physiotherapy designed to help you recover, strengthen, and move freely.
              Experience expert rehabilitation and pain management — from comprehensive in-person care
              to convenient video consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-base group">
                Book Video Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold mb-1" style={{color: "#34c759"}}>5.0</div>
                <div className="text-sm" style={{color: "#000"}}>Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1" style={{color: "#34c759"}}>500+</div>
                <div className="text-sm" style={{color: "#000"}}>Patients</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1" style={{color: "#34c759"}}>Fast</div>
                <div className="text-sm" style={{color: "#000"}}>Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
