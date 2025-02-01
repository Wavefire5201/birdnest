import Image from "next/image";

import arc1 from "@/assets/images/arc-view-1.png";
import arc2 from "@/assets/images/arc-view-2.png";

export default function TechnicalSection() {
  return (
    <div className="p-10">
      <div className="flex justify-center items-center gap-2">
        <div className="flex-1">
          <div className="flex flex-col justify-between h-full ">
            <div className="text-3xl pb-4">Architecture Overview</div>
            <Image src={arc1} alt="Exterior 1" layout="responsive" />
            <div className="pt-4 text-xs italic">
              <a
                href="https://www.herzogdemeuron.com/projects/226-national-stadium/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-green-800"
              >
                Herzog & de Meuron, both images
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src={arc2} alt="Exterior 2" layout="responsive" />
        </div>
      </div>
    </div>
  );
}
