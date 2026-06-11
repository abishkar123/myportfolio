import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import {
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
