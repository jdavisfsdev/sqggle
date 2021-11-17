import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { LoginIcon } from '@heroicons/react/solid';
import { LogoutIcon } from '@heroicons/react/solid';

function Header() {
  const router = useRouter();
  return (
    <header className="sticky bg-yellow-200 z-50 grid grid-cols-3 items-center shadow-md text-red-400 font-architect">
      <div
        onClick={() => router.push('/ ')}
        className="relative drop-shadow-lg  flex items-center cursor-pointer text-6xl font-semibold  p-5 hover:scale-105 transition transform duration-150 ease-out"
      >
        SQGGLE
      </div>

      <div className="text-4xl flex justify-end py-4 items-center">
        An Online Drawing Prompter
      </div>

      <div className="flex flex-row items-end justify-evenly border-2 border-red-200 rounded-full w-1/2 pr-5 mr-5">
        <LoginIcon className="h-8 pr-7 cursor-pointer" />
        <LogoutIcon className="h-8 pr-7 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
