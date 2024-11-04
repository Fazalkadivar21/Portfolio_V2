import { motion } from 'framer-motion';
import { Code, Palette, Globe } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Proficient in building scalable web applications using modern technologies like MongoDB, Express, React, Next, Node.js, and TypeScript."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces with a focus on user experience and accessibility."
  },
  {
    icon: Globe,
    title: "DevOps",
    description: "Experience in deploying and managing cloud infrastructure using AWS, Docker, and Kubernetes."
  }
];

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-black py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            I'm a full stack developer with a passion for building web applications that are fast, secure, and user-friendly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
            >
              <div className="mb-4 inline-block bg-indigo-500/20 p-3 rounded-xl">
                <skill.icon size={32} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://linktr.ee/fazalkadivar21" 
            target="_blank"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
