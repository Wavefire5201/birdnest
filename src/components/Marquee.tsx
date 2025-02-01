import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import album1 from "@/assets/images/album-1.png";
import album2 from "@/assets/images/album-2.png";
import album3 from "@/assets/images/album-3.png";
import album4 from "@/assets/images/album-4.png";
import album5 from "@/assets/images/album-5.png";

const imageList = [album1, album2, album3, album4, album5];

const MarqueeCarousel = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div
      className="flex flex-row"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start("animate")}
    >
      <motion.div
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
        variants={{
          animate: {
            x: ["0%", "-100%"],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          },
        }}
      >
        {imageList.map((src, index) => (
          <div key={index} className="w-1/2 h-[100vh] relative">
            <Image
              src={src}
              alt={`carousel-image-${index}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
        {imageList.map((src, index) => (
          <div key={`duplicate-${index}`} className="w-1/2 h-[100vh] relative">
            <Image
              src={src}
              alt={`carousel-image-duplicate-${index}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeCarousel;
