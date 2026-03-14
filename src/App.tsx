import Analytics from "./components/Analytics";
import BrandLabel from "./components/BrandLabel";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Inventory from "./components/Inventory";
import Navbar from "./components/Navbar";
import PointOfSale from "./components/PointOfSale";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="mx-auto pt-[80px]">
      <Navbar />
      <Hero />
      <BrandLabel />
      <Features />
      <PointOfSale />
      <Inventory />
      <Analytics />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

/* todo
1) animations with framer motion --done
2) make the navbar work with react scroll --done
3) add the how it works section --done
4) fix the mobile screen navbar
*/
