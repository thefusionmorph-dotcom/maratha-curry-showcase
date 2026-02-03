import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import OrderOnline from '@/components/OrderOnline';
import BookTable from '@/components/BookTable';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <OrderOnline />
        <BookTable />
        <Reviews />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
