import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/_ui/button";
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn("sticky top-0 z-50 transition-all duration-300", scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "", isMenuOpen ? "bg-background backdrop-blur-none border-none" : "" )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <nav className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-primary font-bold text-xl hover:opacity-85 transition-opacity tracking-wide"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {"<"}<span className="font-mono">dlanx6 </span>{"/>"}
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="font-mono text-muted-foreground hover:text-primary duration-200 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { delay: 0.7 + index * 0.1 },
                y: { delay: 0.7 + index * 0.1 },
              }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { delay: 0.7 + navLinks.length * 0.1 },
              y: { delay: 0.7 + navLinks.length * 0.1 },
            }}
          >
            <Button variant="outline" className="text-base" asChild>
              <a href="#" target="_blank" rel="noreferrer noopener">
                Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground py-2"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full inset-x-0 md:hidden bg-background/90 backdrop-blur-md border-b border-border/50"
          >
            <div className="container px-6 py-8 flex flex-col items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="w-100 text-lg text-center font-mono text-muted-foreground hover:text-primary hover:bg-muted-foreground/10 rounded-md py-2 duration-200 transition-colors"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    opacity: { delay: index * 0.1 },
                    x: { delay: index * 0.1 },
                  }}
                  whileTap={{
                    scale: 0.9,
                    backgroundColor: "hsla(200 10% 50% 0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-primary">{index + 1}. </span>
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <Button
                  variant="outline"
                  className="mt-4 transition-opacity"
                  asChild
                >
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Resume
                  </a>
                </Button>
              </motion.div>              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
