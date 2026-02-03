import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'Zomato',
    color: 'from-red-500 to-red-600',
    link: null,
    logo: '🍽️',
  },
  {
    name: 'Swiggy',
    color: 'from-orange-500 to-orange-600',
    link: null,
    logo: '🛵',
  },
];

const OrderOnline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="order" className="py-20 md:py-32 bg-warm-beige warli-pattern relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-maharashtra-red/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron text-sm tracking-widest uppercase font-medium">
            Craving Something?
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-earth-brown mt-2 mb-4">
            Order Online
          </h2>
          <div className="maharashtra-divider w-32 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get your favorite Maharashtrian dishes delivered right to your doorstep
          </p>
        </motion.div>

        {/* Order Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div
                className={`card-shine relative p-8 rounded-3xl bg-card shadow-card overflow-hidden transition-transform duration-300 ${
                  platform.link ? 'hover:scale-105 cursor-pointer' : 'opacity-75'
                }`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                {/* Content */}
                <div className="relative text-center">
                  <div className="text-6xl mb-4">{platform.logo}</div>
                  <h3 className="font-display text-2xl text-earth-brown mb-2">
                    {platform.name}
                  </h3>
                  
                  {platform.link ? (
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-saffron text-primary-foreground rounded-full font-medium btn-shine hover:shadow-glow transition-shadow"
                    >
                      Order Now
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <div className="relative group/tooltip">
                      <button
                        disabled
                        className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-muted text-muted-foreground rounded-full font-medium cursor-not-allowed"
                      >
                        Order Now
                        <ExternalLink size={16} />
                      </button>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-earth-brown text-maharashtra-cream text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap">
                        Link not provided
                      </div>
                    </div>
                  )}
                </div>

                {/* Glow Effect */}
                {platform.link && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-20 blur-xl`} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderOnline;
