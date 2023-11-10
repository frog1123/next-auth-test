import { NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

const ProtectedPage: NextPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) return redirect('/');

  return (
    <div className='grid place-items-center h-screen'>
      <div className='text-center'>
        <p>This is a proteced route!</p>
        <p>Only signed in users can visit this route</p>
      </div>
    </div>
  );
};

export default ProtectedPage;
