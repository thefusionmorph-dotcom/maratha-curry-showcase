import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const placeholderReviews = [
  {
    id: 1,
    name: 'Review Placeholder',
    rating: 5,
    text: 'Reviews are available on Google & Zomato. Visit our listings to read what our customers say about us!',
    source: 'Google',
  },
  {
    id: 2,
    name: 'Review Placeholder',
    rating: 5,
    text: 'We value your feedback! Find our authentic customer reviews on our Google and Zomato listings.',
    source: 'Zomato',
  },
  {
    id: 3,
    name: 'Review Placeholder',
    rating: 5,
    text: 'Check out our customer experiences on our official listings. Your reviews help us serve you better!',
    source: 'Google',
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholderReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % placeholderReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + placeholderReviews.length) % placeholderReviews.length);
  };

  return (
    <section id="reviews" className="py-20 md:py-32 bg-warm-beige warli-pattern relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-maharashtra-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron text-sm tracking-widest uppercase font-medium">
            What People Say
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-earth-brown mt-2 mb-4">
            Customer Reviews
          </h2>
          <div className="maharashtra-divider w-32 mx-auto mb-6" />
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full bg-card shadow-soft hover:shadow-glow transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-saffron" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full bg-card shadow-soft hover:shadow-glow transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-saffron" />
          </button>

          {/* Review Cards */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 mx-auto mb-6 text-saffron/30" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < placeholderReviews[currentIndex].rating
                        ? 'text-maharashtra-gold fill-maharashtra-gold'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl text-muted-foreground mb-6 italic leading-relaxed">
                "{placeholderReviews[currentIndex].text}"
              </p>

              {/* Reviewer */}
              <div>
                <p className="font-semibold text-earth-brown">
                  {placeholderReviews[currentIndex].name}
                </p>
                <p className="text-sm text-saffron">
                  via {placeholderReviews[currentIndex].source}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {placeholderReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-saffron w-8'
                    : 'bg-saffron/30 hover:bg-saffron/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          For authentic customer reviews, please visit our Google & Zomato listings
        </motion.p>
      </div>
    </section>
  );
};

export default Reviews;
