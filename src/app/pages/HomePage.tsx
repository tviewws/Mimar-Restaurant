import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { MenuPreview } from '../components/MenuPreview';
import { Founder } from '../components/Founder';
import { Testimonials } from '../components/Testimonials';
import { LocationContact } from '../components/LocationContact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MenuPreview />
      <Founder />
      <Testimonials />
      <LocationContact />
    </>
  );
}
