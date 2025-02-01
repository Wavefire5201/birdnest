import Image from "next/image";

import int1 from "@/assets/images/int-view-1.png";
import int2 from "@/assets/images/int-view-2.png";
import int3 from "@/assets/images/int-view-3.png";

export default function InteriorSection() {
  return (
    <div className="p-10">
      <div className="text-3xl">Interior Overview</div>
      <div className="pt-2">
        This interior view of the stadium highlights its multipurpose design,
        showing that it can even host racing events.
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="flex-1">
          <Image src={int1} alt="Interior 1" layout="responsive" />
        </div>
        <div className="flex-1">
          <Image src={int2} alt="Interior 2" layout="responsive" />
        </div>
        <div className="flex-1">
          <Image src={int3} alt="Interior 3" layout="responsive" />
        </div>
      </div>
      <div className="pt-4 text-xs italic">
        <a
          href="https://larryspeck.com/photography/beijing-national-stadium-the-birds-nest/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-green-800"
        >
          From left to right: Herzog & de Meuron
        </a>
      </div>
    </div>
  );
}
