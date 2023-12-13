import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const Ruleta = ({ valorElegido }) => {
  const [giro, setGiro] = useState(false);
  const [resultado, setResultado] = useState(null);
  const ruletaRef = useRef(null);

  // Configuración de la animación
  const { transform, opacity } = useSpring({
    to: async (next) => {
      // Inicia la animación cuando 'giro' es verdadero
      if (giro) {
        await next({ transform: `rotate(${720 + resultado * 360}deg)`, opacity: 1 });
      }
    },
    from: { transform: 'rotate(0deg)', opacity: 0 },
    reset: true,
    onRest: () => {
      if (giro) {
        // Reinicia la animación
        setGiro(false);
        alert(`¡El resultado es ${resultado}!`);
      }
    },
  });

  // Función para manejar el giro de la ruleta
  const manejarGiro = () => {
    // Genera un número aleatorio entre 1 y 36 para simular el resultado
    const nuevoResultado = Math.floor(Math.random() * 36) + 1;
    setResultado(nuevoResultado);

    // Configura el resultado para la animación
    setGiro(true);
  };

  return (
    <div>
      {/* Botón para activar la animación */}
      <button onClick={manejarGiro}>Girar Ruleta</button>

      {/* Elemento animado de la ruleta */}
      <animated.div
        ref={ruletaRef}
        style={{
          transform: transform.interpolate((t) => `${t} rotate(0deg)`),
          opacity,
          transition: 'transform 5s ease-in-out',
          width: '600px',
          height: '600px',
          backgroundImage: `url(/images/roulette-background.jpg)`, // Asegúrate de agregar la extensión del archivo (.jpg, .png, etc.)
          backgroundSize: 'cover',
          position: 'relative',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        {/* Muestra el número resultado */}
        {resultado !== null && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            {resultado}
          </div>
        )}
      </animated.div>
    </div>
  );
};

export default Ruleta;
