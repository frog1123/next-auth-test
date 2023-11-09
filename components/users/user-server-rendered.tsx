import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { FC } from 'react';

export const UserServerRendered: FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='bg-neutral-200 dark:bg-neutral-900 sm:rounded-md p-2'>
      <p className='text-gray-500 font-semibold'>user (server rendered)</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};
