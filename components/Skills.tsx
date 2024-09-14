import HTMLIcon from "./icons/HTML";
import CSSIcon from "./icons/CSS";
import JavaScriptIcon from "./icons/Javascript";
import ReactIcon from "./icons/React";
import TailwindIcon from "./icons/Tailwind";
import { NextIcon } from "./icons/Next";
import GitIcon from "./icons/Git";
import GithubIcon from "./icons/Github";
import VercelIcon from "./icons/Vercel";

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
