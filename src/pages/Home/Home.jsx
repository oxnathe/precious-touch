import Hero from "../../components/sections/home/Hero";
import ServicesPreview from "../../components/sections/home/ServicesPreview";
import WhyChooseUs from "../../components/sections/home/WhyChooseUs";
import Plans from "../../components/sections/home/Plans";
import Process from "../../components/sections/home/Process";

import CTA from "../../components/sections/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Plans />
      <Process />
      
      <CTA />
    </>
  );
}

export default Home;