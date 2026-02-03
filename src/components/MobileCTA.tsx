import { ShoppingBag, Calendar, Navigation } from 'lucide-react';

const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/ueRb4jzj173RCQWL8?g_st=ac';

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Gradient fade */}
      <div className="absolute inset-x-0 -top-4 h-4 bg-gradient-to-t from-earth-brown to-transparent" />
      
      {/* CTA Bar */}
      <div className="glass-dark border-t border-saffron/20 px-4 py-3 flex items-center justify-around">
        <a
          href="#order"
          className="flex flex-col items-center gap-1 text-maharashtra-cream hover:text-saffron transition-colors"
        >
          <ShoppingBag size={20} />
          <span className="text-xs">Order</span>
        </a>
        <a
          href="#book"
          className="flex flex-col items-center gap-1 px-6 py-2 bg-gradient-saffron text-primary-foreground rounded-full"
        >
          <Calendar size={20} />
          <span className="text-xs font-medium">Book Table</span>
        </a>
        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-maharashtra-cream hover:text-saffron transition-colors"
        >
          <Navigation size={20} />
          <span className="text-xs">Directions</span>
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
