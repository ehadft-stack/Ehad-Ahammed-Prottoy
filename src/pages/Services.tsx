import { PageTransition } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Commercial Production",
    desc: "High-end commercials designed to captivate audiences and drive conversions across all platforms. We handle everything from concept development to final delivery.",
    useCases: ["TV Commercials", "Digital Ad Campaigns", "Product Launches"],
    deliverables: ["Hero Video (30s/60s)", "Cutdowns (15s/6s)", "Social Media Formats"],
    img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Brand Films",
    desc: "Cinematic documentaries that reveal the heart of your brand and build deep emotional connections. Perfect for 'About Us' pages and investor presentations.",
    useCases: ["Company Overviews", "Founder Stories", "Manifesto Videos"],
    deliverables: ["Long-form Brand Film (2-5 mins)", "Teaser Trailers", "Photography Stills"],
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Social Media Ads",
    desc: "Fast-paced, attention-grabbing content optimized for the scroll. We create thumb-stopping visuals tailored for Instagram, TikTok, and LinkedIn.",
    useCases: ["UGC-style Ads", "Motion Graphics", "Short-form Storytelling"],
    deliverables: ["Vertical Videos (9:16)", "Square Videos (1:1)", "A/B Testing Variations"],
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Documentary Storytelling",
    desc: "In-depth, journalistic storytelling that explores complex subjects, highlights social impact, or documents significant events with cinematic flair.",
    useCases: ["NGO Campaigns", "Corporate Social Responsibility", "Event Coverage"],
    deliverables: ["Short Documentary (10-20 mins)", "Interviews", "B-Roll Packages"],
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
  }
];

export function Services() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Our Services</h1>
        <p className="text-xl text-text-secondary font-light max-w-2xl mx-auto">
          Comprehensive media production tailored to elevate your brand's narrative.
        </p>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden bg-surface relative group">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-serif mb-6">{service.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-8">{service.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Ideal For</h4>
                      <ul className="space-y-2">
                        {service.useCases.map((item, i) => (
                          <li key={i} className="text-sm text-white/80 flex items-start">
                            <span className="text-primary mr-2">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Deliverables</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="text-sm text-white/80 flex items-start">
                            <span className="text-primary mr-2">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link to="/book">
                    <Button variant="outline" className="group">
                      Inquire About This Service <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 bg-surface text-center px-6">
        <h2 className="text-4xl font-serif mb-6">Need a custom solution?</h2>
        <p className="text-text-secondary mb-10 max-w-xl mx-auto">We build bespoke production packages tailored to your specific goals and budget.</p>
        <Link to="/contact">
          <Button>Contact Us</Button>
        </Link>
      </section>
    </PageTransition>
  );
}
