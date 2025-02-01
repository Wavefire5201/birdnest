import Image from "next/image";

import sketch from "@/assets/images/sketch.jpg";

export default function Sketch() {
  return (
    <div className="p-10 flex flex-col justify-between h-full">
      <div className="text-3xl">Sketch</div>
      <div className="flex flex-col">
        <div className="w-1/2 mx-auto">
          <Image src={sketch} alt="Sketch" layout="responsive" />
        </div>
        <div className="italic text-center pt-2">I tried my best</div>
      </div>
    </div>
  );
}
