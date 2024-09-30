import { Separator } from "@/components/ui/separator";
import BlurFade from "./magicui/blur-fade";

export default function About() {
  return (
    <div className="lg:w-6/12 w-10/12 space-y-5">
      <BlurFade delay={0.5}>
        <h1 className="text-center font-bold text-4xl my-12 uppercase">
          About
        </h1>
        <h2 className="text-lg">Based in Philippines.</h2>
        <p className="text-xl ">
          Interested in frontend development specializing in web, passionate
          about creating cultivative and beautiful web experiences.
        </p>
      </BlurFade>
      <Separator />
    </div>
  );
}
