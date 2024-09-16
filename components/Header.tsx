import Image from "next/image";
import profile from "@/public/profile.png";

import { BorderBeam } from "./magicui/border-beam";
import BlurFade from "./magicui/blur-fade";

export default function Header() {
  return (
    <>
      <div className="relative w-6/12 p-6 mt-2 border border-gray-600 rounded-md flex items-center justify-between space-x-2">
        <BorderBeam />
        <BlurFade delay={0.25}>
          <div className="flex items-center justify-between space-x-5 ">
            <Image src={profile} alt="jchael" className="w-24 rounded-full" />
            <div>
              <h1 className="font-bold text-xl">Hi,👋🏻I&apos;m Jhon Michael</h1>
              <p>Frontend Developer</p>
            </div>
          </div>
        </BlurFade>
      </div>
    </>
  );
}
