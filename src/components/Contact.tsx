import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/ueRb4jzj173RCQWL8?g_st=ac';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactOptions = [
    {
      icon: Phone,
      label: 'Call Us',
      value: null,
      action: null,
      disabled: true,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: null,
      action: null,
      disabled: true,
    },
    {
      icon: Navigation,
      label: 'Directions',
      value: 'Open in Maps',
      action: GOOGLE_MAPS_LINK,
      disabled: false,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-earth-brown relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5 warli-pattern" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron text-sm tracking-widest uppercase font-medium">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-maharashtra-cream mt-2 mb-4">
            Contact Us
          </h2>
          <div className="maharashtra-divider w-32 mx-auto mb-6" />
          <p className="text-maharashtra-cream/70 max-w-xl mx-auto">
            We'd love to hear from you. Reach out to us through any of these channels.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className={`relative group ${option.disabled ? 'cursor-not-allowed' : ''}`}
            >
              {option.disabled ? (
                <div className="bg-maharashtra-cream/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-maharashtra-cream/10 opacity-60">
                  <div className="p-4 rounded-full bg-maharashtra-cream/10 w-fit mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-maharashtra-cream/50" />
                  </div>
                  <h3 className="font-semibold text-maharashtra-cream mb-2">{option.label}</h3>
                  <p className="text-maharashtra-cream/50 text-sm">Not provided</p>
                </div>
              ) : (
                <a
                  href={option.action || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-maharashtra-cream/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-saffron/20 hover:border-saffron/50 hover:bg-saffron/10 transition-all duration-300 group"
                >
                  <div className="p-4 rounded-full bg-gradient-saffron w-fit mx-auto mb-4 group-hover:shadow-glow transition-shadow">
                    <option.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-maharashtra-cream mb-2">{option.label}</h3>
                  <p className="text-saffron text-sm">{option.value}</p>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
