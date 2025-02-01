import Image from "next/image";

import sketch from "@/assets/images/sketch.jpg";

export default function Sketch() {
  return (
    <div className="p-10">
      <div className="text-3xl">Sketch</div>
      <div className="">
        <div className="">
          <Image src={sketch} alt="Sketch" layout="cover" />
        </div>
        <div className="italic text-center pt-2">I tried my best</div>
      </div>
    </div>
  );
}
