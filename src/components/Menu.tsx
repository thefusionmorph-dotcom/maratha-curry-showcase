import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import thaliImg from '@/assets/thali.jpg';
import curryImg from '@/assets/curry.jpg';
import sweetsImg from '@/assets/sweets.jpg';

const categories = [
  { id: 'thali', name: 'Thali', image: thaliImg },
  { id: 'sabji', name: 'Sabji', image: curryImg },
  { id: 'rice', name: 'Rice', image: thaliImg },
  { id: 'starters', name: 'Starters', image: curryImg },
  { id: 'sweets', name: 'Sweets', image: sweetsImg },
  { id: 'beverages', name: 'Beverages', image: sweetsImg },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('thali');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activeImage = categories.find(c => c.id === activeCategory)?.image || thaliImg;

  return (
    <section id="menu" className="py-20 md:py-32 bg-earth-brown relative overflow-hidden">
      {/* Warli Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="warli-pattern w-full h-full" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron text-sm tracking-widest uppercase font-medium">
            Our Specialties
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-maharashtra-cream mt-2 mb-4">
            Explore Our Menu
          </h2>
          <div className="maharashtra-divider w-32 mx-auto mb-6" />
          <p className="text-maharashtra-cream/70 max-w-xl mx-auto">
            Discover authentic Maharashtrian dishes prepared with traditional recipes and fresh ingredients
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-saffron text-primary-foreground shadow-glow'
                  : 'bg-maharashtra-cream/10 text-maharashtra-cream/70 hover:bg-maharashtra-cream/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            {/* Featured Image */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-card"
            >
              <img
                src={activeImage}
                alt={activeCategory}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/30 to-transparent" />
            </motion.div>

            {/* Menu Notice */}
            <motion.div
              key={`notice-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-2xl md:text-3xl text-earth-brown mb-4">
                {categories.find(c => c.id === activeCategory)?.name} Selection
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our complete menu with prices and descriptions is available on our restaurant listing.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-saffron/10 rounded-full text-saffron">
                <span className="text-sm font-medium">Menu available on Google Listing</span>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-saffron/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-maharashtra-gold/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
