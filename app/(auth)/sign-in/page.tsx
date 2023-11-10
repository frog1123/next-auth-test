import { SignInForm } from '@/components/auth/sign-in-form';
import type { NextPage } from 'next';

interface SignInPageProps {
  searchParams?: Record<'callbackUrl' | 'error', string>;
}

const SignInPage: NextPage<SignInPageProps> = async ({ searchParams }) => {
  return (
    <div className='w-[400px] mx-auto mt-20'>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
