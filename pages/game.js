import { useEffect, useState } from 'react';
import Timer from '../components/Timer';
import { createScene } from '../utils/prompt';

function Game() {
  const [scene, setScene] = useState('');

  useEffect(() => {
    const scene = createScene();
    setScene(scene);
  }, []);
  return (
    <div>
      <Timer />
      <h1>{scene}</h1>
    </div>
  );
}

export default Game;
