import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-hero"
        >
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-saffron/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main Loader Content */}
          <div className="text-center relative z-10">
            {/* Saffron Glow Circle */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-saffron opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Restaurant Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.h1
                className="font-display text-3xl md:text-5xl text-saffron text-glow mb-2"
                animate={{ textShadow: ['0 0 20px hsl(28 95% 50% / 0.5)', '0 0 40px hsl(28 95% 50% / 0.8)', '0 0 20px hsl(28 95% 50% / 0.5)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                श्री कृष्ण
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-maharashtra-cream/80 font-body text-sm tracking-widest uppercase"
              >
                Pure Veg Restaurant
              </motion.p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="h-0.5 bg-gradient-saffron mx-auto mt-24 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
