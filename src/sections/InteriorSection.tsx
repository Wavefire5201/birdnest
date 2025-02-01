import Image from "next/image";

import int1 from "@/assets/images/int-view-1.png";
import int2 from "@/assets/images/int-view-2.png";
import int3 from "@/assets/images/int-view-3.png";

export default function InteriorSection() {
  return (
    <section>
      <div className="text-3xl">Interior Overview</div>
      <div>
        This interior view of the stadium highlights its multipurpose design,
        showing that it can even host racing events.
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Image src={int1} alt="Interior 1" className="w-96 h-auto" />
        <Image src={int2} alt="Interior 2" className="w-96 h-auto" />
        <Image src={int3} alt="Interior 3" className="w-96 h-auto" />
      </div>
    </section>
  );
}
