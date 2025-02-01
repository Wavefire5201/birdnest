import Image from "next/image";

import sketch from "@/assets/images/sketch.jpg";

export default function Sketch() {
  return (
    <section>
      <div className="text-3xl">Sketch</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Image src={sketch} alt="Sketch" className="w-96 h-auto" />
      </div>
    </section>
  );
}
