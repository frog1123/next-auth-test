import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { User } from '@/components/user';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div>
        <p>user (server rendered)</p>
        <p>{JSON.stringify(session)}</p>
      </div>
      <User />
    </div>
  );
}
