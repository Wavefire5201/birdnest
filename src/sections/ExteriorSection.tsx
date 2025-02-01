import Image from "next/image";

import ext1 from "@/assets/images/ext-view-1.png";
import ext2 from "@/assets/images/ext-view-2.png";

export default function ExteriorSection() {
  return (
    <div className="p-10">
      <div className="flex justify-center items-center gap-2">
        <div className="flex-1">
          <div className="flex flex-col justify-between h-full ">
            <div className="text-3xl">Exterior Overview</div>
            <div>
              <div className="pb-2 italic">
                Constructed using 42,000 tons of steel, reinforced concrete for
                its foundation and terraces, ETFE membrane panels for its roof
                and facade, a hybrid grass-turf field, and recycled materials
              </div>
              <Image src={ext1} alt="Exterior 1" layout="responsive" />
              <div className="pt-4 text-xs italic">
                <span>
                  <a
                    href="https://larryspeck.com/photography/beijing-national-stadium-the-birds-nest/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-300 hover:text-green-800"
                  >
                    Larry Speck, left;{" "}
                  </a>
                  <a
                    href="https://arquitecturaviva.com/works/estadio-nacional-en-pekin-6/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-300 hover:text-green-800"
                  >
                    Iwan Baan, right
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src={ext2} alt="Exterior 2" layout="responsive" />
        </div>
      </div>
    </div>
  );
}
