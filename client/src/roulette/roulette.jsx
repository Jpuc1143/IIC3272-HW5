import { useState } from "react";
import { useSpring, animated } from "react-spring";

const Ruleta = ({ rotation }) => {


  const springProps = useSpring({
    to: { transform: `rotate(${rotation}deg)` },
    from: { transform: "rotate(0deg)" },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "170%",
        left: "50%",
      }}
    >
      <animated.img
        style={springProps}
        src="/images/roulette-background.jpg"
        alt="Rotating"
      />
    </div>
  );
};

export default Ruleta;
