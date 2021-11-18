import { useEffect, useState } from 'react';
import Timer from '../components/Timer';
import { createScene } from '../utils/prompt';

function Game() {
  const [scene, setScene] = useState('');
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const scene = createScene();
    setScene(scene);
  }, []);

  useEffect(() => {
    let interval = null;
    if (seconds < 5) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      return;
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <Timer seconds={seconds} />
      <h1>{scene}</h1>
    </div>
  );
}

export default Game;
