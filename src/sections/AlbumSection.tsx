import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import album1 from "@/assets/images/album-1.png";
import album2 from "@/assets/images/album-2.png";
import album3 from "@/assets/images/album-3.png";
import album4 from "@/assets/images/album-4.png";
import album5 from "@/assets/images/album-5.png";

const imageList = [album1, album2, album3, album4, album5];

const textList = [
  "Closeup view of the steel lattice structure that encloses the stadium is similar to that of a bird nest.",
  'The construction process of the building demonstrates the huge pieces that to be assembled together to form one giant "bird nest".',
  "The interior, with close to a hundred thousand seats to host the upcoming 2008 Olympic Games.",
];

const AlbumSection = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const imageDuration = 20;
  const textDuration = 30;

  useEffect(() => {
    const animateImages = async () => {
      await imageControls.start({
        x: "-100%",
        transition: {
          duration: imageDuration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    animateImages();
  }, [imageControls]);

  useEffect(() => {
    const animateText = async () => {
      await textControls.start({
        x: "100%",
        transition: {
          duration: textDuration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    animateText();
  }, [textControls]);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex"
          animate={imageControls}
          initial={{ x: "0%" }}
        >
          {[...imageList, ...imageList].map((src, index) => (
            <div key={index} className="w-auto relative flex-shrink-0">
              <Image
                src={src}
                alt={`carousel-image-${index}`}
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap py-4"
          animate={textControls}
          initial={{ x: "-100%" }}
        >
          {[...textList, ...textList].map((text, index) => (
            <div key={index} className="w-auto px-4">
              {text}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="text-3xl p-10">Gallery</div>
    </div>
  );
};

export default AlbumSection;
