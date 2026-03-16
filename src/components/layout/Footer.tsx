import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-serif font-bold tracking-tighter inline-block mb-6">
              FILMIC<span className="text-primary">.</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-xs">
              A cinematic storytelling media company that transforms brand messages into visually powerful films.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-white/50">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/portfolio" className="text-sm hover:text-primary transition-colors">Selected Work</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/process" className="text-sm hover:text-primary transition-colors">The Process</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-primary transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-white/50">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm text-text-secondary">hello@filmicprottoy.com</li>
              <li className="text-sm text-text-secondary">+1 (555) 123-4567</li>
              <li className="text-sm text-text-secondary mt-4">
                123 Cinematic Blvd,<br />
                Creative District, NY 10001
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-white/50">Newsletter</h4>
            <p className="text-sm text-text-secondary mb-4">Insights on cinematic storytelling delivered to your inbox.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-background border border-white/10 px-4 py-3 text-sm flex-1 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button type="submit" className="bg-white/10 px-4 flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Filmic Prottoy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
