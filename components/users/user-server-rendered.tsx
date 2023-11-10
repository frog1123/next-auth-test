import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { User } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { FC } from 'react';

export const UserServerRendered: FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='bg-neutral-200 dark:bg-neutral-900 sm:rounded-md p-2'>
      <div className='grid grid-cols-[max-content_auto] gap-1 place-items-center w-max text-zinc-500'>
        <User className='w-4 h-4' />
        <span>user (server rendered)</span>
      </div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
