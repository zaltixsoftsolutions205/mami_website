import { Video, Calendar, Link as LinkIcon, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GREEN = "#34c759";

const steps = [
  {
    icon: Calendar,
    number: "1",
    title: "Book Your Slot",
    description: "Fill the form and choose 'Video Call'. Pick a date and time that works for you."
  },
  {
    icon: LinkIcon,
    number: "2",
    title: "We Send You a Link",
    description: "After booking, we send you a video call link by email. Just click the link at your scheduled time."
  },
  {
    icon: Video,
    number: "3",
    title: "Start Your Video Call",
    description: "No special software needed! Just click and join. Talk to our doctor face-to-face from home."
  },
  {
    icon: FileText,
    number: "4",
    title: "Get Your Plan",
    description: "Get advice, exercises, and a treatment plan. We'll help you know what to do at home."
  }
];

const VideoConsultation = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: GREEN }}>
            💻 Video Consultation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: GREEN }}>
            How Video Consultation Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get professional help from home. It's easy, safe, and saves your time!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="p-4 rounded-lg bg-accent/10 text-accent w-fit mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: GREEN }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: GREEN }}>
                What You Need
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: GREEN }}>
                    Equipment:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Phone, tablet, or computer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Camera and microphone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Internet connection</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: GREEN }}>
                    Preparation:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Wear comfortable clothes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Join from a quiet place</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Test your internet before</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoConsultation;
