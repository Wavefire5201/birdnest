import Image from "next/image";

import album1 from "@/assets/images/album-1.png";
import album2 from "@/assets/images/album-2.png";
import album3 from "@/assets/images/album-3.png";
import album4 from "@/assets/images/album-4.png";
import album5 from "@/assets/images/album-5.png";

export default function Album() {
  return (
    <section>
      <div className="text-3xl">Album</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Image src={album1} alt="Album 1" className="w-96 h-auto" />
        <Image src={album2} alt="Album 2" className="w-96 h-auto" />
        <Image src={album3} alt="Album 3" className="w-96 h-auto" />
        <Image src={album4} alt="Album 4" className="w-96 h-auto" />
        <Image src={album5} alt="Album 5" className="w-96 h-auto" />
      </div>
    </section>
  );
}
