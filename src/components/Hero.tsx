import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, ShoppingBag, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <motion.img
          src={heroBg}
          alt="Authentic Maharashtrian Thali"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-secondary/50" />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--secondary)/0.6)_100%)]" />
      </motion.div>

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-saffron/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-maharashtra-gold/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `radial-gradient(circle, hsl(var(--saffron) / ${0.4 + Math.random() * 0.4}), transparent)`,
            }}
            animate={{
              y: [0, -60 - Math.random() * 40, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          {/* Decorative line */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.9, duration: 0.6 }}
          >
            <motion.span 
              className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-saffron"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 3.1, duration: 0.8 }}
            />
            <motion.span 
              className="text-saffron text-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ✦
            </motion.span>
            <motion.span 
              className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-saffron"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 3.1, duration: 0.8 }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-saffron-light text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
          >
            Authentic Maharashtrian Pure Veg Taste
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-8xl text-maharashtra-cream mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.3 }}
            >
              Shree Krishna
            </motion.span>
            <motion.span 
              className="block text-saffron mt-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5 }}
              style={{
                textShadow: "0 0 40px hsl(var(--saffron) / 0.5), 0 0 80px hsl(var(--saffron) / 0.3)"
              }}
            >
              Pure Veg Restaurant
            </motion.span>
          </motion.h1>

          {/* Restaurant Name */}
          <motion.p
            className="text-maharashtra-cream/80 text-lg md:text-xl font-body mb-10 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
          >
            by <span className="text-saffron-light font-medium">Maratha Curry</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8 }}
          >
            <motion.a
              href="#order"
              className="btn-shine flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-glow transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag size={20} />
              Order Online
            </motion.a>
            <motion.a
              href="#book"
              className="btn-shine flex items-center gap-2 bg-maharashtra-cream/10 backdrop-blur-md border border-saffron/40 text-maharashtra-cream px-8 py-4 rounded-full text-lg font-medium hover:bg-saffron/20 hover:border-saffron transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar size={20} />
              Book a Table
            </motion.a>
            <motion.a
              href="https://maps.app.goo.gl/ueRb4jzj173RCQWL8?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-saffron hover:text-saffron-light transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={20} className="group-hover:animate-bounce" />
              Get Directions
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-saffron/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
