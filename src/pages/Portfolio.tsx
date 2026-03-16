import { useState } from "react";
import { PageTransition } from "@/components/ui/PageTransition";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Commercial", "Brand Film", "Documentary", "Social"];

const projects = [
  { id: 1, title: "The Art of Silence", client: "Aura Audio", category: "Commercial", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, title: "Urban Motion", client: "Velocity Motors", category: "Brand Film", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" },
  { id: 3, title: "Beyond the Horizon", client: "Nomad Travel", category: "Documentary", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" },
  { id: 4, title: "Crafted Perfection", client: "Lumina Watches", category: "Commercial", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2000&auto=format&fit=crop" },
  { id: 5, title: "The Future is Now", client: "TechNova", category: "Social", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" },
  { id: 6, title: "Roots", client: "Organic Farms", category: "Documentary", img: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2000&auto=format&fit=crop" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <section className="pt-40 pb-10 px-6 md:px-12 container mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Selected Work</h1>
        <p className="text-xl text-text-secondary font-light max-w-2xl mb-16">
          A showcase of our cinematic storytelling across various industries and formats.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest font-medium px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat 
                  ? "border-primary bg-primary text-background" 
                  : "border-white/20 text-text-secondary hover:border-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
              >
                <Link to={`/portfolio/${project.id}`} className="group block relative overflow-hidden aspect-[4/5] bg-surface cursor-pointer">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2">{project.category}</span>
                    <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.client}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageTransition>
  );
}
