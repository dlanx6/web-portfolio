import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-15">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-md">2.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
            <div className="h-px bg-border flex-1 max-w-50" />
          </div>
        </motion.div> 
      </div>
    </section>
  )
}

export default Projects;