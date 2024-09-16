import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Particles from "@/components/magicui/particles";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly gap-10 w-full min-h-[100dvh] bg-zinc-950 text-white">
        <Header />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
      <Particles
        className="absolute inset-0 h-screen"
        quantity={500}
        ease={80}
        refresh
      />
    </>
  );
}
