import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Particles from "@/components/magicui/particles";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-evenly gap-10 w-full min-h-[100dvh] bg-zinc-950 text-white overflow-hidden">
        <Particles
          className="inset-0 absolute w-full h-full "
          quantity={700}
          ease={80}
          refresh
        />
        <Header />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
