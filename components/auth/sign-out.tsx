'use client';

import { signOut } from 'next-auth/react';
import { FC } from 'react';

export const SignOutButton: FC = () => {
  return (
    <button onClick={() => signOut()} className='bg-cyan-500 hover:bg-cyan-600 transition p-1 rounded-md'>
      sign out
    </button>
  );
};
