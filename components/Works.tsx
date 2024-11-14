import Image from "next/image";
import BlurFade from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { Badge } from "@/components/ui/badge";
import Earist from "@/public/banner1.png";
import Pis from "@/public/banner2.jpg";
import Babel from "@/public/banner3.png";

export default function Works() {
  return (
    <div className="lg:w-6/12 sm:10/12 flex flex-col items-center justify-center mb-10">
      <BlurFade delay={1.0}>
        <h1 className="font-bold text-4xl my-10 uppercase">Experience</h1>
      </BlurFade>
      <div className="flex flex-col gap-6 w-9/12 ">
        <BlurFade delay={1.0}>
          <MagicCard className="text-white text-center items-center cursor-pointer shadow-2xl whitespace-wrap text-4xl bg-zinc-950">
            <div className="flex flex-col gap-2 m-3">
              <Image
                src={Babel}
                alt="Babel Mobile Language Translator"
                className="rounded-md lg:h-64"
              />
              <div>
                <h1 className="text-2xl">Babel Mobile Language Translator</h1>
                <p className="text-base">
                  Babel is a real-time mobile based language translation
                  application for the students who studies foreign languages in
                  Spraken National Highschool.
                </p>

                <section className="space-x-2">
                  <Badge>Dart</Badge>
                  <Badge>Flutter</Badge>
                  <Badge>Firebase</Badge>
                </section>
              </div>
            </div>
          </MagicCard>
        </BlurFade>
        <BlurFade delay={1.0}>
          <MagicCard className="text-white text-center items-center cursor-pointer shadow-2xl whitespace-wrap text-4xl bg-zinc-950">
            <div className="flex flex-col gap-2 m-3">
              <Image
                src={Earist}
                alt="Babel Mobile Language Translator"
                className="rounded-md"
              />
              <div>
                <h1 className="text-2xl">Earist Extension Program</h1>
                <p className="text-base">
                  Built a full-stack Content Management System capstone thesis
                  for a freelance project in Earist Cavite Campus. An extension
                  program for Information Technology course.
                </p>

                <section className="space-x-2">
                  <Badge>MongoDB</Badge>
                  <Badge>Express</Badge>
                  <Badge>React</Badge>
                  <Badge>Node</Badge>
                  <Badge>Firebase</Badge>
                </section>
              </div>
            </div>
          </MagicCard>
        </BlurFade>
        <BlurFade delay={1.0}>
          <MagicCard className="text-white text-center items-center cursor-pointer shadow-2xl whitespace-wrap text-4xl bg-zinc-950">
            <div className="flex flex-col gap-2 m-3">
              <Image
                src={Pis}
                alt="Babel Mobile Language Translator"
                className="rounded-md"
              />
              <h1 className="text-2xl">
                Person Deprived of Liberty Monitoring System
              </h1>
              <p className="text-base">
                Built a full-stack monitoring system capstone thesis for a
                freelance project in Earist Cavite Campus. An information
                monitoring system for BJMP-GMA Cavite.
              </p>

              <section className="space-x-2">
                <Badge>MongoDB</Badge>
                <Badge>Express</Badge>
                <Badge>React</Badge>
                <Badge>Node</Badge>
                <Badge>Firebase</Badge>
              </section>
            </div>
          </MagicCard>
        </BlurFade>
      </div>
    </div>
  );
}
