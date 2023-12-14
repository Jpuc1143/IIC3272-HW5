import { useState, useEffect } from "react";
import { useSpring, useSpringRef, animated } from "react-spring";
import rouletteImage from "../../public/images/roulette-background.jpg";

const Ruleta = ({ spinning }) => {
  //const [rotation, setRotation] = useState(0);
  const api = useSpringRef();
  const springProps = useSpring({
    ref: api,
    from: { transform: `rotate(0deg)` },
  });
  console.log(api);
  useEffect(() => {
    console.log(spinning);
    if (spinning) {
      console.log("Start spin");
      api.start({
        from: { transform: "rotate(0deg)" },
        to: { transform: `rotate(360deg)` },
        loop: true,
        config: { friction: 0 },
      });
    } else {
      api.stop();
    }
  }, [spinning]);

  return (
    <div>
      <animated.img style={springProps} src={rouletteImage} alt="Rotating" />
    </div>
  );
};

export default Ruleta;
