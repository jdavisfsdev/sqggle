import { useEffect, useState } from 'react';
import { slides } from '../utils/slides';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function Welcome() {
  // Add one time animation to 'welcome to sqggle'
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    if (index >= 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-center text-red-400 font-architect text-3xl pt-5">
        {/* <ArrowCircleLeftIcon
          onClick={() => setIndex(index - 1)}
          className="h-8 cursor-pointer hover:scale-150 transition duration-100 ease-in-out"
        /> */}
        <h1 className="px-5 font-semibold text-4xl shadow-sm rounded-full">
          Learn About SQGGLE
        </h1>
        <ArrowCircleRightIcon
          disabled={index > 1}
          onClick={handleIncrement}
          className="h-8 cursor-pointer hover:scale-150 transition duration-100 ease-in-out active:scale-125"
        />
      </div>

      <div className="flex justify-center items-start">
        <section className="flex flex-col items-center justify-center text-center text-5xl font-architect p-10 border-2 border-red-300 rounded-xl w-contain max-w-screen m-5 bg-green-100 shadow-lg">
          <div className="px-4">{slides[index]}</div>

          {index === 2 && (
            <Link href="/game">
              <button className="pt-5 mt-5 py-4 px-4 bg-red-400 border-4 border-yellow-200 rounded-full hover:shadow-md hover:scale-110 transition duration-100 ease-in-out active:scale-100">
                Click To Start
              </button>
            </Link>
          )}
        </section>
      </div>
    </div>
  );
}

// className =
//   'font-architect flex text-center motion-reduce:animate-bounce transition duration-75';

export default Welcome;
