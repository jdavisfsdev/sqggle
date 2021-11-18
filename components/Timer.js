import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (seconds < 45) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      return;
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <section className="bg-blue-900 w-64 h-40 flex items-center justify-center border-8 border-yellow-300">
      <div className="text-8xl text-yellow-300">{seconds}</div>
    </section>
  );
}

export default Timer;
