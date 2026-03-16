import { PageTransition } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Film, Video, Camera, Award } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export function Home() {
  useSEO({
    title: "Cinematic Media Production",
    description: "Filmic Prottoy is a cinematic storytelling media company that transforms brand messages into visually powerful films. We specialize in commercial video production, brand films, and social media ads.",
    keywords: "video production company, commercial video production, brand film production, corporate video production, cinematic storytelling agency",
    schema: {
      "@context": "https://schema.org",
      "@type": "VideoGallery",
      "name": "Filmic Prottoy Portfolio",
      "description": "A collection of our best cinematic video productions.",
      "provider": {
        "@type": "Organization",
        "name": "Filmic Prottoy",
        "url": "https://filmicprottoy.com"
      }
    }
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop" 
            alt="Cinematic production set" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1] max-w-5xl mx-auto">
              We Turn Stories Into <span className="text-primary italic">Cinematic Impact</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 font-light">
              Filmic storytelling for brands that want to stand out. We craft visually powerful films that connect, engage, and convert.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/book">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                <Play size={16} className="mr-2 group-hover:text-primary transition-colors" />
                Watch Our Work
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Selected Work */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Selected Work</h2>
              <p className="text-text-secondary max-w-md">A curated collection of our most impactful cinematic storytelling.</p>
            </div>
            <Link to="/portfolio" className="group flex items-center text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors">
              View All Projects <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "The Art of Silence", client: "Aura Audio", category: "Commercial", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop" },
              { title: "Urban Motion", client: "Velocity Motors", category: "Brand Film", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" },
              { title: "Beyond the Horizon", client: "Nomad Travel", category: "Documentary", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" },
              { title: "Crafted Perfection", client: "Lumina Watches", category: "Product Video", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2000&auto=format&fit=crop" }
            ].map((project, i) => (
              <Link to="/portfolio" key={i} className="group block relative overflow-hidden aspect-video bg-surface">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2">{project.category}</span>
                  <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.client}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Expertise</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Comprehensive media production services tailored to elevate your brand's narrative.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Film size={32} />, title: "Commercial Production", desc: "High-end commercials designed to captivate audiences and drive conversions across all platforms." },
              { icon: <Video size={32} />, title: "Brand Films", desc: "Cinematic documentaries that reveal the heart of your brand and build deep emotional connections." },
              { icon: <Camera size={32} />, title: "Product Videos", desc: "Visually stunning showcases that highlight the details, features, and benefits of your products." }
            ].map((service, i) => (
              <div key={i} className="p-10 border border-white/5 bg-background/50 hover:bg-background transition-colors group">
                <div className="text-white/30 group-hover:text-primary transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">{service.desc}</p>
                <Link to="/services" className="text-xs uppercase tracking-widest font-bold text-white/50 group-hover:text-white transition-colors flex items-center">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/20 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 max-w-3xl mx-auto">Ready to tell your story?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Let's collaborate to create a cinematic masterpiece that elevates your brand and drives real results.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Book a Project
            </Button>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
