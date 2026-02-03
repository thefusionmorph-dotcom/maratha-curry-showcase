import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, Users, User, Phone, MessageSquare, Check, X } from 'lucide-react';

const BookTable = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Enter a valid 10-digit number';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests) newErrors.guests = 'Number of guests is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="book" className="py-20 md:py-32 bg-earth-brown relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-maharashtra-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron text-sm tracking-widest uppercase font-medium">
            Reserve Your Spot
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-maharashtra-cream mt-2 mb-4">
            Book a Table
          </h2>
          <div className="maharashtra-divider w-32 mx-auto mb-6" />
          <p className="text-maharashtra-cream/70 max-w-xl mx-auto">
            Join us for an unforgettable dining experience
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl bg-cream border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/20 ${
                      errors.name ? 'border-maharashtra-red' : 'border-transparent focus:border-saffron'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-maharashtra-red text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl bg-cream border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/20 ${
                      errors.phone ? 'border-maharashtra-red' : 'border-transparent focus:border-saffron'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-maharashtra-red text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl bg-cream border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/20 ${
                      errors.date ? 'border-maharashtra-red' : 'border-transparent focus:border-saffron'
                    }`}
                  />
                </div>
                {errors.date && <p className="text-maharashtra-red text-xs mt-1">{errors.date}</p>}
              </div>

              {/* Time */}
              <div className="relative">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl bg-cream border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/20 ${
                      errors.time ? 'border-maharashtra-red' : 'border-transparent focus:border-saffron'
                    }`}
                  />
                </div>
                {errors.time && <p className="text-maharashtra-red text-xs mt-1">{errors.time}</p>}
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl bg-cream border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/20 appearance-none ${
                      errors.guests ? 'border-maharashtra-red' : 'border-transparent focus:border-saffron'
                    }`}
                  >
                    <option value="">Select guests</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
                {errors.guests && <p className="text-maharashtra-red text-xs mt-1">{errors.guests}</p>}
              </div>

              {/* Message */}
              <div className="relative md:col-span-2">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Special Requests (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special requests or dietary requirements..."
                    rows={3}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-cream border-2 border-transparent focus:border-saffron transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/20 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 btn-shine bg-gradient-saffron text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:shadow-glow transition-shadow"
            >
              Reserve Table
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl p-8 max-w-md w-full text-center shadow-card relative"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-saffron flex items-center justify-center"
              >
                <Check className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              
              <h3 className="font-display text-2xl text-earth-brown mb-2">
                Reservation Received!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your reservation request. We will confirm your booking shortly.
              </p>
              
              <button
                onClick={() => setShowSuccess(false)}
                className="px-8 py-3 bg-gradient-saffron text-primary-foreground rounded-full font-medium hover:shadow-glow transition-shadow"
              >
                Great!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BookTable;
