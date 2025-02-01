import Image from "next/image";

import earth from "@/assets/images/earth-view.png";

export default function Earth() {
  return (
    <section>
      <div className="text-3xl">Earth Overview</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Image src={earth} alt="Earth" className="w-96 h-auto" />
      </div>
    </section>
  );
}
