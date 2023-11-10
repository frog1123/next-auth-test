'use client';

import { useSession } from 'next-auth/react';
import { FC } from 'react';

export const UserClientRendered: FC = () => {
  const session = useSession();

  return (
    <div className='bg-neutral-200 dark:bg-neutral-900 sm:rounded-md p-2'>
      <p className='text-gray-500 font-semibold'>user (client rendered)</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
