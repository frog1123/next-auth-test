'use client';

import { useSession } from 'next-auth/react';
import { FC } from 'react';

export const User: FC = () => {
  const session = useSession();

  return (
    <div>
      <p>user (client rendered)</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};
