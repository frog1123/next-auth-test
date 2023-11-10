import { UserClientRendered } from '@/components/users/user-client-rendered';
import { UserServerRendered } from '@/components/users/user-server-rendered';
import { SignInButton } from '@/components/auth/sign-in';
import { SignOutButton } from '@/components/auth/sign-out';
import { SignUpButton } from '@/components/auth/sign-up';
import { NextPage } from 'next';
import { Github, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className='w-[50%] mx-auto p-2 mt-20'>
      <div className='grid place-items-center'>
        <p className='text-center'>nextjs website that handles user auth with next-auth library and prisma</p>

        <a href='https://github.com/frog1123/next-auth-test' className='text-blue-500 hover:text-blue-600'>
          <div className='grid grid-cols-[max-content_auto] gap-1 place-items-center w-max'>
            <Github className='w-4 h-4' />
            <span>https://github.com/frog1123/next-auth-test</span>
          </div>
        </a>
      </div>
      <div className='grid grid-flow-col gap-2 place-items-center p-2 w-max mx-auto'>
        <SignInButton />
        <SignOutButton />
        <SignUpButton />
        <Link href='/protected'>
          <button className='bg-emerald-500 hover:bg-emerald-600 transition p-1 rounded-md'>visit /protected (signed in users only)</button>
        </Link>
      </div>
      <div className='grid grid-flow-row gap-2'>
        <UserServerRendered />
        <UserClientRendered />
      </div>
      <div className='grid grid-cols-[max-content_auto] place-items-center w-max gap-1 text-zinc-500 mx-auto mt-2'>
        <Lightbulb className='w-4 h-4' />
        <span>run `pnpm studio` to inspect database</span>
      </div>
    </div>
  );
};

export default HomePage;
