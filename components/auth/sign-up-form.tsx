'use client';

import { FC, useEffect, useState } from 'react';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { LucideLoader } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string()
});

export const SignUpForm: FC = () => {
  const router = useRouter();
  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const [formValid, setFormValid] = useState({ name: false, email: false, password: false });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post('/api/auth/create-user', values);
      router.push(`/`);
    } catch (err) {
      console.log('register error', err);
    }
  };

  useEffect(() => {
    setNameMessage('Name is required');
    setEmailMessage('Email is required');
    setPasswordMessage('Password is required');
  }, []);

  return (
    <div className='bg-neutral-200 dark:bg-neutral-900 sm:rounded-md p-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <p className='uppercase text-lg font-bold text-zinc-500 dark:text-white text-center'>Register</p>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='grid grid-flow-row'>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Username</FormLabel>
                <FormControl>
                  <input
                    disabled={isLoading}
                    className='bg-zinc-300/50 dark:bg-neutral-800 border-0 focus-visible:ring-0 text-black dark:text-white outline-none p-2 rounded-md resize-none'
                    placeholder='Enter username'
                    {...field}
                    onChange={e => {
                      const value = e.target.value;

                      if (value.length === 0) {
                        setNameMessage('Name is required');
                        setFormValid({ ...formValid, name: false });
                      } else {
                        setNameMessage('');
                        setFormValid({ ...formValid, name: true });
                      }

                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage>{nameMessage}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='grid grid-flow-row'>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Email</FormLabel>
                <FormControl>
                  <input
                    disabled={isLoading}
                    className='bg-zinc-300/50 dark:bg-neutral-800 border-0 focus-visible:ring-0 text-black dark:text-white outline-none p-2 rounded-md resize-none'
                    placeholder='Enter email'
                    {...field}
                    onChange={e => {
                      const value = e.target.value;

                      if (value.length === 0) {
                        setEmailMessage('Email is required');
                        setFormValid({ ...formValid, email: false });
                      } else {
                        setNameMessage('');
                        setFormValid({ ...formValid, email: true });
                      }

                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage>{emailMessage} </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='grid grid-flow-row'>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Password</FormLabel>
                <FormControl>
                  <input
                    disabled={isLoading}
                    className='bg-zinc-300/50 dark:bg-neutral-800 border-0 focus-visible:ring-0 text-black dark:text-white outline-none p-2 rounded-md resize-none'
                    placeholder='Enter password'
                    {...field}
                    onChange={e => {
                      const value = e.target.value;

                      if (value.length === 0) {
                        setPasswordMessage('Password is required');
                        setFormValid({ ...formValid, password: false });
                      } else {
                        setNameMessage('');
                        setFormValid({ ...formValid, password: true });
                      }

                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage>{passwordMessage}</FormMessage>
              </FormItem>
            )}
          />
          <div>
            <Button
              disabled={isLoading || !(formValid.name && formValid.email && formValid.password)}
              className='bg-emerald-500 text-white hover:bg-emerald-800 transition w-[80px]'>
              {isLoading ? <LucideLoader /> : <p>Register</p>}
            </Button>
          </div>
          <p className='uppercase text-xs font-bold text-zinc-500 dark:text-white text-center'>
            Have an account?{' '}
            <Link href='/sign-in' className='text-blue-500 hover:text-blue-600 transition'>
              Sign in
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};
