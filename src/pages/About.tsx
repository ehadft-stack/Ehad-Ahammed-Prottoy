import { PageTransition } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 container mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            We believe in the power of <span className="text-primary italic">visual storytelling</span>.
          </h1>
          <p className="text-xl text-text-secondary font-light max-w-2xl leading-relaxed">
            Filmic Prottoy is a premium media production company dedicated to crafting cinematic narratives that leave a lasting impact.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-10 px-6 md:px-12 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          <div className="md:col-span-2 relative overflow-hidden bg-surface">
            <img 
              src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=2000&auto=format&fit=crop" 
              alt="Behind the scenes" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="relative overflow-hidden bg-surface">
              <img 
                src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&w=1000&auto=format&fit=crop" 
                alt="Camera equipment" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative overflow-hidden bg-surface">
              <img 
                src="https://images.unsplash.com/photo-1527011045970-1a22a4b8b4ac?q=80&w=1000&auto=format&fit=crop" 
                alt="Editing process" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-6">Our Mission</h2>
              <h3 className="text-3xl font-serif mb-6 leading-snug">To transform brand messages into visually powerful films that connect on a human level.</h3>
              <p className="text-text-secondary leading-relaxed">
                We don't just point a camera and shoot. We dig deep into the core of your brand, uncovering the authentic stories that resonate with your audience. Our mission is to elevate your narrative through uncompromising cinematic quality and creative vision.
              </p>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-6">Our Philosophy</h2>
              <h3 className="text-3xl font-serif mb-6 leading-snug">Every frame must serve the story. Aesthetics without substance is just noise.</h3>
              <p className="text-text-secondary leading-relaxed">
                We approach every project with a filmmaker's mindset. Lighting, composition, sound design, and pacing are meticulously crafted to evoke emotion and drive action. We believe that true cinematic impact comes from the perfect marriage of technical excellence and compelling storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Visionaries</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">A collective of directors, cinematographers, and editors obsessed with the craft of filmmaking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Prottoy Ehad", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" },
              { name: "Sarah Jenkins", role: "Head of Production", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
              { name: "David Chen", role: "Lead Cinematographer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-background">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
