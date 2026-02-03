import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-maharashtra-cream">
      {/* Paithani Border */}
      <div className="paithani-border h-1" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="font-display text-3xl md:text-4xl text-saffron text-glow mb-2">
              श्री कृष्ण
            </h2>
            <p className="text-maharashtra-cream/60 text-sm tracking-widest uppercase">
              Pure Veg Restaurant by Maratha Curry
            </p>
          </motion.div>

          {/* Maharashtrian Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <p className="font-display text-2xl md:text-3xl text-maharashtra-gold">
              "स्वाद जो मन जिंकतो!"
            </p>
          </motion.div>

          {/* Divider */}
          <div className="maharashtra-divider w-48 mx-auto mb-8" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-maharashtra-cream/50"
          >
            <span>© {new Date().getFullYear()} Shree Krishna Pure Veg Restaurant</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-maharashtra-red fill-maharashtra-red" /> in Maharashtra
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
