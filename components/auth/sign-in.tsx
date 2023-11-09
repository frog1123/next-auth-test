'use client';

import { signIn } from 'next-auth/react';
import { FC } from 'react';

export const SignInButton: FC = () => {
  return <button onClick={() => signIn()}>sign in</button>;
};
