import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';

const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/ueRb4jzj173RCQWL8?g_st=ac';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('Open Google Maps for full address');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 md:py-32 bg-warm-beige warli-pattern relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron text-sm tracking-widest uppercase font-medium">
            Find Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-earth-brown mt-2 mb-4">
            Our Location
          </h2>
          <div className="maharashtra-divider w-32 mx-auto mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-card h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.8!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Map Overlay */}
            <div className="absolute inset-0 pointer-events-none border-4 border-saffron/20 rounded-3xl" />
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-saffron/10">
                  <MapPin className="w-6 h-6 text-saffron" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-earth-brown mb-1">Restaurant Address</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Open Google Maps for full address
                  </p>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-sm text-saffron hover:text-saffron-dark transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={16} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy Address Info
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine flex items-center justify-center gap-3 w-full bg-gradient-saffron text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:shadow-glow transition-shadow"
            >
              <Navigation size={20} />
              Get Directions
            </a>

            {/* Hours Notice */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <h3 className="font-semibold text-earth-brown mb-2">Opening Hours</h3>
              <p className="text-muted-foreground text-sm">
                Available on Google Listing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
