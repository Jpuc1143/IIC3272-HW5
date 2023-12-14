import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import rouletteImage from "../../public/images/roulette-background.jpg";

const Ruleta = ({ spinning = true, rotation }) => {
  //const [rotation, setRotation] = useState(0);
  const [springProps, api] = useSpring(() => ({
    to: { transform: `rotate(360deg)` },
    from: { transform: `rotate(0deg)` },
    config: { loop: true },
  }));
  console.log(api);
  useEffect(() => {
    if (spinning) {
      api.start();
    }
  }, [spinning]);

  return (
    <div>
      <animated.img
        style={false ? { transform: `rotate(${rotation}deg)` } : springProps}
        src={rouletteImage}
        alt="Rotating"
      />
    </div>
  );
};

export default Ruleta;
