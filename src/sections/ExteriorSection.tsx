import Image from "next/image";

import ext1 from "@/assets/images/ext-view-1.png";
import ext2 from "@/assets/images/ext-view-2.png";

export default function ExteriorSection() {
  return (
    <section>
      <div className="text-3xl">Exterior Overview</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Image src={ext1} alt="Exterior 1" className="w-96 h-auto" />
        <Image src={ext2} alt="Exterior 2" className="w-96 h-auto" />
      </div>
    </section>
  );
}
