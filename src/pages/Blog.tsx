import { PageTransition } from "@/components/ui/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why Cinematic Storytelling is the Future of B2B Marketing",
    category: "Strategy",
    date: "Oct 12, 2026",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    excerpt: "Move beyond boring corporate videos. Discover how narrative-driven content builds trust and accelerates sales cycles."
  },
  {
    title: "Behind the Scenes: Shooting 'The Art of Silence'",
    category: "Production",
    date: "Sep 28, 2026",
    img: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=1000&auto=format&fit=crop",
    excerpt: "A deep dive into the lighting setups, camera choices, and creative decisions behind our award-winning commercial."
  },
  {
    title: "The Psychology of Color Grading in Brand Films",
    category: "Post-Production",
    date: "Sep 15, 2026",
    img: "https://images.unsplash.com/photo-1527011045970-1a22a4b8b4ac?q=80&w=1000&auto=format&fit=crop",
    excerpt: "How subtle shifts in color temperature and contrast can subconsciously influence viewer emotion and brand perception."
  },
  {
    title: "5 Essential Elements of a High-Converting Product Video",
    category: "Tips",
    date: "Aug 30, 2026",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop",
    excerpt: "Stop listing features. Learn how to showcase your product's value through dynamic visuals and compelling narratives."
  }
];

export function Blog() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12 container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Journal</h1>
          <p className="text-xl text-text-secondary font-light">
            Insights, strategies, and behind-the-scenes looks at the art and business of cinematic production.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden bg-surface mb-6">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs uppercase tracking-widest font-bold">
                  <span className="text-primary">{post.category}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/50">{post.date}</span>
                </div>
                <h2 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">{post.excerpt}</p>
                <Link to="#" className="text-sm uppercase tracking-widest font-medium flex items-center text-white/70 group-hover:text-white transition-colors">
                  Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
