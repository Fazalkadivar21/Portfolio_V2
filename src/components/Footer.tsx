import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, X } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
              Fazal Kadivar
            </h3>
            <p className="text-gray-400 max-w-sm">
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'https://linktr.ee/fazalkadivar21'].map((link, index) => (
                <li key={index}>
                  <a
                    href={link === 'https://linktr.ee/fazalkadivar21' ? link : `#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    target={link === 'https://linktr.ee/fazalkadivar21' ? "_blank" : "_self"}  // Optional: Open in new tab
                    rel={link === 'https://linktr.ee/fazalkadivar21' ? "noopener noreferrer" : undefined}  // For security with external links
                  >
                    {link === 'https://linktr.ee/fazalkadivar21' ? 'Contact' : link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: "https://github.com/fazalkadivar21" },
                { Icon: Linkedin, href: "https://linkedin.com/in/fazalkadivar21" },
                { Icon: X, href: "https://X.com/fazalkadivar21" },
                { Icon: Mail, href: "mailto:work.fazalk@gmail.com" }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            © {currentYear} Fazal Kadivar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
