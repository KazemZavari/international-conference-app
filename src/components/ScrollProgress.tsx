import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollProgressProps {
  position: "left" | "center" | "right";
  height: number;
  smoothness?: boolean;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  position,
  height,
  smoothness,
}) => {
  const { scrollYProgress } = useScroll();
  const [barPosition, setBarPosition] = useState<string>(position);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (position === "left") {
      setBarPosition("0%");
    } else if (position === "center") {
      setBarPosition("50%");
    } else if (position === "right") {
      setBarPosition("100%");
    }
  }, [position]);

  const barAnimation = smoothness
    ? { scaleX: scaleX }
    : { scaleX: scrollYProgress };

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 rounded-e-full bg-gradient-to-r from-green-700
       to-green-400
                `}
      style={{
        ...barAnimation,
        height: height,
        // backgroundColor: "red",
        originX: barPosition,
      }}
    />
  );
};

// how use this component

// import { ScrollProgress } from "../components/ScrollProgress";
{
  /* <ScrollProgress
position={"left"}
color={"orange"}
height={7}
smoothness={true}
/> */
}
