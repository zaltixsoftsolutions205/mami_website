import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import VideoConsultation from "@/components/VideoConsultation";
import Testimonials from "@/components/Testimonials";
import WorkingHours from "@/components/WorkingHours";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <VideoConsultation />
      <Testimonials />
      <WorkingHours />
      <Footer />
    </div>
  );
};

export default Index;
