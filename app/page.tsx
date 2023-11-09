import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { User } from '@/components/user';
import { SignInButton } from '@/components/auth/sign-in';
import { SignOutButton } from '@/components/auth/sign-out';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <SignInButton />
      <SignOutButton />
      <div>
        <p>user (server rendered)</p>
        <p>{JSON.stringify(session)}</p>
      </div>
      <User />
    </div>
  );
}
