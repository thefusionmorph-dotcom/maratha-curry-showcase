import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import thaliImg from '@/assets/thali.jpg';
import curryImg from '@/assets/curry.jpg';
import sweetsImg from '@/assets/sweets.jpg';

const galleryImages = [
  { id: 1, src: thaliImg, alt: 'Maharashtrian Thali', size: 'large' },
  { id: 2, src: curryImg, alt: 'Traditional Curry', size: 'small' },
  { id: 3, src: sweetsImg, alt: 'Indian Sweets', size: 'small' },
  { id: 4, src: curryImg, alt: 'Authentic Dishes', size: 'medium' },
  { id: 5, src: thaliImg, alt: 'Special Thali', size: 'medium' },
  { id: 6, src: sweetsImg, alt: 'Dessert Selection', size: 'small' },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-earth-brown relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5 warli-pattern" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron text-sm tracking-widest uppercase font-medium">
            Visual Journey
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-maharashtra-cream mt-2 mb-4">
            Our Gallery
          </h2>
          <div className="maharashtra-divider w-32 mx-auto mb-6" />
          <p className="text-maharashtra-cream/70 max-w-xl mx-auto">
            A glimpse into our authentic Maharashtrian dining experience
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              } ${image.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}`}
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full min-h-[200px] md:min-h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-maharashtra-cream font-medium">{image.alt}</p>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 text-maharashtra-cream hover:text-saffron transition-colors"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightboxImage}
            alt="Gallery Image"
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
