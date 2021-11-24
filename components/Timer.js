import { useEffect, useState } from 'react';

function Timer({ seconds }) {
  return (
    <section className="bg-blue-900 w-64 h-40 flex items-center justify-center border-8 border-yellow-300">
      <div className="text-8xl text-yellow-300">{seconds}</div>
    </section>
  );
}

export default Timer;
