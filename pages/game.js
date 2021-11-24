import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Timer from '../components/Timer';
import { createScene } from '../utils/prompt';

function Game() {
  const [scene, setScene] = useState('');
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const scene = createScene();
    setScene(scene);
  }, []);

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      return;
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
        rel="stylesheet"
      />
      <div className="font-architect">
        {/* <Header /> */}
        <section className="bg-blue-200 h-screen flex items-start justify-start font-architect">
          <div className="mt-5">
            <Timer seconds={seconds} />
          </div>
          <div className="text-5xl ml-20 mt-5 w-[600px] h-[200px] bg-green-500 p-10 border-2 rounded-full text-center">
            {(seconds > 0 && <h1 className="">{scene}</h1>) || (
              <h1>Time is up!</h1>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Game;
