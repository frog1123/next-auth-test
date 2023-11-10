import type { NextPage } from 'next';
import { getCsrfToken, signIn } from 'next-auth/react';

const SignInPage: NextPage = async () => {
  const csrfToken = await getCsrfToken();

  console.log('sign in csrf: ', csrfToken);

  return (
    <div className='w-full'>
      <div className='bg-neutral-200 dark:bg-neutral-900 sm:rounded-md p-2 mx-auto mt-20 w-[400px]'></div>
    </div>
  );
};

export default SignInPage;
