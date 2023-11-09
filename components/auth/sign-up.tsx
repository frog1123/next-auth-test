import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { FC } from 'react';

export const SignUpButton: FC = () => {
  return (
    <Link href='/sign-up'>
      <button className='bg-indigo-500 hover:bg-indigo-600 transition p-1 rounded-md'>sign up</button>
    </Link>
  );
};
