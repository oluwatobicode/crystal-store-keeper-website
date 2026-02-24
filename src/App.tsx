import Analytics from "./components/Analytics";
import BrandLabel from "./components/BrandLabel";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Inventory from "./components/Inventory";
import Navbar from "./components/Navbar";
import PointOfSale from "./components/PointOfSale";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <BrandLabel />
      <Features />
      <PointOfSale />
      <Inventory />
      <Analytics />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
