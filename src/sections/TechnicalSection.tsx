import Image from "next/image";

import arc1 from "@/assets/images/arc-view-1.png";
import arc2 from "@/assets/images/arc-view-2.png";
import arc3 from "@/assets/images/arc-view-3.png";

export default function TechnicalSection() {
  return (
    <div className="p-10">
      <div className="text-3xl">Architecture Overview</div>
      {/* <div className=""> */}
      <div className="flex justify-center items-center ">
        <div className="flex-1">
          <Image src={arc2} alt="Architecture 2" className="w-1/2" />
        </div>
        <div>
          <div className="flex-1">
            <Image src={arc3} alt="Architecture 3" className="w-full" />
          </div>
          <div className="flex-1">
            <Image src={arc1} alt="Architecture 1" className="w-full" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
