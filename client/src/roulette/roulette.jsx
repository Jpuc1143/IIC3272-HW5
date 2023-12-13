import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Ruleta = ({ valorElegido }) => {
  const [giro, setGiro] = useState(false);

  // Configuración de la animación
  const { transform, opacity } = useSpring({
    to: async (next) => {
      // Inicia la animación cuando 'giro' es verdadero
      if (giro) {
        await next({ transform: `rotate(1080deg)`, opacity: 1 });
      }
    },
    from: { transform: 'rotate(0deg)', opacity: 0 },
    reset: true,
  });

  // Función para manejar el giro de la ruleta
  const manejarGiro = () => {
    // Aquí debes implementar la lógica para determinar el resultado
    // basado en el valorElegido y actualizar 'resultado' en consecuencia.
    const resultado = calcularResultado(valorElegido);

    // Configura el resultado para la animación
    setGiro(true);

    // Espera un tiempo antes de mostrar el resultado
    setTimeout(() => {
      alert(`¡El resultado es ${resultado}!`);
      // Reinicia la animación
      setGiro(false);
    }, 5000); // Ajusta el tiempo según tus necesidades
  };

  return (
    <div>
      {/* Botón para activar la animación */}
      <button onClick={manejarGiro}>Girar Ruleta</button>

      {/* Elemento animado de la ruleta */}
      <animated.div
        style={{
          transform: transform.interpolate((t) => `${t} rotate(0deg)`),
          opacity,
          transition: 'transform 5s ease-in-out',
          width: '100px',
          height: '100px',
          background: 'red', // Personaliza el estilo según tus necesidades
        }}
      >
        {/* Contenido de la ruleta (puedes agregar más elementos aquí) */}
        {/* {resultado} */}
      </animated.div>
    </div>
  );
};

// Función de ejemplo para calcular el resultado
const calcularResultado = (valorElegido) => {
  // Implementa tu lógica para calcular el resultado aquí
  // Puedes basarte en el valorElegido para determinar el resultado
  // En este ejemplo, devuelvo un valor aleatorio entre 1 y 10
  return Math.floor(Math.random() * 10) + 1;
};

export default Ruleta;
