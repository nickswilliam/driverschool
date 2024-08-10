import About from "@/components/About/About";
import CardsHero from "@/components/Cards-Hero/CardsHero";
import Hero from "@/components/Hero/Hero";
import StepsToService from "@/components/StepsToService/StepsToService";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Home from "@/pages/Home/Home";


export default function Page() {
  return (
    <Home>
      <Hero/>
      <CardsHero/>
      <About/>
      <WhyChoose/>
      <StepsToService/>
    </Home>
  );
}
