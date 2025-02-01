import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import album1 from "@/assets/images/album-1.png";
import album2 from "@/assets/images/album-2.png";
import album3 from "@/assets/images/album-3.png";
import album4 from "@/assets/images/album-4.png";
import album5 from "@/assets/images/album-5.png";

const imageList = [album1, album2, album3, album4, album5];

const AlbumSection = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const duration = 20;

  useEffect(() => {
    let animation: number;
    const startTime = Date.now();

    const animate = async () => {
      if (!isHovered.current) {
        const elapsed = (Date.now() - startTime) / 1000;
        const currentProgress = (elapsed % duration) / duration;

        await controls.start({
          x: `${-currentProgress * 100}%`,
          transition: { duration: 0 },
        });

        animation = requestAnimationFrame(animate);
      }
    };

    animate();
    return () => cancelAnimationFrame(animation);
  });

  const handleMouseEnter = () => {
    isHovered.current = true;
    controls.stop();
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    controls.start({
      x: "-100%",
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <div
      className="flex overflow-hidden"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className="flex" animate={controls} initial={{ x: "0%" }}>
        {[...imageList, ...imageList].map((src, index) => (
          <div
            key={index}
            className="w-screen h-[100vh] relative flex-shrink-0"
          >
            <Image
              src={src}
              alt={`carousel-image-${index}`}
              // fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AlbumSection;
