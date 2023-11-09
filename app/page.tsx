import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { User } from '@/components/user';
import { SignInButton } from '@/components/auth/sign-in';
import { SignOutButton } from '@/components/auth/sign-out';
import { SignUpButton } from '@/components/auth/sign-up';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className='grid grid-flow-col gap-2 place-items-center p-2 w-max'>
        <SignInButton />
        <SignOutButton />
        <SignUpButton />
      </div>
      <div>
        <p>user (server rendered)</p>
        <p>{JSON.stringify(session)}</p>
      </div>
      <User />
    </div>
  );
}
