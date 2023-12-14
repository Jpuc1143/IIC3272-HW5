import { useState } from "react";
import { useSpring, animated } from "react-spring";

const Ruleta = ({ setWinnerNumber, handleReset }) => {
  const [rotation, setRotation] = useState(0);

  // Update the rotation degree
  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 720); // Rotate 45 degrees on each click
  };

  const springProps = useSpring({
    to: { transform: `rotate(${rotation}deg)` },
    from: { transform: "rotate(0deg)" },
    onRest: () => {
      // Generate a random number between 0 and 36 and 00
      const randomNumber = Math.floor(Math.random() * 38);
      if (randomNumber === 37) {
        setWinnerNumber("00");
      }
      setWinnerNumber(randomNumber.toString());
      handleReset();
      alert("The winner number is " + randomNumber);
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "170%",
        left: "50%",
      }}
    >
      {/* Botón para activar la animación */}
      <button onClick={handleRotate}>Girar Ruleta</button>

      {/* Elemento animado de la ruleta */}
      <animated.img
        style={springProps}
        src="/images/roulette-background.jpg"
        alt="Rotating"
      />
    </div>
  );
};

export default Ruleta;
