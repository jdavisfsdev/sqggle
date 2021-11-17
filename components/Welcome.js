import { useEffect } from 'react';

function Welcome() {
  // Add one time animation to 'welcome to sqggle'
  useEffect(() => {}, []);
  return (
    <section className="flex flex-col">
      <div className="flex text-5xl p-10 border-2 border-red-300 rounded-xl w-[350px] m-5 bg-green-100 shadow-lg">
        <h1 className="font-architect flex text-center motion-reduce:animate-bounce transition duration-75">
          Welcome to SQGGLE
        </h1>
      </div>
      <div className="relative flex flex-col">
        <div className="relative border-b border-dashed border-red-500 w-100 pt-2" />
      </div>
    </section>
  );
}

export default Welcome;
