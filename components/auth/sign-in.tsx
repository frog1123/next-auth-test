'use client';

import { signIn } from 'next-auth/react';
import { FC } from 'react';

export const SignInButton: FC = () => {
  return (
    <button onClick={() => signIn()} className='bg-cyan-500 hover:bg-cyan-600 transition p-1 rounded-md'>
      sign in
    </button>
  );
};
