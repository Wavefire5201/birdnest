import Image from "next/image";

import arc1 from "@/assets/images/arc-view-1.png";
import arc2 from "@/assets/images/arc-view-2.png";
import arc3 from "@/assets/images/arc-view-3.png";

export default function ArchitectureOverview() {
  return (
    <section>
      <div className="text-3xl">Architecture Overview</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Image src={arc1} alt="Architecture 1" className="w-96 h-auto" />
        <Image src={arc2} alt="Architecture 2" className="w-96 h-auto" />
        <Image src={arc3} alt="Architecture 3" className="w-96 h-auto" />
      </div>
    </section>
  );
}
