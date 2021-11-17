import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { LoginIcon } from '@heroicons/react/solid';
import { LogoutIcon } from '@heroicons/react/solid';

function Header() {
  const router = useRouter();
  return (
    <header className="sticky bg-yellow-200 z-50 grid grid-cols-3 items-center justify-between shadow-md text-red-400 font-architect">
      <div
        onClick={() => router.push('/ ')}
        className="relative drop-shadow-lg  flex items-center cursor-pointer text-6xl font-semibold  p-5 hover:scale-105 transition transform duration-150 ease-out"
      >
        SQGGLE
      </div>

      <div className="text-4xl text-center py-4 items-center">
        <p className=""> An Online Drawing Prompter</p>
      </div>

      <div className="flex items-center justify-end px-4">
        <div className="flex items-center space-x-2 border-2 border-red-200 rounded-full p-2">
          <LoginIcon className="h-8 cursor-pointer" />
          <LogoutIcon className="h-8 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
