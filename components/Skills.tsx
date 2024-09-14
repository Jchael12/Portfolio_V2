import HTMLIcon from "@/components/icons/html";
import CSSIcon from "@/components/icons/css";
import JavaScriptIcon from "@/components/icons/javascript";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwind";
import { NextIcon } from "@/components/icons/next";
import GitIcon from "@/components/icons/git";
import GithubIcon from "@/components/icons/github";
import VercelIcon from "@/components/icons/vercel";

export default function Skills() {
  return (
    <section>
      <h1 className="text-center font-bold text-2xl my-10">Skills</h1>
      <div className="flex">
        <HTMLIcon />
        <CSSIcon />
        <JavaScriptIcon />
        <ReactIcon />
        <TailwindIcon />
        <NextIcon />
        <GitIcon />
        <GithubIcon />
        <VercelIcon />
      </div>
    </section>
  );
}
