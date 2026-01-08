import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/_ui/button";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh - 72px)] relative flex flex-col items-center px-6 py-15">
      {/* Background Glow */}
      <div className="absolute top-1/5 inset-x-0 mx-auto rounded-full w-150 h-100 bg-radial from-primary/15 to-primary/13 blur-[120px] pointer-events-none" />

      <div className="container relative md:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 md:space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient tracking-tight"
          >
            Ronald Requioma
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            An aspiring full-stack developer with passion for learning
            technologies and building innovative solutions, specializing in web
            development currently with Next.js and React.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                className="text-md md:text-lg py-6 px-6 md:px-7 glow-button"
                size="lg"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <Button
              className="text-md md:text-lg py-6 px-6 md:px-7 bg-transparent hover:bg-muted-foreground"
              variant="outline"
              size="lg"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              aria-label="Github"
              href="https://github.com/dlanx6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/dlanx6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute -bottom-10 md:bottom-0  left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [32, 38, 32] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
