import About from "@/components/About";
import Header from "@/components/Header";
import Particles from "@/components/magicui/particles";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-[100dvh] bg-zinc-950 text-white">
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        refresh
      />
      <Header />
      <About />
      <Skills />
    </div>
  );
}
