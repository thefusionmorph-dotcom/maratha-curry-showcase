import { motion } from 'framer-motion';
import { MapPin, Calendar, ShoppingBag, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Maharashtrian Pattern Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-brown/60 via-earth-brown/40 to-earth-brown/80" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-1 h-1 rounded-full bg-saffron/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          {/* Subtitle */}
          <motion.p
            className="text-saffron-light text-sm md:text-base tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            Authentic Maharashtrian Pure Veg Taste
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl text-maharashtra-cream mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2 }}
          >
            Shree Krishna
            <span className="block text-saffron text-glow">Pure Veg Restaurant</span>
          </motion.h1>

          {/* Restaurant Name */}
          <motion.p
            className="text-maharashtra-cream/70 text-lg md:text-xl font-body mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
          >
            by Maratha Curry
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6 }}
          >
            <a
              href="#order"
              className="btn-shine flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-glow transition-all"
            >
              <ShoppingBag size={20} />
              Order Online
            </a>
            <a
              href="#book"
              className="btn-shine flex items-center gap-2 bg-maharashtra-cream/10 backdrop-blur-sm border border-saffron/50 text-maharashtra-cream px-8 py-4 rounded-full text-lg font-medium hover:bg-saffron/20 transition-all"
            >
              <Calendar size={20} />
              Book a Table
            </a>
            <a
              href="https://maps.app.goo.gl/ueRb4jzj173RCQWL8?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-saffron hover:text-saffron-light transition-colors"
            >
              <MapPin size={20} />
              Get Directions
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <motion.div
            className="scroll-indicator text-saffron/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
