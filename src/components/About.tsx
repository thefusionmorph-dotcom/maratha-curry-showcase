import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Heart, Award } from 'lucide-react';
import curryImg from '@/assets/curry.jpg';

const features = [
  {
    icon: Leaf,
    title: 'Pure Vegetarian',
    description: 'Authentic vegetarian cuisine prepared with love and tradition',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish crafted with care and traditional recipes',
  },
  {
    icon: Award,
    title: 'Authentic Taste',
    description: 'True Maharashtrian flavors that feel like home',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-warm-beige warli-pattern relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-maharashtra-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={curryImg}
                alt="Authentic Maharashtrian Curry"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-saffron text-primary-foreground p-6 rounded-2xl shadow-glow"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              <p className="font-display text-3xl">100%</p>
              <p className="text-sm">Pure Veg</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-saffron text-sm tracking-widest uppercase font-medium">
              Our Heritage
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-earth-brown mt-2 mb-6">
              The True Taste of
              <span className="text-saffron block">Maharashtra</span>
            </h2>
            
            <div className="maharashtra-divider w-24 mb-6" />

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Welcome to Shree Krishna Pure Veg Restaurant by Maratha Curry — where every meal 
              is a celebration of authentic Maharashtrian culinary traditions. We bring you the 
              warmth of home-cooked flavors, prepared with the finest ingredients and time-honored 
              recipes passed down through generations.
            </p>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-3 rounded-xl bg-saffron/10">
                    <feature.icon className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-brown mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
