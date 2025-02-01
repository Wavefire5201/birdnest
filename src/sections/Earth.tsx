import Image from "next/image";

import earth from "@/assets/images/earth-view.png";

export default function Earth() {
  return (
    <div className="p-10">
      <div className="text-3xl">Google Earth</div>
      <div className="pb-4">
        The building is in a very urban area with it being located in Beijing,
        the capitol of China, one of the most populous cities in the world.
        Since it was built in the Olympic Green district, surrounding it are
        multiple other buildings that were dedicated to the Olympics as well.
        One such notable building is the Water Cube, also known as the National
        Aquatics Center.
      </div>
      <div className="flex flex-wrap justify-center items-center ">
        <Image src={earth} alt="Google Earth" layout="fit" />
      </div>
    </div>
  );
}
