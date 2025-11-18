import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GREEN = "#34c759";

const testimonials = [
  {
    name: "Shiva Kumar Kumar",
    role: "",
    content:
      "I visited Dr. Ramyakrishna for severe shoulder pain due to a sports injury. Despite undergoing multiple investigations elsewhere, I couldn't find the root cause or relief. However, Dr. Ramyakrishna, a highly skilled physiotherapy specialist, quickly identified the issue and provided effective treatment. Within just two days, I felt significantly better. I highly recommend Dr. Ramyakrishna to anyone in need of expert physiotherapy care."
  
  },  {
    name: "Naveen Kumar Alampally",
    role: "",
    content:
      "I will strongly suggest dr. Ramyakrishna Mamidala (Physiotherapist) madam. She listens to the complications of patients with patience and provides proper treatment. Thank you very much madam."
  },
  {
    name: "Singireddy Prathibha Reddy",
    role: "",
    content:
      "I visited Dr. Ramyakrishna with severe back pain, and I was extremely impressed with the services. The staff is not only highly skilled but also exceptionally friendly and cooperative, making the entire experience very comfortable. Thanks to the expert treatment, I am truly happy with the care I received and highly recommend Dr. Ramyakrishna to anyone seeking quality physiotherapy." 
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold mb-3 uppercase tracking-wider"
            style={{ color: GREEN }}
          >
            ⭐ Our Patients
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: GREEN }}
          >
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who got better with our help
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent/30 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-bold text-primary text-lg">{testimonial.name}</div>
                  {/* No role provided */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;