import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, X } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#4338ca"
        wireframe
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <div id="home" className="relative h-screen bg-black overflow-hidden">
      {/* 3D Background */}
    
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 3.5]}}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Fazal Kadivar
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer & Devops Engineer
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { Icon: Github, href: "https://github.com/fazalkadivar21" },
            { Icon: Linkedin, href: "https://linkedin.com/in/fazalkadivar21" },
            { Icon: X, href: "https://x.com/fazalkadivar21" },
            { Icon: Mail, href: "mailto:work.fazal@gmail.com" }
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
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <p className="text-sm text-gray-400">Scroll to explore</p>
        </motion.div>
      </div>
    </div>
  );
}
