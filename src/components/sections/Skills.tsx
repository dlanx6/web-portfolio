import { motion } from "motion/react";
import { CodeXml, Layout, Server, Database, Link, Wrench } from "lucide-react";

const skills = [
  { 
    icon: CodeXml, 
    title: "Languages",
    list: "JavaScript, TypeScript, Python, HTML, CSS",
  },
  {
    icon: Layout,
    title: "Frontend",
    list: "Next.js, React, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    list: "Node.js, Express, Flask, REST APIs",
  },
  {
    icon: Database,
    title: "Database",
    list: "PostgreSQL, MongoDB, MySQL, Drizzle ORM",
  },
  {
    icon: Wrench,
    title: "Tools",
    list: "Git, GitHub, Postman, NPM, PNPM, Vite, VS Code, Vercel",
  },
  {
    icon: Link,
    title: "Web3",
    list: "Solidity, Foundry, ERC-721, ZKSync",
  },
]

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-15">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-md">1.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Skills and Tools</h2>
            <div className="h-px bg-border flex-1 max-w-50" />
          </div>

          {/* Skills Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="group p-6 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 hover:glow-card transition-all duration-300"
              >
                <skill.icon className="group w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300"  />
                <h3 className="font-semibold text-foreground mb-4">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.list}</p>
              </motion.div>
            ))}

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills;