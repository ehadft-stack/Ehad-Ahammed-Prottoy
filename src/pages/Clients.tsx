import { PageTransition } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Filmic Prottoy didn't just make a video; they captured the soul of our brand. The cinematic quality and storytelling elevated our entire marketing campaign.",
    author: "Sarah Jenkins",
    role: "CMO, Aura Audio",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Working with this team was a masterclass in professionalism. They understood our vision immediately and executed it flawlessly, exceeding all expectations.",
    author: "David Chen",
    role: "Founder, Velocity Motors",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The documentary they produced for our NGO brought tears to our eyes. It was authentic, powerful, and drove a 300% increase in donations.",
    author: "Elena Rodriguez",
    role: "Director, Global Horizons",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

export function Clients() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12 container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Our Partners</h1>
        <p className="text-xl text-text-secondary font-light max-w-2xl mx-auto">
          We collaborate with visionary brands, agencies, and organizations to tell stories that matter.
        </p>
      </section>

      {/* Logos */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="w-32 h-12 bg-white/10 rounded flex items-center justify-center text-white/30 font-serif text-sm">
                  LOGO {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-serif mb-16 text-center">What They Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 border border-white/5 bg-surface/50 relative">
                <span className="text-6xl text-primary/20 font-serif absolute top-6 left-6">"</span>
                <p className="text-text-secondary leading-relaxed mb-8 relative z-10 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-serif text-sm">{t.author}</h4>
                    <p className="text-xs text-primary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface text-center px-6">
        <h2 className="text-4xl font-serif mb-6">Join our roster of clients</h2>
        <p className="text-text-secondary mb-10 max-w-xl mx-auto">Let's create something extraordinary together.</p>
        <Link to="/book">
          <Button size="lg">Start Your Project</Button>
        </Link>
      </section>
    </PageTransition>
  );
}
