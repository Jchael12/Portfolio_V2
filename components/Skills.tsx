import HTMLIcon from "@/components/icons/html";
import CSSIcon from "@/components/icons/css";
import JavaScriptIcon from "@/components/icons/javascript";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwind";
import { NextIcon } from "@/components/icons/next";
import GitIcon from "@/components/icons/git";
import GithubIcon from "@/components/icons/github";
import VercelIcon from "@/components/icons/vercel";
import NodeIcon from "./icons/node";
import BlurFade from "./magicui/blur-fade";

export default function Skills() {
  return (
    <section className="w-6/12 space-y-5">
      <BlurFade delay={0.75}>
        <h1 className="text-center font-bold text-4xl my-10 uppercase">
          Skills
        </h1>
        <div className="flex items-center justify-center">
          <HTMLIcon />
          <CSSIcon />
          <JavaScriptIcon />
          <ReactIcon />
          <TailwindIcon />
          <NextIcon />
          <GitIcon />
          <GithubIcon />
          <VercelIcon />
          <NodeIcon />
        </div>
      </BlurFade>
    </section>
  );
}
