import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "About", path: "/about" },
  { name: "Journal", path: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter z-50">
          FILMIC<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-widest font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="text-xs uppercase tracking-widest font-medium border border-white/20 px-5 py-2.5 rounded-sm hover:bg-white/5 transition-colors"
          >
            Book Project
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-2xl font-serif transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="text-lg font-serif text-primary mt-4 border-b border-primary pb-1"
            >
              Start Your Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
